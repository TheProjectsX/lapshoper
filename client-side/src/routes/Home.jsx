import { useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const productsDataMain = {
    success: true,
    data: [
      {
        _id: "66bcfaa8f10b555e7b1a64bb",
        name: 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop',
        imageUrl:
          "https://www.startech.com.bd/image/cache/catalog/laptop/dell/inspiron-15-3520/inspiron-15-3520-black-01-228x228.webp",
        description: [
          "Processor: Intel Core i3-1215U (10M Cache, up to 4.40 GHz)",
          "RAM: 8GB RAM, Storage: 512GB SSD",
          'Display: 15.6" FHD (1920 x 1080)',
          "Features: Stereo Speakers",
        ],
        price: 55500,
        createdAt: "2024-08-14T13:45:12Z",
        brand: "Dell",
        category: "Laptops",
        ratings: 4.5,
      },
      {
        _id: "66bcfaa8f10b555e7b1a64bc",
        name: "Apple MacBook Air 13.3-Inch Retina Display 8-core Apple M1 chip with 8GB RAM, 256GB SSD (MGN63) Space Gray",
        imageUrl:
          "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-13-3-inch-228x228.webp",
        description: [
          "Processor: Apple M1 chip with 8-core CPU and 7-core GPU",
          "RAM: 8GB, Storage: 256GB SSD",
          "Display: 13.3-inch 2560x1600 LED-backlit Retina",
          "Features: Backlit Magic Keyboard",
        ],
        price: 97000,
        createdAt: "2024-08-14T14:20:30Z",
        brand: "Apple",
        category: "Laptops",
        ratings: 4.8,
      },
      {
        _id: "66bcfaa8f10b555e7b1a64bd",
        name: 'MSI Modern 14 C12M Core i3 12th Gen 14" FHD Laptop',
        imageUrl:
          "https://www.startech.com.bd/image/cache/catalog/laptop/msi/modern-14-c12m/modern-14-c12m-01-228x228.webp",
        description: [
          "Processor: Intel Core i3-1215U (10M Cache, 3.30 GHz, up to 4.40 GHz)",
          "RAM: 8GB 3200MHz, Storage: 512GB SSD",
          'Display: 14" FHD (1920 x 1080)',
          "Feature: Backlit Keyboard, Type-C",
        ],
        price: 54000,
        createdAt: "2024-08-14T15:05:42Z",
        brand: "MSI",
        category: "Laptops",
        ratings: 4.3,
      },
      {
        _id: "66bcfaa8f10b555e7b1a64be",
        name: 'MSI Modern 14 C12MO Core i3 12th Gen 14" FHD Laptop',
        imageUrl:
          "https://www.startech.com.bd/image/cache/catalog/laptop/msi/modern-14-c12m/modern-14-c12m-01-228x228.webp",
        description: [
          "Processor: Intel Core i3-1215U (10M Cache, up to 4.40 GHz)",
          "RAM: 16GB DDR4 3200MHz, Storage: 512GB SSD",
          'Display: 14" FHD (1920 x 1080)',
          "Features: Backlit Keyboard, Type-C",
        ],
        price: 58500,
        createdAt: "2024-08-14T16:10:11Z",
        brand: "MSI",
        category: "Laptops",
        ratings: 4.4,
      },
      {
        _id: "66bcfaa8f10b555e7b1a64bf",
        name: 'Lenovo IdeaPad Flex 5 14ALC7 AMD Ryzen 5 5500U 14" Touchscreen Laptop',
        imageUrl:
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-flex-5-14alc7/ideapad-flex-5-14alc7-08-228x228.webp",
        description: [
          "Processor: AMD Ryzen 5 5500U (2.1GHz up to 4.0GHz)",
          "RAM: 16GB LPDDR4x Storage: 512GB SSD",
          'Display: 14" WUXGA (1920x1200) IPS',
          "Features: Backlit Keyboard, Touch, Type-C",
        ],
        price: 85000,
        createdAt: "2024-08-14T16:55:35Z",
        brand: "Lenovo",
        category: "Laptops",
        ratings: 4.6,
      },
      {
        _id: "66bcfaa8f10b555e7b1a64c0",
        name: 'HP 250 G8 Intel Celeron N4020 15.6" FHD Laptop',
        imageUrl:
          "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/250-g8-ash-black/250-g8-ash-black-01-228x228.webp",
        description: [
          "Processor: Intel Celeron N4020 (4M Cache, 1.10 GHz up to 2.80 GHz)",
          "RAM: 4GB DDR4 3200MHz, Storage: 1TB HDD",
          'Display: 15.6" FHD (1920 x 1080)',
          "Features: Full-size keyboard with numeric keypad, Type-C",
        ],
        price: 32500,
        createdAt: "2024-08-14T17:33:25Z",
        brand: "HP",
        category: "Laptops",
        ratings: 4.1,
      },
      {
        _id: "66bcfaa8f10b555e7b1a64c1",
        name: "Apple MacBook Air (2022) Apple M2 Chip 13.6-Inch Liquid Retina Display 8GB RAM 256GB SSD Silver #MLXY3LL/A / MLXY3ZP/A",
        imageUrl:
          "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air-m2-chip/macbook-air-m2-chip-silver-01-228x228.webp",
        description: [
          "Processor: Apple M2 chip, 8-core CPU with 4 performance cores and 4 efficiency cores",
          "RAM: 8GB, Storage: 256GB SSD",
          'Display: 13.6" Liquid Retina display (2560 x 1664)',
          "Features: Backlit Magic Keyboard and the Touch ID",
        ],
        price: 128000,
        createdAt: "2024-08-14T18:12:48Z",
        brand: "Apple",
        category: "Laptops",
        ratings: 4.9,
      },
      {
        _id: "66bcfaa8f10b555e7b1a64c2",
        name: 'Lenovo IdeaPad Flex 5 14ALC7 AMD Ryzen 7 5700U 14" Touchscreen Laptop',
        imageUrl:
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-flex-5-14alc7/ideapad-flex-5-14alc7-08-228x228.webp",
        description: [
          "Processor: AMD Ryzen 7 5700U (1.8GHz up to 4.3GHz)",
          "RAM: 16GB LPDDR4x Storage: 512GB SSD",
          'Display: 14" WUXGA (1920x1200) IPS',
          "Features: Backlit Keyboard, Touch, Type-C",
        ],
        price: 95000,
        createdAt: "2024-08-14T18:53:59Z",
        brand: "Lenovo",
        category: "Laptops",
        ratings: 4.7,
      },
      {
        _id: "66bcfaa8f10b555e7b1a64c3",
        name: 'HP 15s-fq3234TU Celeron N4500 15.6" FHD Laptop',
        imageUrl:
          "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15s-fq2597tu/15s-fq2597tu-01-228x228.jpg",
        description: [
          "Processor: Intel Celeron N4500 (4M Cache, 1.10 GHz up to 2.80 GHz)",
          "RAM: 4 GB 2933 MHz, Storage: 256 GB SSD",
          'Display: 15.6" FHD (1920 x 1080)',
          "Feature: Dual speakers, Type-C",
        ],
        price: 34000,
        createdAt: "2024-08-14T19:20:10Z",
        brand: "HP",
        category: "Laptops",
        ratings: 4.2,
      },
      {
        _id: "66bcfaa8f10b555e7b1a64c4",
        name: 'MSI Modern 14 C7M AMD Ryzen 5 7530U 14" FHD Laptop',
        imageUrl:
          "https://www.startech.com.bd/image/cache/catalog/laptop/msi/modern-14-c7m/modern-14-c7m-01-228x228.webp",
        description: [
          "Processor: AMD Ryzen 5 7530U (2.0GHz up to 4.5GHz)",
          "RAM: 8GB DDR4 3200MHz, Storage: 512GB SSD",
          'Display: 14" FHD (1920 x 1080)',
          "Feature: Backlit Keyboard, Type-C",
        ],
        price: 62000,
        createdAt: "2024-08-14T19:45:01Z",
        brand: "MSI",
        category: "Laptops",
        ratings: 4.4,
      },
      {
        _id: "66bcfaa8f10b555e7b1a64c5",
        name: 'Lenovo V15 G3 IAP Core i5 12th Gen 15.6" FHD Laptop',
        imageUrl:
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/v15-g3-iap/v15-g3-iap-01-228x228.webp",
        description: [
          "Processor: Intel Core i5-1235U (12M Cache, up to 4.40 GHz)",
          "RAM: 8GB DDR4 3200MHz, Storage: 512GB SSD",
          'Display: 15.6" FHD (1920 x 1080)',
          "Feature: Dolby Audio, Type-C",
        ],
        price: 66500,
        createdAt: "2024-08-14T20:10:22Z",
        brand: "Lenovo",
        category: "Laptops",
        ratings: 4.5,
      },
      {
        _id: "66bcfaa8f10b555e7b1a64c6",
        name: 'ASUS Vivobook 15 X1502ZA Core i5 12th Gen 15.6" FHD Laptop',
        imageUrl:
          "https://www.startech.com.bd/image/cache/catalog/laptop/asus/vivobook-x1502za/vivobook-x1502za-01-228x228.jpg",
        description: [
          "Processor: Intel Core i5-1240P (12M Cache, up to 4.40 GHz)",
          "RAM: 8GB DDR4 3200MHz, Storage: 512GB SSD",
          'Display: 15.6" FHD (1920 x 1080)',
          "Feature: Fingerprint Sensor, Type-C",
        ],
        price: 69500,
        createdAt: "2024-08-14T20:42:35Z",
        brand: "ASUS",
        category: "Laptops",
        ratings: 4.5,
      },
      {
        _id: "66bcfaa8f10b555e7b1a64c7",
        name: 'HP 15s-fq2553TU Core i3 11th Gen 15.6" FHD Laptop',
        imageUrl:
          "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15s-fq2597tu/15s-fq2597tu-01-228x228.jpg",
        description: [
          "Processor: Intel Core i3-1115G4 (6M Cache, up to 4.10 GHz)",
          "RAM: 4 GB DDR4 2666MHz, Storage: 512 GB SSD",
          'Display: 15.6" FHD (1920 x 1080)',
          "Feature: Dual speakers, Type-C",
        ],
        price: 52000,
        createdAt: "2024-08-14T21:15:05Z",
        brand: "HP",
        category: "Laptops",
        ratings: 4.3,
      },
      {
        _id: "66bcfaa8f10b555e7b1a64c8",
        name: 'HP Pavilion 15-eh1105AU Ryzen 5 5500U 15.6" FHD Laptop',
        imageUrl:
          "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/pavilion-15-eh1105au/pavilion-15-eh1105au-01-228x228.jpg",
        description: [
          "Processor: AMD Ryzen 5 5500U (2.1 GHz up to 4.0 GHz)",
          "RAM: 8GB DDR4 3200MHz, Storage: 512GB SSD",
          'Display: 15.6" FHD (1920 x 1080)',
          "Feature: B&O Audio, Backlit Keyboard, Type-C",
        ],
        price: 71500,
        createdAt: "2024-08-14T21:50:30Z",
        brand: "HP",
        category: "Laptops",
        ratings: 4.6,
      },
      {
        _id: "66bcfaa8f10b555e7b1a64c9",
        name: 'HP 15s-eq3235AU Ryzen 5 7520U 15.6" FHD Laptop',
        imageUrl:
          "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15s-eq3235au/15s-eq3235au-01-228x228.jpg",
        description: [
          "Processor: AMD Ryzen 5 7520U (2.8GHz up to 4.3GHz)",
          "RAM: 8GB DDR4 3200MHz, Storage: 512GB SSD",
          'Display: 15.6" FHD (1920 x 1080)',
          "Feature: Dual speakers, Type-C",
        ],
        price: 62000,
        createdAt: "2024-08-14T22:25:05Z",
        brand: "HP",
        category: "Laptops",
        ratings: 4.4,
      },
    ],
    count: 48,
  };

  if (!productsDataMain.success) {
    return <div>ERROR!</div>;
  }

  const [productsData, setProductsData] = useState(productsDataMain);

  return (
    <div>
      <div className="grid gap-4 lg:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between">
        {productsData.data.map((item) => (
          <ProductCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
