   // Product data with categories
        const products = [
            // All category
            { id: 483, name: "Cake", price: 180, category: "all", image: "https://m.media-amazon.com/images/I/51uuceC0GoL._AC_UF1000,1000_QL80_.jpg" },
            { id: 485, name: "Birthday Items", price:0, category: "all", image: "https://5.imimg.com/data5/HY/CZ/CU/SELLER-56563399/birthday-decoration-items-500x500.jpeg" },
            { id: 486, name: "Item", price: 60, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 487, name: "Item", price: 5, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 488, name: "Item", price: 5, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 489, name: "Item", price: 15, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 490, name: "Item", price: 60, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 491, name: "Item", price: 5, category: "all", image: "https://via.placeholder.com/200?text=Bikan 
            { id: 1, name: "Coca Cola (250ml)", price: 20, category: "all", image: "coca .jpg" },
            { id: 2, name: "Maaza (125ml)", price: 10, category: "all", image: "https://www.bigbasket.com/media/uploads/p/l/265725_18-maaza-juice-mango-refresh.jpg" },
            { id: 3, name: "Litchi Drink (250ml)", price: 10, category: "all", image: "https://dyyv8eonpc8dv.cloudfront.net/media/cache/f8/bc/f8bc9218424bfcd9c7e489e95172e820.jpg" },
            { id: 4, name: "Campa Orange (250ml)", price: 10, category: "all", image: "https://5.imimg.com/data5/ANDROID/Default/2024/7/433881561/DX/CA/LL/156958934/product-jpeg.jpeg" },
            { id: 8, name: "Feez (125ml) ", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/511i0X9QKYL.jpg" },
            { id: 9, name: "Feez (250ml)", price: 20, category: "all", image: "fizz20.jpg" },
            { id: 10, name: "Sprite (250ml)", price: 20, category: "all", image: "https://5.imimg.com/data5/WS/NR/NJ/ANDROID-3851360/product-jpeg.jpg" },
            { id: 11, name: "ThumsUp(250ml)", price: 20, category: "all", image: "https://m.media-amazon.com/images/I/71h7T4jsgzL._AC_UF1000,1000_QL80_.jpg" },
            { id: 12, name: "Fanta (250ml)", price: 20, category: "all", image: "https://www.bbassets.com/media/uploads/p/l/412247_1-fanta-orange.jpg" },
            { id: 13, name: "Mazaa (250ml)", price: 20, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2022/7/LW/UO/WU/122190343/1646648544909-sku-0046-0.jpg" },
            { id: 14, name: "String (250ml)", price: 20, category: "all", image: "Sting.jpg" },
            { id: 15, name: "Lahori jeera (250ml)", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/710jZoI2iEL._AC_UF1000,1000_QL80_.jpg" },
            { id: 16, name: "hajam jeera (250ml)", price: 20, category: "all", image: "hzeera.jpg" },
            { id: 17, name: "Sprite Can (180ml)", price: 25, category: "all", image: "scan.jpg" },
            { id: 18, name: "Thums up Can (180ml)", price: 25, category: "all", image: "tcan.jpg" },
            { id: 19, name: "Limca Can (180ml)", price: 25, category: "all", image: "https://www.bbassets.com/media/uploads/p/l/90436_2-limca-lime-n-limca.jpg" },
            { id: 20, name: "Fanta Can (180ml)", price: 25, category: "all", image: "https://bazaar5.com/image/cache/catalog/pro/product/apiData/b084p31nvl-fanta-soft-drink-orange-180ml-0-2500x2500.jpg" },
            { id: 21, name: "Hell Can (250ml)", price: 60, category: "all", image: "https://www.bigbasket.com/media/uploads/p/xxl/40141855_3-hell-energy-drink-classic.jpg" },
            { id: 22, name: "Red Bull (350ml)", price: 125, category: "all", image: "https://www.bigbasket.com/media/uploads/p/l/30005089_5-red-bull-energy-drink-sugar-free.jpg" },
            { id: 23, name: "Mazaa (600ml)", price: 60, category: "all", image: "https://www.bbassets.com/media/uploads/p/xxl/166460-2_1-maaza-juice-mango.jpg" },
            { id: 24, name: "Thums up (750ml)", price: 40, category: "all", image: "t750.jpg" },
            { id: 25, name: "Fanta (750ml)", price: 40, category: "all", image: "https://m.media-amazon.com/images/I/71IPvMLx+rL.jpg" },
            { id: 26, name: "Sprite (750ml)", price: 40, category: "all", image: "s750.jpg" },
            { id: 27, name: "Thums up (1L)", price: 50, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2024/4/409786516/HJ/CV/SR/140508301/aerated-water-500x500.png" },
            { id: 28, name: "Fanta (1L)", price: 50, category: "all", image: "https://www.bigbasket.com/media/uploads/p/l/265696_9-fanta-soft-drink-orange-flavoured.jpg" },
            { id: 29, name: "Sprite (1L)", price: 50, category: "all", image: "https://www.kiranapoorti.com/image/cache/catalog/SPRITE%20%20LEMON%20LIME%20FLAVOUR%20600ML-184x274.jpeg" },
            { id: 30, name: "Mazaa (1L)", price: 60, category: "all", image: "https://m.media-amazon.com/images/I/61+jGc7vLIL.jpg" },
            { id: 31, name: "Sprite (2L)", price: 100, category: "all", image: "s2l.jpg" },
            { id: 32, name: "Fanta (2L)", price: 100, category: "all", image: "https://www.bigbasket.com/media/uploads/p/l/251041_9-fanta-soft-drink-orange-flavoured.jpg" },
            { id: 33, name: "Thums up (2L) ", price: 100, category: "all", image: "https://m.media-amazon.com/images/I/619lX5zikVL._AC_UF1000,1000_QL80_.jpg" },
            { id: 34, name: "Mazaa (2L)", price: 100, category: "all", image: "https://www.bbassets.com/media/uploads/p/l/1203603-2_5-maaza-fruit-juice-mango.jpg" },
            { id: 35, name: "Frooti (2L)", price: 100, category: "all", image: "https://my-market.in/wp-content/uploads/2021/04/Frooti-Mango-Drink-2-Litres.jpg" },
            { id: 36, name: "Amul Lassi (200ml)", price: 20, category: "all", image: "lassi.jpg" },
            { id: 37, name: "Tropicana (180ml)", price: 20, category: "all", image: "https://www.mymakbuddy.in/wp-content/uploads/2023/03/Tropicana-pomegranate-Delight-180ml.jpg" },
            { id: 38, name: "Groovy (125ml)", price: 100, category: "all", image: "paper.jpg" },
            { id: 39, name: "Bisleri (1L)", price: 20, category: "all", image: "bisleri20.jpg" },
            { id: 40, name: "Bisleri (500ml)", price: 10, category: "all", image: "bisleri10.jpg" },
            { id: 41, name: "Kinley (1L)", price: 20, category: "all", image: "https://m.media-amazon.com/images/I/419iH19Kg4L.jpg" },
            { id: 42, name: "Amul Butter milk (200ml)", price: 20, category: "all", image: "amul.jpg" },
            { id: 43, name: "Amul Milk ", price: 10, category: "all", image: "https://grocerykishop.in/wp-content/uploads/2023/12/Amul-Moti-Toned-Milk-100-ml.jpg" },
            { id: 44, name: "Amul Milk (500ml)", price: 35, category: "all", image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/d4b8ef20-df5e-4d0b-ab04-36de62dd0f45.jpeg" },
            { id: 45, name: "Butter Milk", price: 15, category: "all", image: "https://tiimg.tistatic.com/fp/1/008/023/improves-health-hygienic-prepared-healthy-and-delicious-taste-salt-fresh-buttermilk-573.jpg" },
            { id: 46, name: "Dahi (180ml)", price: 22, category: "all", image: "https://www.prayagmilk.in/images/products/New%20folder/Curd/Double-Toned-Dahi.jpg" },
            { id: 47, name: "Item (1L)", price: 20, category: "all", image: "https://m.media-amazon.com/images/I/419iH19Kg4L.jpg" },
            // Candy
            // C
            { id: 48, name: "Dairy Milk", price: 20, category: "all", image: "https://www.bigbasket.com/media/uploads/p/l/100020979-2_7-cadbury-dairy-milk-chocolate-bar.jpg" },
            { id: 49, name: "KitKat", price: 10, category: "all", image: "https://static.meds.cvpharmacy.in/wp-content/uploads/2024/02/60106-1.jpg" },
            { id: 50, name: "Gems", price: 5, category: "all", image: "https://www.bigbasket.com/media/uploads/p/s/100021029_12-cadbury-gems-sugar-coated-chocolate.jpg" },
            { id: 51, name: "Dairy Milk", price: 50, category: "all", image: "https://www.shysha.in/wp-content/uploads/2021/10/P-1484.jpg" },
            { id: 52, name: "Snakker", price: 5, category: "all", image: "https://www.towntokri.com/wp-content/uploads/2023/06/Priyagold-Snakker-Chocolate-Mrp.jpg" },
            { id: 53, name: "Choco Gold", price: 5, category: "all", image: "https://storage.googleapis.com/shy-pub/356437/SKU-0133_0-1710304553014.jpg" },
            { id: 54, name: "Dairy Milk", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/51srRpaExZL.jpg" },
            { id: 55, name: "Hunk", price: 5, category: "all", image: "https://5.imimg.com/data5/JC/GO/HZ/SELLER-95844530/priyagol-hunk-caramel-choko-500x500.jpg" },
            { id: 56, name: "Maggi", price: 15, category: "all", image: "https://www.bigbasket.com/media/uploads/p/l/20005893_3-maggi-noodles-masala.jpg" },
            { id: 57, name: "Maggi", price: 60, category: "all", image: "https://www.bigbasket.com/media/uploads/p/xl/266162_20-maggi-2-minute-instant-noodles-masala.jpg" },
            { id: 58, name: "Maggi", price: 5, category: "all", image: "https://www.bigbasket.com/media/uploads/p/l/20005893_3-maggi-noodles-masala.jpg" },
            { id: 59, name: "Nescafe Coffee", price: 10, category: "all", image: "https://www.bbassets.com/media/uploads/p/l/40096666_5-nescafe-classic-coffee.jpg" },
            { id: 60, name: "Item", price: 5, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 61, name: "Item", price: 15, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 62, name: "Item", price: 60, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 62, name: "Item", price: 5, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 64, name: "Item", price: 5, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 65, name: "Item", price: 15, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 66, name: "Item", price: 60, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 67, name: "Item", price: 5, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            // Shop & Shampoo
            { id: 68, name: "Dove Shampoo", price: 2, category: "all", image: "https://vara-lakshmi.in/wp-content/uploads/2025/03/dg2.png" },
            { id: 69, name: "Clinic Plus", price: 1, category: "all", image: "https://m.media-amazon.com/images/I/4142KkASm+L.jpg" },
            { id: 70, name: "Lifebuoy Soap", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/61VxLtMtcQL._AC_UF1000,1000_QL80_.jpg" },
            { id: 71, name: "Dove Conditioner", price: 4, category: "all", image: "https://m.media-amazon.com/images/I/41a1kAw5urL._AC_SY350_QL15_.jpg" },
            { id: 72, name: "Head & Shoulders", price: 2, category: "all", image: "https://dms.mydukaan.io/original/jpeg/master/products/product__464dfb4b-cffa-4e71-861e-6697262ab7a4.jpg" },
            { id: 73, name: "Sunsilk", price: 1, category: "all", image: "https://daily.myindianbrand.com/wp-content/uploads/2022/12/Sunsilk-Thick-and-Long-Shampoo-1rs-sachet.jpg" },
            { id: 74, name: "Kesh Kanti ", price: 1, category: "all", image: "https://5.imimg.com/data5/ECOM/Default/2024/5/422116702/BS/OU/VX/44622788/1601924654630-sku-0546-0-500x500.jpg" },
            { id: 75, name: "Vatika", price: 1, category: "all", image: "https://tiimg.tistatic.com/fp/1/007/747/anti-hair-fall-and-dandruff-free-smooth-silky-soft-shiny-vatika-hair-shampoo--738.jpg" },
            { id: 76, name: "Chik", price: 1, category: "all", image: "https://ruralkingz.com/wp-content/uploads/2020/09/chik-shampoo-2.jpg" },
            { id: 77, name: "Coconut Oil", price: 1, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2021/4/BQ/LH/LT/12522619/parachute-oil-flexi-pouch.jpg" },
            { id: 78, name: "Dabur Amla Oil", price: 10, category: "all", image: "https://www.bigbasket.com/media/uploads/p/xxl/100012549_11-dabur-amla-amla-hair-oil-for-strong-long-thick-hair.jpg" },
            { id: 79, name: "Bajaj Almond", price: 1, category: "allo", image: "https://m.media-amazon.com/images/I/410h1Sih6+L._SY355_PIbundle-100,TopRight,0,0_SX349SY355SH20_.jpg" },
            { id: 80, name: "Navratan Oil", price: 1, category: "all", image: "https://m.media-amazon.com/images/I/51eAyJAwgpL._AC_UF350,350_QL80_.jpg" },
            { id: 81, name: "Himgange Oil", price: 1, category: "all", image: "https://dukaan.b-cdn.net/700x700/webp/7104785/d29f1672-e152-45e9-86e7-3c8fb84b9f1b/download-80-9987b5ca-f685-4ae4-84ad-703f66dc8320.jpg" },
            { id: 82, name: "Nisha Red Hair Colour", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/71c+IGj05lL.jpg" },
            { id: 83, name: "Nisha Black Hair Colour ", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/71WPQK83uXL._AC_UF1000,1000_QL80_.jpg" },
            { id: 84, name: "Nisha Red Hair Colour ", price: 15, category: "all", image: "https://m.media-amazon.com/images/I/71c+IGj05lL.jpg" },
            { id: 85, name: "Prem Dulhan", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/61WqcEQdWyL._AC_UF1000,1000_QL80_.jpg" },
            { id: 86, name: "Godrej Rich Creme", price: 15, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2022/8/PR/RG/MN/2517988/godrej-rich-creme-hair-color.jpg" },
            { id: 87, name: "Garnier Black Colour", price: 45, category: "all", image: "https://www.bigbasket.com/media/uploads/p/xxl/30003971_3-garnier-black-naturals-hair-colour.jpg" },
            { id: 88, name: "Streax Insta Black", price: 20, category: "all", image: "https://www.vegmove.com/wp-content/uploads/2024/11/23.jpg" },
            { id: 89, name: "Lux", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/51EYm8O8fnL._AC_UF1000,1000_QL80_.jpg" },
            { id: 91, name: "Dettol ", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/61ZOKk1VI8L._AC_UF1000,1000_QL80_.jpg" },
            { id: 92, name: "Godrej No.1", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/61bXUXjN-qL._AC_UF1000,1000_QL80_.jpg" },
            { id: 93, name: "Vidisha ", price: 10, category: "all", image: "https://dms.mydukaan.io/original/jpeg/458164/57ba728a-53b9-413f-adf6-570be72d7787.png" },
            { id: 94, name: "Vidisha", price: 5, category: "all", image: "https://dms.mydukaan.io/original/jpeg/458164/57ba728a-53b9-413f-adf6-570be72d7787.png" },
            { id: 95, name: "Rin", price: 10, category: "all", image: "https://www.bigbasket.com/media/uploads/p/xxl/40002071-3_6-rin-rin-detergent-bar.jpg" },
            { id: 96, name: "Vim", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/61szrCRWOEL.jpg" },
            { id: 97, name: "Ghadi ", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/512HJIGX+7L._AC_UF1000,1000_QL80_.jpg" },
            { id: 98, name: "Ghadi", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/512HJIGX+7L._AC_UF1000,1000_QL80_.jpg" },
            { id: 99, name: "Ariel", price: 10, category: "all", image: "https://www.bbassets.com/media/uploads/p/l/40225110_1-ariel-perfect-wash-detergent-powder-long-lasting-fragrance-removes-tough-stains.jpg" },
            { id: 100, name: "Surf Excel", price: 10, category: "all", image: "https://5.imimg.com/data5/UM/YK/MY-47131030/surf-excel-easy-wash-500x500.jpg" },
            { id: 101, name: "Vidisha Powder", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/51c-7XodI4L._AC_UF1000,1000_QL80_.jpg" },
            { id: 102, name: "Vidisha Powder (1Kg)", price: 65, category: "all", image: "https://m.media-amazon.com/images/I/61Im6QKpzzL._AC_UF1000,1000_QL80_.jpg" },
            { id: 103, name: "Vidisha Powder (50pgm) ", price: 35, category: "all", image: "https://m.media-amazon.com/images/I/61Im6QKpzzL._AC_UF1000,1000_QL80_.jpg" },
            { id: 104, name: "Surf Excel (500gm)", price: 68, category: "all", image: "https://www.birbalretailstore.com/prodimg/Products/C63/SC217/P006401/F5ENC-8901030807305.jpg" },
            { id: 105, name: "Item", price: 10, category: "all", image: "https://www.bigbasket.com/media/uploads/p/xxl/40002071-3_6-rin-rin-detergent-bar.jpg" },
            { id: 106, name: "Item", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/61szrCRWOEL.jpg" },
            { id: 107, name: "Item ", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/512HJIGX+7L._AC_UF1000,1000_QL80_.jpg" },
            { id: 108, name: "Item", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/512HJIGX+7L._AC_UF1000,1000_QL80_.jpg" },
            // Namkeen
            { id: 109, name: "Haldiram Bhujia", price: 10, category: "all", image: "https://5.imimg.com/data5/CJ/RF/MY-35438113/haldiram-aloo-bhujia-500x500.jpg" },
            { id: 110, name: "Bikano Mixture", price: 10, category: "all", image: "https://www.haldirams.com/media/catalog/product/cache/71134970afb779eb7860339989626b7e/m/i/mixture.jpg" },
            { id: 111, name: "Uncle Chipps", price: 5, category: "all", image: "https://www.bigbasket.com/media/uploads/p/xxl/40015993_11-uncle-chips-spicy-treat.jpg" },
            { id: 112, name: "Haldiram Moong Dal", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/713LiwcYtxL.jpg" },
            { id: 113, name: "Mixture", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/81cfA+uFlWL._AC_UF1000,1000_QL80_.jpg" },
            { id: 114, name: "Chakhna", price: 5, category: "all", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 115, name: "Haldiram Navrattan", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/71xm+KuHAsL._AC_UF1000,1000_QL80_.jpg" },
            { id: 116, name: "Gathiya", price: 5, category: "all", image: "https://monarkocandy.com/Dinesh_Namkeen/assets/images/namkeen/gathiyaimage.png" },
            { id: 117, name: "Sab Kuch", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2023/7/325299756/NF/IF/GW/19283388/sab-kuch-500x500.jpg" },
            { id: 118, name: "Indori Sev", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2023/7/325307555/JI/GV/TC/19283388/indori-sev-500x500.jpeg" },
            { id: 119, name: "Nut Cracker", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/413nVhmsRYL._AC_.jpg" },
            { id: 120, name: "Salted Peanuts", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/7137HjcfiML._AC_UF894,1000_QL80_.jpg" },
            { id: 121, name: "Haldiram Punjabi Tadka", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/81Cr-QdG4TL.jpg" },
            { id: 122, name: "Aloo Bhujia", price: 5, category: "all", image: "https://tiimg.tistatic.com/fp/2/008/006/25-gram-a-grade-spicy-and-tasty-fried-aloo-bhujia-918.jpg" },
            { id: 123, name: "Panjabi Tadka", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/61LOb5D10oL._AC_UF1000,1000_QL80_.jpg" },
            { id: 124, name: "Corn Flakes", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2023/12/372492942/EL/MS/TQ/202200035/mitto-morano-cornflakes.jpeg" },
            { id: 125, name: "Moong Dal", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/71tNqAnKVVL._AC_UF894,1000_QL80_.jpg" },
            { id: 126, name: "Shahi Masoor", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2025/3/495166853/XG/UJ/UA/44818764/whatsapp-image-2025-03-12-at-13-36-00-3.jpeg" },
            { id: 127, name: "Chow Chow", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2025/3/493539432/LU/JY/DT/148199350/hing-papdi-500x500.jpg" },
            { id: 128, name: "Chow Chow", price: 2, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2025/3/493539432/LU/JY/DT/148199350/hing-papdi-500x500.jpg" },
            { id: 129, name: "Boom Boom Kurkure", price: 5, category: "all", image: "https://5.imimg.com/data5/ANDROID/Default/2024/6/429212307/SB/JS/EH/73659392/product-jpeg-250x250.jpg" },
            { id: 130, name: "Boom Boom Kurkure", price: 2, category: "all", image: "https://5.imimg.com/data5/ANDROID/Default/2024/6/429212307/SB/JS/EH/73659392/product-jpeg-250x250.jpg" },
            { id: 131, name: "Boondi", price: 10, category: "all", image: "https://dukaan.b-cdn.net/700x700/webp/783044/5b3c8e77-44c4-47ab-b7cc-79862c99dca0/1617359498780-d9c47a23-508d-4ec6-ac6e-75231b6ead98.jpeg" },
            { id: 132, name: "Pudina Boondi", price: 10, category: "all", image: "https://d39vol41m7feya.cloudfront.net/1659797769-download_(2).jpg" },
            { id: 133, name: "Loot Maar", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2025/3/493794840/ZJ/XO/RA/148199350/boom-boom-loot-maar-salted-namkeen-snacks-500x500.jpg" },
            { id: 134, name: "Katoti", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2025/3/493540149/RS/UE/MV/148199350/img-20250304-wa0080-500x500.jpg" },
            { id: 135, name: "Crax", price: 5, category: "all", image: "https://www.bigbasket.com/media/uploads/p/l/40196708_4-crax-rings-tangy-tomato.jpg" },
            { id: 136, name: "Popcorn", price: 10, category: "all", image: "https://www.vridhistores.com/uploads/2023/Dec/products/17031497496053.jpg" },
            { id: 137, name: "Popcorn", price: 5, category: "all", image: "https://menafn.com/updates/pr/2023-01/03/F_e1599image_story.png" },
            { id: 138, name: "Kurkure", price: 5, category: "all", image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/8/5/77e61fae-297d-4dfb-a54b-ea78ca91c331_3845_1.png" },
            { id: 139, name: "Curls", price: 5, category: "all", image: "https://www.bigbasket.com/media/uploads/p/xxl/40196699-7_1-crax-curls-chatpata-masala.jpg" },
            { id: 140, name: "Tedhe Madhe", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/71e9pUGU4tL.jpg" },
            { id: 141, name: "PuffCorn", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/71OwiJcIsjL.jpg" },
            { id: 142, name: "Lays", price: 5, category: "all", image: "https://www.freedomcart.com/image/cache/data/Products/Daily%20needs/lays-green-chips-700x700.jpg" },
            { id: 143, name: "Jeera Krunch", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2020/12/RB/BR/DT/3797221/86gm-mastt-jeera-biscuits-500x500.jpg" },
            { id: 144, name: "Tiger Krunch", price: 5, category: "all", image: "https://media.britannia.co.in/large_Tiger_Kreemz_Krunch_Choco_Chips_Pack_88614e034b.png" },
            { id: 145, name: "Happy Happy", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2022/2/DT/EQ/AP/146503902/20005925-2-8-parle-happy-happy-choco-chip-cookies.jpg" },
            { id: 146, name: "Black Magic", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2021/6/FY/PK/LJ/131786009/black-magic-png.png" },
            { id: 147, name: "Butter Delite", price: 5, category: "all", image: "https://dukaan.b-cdn.net/700x700/webp/projecteagle/images/26806426-ea5b-48b5-a87c-4473e7902bf4.jpg" },
            { id: 148, name: "2in1", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2022/9/FI/ZN/VV/78819586/anmol-2-in-1-biscuits-500x500.jpg" },
            { id: 149, name: "Twins", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2021/6/GA/TS/VC/131786009/twins-png.png" },
            { id: 150, name: "Parle-G", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/51S1glFTLcL.jpg" },
            { id: 151, name: "Butter Cookies", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/31+u00vm+LL.jpg" },
            { id: 152, name: "Moms Magic", price: 5, category: "all", image: "https://images-eu.ssl-images-amazon.com/images/I/81A-RV2SSXL._AC_UL600_SR600,400_.jpg" },
            { id: 153, name: "Moms Magic", price: 10, category: "all", image: "https://images-eu.ssl-images-amazon.com/images/I/81A-RV2SSXL._AC_UL600_SR600,400_.jpg" },
            { id: 154, name: "Coconut", price: 10, category: "all", image: "https://bonn.in/wp-content/uploads/2019/09/COCONUT-72g.png" },
            { id: 155, name: "Good Day", price: 10, category: "all", image: "https://images-eu.ssl-images-amazon.com/images/I/61a8C9XGYRL._AC_UL600_SR600,400_.jpg" },
            { id: 156, name: "Sachit Rus", price: 20, category: "all", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/331433940/VC/SA/IZ/13418377/product-jpeg.jpeg" },
            { id: 157, name: "item", price: 10, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 158, name: "item", price: 10, category: "all", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 159, name: "item", price: 5, category: "all", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 160, name: "item", price: 5, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 161, name: "item", price: 5, category: "all", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 162, name: "item", price: 10, category: "all", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 163, name: "item", price: 5, category: "all", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 164, name: "item", price: 5, category: "all", image: "https://via.placeholder.com/200?text=Chips" },
            // Pooja Items
            { id: 165, name: "Agarbatti", price: 5, category: "all", image: "https://images.meesho.com/images/products/242510933/jigi0_1200.jpg" },
            { id: 166, name: "Mangal dhup", price: 10, category: "all", image: "https://www.bigbasket.com/media/uploads/p/xxl/40189000_1-mangaldeep-sandal-dhoop.jpg" },
            { id: 167, name: "Mangal dhup", price: 20, category: "all", image: "https://5.imimg.com/data5/ECOM/Default/2024/1/375695540/ZN/NQ/FW/109941460/1704548238278-1691460871782sku08833-500x500.jpeg" },
            { id: 168, name: "Mangal dhup", price: 5, category: "all", image: "https://www.bigbasket.com/media/uploads/p/xxl/40189000_1-mangaldeep-sandal-dhoop.jpg" },
            { id: 169, name: "Rooee Batti", price: 10, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2023/10/353527622/TT/EP/QI/26601528/cotton-jot-batti-250x250.jpg" },
            { id: 170, name: "Rooee Batti", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2023/10/353527622/TT/EP/QI/26601528/cotton-jot-batti-250x250.jpg" },
            { id: 171, name: "Jayfal", price: 3, category: "all", image: "https://static.wixstatic.com/media/2a3d4f_12008ca560174f2e9dd17e561d330ed8~mv2.jpg/v1/fill/w_480,h_422,al_c,lg_1,q_80,enc_avif,quality_auto/2a3d4f_12008ca560174f2e9dd17e561d330ed8~mv2.jpg" },
            { id: 172, name: "Roli", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2023/3/JU/XU/BV/2002432/pooja-roli-deluxe-16-gms-500x500.jpg" },
            { id: 173, name: "Kapoor", price: 7, category: "all", image: "https://m.media-amazon.com/images/I/41TfOMlqIzS._AC_UF1000,1000_QL80_.jpg" },
            { id: 174, name: "Kalawa", price: 5, category: "all", image: "https://5.imimg.com/data5/ANDROID/Default/2023/6/321308374/ZG/GK/XW/36683795/product-jpeg-500x500.jpg" },
            { id: 175, name: "Pooja Ghee", price: 25, category: "all", image: "https://m.media-amazon.com/images/I/61FMrLc55uL._AC_UF894,1000_QL80_.jpg" },
            { id: 176, name: "Long", price: 5, category: "all", image: "https://bhaktipooja.com/wp-content/uploads/2021/01/loung.jpg" },
            { id: 177, name: "Kapoor", price: 3, category: "alls", image: "https://m.media-amazon.com/images/I/61fgmR-7MDL.jpg" },
            { id: 178, name: "Dabur Oil", price: 10, category: "all", image: "https://pleasingpick.com/image/cache/catalog/personal-care-products/hair-care-products/dabur-products/amla-hair-oil/amla-hair%20oil-1-1200x630h.jpg" },
            { id: 179, name: "Dabur Oil", price: 20, category: "alls", image: "https://pleasingpick.com/image/cache/catalog/personal-care-products/hair-care-products/dabur-products/amla-hair-oil/amla-hair%20oil-1-1200x630h.jpg" },
            { id: 180, name: "Medistrip", price: 2, category: "all", image: "https://d29azk3rh443yy.cloudfront.net/static/Products/Mehtas-Medistrip-Medicated-First-Aid-Dressing-Bandage-surginatal.com-003.jpg" },
            { id: 181, name: "Top", price: 10, category: "all", image: "https://www.bigbasket.com/media/uploads/p/xl/40020214_12-nestle-everyday-dairy-whitener-milk-powder-for-tea.jpg" },
            { id: 182, name: "Fair And Handsome", price: 10, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2021/1/MV/CS/LA/121836789/fairness-mens-cream.jpg" },
            // Electronic Items
            { id: 183, name: "Wire (1 Mitter)", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/41NX8DLDRXL._AC_UF1000,1000_QL80_.jpg" },
            { id: 184, name: "Bulb", price: 12, category: "all", image: "https://m.media-amazon.com/images/I/51IQ23SYLyL._AC_UF1000,1000_QL80_.jpg" },
            { id: 185, name: "3 Pin Top", price: 20, category: "all", image: "https://m.media-amazon.com/images/I/31TsdcN8jFL._BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg" },
            { id: 186, name: "2 Pin Top", price: 10, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2021/10/BW/SM/LW/140163418/2-pin-electric-plug-top-500x500.jpg" },
            { id: 187, name: "LED Bulb", price: 70, category: "all", image: "https://m.media-amazon.com/images/I/51okYm6FETL._AC_UF894,1000_QL80_.jpg" },
            { id: 188, name: "Switch", price: 10, category: "all", image: "https://5.imimg.com/data5/JI/MU/MY-48410166/5amp-switch.jpg" },
            { id: 189, name: "5 Pin Socket", price: 15, category: "all", image: "https://via.placeholder.com/200?text=Battery+AA" },
            { id: 190, name: "2 Pin Socket", price: 50, category: "all", image: "https://via.placeholder.com/200?text=Bulb" },
            { id: 191, name: "Holder", price: 10, category: "all", image: "https://5.imimg.com/data5/AI/LX/ID/SELLER-10334551/plastic-black-holder-pendant-holder-hanging-bulb-holder-with-extension-500x500.jpg" },
            { id: 192, name: "Holder", price: 15, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2021/8/AJ/QS/SC/34865739/pendant-holder-metal-ring-white-.jpg" },
            { id: 193, name: "Babool", price: 10, category: "all", image: "https://5.imimg.com/data5/ECOM/Default/2024/9/450501525/OE/ER/NQ/141449392/dabur-babool-toothpaste-quick-pantry-1-500x500.jpg" },
            { id: 194, name: "Dant Kanti", price: 10, category: "all", image: "https://www.patanjaliayurved.net/assets/product_images/400x500/1739430660DantKantiNatural200g-2(2).webp" },
            { id: 195, name: "Dant Kanti", price: 20, category: "all", image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/26079010/2024/5/28/a78e0a90-ab28-4bb3-8c03-1f748ee412fa1716899556944-Patanjali-Set-of-4-Dant-Kanti-Natural-Toothpaste-for-Strong--1.jpg" },
            { id: 196, name: "Coconut Oil", price: 10, category: "all", image: "https://5.imimg.com/data5/YP/FX/NW/SELLER-38439091/dabur-anmol-gold-pure-coconut-oil-500x500.jpg" },
            { id: 197, name: "Ujala", price: 10, category: "all", image: "https://storage.googleapis.com/shy-pub/285171/1687253105148_SKU-0602_1.png" },
            // Stationery Item
            { id: 198, name: "Black Pen", price: 3, category: "all", image: "https://4.imimg.com/data4/BQ/IP/ANDROID-11431097/product-250x250.jpeg" },
            { id: 199, name: "Black Pen", price: 5, category: "all", image: "https://i.ytimg.com/vi/gEOOpUXFk6o/maxresdefault.jpg" },
            { id: 200, name: "Black Pen", price: 10, category: "all", image: "https://i.ebayimg.com/images/g/BOEAAOSw5x9lbB6i/s-l400.jpg" },
            { id: 201, name: "Blue Pen", price: 3, category: "all", image: "https://m.media-amazon.com/images/I/31dXQKTDAiL._AC_UF1000,1000_QL80_.jpg" },
            { id: 202, name: "Blue Pen", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2021/4/FQ/WV/LX/4834012/img-20200801-wa0050.jpg" },
            { id: 203, name: "Blue Pen", price: 10, category: "all", image: "https://rukminim1.flixcart.com/image/300/300/k7ry3680/pen/y/p/z/flair-carbonix-duo-blue-black-original-imafpy3c5auzvuxh.jpeg" },
            { id: 204, name: "Red Pen", price: 5, category: "all", image: "https://grosta.in/public/storage/app/public/images/products/large/1582287998415.jpg" },
            { id: 205, name: "Red Pen", price: 3, category: "all", image: "https://m.media-amazon.com/images/I/51tM16Xz--L.jpg" },
            { id: 206, name: "Pencil", price: 3, category: "all", image: "https://m.media-amazon.com/images/I/618qhwScG-L.jpg" },
            { id: 207, name: "Pencil", price: 4, category: "all", image: "https://www.rapiddeliveryservices.in/uploads/webp/5390-.webp" },
            { id: 208, name: "Pencil", price: 5, category: "all", image: "https://tiimg.tistatic.com/fp/1/007/978/10-pieces-7-inches-wooden-extra-dark-pencil-with-sharpner-and-eraser-075.jpg" },
            { id: 209, name: "Pencil", price: 6, category: "all", image: "https://5.imimg.com/data5/IZ/UB/AP/SELLER-3241753/img-20200531-wa0041-500x500.jpg" },
            { id: 210, name: "Sharpener", price: 5, category: "all", image: "https://statmo.in/wp-content/uploads/2017/01/SHAPANER.jpg" },
            { id: 211, name: "Sharpener", price: 3, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2020/10/CD/YQ/DH/109286633/pencil-sharpener-500x500.jpg" },
            { id: 212, name: "Eraser", price: 2, category: "all", image: "https://cdn.dotpe.in/longtail/item_thumbnails/2087857/JskHg5wU.webp" },
            { id: 213, name: "Eraser", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/716YBLPCc7L.jpg" },
            { id: 214, name: "Colour Palette", price: 5, category: "all", image: "https://i.etsystatic.com/36332620/r/il/c328a3/4158741407/il_570xN.4158741407_rqoz.jpg" },
            { id: 215, name: "Water Colour", price: 10, category: "all", image: "https://5.imimg.com/data5/EH/WM/MY-1021105/tempera-water-color-500x500.jpg" },
            { id: 216, name: "Water Colour", price: 20, category: "all", image: "https://5.imimg.com/data5/ECOM/Default/2024/9/450496427/UR/AY/UF/141449392/doms-tempera-colours-12-shades-1-pc-quick-pantry-500x500.jpg" },
            { id: 217, name: "Sketch Colour", price: 15, category: "all", image: "https://gambhoimart.com/wp-content/uploads/2023/07/PhotoRoom-20230710_094408.png.webp" },
            { id: 218, name: "Pencil Colour", price: 10, category: "all", image: "https://domsindia.com/wp-content/uploads/2022/08/DOMS-Colour-Pencil-10-Shades-%E2%80%93-Half-Size.jpg" },
            { id: 219, name: "Mom Colour", price: 10, category: "all", image: "https://api.craftityourself.in/uploads/products/1651732519372.png" },
            { id: 220, name: "Clip Board", price: 20, category: "all", image: "https://m.media-amazon.com/images/I/91JUvzO6txL.jpg" },
            { id: 221, name: "Envelopes", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/61VYCjf+6wL._AC_UF1000,1000_QL80_.jpg" },
            { id: 222, name: "Gum", price: 10, category: "all", image: "https://5.imimg.com/data5/SJ/NF/XN/SELLER-57304165/favi-gum.jpg" },
            { id: 223, name: "Glue", price: 5, category: "all", image: "https://4.imimg.com/data4/ET/FQ/MY-4197692/adhesive-glue-for-paper-500x500.jpg" },
            { id: 224, name: "Fevicol", price: 10, category: "all", image: "https://5.imimg.com/data5/ECOM/Default/2022/10/RH/BY/XK/102030543/31lq-utcqcl-026ee68e-0b80-47d0-a59d-6c97e182bef6-500x500.jpg" },
            { id: 225, name: "Tape White", price: 10, category: "all", image: "https://yourstationeryhouse.com/pub/media/catalog/product/cache/da0cda2dfdffe074d4519b521af73fcd/g/s/gsspdi14.jpg" },
            { id: 226, name: "Tape Black", price: 15, category: "all", image: "https://helloaugust.in/wp-content/uploads/2020/04/insulation-tape.jpg" },
            { id: 227, name: "Two Side Tape ", price: 10, category: "all", image: "https://images.meesho.com/images/products/204678023/gmfkg_512.webp" },
            { id: 228, name: "item", price: 0, category: "all", image: "https://via.placeholder.com/200?text=Pencil" },
            { id: 229, name: "NoteBook Hindi", price: 10, category: "all", image: "https://www.vridhistores.com/uploads/2023/Jul/images/16887359839437.jpg" },
            { id: 230, name: "NoteBook Hindi", price: 20, category: "all", image: "https://www.vridhistores.com/uploads/2023/Jul/images/16887359839437.jpg" },
            { id: 231, name: "NoteBook English", price: 10, category: "all", image: "https://img.clevup.in/272541/SKU-1297_0-1734159073639.jpg?width=600&format=webp" },
            { id: 332, name: "NoteBook English", price: 20, category: "all", image: "https://img.clevup.in/272541/SKU-1297_0-1734159073639.jpg?width=600&format=webp" },
            { id: 333, name: "NoteBook Math", price: 10, category: "all", image: "https://pwestore.com/wp-content/uploads/2023/08/layflat-lines-images-01-6717a1df4a0d3.webp" },
            { id: 334, name: "NoteBook Math", price: 20, category: "all", image: "https://pwestore.com/wp-content/uploads/2023/08/layflat-lines-images-01-6717a1df4a0d3.webp" },
            { id: 335, name: "NoteBook One Side", price: 20, category: "all", image: "https://m.media-amazon.com/images/I/21ukM9TGWQL._AC_UF1000,1000_QL80_.jpg" },
            { id: 336, name: "File", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/41P5cNvWBCL._AC_UF1000,1000_QL80_.jpg" },
            { id: 337, name: "File ", price: 10, category: "all", image: "https://tiimg.tistatic.com/fp/2/007/780/rectangular-shape-steel-clip-light-weight-a4-size-file-folder-980.jpg" },
            { id: 338, name: "Practical Page", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/81n5HL8tEKL._AC_UF1000,1000_QL80_.jpg" },
            { id: 339, name: "Highlighter", price: 20, category: "all", image: "https://3.imimg.com/data3/OK/MM/MY-8549194/color-highlighter.jpg" },
            { id: 340, name: "Rubber Bands", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/81xeSr9aEEL.jpg" },
            { id: 341, name: "Black Marker", price: 20, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2023/8/333341972/JU/YH/UH/102890660/addgel-white-board-marker-pen-500x500.jpeg" },
            { id: 342, name: "Blue Marker", price: 20, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2020/12/DY/QZ/GG/107201839/white-board-marker-pen.jpg" },
            { id: 343, name: "Stapler", price: 50, category: "all", image: "https://cdn.moglix.com/p/2AI6l6v84aw1P-xxlarge.jpg" },
            { id: 344, name: "Stapler Pin", price: 10, category: "all", image: "https://images.jdmagicbox.com/quickquotes/images_main/stapler-pin-376299363-nkj1z.jpg" },
            { id: 345, name: "Ruler", price: 5, category: "all", image: "https://learnplaynexus.com/content/uploads/2020/09/620015-30-15cm-ruler-1.jpg" },
            { id: 346, name: "Gilas", price: 1, category: "all", image: "https://dms.mydukaan.io/original/jpeg/3598311/db2d9c47-d434-4f80-b033-63b2294f9da5/1613917589417.jpeg" },
            { id: 347, name: "Gilas", price: 3, category: "all", image: "https://img1.exportersindia.com/final_catg_image/73111-1.jpg" },
            { id: 348, name: "Closeup", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/51H8t6JIrDL.jpg" },
            { id: 349, name: "Closeup", price: 20, category: "all", image: "https://m.media-amazon.com/images/I/617vIzCnJAL._AC_UF1000,1000_QL80_.jpg" },
            { id: 350, name: "Dabur Lal", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/71EDUcz6heL._AC_UF1000,1000_QL80_.jpg" },
            { id: 351, name: "All Out", price: 80, category: "all", image: "https://m.media-amazon.com/images/I/61Y5aUpuvZL._AC_UF1000,1000_QL80_.jpg" },
            { id: 352, name: "Amir Lotion", price: 25, category: "all", image: "https://m.media-amazon.com/images/I/81XJ08n5x0L._AC_UF350,350_QL80_.jpg" },
            { id: 353, name: "Navratna Powder", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/71JfZHU7HRL.jpg" },
            { id: 354, name: "Vaseline", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/51fp48N3DnL.jpg" },
            { id: 355, name: "Pond's Cream", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/711GgMVyykL.jpg" },
            { id: 356, name: "Eno", price: 10, category: "all", image: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/tzpi19w8lhmorebrbpu6.jpg" },
            { id: 357, name: "Nipple", price: 10, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2022/5/EF/HZ/BS/152258067/silicone-nipple-77-500x500.jpg" },
            { id: 431, name: "Bonne Cid Choti", price: 35, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2022/7/YY/VT/DO/73801149/bonne-baby-feeding-bottle-500x500.jpg" },
            { id: 432, name: "Bonne Cid Badi", price: 40, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2022/7/AW/WR/LB/73801149/bonne-baby-feeding-bottle-500x500.jpg" },
            // Pan Masala
            { id: 358, name: "Rajni Gandha", price: 25, category: "all", image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-721-685,pr-true,f-auto,q-80/cms/product_variant/d5820da5-ec78-4a10-a936-21df74c91509d37043e8-81af-439f-9fe2-bf917c5245272023-10-31%2014:57:32.314905986%20+0000%20UTC%20m=+15420.859337347/Rajnigandha-Flavoured-Pan-Masala-Pack-of-10-.jpg" },
            { id: 359, name: "Gagan", price: 10, category: "all", image: "https://storage.googleapis.com/shy-pub/18129/1624151677251_SKU-0524_0.jpeg" },
            { id: 360, name: "Gagan", price: 5, category: "all", image: "https://dms.mydukaan.io/original/jpeg/820580/fa854f61-86ec-4065-8bde-52ee70b087c9.png" },
            { id: 361, name: "Kamla Pasand", price: 5, category: "all", image: "https://globalwalkin.com/uploads/product/1660374528.jpeg" },
            { id: 362, name: "Sai Tabacco", price: 10, category: "all", image: "https://s3.amazonaws.com/zaubatrademarks/0b4f4f0f-50b4-4603-9e3e-9108e37bc39f.png" },
            { id: 363, name: "Sai Tabacco", price: 5, category: "all", image: "https://s3.amazonaws.com/zaubatrademarks/0b4f4f0f-50b4-4603-9e3e-9108e37bc39f.png" },
            { id: 364, name: "Bangali Tabacco", price: 5, category: "all", image: "https://dukaan.b-cdn.net/700x700/webp/4519247/7c46aa29-94bc-4075-bea1-41c2bc0091b4/1622166921379-2017cb88-e47b-44f1-b2c9-7c25266f05ab.jpeg" },
            { id: 365, name: "Bangali Readyment", price: 5, category: "all", image: "https://dukaan.b-cdn.net/700x700/webp/4519247/7c46aa29-94bc-4075-bea1-41c2bc0091b4/1622166921379-2017cb88-e47b-44f1-b2c9-7c25266f05ab.jpeg" },
            { id: 366, name: "Nawab Dulha", price: 10, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2021/12/FG/ZY/UM/39809890/tobacco-packaging-pouch.jpeg" },
            { id: 367, name: "Nawab Dulha", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2021/12/FG/ZY/UM/39809890/tobacco-packaging-pouch.jpeg" },
            { id: 368, name: "Top Bidi", price: 10, category: "all", image: "https://www.dial4trade.com/uploaded_files/product_images/thumbs/ganesh-bidi-u-88125083771312609.jpg" },
            { id: 369, name: "Capstan", price: 7, category: "all", image: "https://dukaan.b-cdn.net/1000x1000/webp/projecteagle/images/0d8d6e5d-0e37-4f4b-9da6-309d300d1c95.jpg" },
            { id: 370, name: "Zaffran", price: 8, category: "all", image: "https://storage.googleapis.com/shy-pub/285171/1687067882487_SKU-0525_0.png" },
            { id: 371, name: "Wave", price: 6, category: "all", image: "https://dukaan.b-cdn.net/700x700/webp/204588/95c61ab1-2150-45cf-a67a-607b228fd488.png" },
            { id: 372, name: "Gold Flake", price: 10, category: "all", image: "https://cdn.dotpe.in/longtail/store-items/8498388/Tg1iDJ2b.webp" },
            { id: 373, name: "Matches", price: 1, category: "all", image: "https://www.dial4trade.com/uploaded_files/product_images/wax-match-sticks-274364.jpg" },
            { id: 374, name: "Matches", price: 2, category: "all", image: "https://www.dial4trade.com/uploaded_files/product_images/wax-match-sticks-274364.jpg" },
            { id: 375, name: "Safal Tabacco", price: 10, category: "all", image: "https://dukaan.b-cdn.net/700x700/webp/54138/54b8ba8a-4231-43b1-80f8-96d78e28e861.png" },
            { id: 376, name: "Marie Supari", price: 2, category: "all", image: "https://3.imimg.com/data3/SL/IC/MY-10553992/marie-supari-500x500.jpg" },
            { id: 377, name: "Supari", price: 2, category: "all", image: "https://m.media-amazon.com/images/I/61M4QkBbf5L.jpg" },
            { id: 378, name: "Baba Elaichi", price: 1, category: "all", image: "https://m.media-amazon.com/images/I/61UoWouiE7L.jpg" },
            { id: 379, name: "Gillette Guard", price: 14, category: "all", image: "https://www.bigbasket.com/media/uploads/p/l/40019007_9-gillette-razor-guard.jpg" },
            { id: 380, name: "Gillette Guard", price: 25, category: "all", image: "https://api.chemist180.com/api/media/image-resize/?path=Product_Images_final/&name=GILLETTE%20GUARD%20RAZOR_CHEMIST180.jpg" },
            { id: 381, name: "LP", price: 5, category: "all", image: "https://www.stationerybazaar.com/images/fevikwik_instant_adhesive.jpg" },
            // Daal
            { id: 382, name: "Masoor Dal (1KG)", price: 120, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2024/7/432410602/NI/KP/CV/955096/manufacturer-worldwide-exporter-of-red-malka-lentils-wholesaler-of-all-kind-daals-500x500.jpg" },
            { id: 383, name: "Moong Dal (1KG)", price: 120, category: "all", image: "https://flourworks.in/wp-content/uploads/2023/06/1-10.jpg" },
            { id: 384, name: "Urad Dal (1KG)", price: 120, category: "all", image: "https://www.ulamart.com/pub/media/catalog/product/1/3/13-min_optimized.png" },
            { id: 385, name: "Chana Dal (1KG)", price: 120, category: "all", image: "https://sunimpex.biz/wp-content/uploads/2024/01/chana-dal.png" },
            // Disposal Item
            { id: 386, name: "Gilas Packet", price: 20, category: "all", image: "https://via.placeholder.com/200?text=Paper+Plates" },
            { id: 387, name: "Plate", price: 50, category: "all", image: "https://via.placeholder.com/200?text=Plastic+Cups" },
            { id: 388, name: "Katori", price: 20, category: "all", image: "https://via.placeholder.com/200?text=Spoons" },
            { id: 389, name: "Chammach", price: 20, category: "all", image: "https://via.placeholder.com/200?text=Paper+Plates" },
            { id: 390, name: "Papsi Cups", price: 30, category: "all", image: "https://via.placeholder.com/200?text=Plastic+Cups" },
            { id: 391, name: "item", price: 0, category: "all", image: "https://via.placeholder.com/200?text=Spoons" },
            { id: 392, name: "item", price: 0, category: "all", image: "https://via.placeholder.com/200?text=Paper+Plates" },
            { id: 393, name: "item", price: 0, category: "all", image: "https://via.placeholder.com/200?text=Plastic+Cups" },
            { id: 394, name: "item", price: 0, category: "all", image: "https://via.placeholder.com/200?text=Spoons" },
            { id: 395, name: "item", price: 0, category: "all", image: "https://via.placeholder.com/200?text=Paper+Plates" },
            { id: 396, name: "item", price: 0, category: "all", image: "https://via.placeholder.com/200?text=Plastic+Cups" },
            { id: 397, name: "item", price: 0, category: "all", image: "https://via.placeholder.com/200?text=Spoons" },
            { id: 398, name: "item", price: 0, category: "all", image: "https://via.placeholder.com/200?text=Paper+Plates" },
            { id: 399, name: "item", price: 0, category: "all", image: "https://via.placeholder.com/200?text=Plastic+Cups" },
            { id: 400, name: "item", price: 0, category: "all", image: "https://via.placeholder.com/200?text=Spoons" },
            // Masale
            { id: 401, name: "Tej Patta (50gm)", price: 30, category: "all", image: "https://spiceswala.com/wp-content/uploads/2021/09/bayleaf.jpg" },
            { id: 402, name: "Hing", price: 30, category: "all", image: "https://shivomhing.com/wp-content/uploads/2022/05/5baa48d7-60a9-4faa-9898-b5e92f47c31c.jpg" },
            { id: 403, name: "Hing", price: 15, category: "all", image: "https://shivomhing.com/wp-content/uploads/2022/05/5baa48d7-60a9-4faa-9898-b5e92f47c31c.jpg" },
            { id: 404, name: "Hari Ilaychi", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2020/8/MU/TL/IV/94910140/green-cardamom-250x250.jpg" },
            { id: 405, name: "Mirch Power", price: 10, category: "all", image: "https://www.bigbasket.com/media/uploads/p/l/40320739_1-goldiee-goldiee-red-chilli-powder-10g-10-pouch.jpg" },
            { id: 406, name: "Dhaniya Power", price: 10, category: "all", image: "https://purvanchalmart.com/wp-content/uploads/2024/11/Dhania_Powder_200g_Front_305x_4dbd5900-4223-434f-be74-abb4598a2597.jpg" },
            { id: 407, name: "Kaali Mirch", price: 5, category: "all", image: "https://5.imimg.com/data5/ANDROID/Default/2022/1/ST/ZS/MT/92620243/product-jpeg-500x500.jpg" },
            { id: 408, name: "Haldi Powder", price: 10, category: "all", image: "https://images-eu.ssl-images-amazon.com/images/I/51+M2zEF9oL._AC_UL210_SR210,210_.jpg" },
            { id: 409, name: "Salt (500gm)", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2022/12/VA/RT/DB/74075141/taza-refined-iodized-salt.jpg" },
            { id: 410, name: "Salt (1Kg)", price: 15, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2024/6/430398382/QO/RF/YH/100086719/mahaveer-taza-salt-500x500.jpeg" },
            { id: 411, name: "Tata Salt", price: 30, category: "all", image: "https://m.media-amazon.com/images/I/61tKlw6caqL._AC_UF894,1000_QL80_.jpg" },
            { id: 412, name: "Gola (1Kg)", price: 300, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2023/12/370720279/YD/IK/LQ/141732338/khopra-gola-500x500.jpg" },
            { id: 413, name: "Sukhe Dhaniya", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2024/2/392266326/UD/AT/GM/45273170/sukhi-dhaniya-500x500.jpg" },
            { id: 414, name: "Sukhi Mirch (1Kg)", price: 250, category: "all", image: "https://m.media-amazon.com/images/I/81F7X1BJMzL._AC_UF1000,1000_QL80_.jpg" },
            { id: 415, name: "Garam Masala", price: 10, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2021/7/BR/BI/NO/127881804/new-product-500x500.jpeg" },
            { id: 416, name: "Fatkari", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/612djy44AVL.jpg" },
            { id: 417, name: "Soda", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2023/6/320847172/MN/FN/JF/153421857/white-baking-soda-powder.jpg" },
            { id: 418, name: "Azwain", price: 5, category: "all", image: "https://5.imimg.com/data5/NP/OX/YE/SELLER-9408619/bold-ajwain-seeds.jpg" },
            { id: 419, name: "Garam Masala Goldiee", price: 10, category: "all", image: "https://5.imimg.com/data5/ANDROID/Default/2021/11/PT/RA/QG/37428346/images-jpeg.jpeg" },
            { id: 420, name: "Chat Masala Goldiee", price: 10, category: "all", image: "https://goldiee.com/wp-content/uploads/2019/06/CHAT-MASALA-F.jpg" },
            { id: 421, name: "Sabji Masala Goldiee", price: 10, category: "all", image: "https://www.baskethunt.com/wp-content/uploads/2021/02/71f7MkcdCPL._SX425_.jpg" },
            { id: 422, name: "Chhole Masala Goldiee", price: 10, category: "all", image: "https://goldiee.com/wp-content/uploads/2019/06/chhole-masale-FIN.jpg" },
            { id: 423, name: "Paneer Masala Goldiee", price: 10, category: "all", image: "https://goldiee.com/wp-content/uploads/2019/06/shahi-paneer-masala-fin.jpg" },
            { id: 424, name: "Meat Masala Goldiee", price: 10, category: "all", image: "https://goldiee.com/wp-content/uploads/2019/06/meat-mutton-masala-fin.jpg" },
            { id: 425, name: "Chaap Masala Goldiee", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/51dmI-jzJLS.jpg" },
            { id: 426, name: "item", price: 0, category: "all", image: "https://via.placeholder.com/200?text=Garam+Masala" },
            { id: 433, name: "Pond's", price: 10, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2021/10/HS/KN/WR/72620024/ponds-fairness-cream.jpg" },
            { id: 434, name: "Fair & Lovely", price: 10, category: "all", image: "https://www.bigbasket.com/media/uploads/p/xl/40019072_3-fair-lovely-advanced-multi-vitamin-face-cream.jpg" },
            { id: 435, name: "Scotch Brite", price: 10, category: "all", image: "https://cdn.grofers.com/app/images/products/sliding_image/520325a.jpg" },
            { id: 436, name: "Relax", price: 10, category: "all", image: "https://dbigmart.com/wp-content/uploads/2022/11/61Ra3bUBkpL._SL1079_.jpg" },
            { id: 437, name: "Anda", price: 6, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2021/2/KJ/OS/YG/123989097/white-country-egg-500x500.jpg" },
            { id: 438, name: "Orel-B", price: 20, category: "all", image: "https://images.apollo247.in/pub/media/catalog/product/O/R/ORA0084_1_1.jpg" },
            { id: 439, name: "Toothbrush", price: 10, category: "all", image: "https://i.ebayimg.com/images/g/r7QAAOSweIlmhjPm/s-l400.jpg" },
            { id: 440, name: "Toothbrush Baby", price: 10, category: "all", image: "https://www.bbassets.com/media/uploads/p/xxl/100183508_2-oral-b-toothbrush-for-kids-cleans-gently-soft.jpg" },
            { id: 441, name: "Blades", price: 3, category: "all", image: "https://m.media-amazon.com/images/I/51A-ZMJ4QtS.jpg" },
            { id: 442, name: "Mombatti Packet", price: 10, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2020/11/XX/WX/FT/23643731/paraffin-wax-candle-500x500.jpg" },
            { id: 443, name: "Kaveri", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/81eUAqYYMNL.jpg" },
            { id: 444, name: "Meenakshi", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2024/2/393460423/IK/NH/MD/211117702/meenakshi-mehandi-cone-500x500.jpg" },
            { id: 445, name: "Soya Been", price: 10, category: "all", image: "https://storage.googleapis.com/shy-pub/285171/1689268254365_SKU-0813_0.png" },
            { id: 446, name: "Reel", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/413XGwHbYaL._AC_UF350,350_QL80_.jpg" },
            { id: 447, name: "Dhaaga", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2021/10/SP/KE/RH/66168648/dyed-black-cotton-thread-500x500.jpg" },
            { id: 448, name: "Badam Cookies", price: 60, category: "all", image: "https://images.meesho.com/images/products/61439687/xykvv_512.jpg" },
            { id: 449, name: "Mixture (200gm)", price: 60, category: "all", image: "https://m.media-amazon.com/images/I/81cfA+uFlWL._AC_UF1000,1000_QL80_.jpg" },
            { id: 450, name: "Chart Paper", price: 7, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2022/8/BU/CU/DA/141339582/chart-papar.png" },
            { id: 451, name: "Abri Paper", price: 3, category: "all", image: "https://5.imimg.com/data5/ANDROID/Default/2023/6/314846042/ZO/KH/CI/71946225/product-jpeg.jpg" },
            { id: 452, name: "Jut", price: 10, category: "all", image: "https://via.placeholder.com/200?text=Garam+Masala" },
            { id: 453, name: "Jut", price: 10, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2023/6/320847172/MN/FN/JF/153421857/white-baking-soda-powder.jpg" },
            { id: 454, name: "Melody", price: 1, category: "all", image: "https://5.imimg.com/data5/XD/VT/MY-4620137/melody-chocolate-500x500.png" },
            { id: 455, name: "Pulse", price: 1, category: "all", image: "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/afaqs/media/post_attachments/e02caadc95571d430d2e66ea3cea52197008d70a7382b2eac93bfe9f95dd6f3c.jpg" },
            { id: 456, name: "Vicks", price: 1, category: "all", image: "https://www.bbassets.com/media/uploads/p/l/275438_2-vicks-cough-drops-provides-instant-relief-from-throat-irritation.jpg" },
            { id: 457, name: "Boomer", price: 1, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2023/11/362896441/EM/AB/MY/18849970/boomer-chewing-gum-500x500.jpg" },
            { id: 458, name: "Chini (1Kg)", price: 48, category: "all", image: "https://5.imimg.com/data5/ECOM/Default/2023/8/333876845/LQ/TG/XW/121236174/1690607583786-sugar-500x500.jpeg" },
            { id: 459, name: "Musa ka Gul", price: 20, category: "all", image: "https://5.imimg.com/data5/IOS/Default/2024/2/388124515/CI/ZP/AY/55166659/product-jpeg-250x250.png" },
            { id: 460, name: "Bread", price: 10, category: "all", image: "https://m.media-amazon.com/images/I/81RMHNcli0L.jpg" },
            { id: 461, name: "Bread", price: 20, category: "all", image: "https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-02-07/MOther_Dairy_Sandwich_Bread_otsbdEA.jpg" },
            { id: 462, name: "Fan", price: 20, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2020/8/MV/PB/UJ/55009893/ruby-gold-bakery-fan.jpg" },
            { id: 463, name: "Pape", price: 10, category: "all", image: "https://tiimg.tistatic.com/fp/7/007/843/milk-elaichi-rusk-797.jpg" },
            { id: 464, name: "Poko Pants", price: 10, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2023/10/351513923/YX/DG/AR/106890631/mamypoko-pants-14-500x500.jpg" },
            { id: 465, name: "Poko Pants", price: 12, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2024/10/455892334/EM/PP/WT/227373350/m1-mamy-poko-pants-standard.jpeg" },
            { id: 466, name: "Jaljeera", price: 1, category: "all", image: "https://img3.exportersindia.com/product_images/bc-full/2022/1/188057/chirania-jaljira-churan-1641554315-4048210.jpeg" },
            { id: 467, name: "Pachwala", price: 1, category: "all", image: "https://www.baskethunt.com/wp-content/uploads/2021/02/71f7MkcdCPL._SX425_.jpg" },
            { id: 468, name: "Hajmola", price: 1, category: "all", image: "https://images-cdn.ubuy.com.om/642e68bb149a3a4535789ea3-dabur-hajmola-pudina-mint-ayurvedic.jpg" },
            { id: 469, name: "Boro Plus", price: 5, category: "all", image: "https://5.imimg.com/data5/SELLER/Default/2024/10/455331243/TT/RY/JP/2517988/boro-plus-cream-pouch-mrp-5-00.jpg" },
            { id: 470, name: "Chai Patti", price: 1, category: "all", image: "https://m.media-amazon.com/images/I/51LU6Yio6RL.jpg" },
            { id: 471, name: "Chai Patti", price: 5, category: "all", image: "https://m.media-amazon.com/images/I/51LU6Yio6RL.jpg" },
            { id: 472, name: "Chai Patti", price: 10, category: "all", image: "https://ruralbaba.com/product_images/1656523262-8656-Elaichi%2010%20Rs%20pack%20front.jpg" },
            { id: 473, name: "Chai Patti", price: 20, category: "all", image: "https://images.meesho.com/images/products/110989677/gakrb_512.webp" },
            { id: 474, name: "item", price: 10, category: "all", image: "https://5.imimg.com/data5/NP/OX/YE/SELLER-9408619/bold-ajwain-seeds.jpg" },
            { id: 475, name: "item", price: 10, category: "all", image: "https://5.imimg.com/data5/ANDROID/Default/2021/11/PT/RA/QG/37428346/images-jpeg.jpeg" },
            { id: 476, name: "item", price: 10, category: "all", image: "https://goldiee.com/wp-content/uploads/2019/06/CHAT-MASALA-F.jpg" },
            { id: 477, name: "item", price: 5, category: "all", image: "https://www.baskethunt.com/wp-content/uploads/2021/02/71f7MkcdCPL._SX425_.jpg" },
            { id: 478, name: "item", price: 20, category: "all", image: "https://goldiee.com/wp-content/uploads/2019/06/chhole-masale-FIN.jpg" },
            { id: 479, name: "item", price: 10, category: "all", image: "https://goldiee.com/wp-content/uploads/2019/06/shahi-paneer-masala-fin.jpg" },
            { id: 480, name: "item", price: 10, category: "all", image: "https://goldiee.com/wp-content/uploads/2019/06/meat-mutton-masala-fin.jpg" },
            { id: 481, name: "item", price: 3, category: "all", image: "https://m.media-amazon.com/images/I/51dmI-jzJLS.jpg" },
            { id: 482, name: "item", price: 10, category: "all", image: "https://via.placeholder.com/200?text=Garam+Masala" },
           
           
            //today offer
            { id: 427, name: "Sting (250ml)", price: 60, category: "Today Offer", image: "buy3.png" },
            { id: 428, name: "Maaza (125ml)", price: 10, category: "Today Offer", image: "https://www.bigbasket.com/media/uploads/p/l/265725_18-maaza-juice-mango-refresh.jpg" },
            { id: 429, name: "Litchi Drink (250ml)", price: 50, category: "Today Offer", image: "offer.jpg" },
            { id: 430, name: "item", price: 0, category: "Today Offer", image: "https://via.placeholder.com/200?text=Pen" },
        ];

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // DOM Elements
        const productGrid = document.getElementById('productGrid');
        const cartModal = document.getElementById('cartModal');
        const checkoutModal = document.getElementById('checkoutModal');
        const confirmationModal = document.getElementById('confirmationModal');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const cartCount = document.getElementById('cartCount');
        const searchBar = document.getElementById('searchBar');
        const sidebar = document.getElementById('sidebar');
        const loadingSpinner = document.getElementById('loadingSpinner');
        const categoryList = document.getElementById('categoryList');

        // Save cart to local storage
        function saveCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        // Render Products
        function renderProducts(productList) {
            productGrid.innerHTML = '';
            productList.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'bg-white p-4 rounded-xl shadow-lg product-card fade-in';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-contain rounded-lg mb-4">
                    <h3 class="text-lg font-semibold text-gray-800">${product.name}</h3>
                    <p class="text-gray-600 capitalize">Category: ${product.category.replace(/-/g, ' ')}</p>
                    <p class="text-xl font-bold text-green-600 mt-2">₹${product.price}</p>
                    <div class="flex items-center mt-4 space-x-2">
                        <button onclick="updateQuantity(${product.id}, -1)" class="bg-gray-300 text-gray-800 px-3 py-1 rounded">-</button>
                        <input id="quantity-${product.id}" type="number" value="1" min="1" class="w-16 p-1 border rounded text-center" onchange="setQuantity(${product.id}, this.value)">
                        <button onclick="updateQuantity(${product.id}, 1)" class="bg-gray-300 text-gray-800 px-3 py-1 rounded">+</button>
                    </div>
                    <button onclick="addToCart(${product.id})" class="w-full bg-green-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-700">Add to Cart</button>
                `;
                productGrid.appendChild(productCard);
            });
        }

        // Update Quantity
        function updateQuantity(productId, change) {
            const input = document.getElementById(`quantity-${productId}`);
            let value = parseInt(input.value) + change;
            if (value < 1) value = 1;
            input.value = value;
        }

        function setQuantity(productId, value) {
            const input = document.getElementById(`quantity-${productId}`);
            let qty = parseInt(value);
            if (qty < 1 || isNaN(qty)) qty = 1;
            input.value = qty;
        }

        // Add to Cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const quantity = parseInt(document.getElementById(`quantity-${productId}`).value);
            const cartItem = cart.find(item => item.id === productId);

            if (cartItem) {
                cartItem.quantity += quantity;
            } else {
                cart.push({ ...product, quantity });
            }
            saveCart();
            updateCart();
        }

        // Remove from Cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            saveCart();
            updateCart();
        }

        // Update Cart UI
        function updateCart() {
            cartItems.innerHTML = '';
            let total = 0;
            cart.forEach(item => {
                total += item.price * item.quantity;
                const cartItem = document.createElement('div');
                cartItem.className = 'flex justify-between items-center p-3 bg-gray-50 rounded-lg cart-item';
                cartItem.innerHTML = `
                    <div>
                        <span class="font-medium">${item.name}</span>
                        <span class="text-gray-600"> (x${item.quantity})</span>
                    </div>
                    <div class="flex items-center space-x-4">
                        <span>₹${item.price * item.quantity}</span>
                        <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">Remove</button>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
            cartTotal.textContent = total.toFixed(2);
            cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        }

        // Toggle Modals
        function toggleModal(modal, show) {
            modal.classList.toggle('hidden', !show);
            if (show) modal.classList.add('fade-in');
        }

        document.getElementById('cartToggle').addEventListener('click', () => toggleModal(cartModal, true));
        document.getElementById('closeCart').addEventListener('click', () => toggleModal(cartModal, false));
        document.getElementById('proceedToCheckout').addEventListener('click', () => {
            toggleModal(cartModal, false);
            toggleModal(checkoutModal, true);
        });
        document.getElementById('closeCheckout').addEventListener('click', () => toggleModal(checkoutModal, false));
        document.getElementById('closeConfirmation').addEventListener('click', () => {
            toggleModal(confirmationModal, false);
            window.location.reload();
        });

      // --- ADD FORMPSPREE HANDLER BELOW THIS LINE ---
  document.getElementById('submitOrder').addEventListener('click', async () => {
      const name    = document.getElementById('customerName').value.trim();
      const email   = document.getElementById('customerEmail').value.trim();
      const phone   = document.getElementById('customerPhone').value.trim();
      const address = document.getElementById('customerAddress').value.trim();

      if (!name || !email || !phone || !address || cart.length === 0) {
          alert('Please fill all fields and add items to cart.');
          return;
      }

      loadingSpinner.classList.remove('hidden');

      const payload = {
          name,
          email,
          phone,
          address,
          items: cart.map(item => `${item.name} x${item.quantity} (₹${item.price * item.quantity})`).join(", "),
          total: (cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 10).toFixed(2),
          date: new Date().toLocaleString()
      };

      try {
          const response = await fetch('https://formspree.io/f/xyzwzqyv', {
              method: 'POST', headers: {
                  'Content-Type': 'application/json', 'Accept': 'application/json'
              }, body: JSON.stringify(payload)
          });

          if (response.ok) {
              toggleModal(checkoutModal, false);
              toggleModal(confirmationModal, true);
              cart = []; saveCart(); updateCart();
              ['customerName','customerEmail','customerPhone','customerAddress'].forEach(id => document.getElementById(id).value = '');
          } else {
              const err = await response.json(); console.error('Formspree error:', err);
              alert('Failed to send order: ' + (err.error || response.statusText));
          }
      } catch (e) {
          console.error('Fetch error:', e);
          alert('Network error. Please try again later.');
      } finally { loadingSpinner.classList.add('hidden'); }
  });

        // Search and Filter
        function filterProducts(category = 'all', query = '') {
            const filteredProducts = products.filter(product => {
                const matchesSearch = product.name.toLowerCase().includes(query.toLowerCase());
                const matchesCategory = category === 'all' || product.category === category;
                return matchesSearch && matchesCategory;
            });
            renderProducts(filteredProducts);
        }

        searchBar.addEventListener('input', (e) => {
            const activeCategory = document.querySelector('.category-item.active')?.dataset.category || 'all';
            filterProducts(activeCategory, e.target.value);
        });

        // Category Filter
        categoryList.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.closest('.category-item');
            if (target) {
                document.querySelectorAll('.category-item').forEach(item => item.classList.remove('active'));
                target.classList.add('active');
                const category = target.dataset.category;
                filterProducts(category, searchBar.value);
                if (window.innerWidth < 1024) {
                    sidebar.classList.add('sidebar-hidden');
                }
            }
        });

        // Toggle Sidebar
        document.getElementById('menuToggle').addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-hidden');
        });

        // Close Sidebar on Outside Click (Mobile)
        document.addEventListener('click', (e) => {
            if (window.innerWidth < 1024 && !sidebar.contains(e.target) && !document.getElementById('menuToggle').contains(e.target)) {
                sidebar.classList.add('sidebar-hidden');
            }
        });

        // Initialize
        renderProducts(products);
        updateCart();
        document.querySelector('.category-item[data-category="all"]').classList.add('active');
