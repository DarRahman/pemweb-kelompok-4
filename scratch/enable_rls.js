const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const tables = [
  'Category',
  'Order',
  'OrderItem',
  'Cart',
  'CartItem',
  'Product',
  'ProductVariant',
  'Account',
  'Session',
  'User',
  'Coupon',
  'UserCoupon',
  'VerificationToken',
  'Review',
  'ChatRoom',
  'ChatMessage'
];

async function main() {
  console.log('Enabling Row Level Security (RLS) on all tables...');
  for (const table of tables) {
    try {
      // Use double quotes for case-sensitive table names in PostgreSQL
      await prisma.$executeRawUnsafe(`ALTER TABLE "${table}" ENABLE ROW LEVEL SECURITY;`);
      console.log(`✓ RLS enabled on table: ${table}`);
    } catch (err) {
      console.error(`✗ Failed to enable RLS on table ${table}:`, err.message);
    }
  }
  console.log('All RLS tables updated.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
