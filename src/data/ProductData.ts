export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageSrc: string;
    imageAlt: string;
    quantity: number;
}

export const products: Product[] = [
    {
      "id": 1,
      "name": "Notebook Predator Helios Neo",
      "description": "Processador Intel Core i7-13700HX, RTX 4050, 16GB RAM, 512GB SSD, 16' Full HD 165Hz",
      "price": 7999.99,
      "imageSrc": "/helios.webp",
      "imageAlt": "Produto 1",
      "quantity": 1
    },
    {
      "id": 2,
      "name": "Notebook Gamer Acer Nitro 5",
      "description": "Processador AMD Ryzen 7 6800H, RTX 3070Ti, 16GB RAM, 1TB SSD, 15.6' Full HD 144Hz",
      "price": 8200.39,
      "imageSrc": "/Nitro 5 AN515-46-R5WF.webp",
      "imageAlt": "Produto 2",
      "quantity": 1
    },
    {
      "id": 3,
      "name": "Notebook Gamer Acer Nitro 5",
      "description": "Processador AMD Ryzen 5 7535HS, RTX 3050, 8GB RAM, 512GB SSD, 15.6' Full HD 144Hz",
      "price": 3899.99,
      "imageSrc": "/Nitro 5 AN515-47-R1N8.webp",
      "imageAlt": "Produto 3",
      "quantity": 1
    },
    {
      "id": 4,
      "name": "Notebook Dell Vostro",
      "description": "Processador Intel Core i7-12700H, RTX 3050Ti, 16GB RAM, 512GB SSD, 15.6' Full HD 60Hz",
      "price": 4999.99,
      "imageSrc": "/vostro16-7620.png",
      "imageAlt": "Produto 4",
      "quantity": 1
    },
    {
      "id": 5,
      "name": "Notebook Gamer Acer Nitro 5",
      "description": "Processador Intel Core i7-13700H, RTX 4050, 16GB RAM, 512GB SSD, 16' Full HD 165Hz",
      "price": 6999.99,
      "imageSrc": "/Nitro 5 AN16-51-71WR.webp",
      "imageAlt": "Produto 5",
      "quantity": 1
    },
    {
      "id": 6,
      "name": "Notebook Gamer Lenovo Legion 5i",
      "description": "Processador Intel Core i7-12700H, RTX 3060, 16GB RAM, 512GB SSD, 15.6' Full HD 144Hz",
      "price": 7999.99,
      "imageSrc": "/legion.webp",
      "imageAlt": "Produto 6",
      "quantity": 1
    },
    {
      "id": 7,
      "name": "Notebook Gamer Lenovo Gaming 3i",
      "description": "Processador Intel Core i5-11300H, GTX 1650, 8GB RAM, 512GB SSD, 15.6' Full HD 60Hz",
      "price": 3199.99,
      "imageSrc": "/gaming3i.webp",
      "imageAlt": "Produto 7",
      "quantity": 1
    },
    {
      "id": 8,
      "name": "Notebook Lenovo Thinkpad",
      "description": "Processador AMD Ryzen 5 5500u, 8GB RAM, 512GB SSD, 15.6' Full HD",
      "price": 2599.99,
      "imageSrc": "/thinkpad.webp",
      "imageAlt": "Produto 8",
      "quantity": 1
    },
    {
      "id": 9,
      "name": "Macbook Air m2",
      "description": "Processador Apple M2, 8GB RAM, 256GB SSD",
      "price": 9999.99,
      "imageSrc": "/macbookm2.webp",
      "imageAlt": "Produto 9",
      "quantity": 1
    }
  ]
  