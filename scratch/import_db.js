const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

// Map MySQL lowercase table names to Prisma model names
const modelMap = {
  'category': 'category',
  'coupon': 'coupon',
  'user': 'user',
  'product': 'product',
  'productvariant': 'productVariant',
  'account': 'account',
  'session': 'session',
  'cart': 'cart',
  'cartitem': 'cartItem',
  'order': 'order',
  'orderitem': 'orderItem',
  'usercoupon': 'userCoupon',
  'review': 'review',
  'chatroom': 'chatRoom',
  'chatmessage': 'chatMessage'
};

// Types conversion parser helper
function cleanValue(val, colName, tableName) {
  const upper = val.trim().toUpperCase();
  if (upper === 'NULL') return null;
  
  let cleanStr = val.trim();
  // Strip quotes if they exist
  if (cleanStr.startsWith("'") && cleanStr.endsWith("'")) {
    cleanStr = cleanStr.substring(1, cleanStr.length - 1);
  }

  // Handle boolean representation
  if (cleanStr === '1' && (colName === 'isRead' || colName === 'isUsed' || colName === 'emailVerified')) {
    return true;
  }
  if (cleanStr === '0' && (colName === 'isRead' || colName === 'isUsed')) {
    return false;
  }

  // Handle Numeric types
  if (
    colName === 'stock' ||
    colName === 'quantity' ||
    colName === 'value' ||
    colName === 'minPurchase' ||
    colName === 'maxDiscount' ||
    colName === 'expires_at' ||
    colName === 'rating'
  ) {
    return parseInt(cleanStr, 10);
  }
  
  if (
    colName === 'basePrice' ||
    colName === 'price' ||
    colName === 'total' ||
    colName === 'shippingCost'
  ) {
    return parseFloat(cleanStr);
  }

  if (colName === 'latitude' || colName === 'longitude') {
    return parseFloat(cleanStr);
  }

  // Handle datetime
  if (
    colName === 'createdAt' ||
    colName === 'updatedAt' ||
    colName === 'claimedAt' ||
    colName === 'expiryDate' ||
    colName === 'expires' ||
    colName === 'emailVerified'
  ) {
    // MySQL format: 'YYYY-MM-DD HH:MM:SS.MS'
    return new Date(cleanStr);
  }

  return cleanStr;
}

function parseSqlValuesLine(line, columns, tableName) {
  let str = line.trim();
  if (str.startsWith('(')) str = str.substring(1);
  if (str.endsWith(');')) str = str.substring(0, str.length - 2);
  else if (str.endsWith('),')) str = str.substring(0, str.length - 2);

  const values = [];
  let currentVal = '';
  let inString = false;
  let escape = false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (escape) {
      currentVal += char;
      escape = false;
    } else if (char === '\\') {
      escape = true;
    } else if (char === "'") {
      inString = !inString;
      currentVal += char;
    } else if (char === ',' && !inString) {
      values.push(currentVal.trim());
      currentVal = '';
    } else {
      currentVal += char;
    }
  }
  values.push(currentVal.trim());

  // Construct object
  const obj = {};
  columns.forEach((col, idx) => {
    obj[col] = cleanValue(values[idx], col, tableName);
  });
  return obj;
}

async function main() {
  console.log('Reading db_store.sql...');
  const sqlPath = path.join(__dirname, '..', 'db_store.sql');
  const content = fs.readFileSync(sqlPath, 'utf8');
  const lines = content.split('\n');

  console.log('Parsing tables and data...');
  const tablesData = {};
  let currentTable = null;
  let currentColumns = [];

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    // Detect INSERT INTO statement
    const insertMatch = line.match(/^INSERT INTO\s+`(\w+)`\s+\(([^)]+)\)\s+VALUES/i);
    if (insertMatch) {
      currentTable = insertMatch[1];
      currentColumns = insertMatch[2].replace(/`/g, '').split(',').map(c => c.trim());
      if (!tablesData[currentTable]) {
        tablesData[currentTable] = [];
      }
      continue;
    }

    // Parse values lines
    if (currentTable && (line.startsWith('(') && (line.endsWith('),') || line.endsWith(');')))) {
      try {
        const row = parseSqlValuesLine(line, currentColumns, currentTable);
        tablesData[currentTable].push(row);
      } catch (e) {
        console.error(`Error parsing line in table ${currentTable}:`, line, e);
      }
      if (line.endsWith(');')) {
        currentTable = null;
        currentColumns = [];
      }
    }
  }

  // Deletion in reverse dependency order
  const deleteOrder = [
    'chatmessage',
    'chatroom',
    'review',
    'orderitem',
    'order',
    'usercoupon',
    'account',
    'session',
    'cartitem',
    'cart',
    'productvariant',
    'product',
    'category',
    'coupon',
    'user'
  ];

  console.log('Clearing old data in Supabase...');
  for (const table of deleteOrder) {
    const prismaModel = modelMap[table];
    if (prismaModel && prisma[prismaModel]) {
      console.log(`Clearing table ${prismaModel}...`);
      await prisma[prismaModel].deleteMany({});
    }
  }

  // Insertion in correct dependency order
  const insertOrder = [
    'user',
    'category',
    'product',
    'productvariant',
    'cart',
    'cartitem',
    'account',
    'session',
    'coupon',
    'usercoupon',
    'order',
    'orderitem',
    'review',
    'chatroom',
    'chatmessage'
  ];

  console.log('Inserting parsed data into Supabase...');
  for (const table of insertOrder) {
    const prismaModel = modelMap[table];
    const data = tablesData[table] || [];
    if (data.length === 0) continue;

    console.log(`Inserting ${data.length} rows into ${prismaModel}...`);
    // Insert rows one-by-one to handle any individual errors and display details
    for (const row of data) {
      try {
        await prisma[prismaModel].create({ data: row });
      } catch (err) {
        console.error(`Failed to insert row in ${prismaModel}:`, row, err.message);
      }
    }
  }

  console.log('Database import completed successfully!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
