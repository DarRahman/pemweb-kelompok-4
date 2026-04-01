-- SQL untuk mengisi data awal (Seeding) agar Task E bisa diuji
-- Masukkan ini ke phpMyAdmin di database pemweb_kelompok4

-- 1. Tambah Kategori
INSERT INTO `category` (`id`, `name`, `slug`) VALUES
('cat1', 'Smartphone', 'smartphone'),
('cat2', 'Wearables', 'wearables'),
('cat3', 'Lifestyle', 'lifestyle');

-- 2. Tambah Produk awal
INSERT INTO `product` (`id`, `name`, `slug`, `description`, `price`, `stock`, `categoryId`, `images`, `createdAt`, `updatedAt`) VALUES
('p1', 'Xiaomi 17 Ultra', 'xiaomi-17-ultra', 'Leica 200MP Professional Camera', 19999000.00, 50, 'cat1', '["📱"]', NOW(), NOW()),
('p2', 'Xiaomi 17', 'xiaomi-17', 'Leica 50MP Camera Flagship', 14999000.00, 100, 'cat1', '["📱"]', NOW(), NOW()),
('p3', 'Xiaomi Pad 8', 'xiaomi-pad-8', 'Large 144Hz AMOLED Display', 7199000.00, 30, 'cat2', '["💻"]', NOW(), NOW()),
('p4', 'Xiaomi Watch S5', 'xiaomi-watch-s5', 'Smart Health Tracking Wear OS', 4699000.00, 75, 'cat2', '["⌚"]', NOW(), NOW());
