type Product = {
        _id: string,
        categoryId: string,
        image: string,
        name: string,
        description: string,
        price: number
        rating: number,
        reviews?: number,
        trending: boolean,
        discount: number
    };

type Category = {
    _id: string,
    name: string,
    slug: string,
    __v: number,
  }

const products: Product[] = [
    {
        _id: "68a8a842b3341a7935e8d66d",
        categoryId: "68a8a50fbbe6a93b94b68451",
        image: "/assets/Images/Products-Images/Product3.jpg",
        name: "Sades Gaming Headset",
        description: "True wireless earbuds with noise isolation",
        price: 150.35,
        rating: 4.2,
        reviews: 210,
        trending: true,
        discount: 10
    },
    {
        _id: "68a8a8f5d5a9d36befba0c8f",
        categoryId: "68a8a526bbe6a93b94b68455",
        image: "/assets/Images/Products-Images/Product20.jpg",
        name: "Gaming PC - Full Tower",
        description: "E-ATX support, custom liquid cooling ready, 8x fan mounts, modular design, extensive RGB",
        price: 3500,
        rating: 4.5,
        reviews: 110,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8a99c2607a86f1a4a4acc",
        categoryId: "68a8a538bbe6a93b94b68457",
        image: "/assets/Images/Products-Images/Product7.jpg",
        name: "ASUS ROG Zephyrus/TUF Gaming",
        description: "Gaming laptop with high refresh rate display and advanced cooling.",
        price: 129.99,
        rating: 4.8,
        reviews: 390,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8a9dabf841b19338ef2cb",
        categoryId: "68a8a51abbe6a93b94b68453",
        image: "/assets/Images/Products-Images/Product13.jpg",
        name: "Google Pixel 7 Pro",
        description: "6.7\" OLED, Tensor G2, 50MP camera, 12GB RAM.",
        price: 1220,
        rating: 2,
        reviews: 1129,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8aa29608d41a034bf0b1c",
        categoryId: "68a8a542bbe6a93b94b68459",
        image: "/assets/Images/Products-Images/Product12.jpg",
        name: "Apple Watch Sport (Green)",
        description: "Apple Watch with bright green sport band showing app interface.",
        price: 415,
        rating: 2,
        reviews: 123,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8aa8933ad588bbbb69b21",
        categoryId: "68a8a51abbe6a93b94b68453",
        image: "/assets/Images/Products-Images/Product15.jpg",
        name: "iPhone 16 (Green)",
        description: "6.1\" OLED, A14 Bionic, dual 12MP, 4GB RAM.",
        price: 1500,
        rating: 3.2,
        reviews: 431,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8aabeec59ac052366959d",
        categoryId: "68a8a526bbe6a93b94b68455",
        image: "/assets/Images/Products-Images/Product18.jpg",
        name: " Gaming PC - Mid Tower White",
        description: "White ATX chassis, tempered glass, RGB lighting, clean cable routing, premium airflow design",
        price: 2500,
        rating: 4,
        reviews: 65,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8aaf72a29101dffc80dc2",
        categoryId: "68a8a538bbe6a93b94b68457",
        image: "/assets/Images/Products-Images/Product6.jpg",
        name: "ASUS ROG Strix GL Series",
        description: "ROG gaming laptop with 'STRIX' display logo",
        price: 240,
        rating: 4.8,
        reviews: 780,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8ab3e1bd81268bd87abb5",
        categoryId: "68a8a50fbbe6a93b94b68451",
        image: "/assets/Images/Products-Images/Product1.jpg",
        name: "Razer Kraken Gaming Headset",
        description: "Most Famous Headphones",
        price: 199.99,
        rating: 4.5,
        reviews: 120,
        trending: true,
        discount: 15,
    },
    {
        _id: "68a8ab7bc8c18c1768c9f73b",
        categoryId: "68a8a542bbe6a93b94b68459",
        image: "/assets/Images/Products-Images/Product11.jpg",
        name: "TicWatch/Mobvoi Smartwatch",
        description: "Android Wear smartwatch with black sporty design and green accents.",
        price: 195,
        rating: 4,
        reviews: 420,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8abb2ce35bf24ae631404",
        categoryId: "68a8a538bbe6a93b94b68457",
        image: "/assets/Images/Products-Images/Product8.jpg",
        name: "MSI Gaming Laptop",
        description: "MSI gaming model with dragon logo and green backlit",
        price: 380,
        rating: 4.8,
        reviews: 1120,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8abf406d2549c2a0cf622",
        categoryId: "68a8a542bbe6a93b94b68459",
        image: "/assets/Images/Products-Images/Product9.jpg",
        name: "Apple Watch Sport",
        description: "Apple Watch with green sport band and fitness tracking display",
        price: 420,
        rating: 4.8,
        reviews: 250,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8ac31fc8f8168dfe963f5",
        categoryId: "68a8a526bbe6a93b94b68455",
        image: "/assets/Images/Products-Images/Product17.jpg",
        name: " Gaming PC - Mid Tower",
        description: "ATX case, tempered glass panel, 6x RGB fans, cable management, supports high-end GPUs.",
        price: 2100,
        rating: 3,
        reviews: 147,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8ac6758e246405becd807",
        categoryId: "68a8a51abbe6a93b94b68453",
        image: "/assets/Images/Products-Images/Product14.jpg",
        name: "Samsung Galaxy S24 Ultra",
        description: "6.8\" AMOLED, Snapdragon 8 Gen 2, 200MP camera, 12GB RAM.",
        price: 1299,
        rating: 4.5,
        reviews: 1120,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8acc2dfcf14c7a22d9b0e",
        categoryId: "68a8a50fbbe6a93b94b68451",
        image: "/assets/Images/Products-Images/Product2.jpg",
        name: "Beats Solo3 Wireless",
        description: "7.1 surround sound, noise canceling",
        price: 72.99,
        rating: 4.8,
        reviews: 342,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8acf29ad933c09b63065f",
        categoryId: "68a8a50fbbe6a93b94b68451",
        image: "/assets/Images/Products-Images/Product4.jpg",
        name: "Beats Solo HD",
        description: "True wireless earbuds with noise isolation",
        price: 24.50,
        rating: 4.8,
        reviews: 510,
        trending: true,
        discount: 14
    },
    {
        _id: "68a8ad1b9bb17cf1c4a8774d",
        categoryId: "68a8a51abbe6a93b94b68453",
        image: "/assets/Images/Products-Images/Product16.jpg",
        name: " iPhone 13 Pro (Alpine Green)",
        description: "6.1\" OLED, A15 Bionic, triple 12MP, 6GB RAM.",
        price: 1320,
        rating: 4.5,
        reviews: 220,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8ad532cfe3193d803a033",
        categoryId: "68a8a538bbe6a93b94b68457",
        image: "/assets/Images/Products-Images/Product5.jpg",
        name: "ASUS ROG Strix",
        description: "Gaming laptop with green RGB lighting and ROG branding.",
        price: 350,
        rating: 4,
        reviews: 1180,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8ad87d07c0148ba668add",
        categoryId: "68a8a542bbe6a93b94b68459",
        image: "/assets/Images/Products-Images/Product10.jpg",
        name: "Apple Watch with Leather Band",
        description: "Apple Watch featuring black leather strap",
        price: 480,
        rating: 3,
        reviews: 350,
        trending: true,
        discount: 18
    },
    {
        _id: "68a8c06be15a115bb0957147",
        categoryId: "68a8a526bbe6a93b94b68455",
        image: "/assets/Images/Products-Images/Product19.jpg",
        name: "Gaming PC - Compact Mid Tower",
        description: "mATX/ATX case, 4x RGB fans, mesh front panel, GPU clearance up to 320mm.",
        price: 1250,
        rating: 3,
        reviews: 240,
        trending: true,
        discount: 18
    },
    

    
]

const categories: Category[] = [
    {
    _id: "all",
    name: "All",
    slug: "all",
    __v: 0,
  },
  {
    _id: "68a8a50fbbe6a93b94b68451",
    name: "Headphones",
    slug: "headphones",
    __v: 0,
  },
  {
    _id: "68a8a51abbe6a93b94b68453",
    name: "Phones",
    slug: "phones",
    __v: 0,
  },
  {
    _id: "68a8a526bbe6a93b94b68455",
    name: "PC's",
    slug: "pc's",
    __v: 0,
  },
  {
    _id: "68a8a538bbe6a93b94b68457",
    name: "Laptops",
    slug: "laptops",
    __v: 0,
  },
  {
    _id: "68a8a542bbe6a93b94b68459",
    name: "Watches",
    slug: "watches",
    __v: 0,
  }
];

export { products, categories };
