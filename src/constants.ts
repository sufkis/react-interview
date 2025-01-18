import { IProduct } from './models';

export const PLACEHOLDER_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/No_image_available_600_x_400.svg/180px-No_image_available_600_x_400.svg.png';

// Taken from https://fakestoreapi.com/products
export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    name: 'Fjallraven - Foldsack Backpack',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 2,
    name: 'Mens Casual T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts made for durability.',
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 3,
    name: 'Mens Cotton Jacket',
    price: 55.99,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.',
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 4,
    name: 'Mens Casual Slim Fit',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person.',
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 5,
    name: 'Gold & Silver Chain Bracelet',
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance.",
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 6,
    name: 'Solid Gold Petite Micropave',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed.',
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 7,
    name: 'White Gold Plated Princess',
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 8,
    name: 'Pierced Owl Rose Gold Plated',
    price: 10.99,
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 9,
    name: 'WD 2TB Portable External Hard Drive',
    price: 64,
    description:
      'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7.',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 10,
    name: 'SanDisk SSD',
    price: 109,
    description:
      'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests)',
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 11,
    name: 'Silicon Power 256GB SSD',
    price: 109,
    description:
      '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable improved overall system performance. The advanced SLC Cache Technology allows performance boost.',
    image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 12,
    name: 'WD 4TB Gaming Drive',
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 13,
    name: 'Acer Full HD IPS Ultra-Thin',
    price: 599,
    description:
      '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin.',
    image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 14,
    name: 'Samsung Curved Gaming Monitor',
    price: 999.99,
    description:
      '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic.',
    image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 15,
    name: 'Snowboard Jacket Winter Coats',
    price: 56.99,
    description:
      'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Lightweigt and Warm.',
    image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 16,
    name: 'Faux Leather Moto Biker Jacket',
    price: 29.95,
    description:
      '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket',
    image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 17,
    name: 'Windbreaker Climbing Raincoats',
    price: 39.99,
    description:
      'Lightweight perfet for trip or casual wear. Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 pockets.',
    image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
    creationDate: Date.now(),
  },
  {
    id: 18,
    name: 'Short Sleeve Boat Neck V',
    price: 9.85,
    description:
      '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
    image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 19,
    name: "Opna Women's Short Sleeve",
    price: 7.95,
    description:
      '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric',
    image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
    creationDate: Date.now(),
  },
  {
    id: 20,
    name: 'DANVOUY Womens T Shirt Casual',
    price: 12.99,
    description:
      '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street.',
    image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    creationDate: Date.now(),
  },
];
