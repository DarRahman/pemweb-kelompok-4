import HeroBento from "@/components/home/HeroBento";
import ProductGrid from "@/components/home/ProductGrid";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  // Fetch products directly from Prisma on the server
  const rawProducts = await prisma.product.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Konversi tipe data khusus (Decimal & Date) agar bisa dikirim ke Client Components
  const products = rawProducts.map(p => ({
    ...p,
    price: Number(p.price), // Ubah Decimal jadi number
    createdAt: p.createdAt.toISOString(),
    updatedAt: p.updatedAt.toISOString(),
    category: p.category ? {
      ...p.category,
      // No extra fields to convert in category yet
    } : null,
  }));

  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col font-sans">
      <div className="flex-1 w-full relative pb-16">
        {/* Bento UI Showcase Section */}
        <HeroBento />
        
        {/* Product Catalog Standard Grid Section dari Database */}
        <ProductGrid initialProducts={products as any} />
      </div>
    </main>
  );
}