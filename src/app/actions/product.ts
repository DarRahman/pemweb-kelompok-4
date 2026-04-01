"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

// Custom type based on your schema to ensure correct inputs
interface ProductInput {
  id: string; // The user will input an ID like 'p5'
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  images: string; // Stored as a JSON string like '["📱"]'
  categoryId: string; // Must match an existing Category ID
}

/**
 * Utility: Mencegah pengguna biasa (USER) melakukan aksi ADMIN
 */
async function checkAdmin() {
  const session = await getServerSession(authOptions);
  
  if (!session || !session.user) {
    throw new Error("Anda harus login terlebih dahulu.");
  }
  
  if ((session.user as any).role !== "ADMIN") {
    throw new Error("Akses ditolak! Hanya Admin yang boleh melakukan aksi ini.");
  }
}

/**
 * CREATE PRODUCT
 * Fungsi untuk memasukkan barang baru ke MySQL
 */
export async function createProduct(data: ProductInput) {
  try {
    // 1. Gembok Keamanan (Hanya ADMIN)
    await checkAdmin();

    // 2. Eksekusi ke Database MySQL
    const newProduct = await prisma.product.create({
      data: {
        id: data.id,
        name: data.name,
        slug: data.slug,
        description: data.description,
        price: data.price, // Prisma will handle Number to Decimal conversion
        stock: data.stock,
        images: data.images,
        categoryId: data.categoryId,
        updatedAt: new Date(),
      },
    });

    // 3. Revalidasi halaman agar katalog otomatis tampil barang baru
    revalidatePath("/");
    
    return { success: true, data: newProduct };
  } catch (error: any) {
    console.error("Gagal menambahkan produk:", error);
    return { success: false, error: error.message || "Terjadi kesalahan sistem." };
  }
}

/**
 * UPDATE PRODUCT
 * Fungsi untuk mengubah data barang yang sudah ada
 */
export async function updateProduct(id: string, data: Partial<ProductInput>) {
  try {
    // 1. Gembok Keamanan (Hanya ADMIN)
    await checkAdmin();

    // 2. Eksekusi ke Database MySQL (Update berdasarkan ID)
    const updatedProduct = await prisma.product.update({
      where: { id: id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });

    // 3. Revalidasi halaman
    revalidatePath("/");
    revalidatePath("/admin/products"); // Rute masa depan untuk dashboard admin

    return { success: true, data: updatedProduct };
  } catch (error: any) {
    console.error("Gagal mengupdate produk:", error);
    return { success: false, error: error.message || "Terjadi kesalahan sistem." };
  }
}

/**
 * DELETE PRODUCT
 * Fungsi untuk menghapus barang permanen dari MySQL
 */
export async function deleteProduct(id: string) {
  try {
    // 1. Gembok Keamanan (Hanya ADMIN)
    await checkAdmin();

    // 2. Eksekusi ke Database MySQL (Hapus berdasarkan ID)
    await prisma.product.delete({
      where: { id: id },
    });

    // 3. Revalidasi halaman
    revalidatePath("/");
    revalidatePath("/admin/products");

    return { success: true, message: "Produk berhasil dihapus." };
  } catch (error: any) {
    console.error("Gagal menghapus produk:", error);
    return { success: false, error: error.message || "Terjadi kesalahan sistem." };
  }
}
