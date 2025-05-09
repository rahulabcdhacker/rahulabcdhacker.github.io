   // Product data with categories
        const products = [
            // Cold Drink
            { id: 1, name: "Coca Cola (250ml)", price: 20, category: "cold-drink", image: "coca .jpg" },
            { id: 2, name: "Maaza (125ml)", price: 10, category: "cold-drink", image: "https://via.placeholder.com/200?text=Pepsi" },
            { id: 3, name: "Litchi Drink (250ml)", price: 10, category: "cold-drink", image: "https://via.placeholder.com/200?text=Sprite" },
            { id: 4, name: "Campa Orange (250ml)", price: 10, category: "cold-drink", image: "coca .jpg" },
            { id: 5, name: "Campa Green (250ml)", price: 10, category: "cold-drink", image: "coca .jpg" },
            { id: 6, name: "Campa Black (250ml) ", price: 10, category: "cold-drink", image: "https://via.placeholder.com/200?text=Pepsi" },
            { id: 7, name: "Campa White (250ml) ", price: 10, category: "cold-drink", image: "https://via.placeholder.com/200?text=Sprite" },
            { id: 8, name: "Feez (125ml) ", price: 10, category: "cold-drink", image: "coca .jpg" },
            { id: 9, name: "Feez (250ml)", price: 20, category: "cold-drink", image: "fizz20.jpg" },
            { id: 10, name: "Sprite (250ml)", price: 20, category: "cold-drink", image: "https://via.placeholder.com/200?text=Pepsi" },
            { id: 11, name: "ThumsUp(250ml)", price: 20, category: "cold-drink", image: "https://via.placeholder.com/200?text=Sprite" },
            { id: 12, name: "Fanta (250ml)", price: 20, category: "cold-drink", image: "coca .jpg" },
            { id: 13, name: "Mazaa (250ml)", price: 20, category: "cold-drink", image: "coca .jpg" },
            { id: 14, name: "String (250ml)", price: 20, category: "cold-drink", image: "Sting.jpg" },
            { id: 15, name: "Lahori jeera (250ml)", price: 10, category: "cold-drink", image: "https://via.placeholder.com/200?text=Sprite" },
            { id: 16, name: "hajam jeera (250ml)", price: 20, category: "cold-drink", image: "hzeera.jpg" },
            { id: 17, name: "Sprite Can (180ml)", price: 25, category: "cold-drink", image: "scan.jpg" },
            { id: 18, name: "Thums up Can (180ml)", price: 25, category: "cold-drink", image: "tcan.jpg" },
            { id: 19, name: "Limca Can (180ml)", price: 25, category: "cold-drink", image: "coca .jpg" },
            { id: 20, name: "Fanta Can (180ml)", price: 25, category: "cold-drink", image: "coca .jpg" },
            { id: 21, name: "Hell Can (250ml)", price: 60, category: "cold-drink", image: "https://via.placeholder.com/200?text=Pepsi" },
            { id: 22, name: "Red Bull (350ml)", price: 125, category: "cold-drink", image: "https://via.placeholder.com/200?text=Sprite" },
            { id: 23, name: "Mazaa (600ml)", price: 60, category: "cold-drink", image: "coca .jpg" },
            { id: 24, name: "Thums up (750ml)", price: 40, category: "cold-drink", image: "t750.jpg" },
            { id: 25, name: "Fanta (750ml)", price: 40, category: "cold-drink", image: "f750.jpg" },
            { id: 26, name: "Sprite (750ml)", price: 40, category: "cold-drink", image: "s750.jpg" },
            { id: 27, name: "Thums up (1L)", price: 50, category: "cold-drink", image: "coca .jpg" },
            { id: 28, name: "Fanta (1L)", price: 50, category: "cold-drink", image: "coca .jpg" },
            { id: 29, name: "Sprite (1L)", price: 50, category: "cold-drink", image: "https://via.placeholder.com/200?text=Pepsi" },
            { id: 30, name: "Mazaa (1L)", price: 60, category: "cold-drink", image: "https://via.placeholder.com/200?text=Sprite" },
            { id: 31, name: "Sprite (2L)", price: 100, category: "cold-drink", image: "s2l.jpg" },
            { id: 32, name: "Fanta (2L)", price: 100, category: "cold-drink", image: "coca .jpg" },
            { id: 33, name: "Thums up (2L) ", price: 100, category: "cold-drink", image: "t2l" },
            { id: 34, name: "Mazaa (2L)", price: 100, category: "cold-drink", image: "https://via.placeholder.com/200?text=Sprite" },
            { id: 35, name: "Frooti (2L)", price: 100, category: "cold-drink", image: "coca .jpg" },
            { id: 36, name: "Amul Lassi (200ml)", price: 20, category: "cold-drink", image: "lassi.jpg" },
            { id: 37, name: "Tropicana (180ml)", price: 20, category: "cold-drink", image: "https://via.placeholder.com/200?text=Sprite" },
            { id: 38, name: "Groovy (125ml)", price: 100, category: "cold-drink", image: "paper.jpg" },
            { id: 39, name: "Bisleri (1L)", price: 20, category: "cold-drink", image: "bisleri20.jpg" },
            { id: 40, name: "Bisleri (500ml)", price: 10, category: "cold-drink", image: "bisleri10.jpg" },
            { id: 41, name: "Kinley (1L)", price: 20, category: "cold-drink", image: "coca .jpg" },
            { id: 41, name: "Amul Butter milk (200ml)", price: 20, category: "cold-drink", image: "amul.jpg" },
            // Candy
            // Candy
            { id: 4, name: "Dairy Milk", price: 20, category: "candy", image: "https://via.placeholder.com/200?text=Dairy+Milk" },
            { id: 5, name: "KitKat", price: 15, category: "candy", image: "https://via.placeholder.com/200?text=KitKat" },
            { id: 6, name: "Gems", price: 10, category: "candy", image: "https://via.placeholder.com/200?text=Gems" },
            { id: 4, name: "Dairy Milk", price: 20, category: "candy", image: "https://via.placeholder.com/200?text=Dairy+Milk" },
            { id: 5, name: "KitKat", price: 15, category: "candy", image: "https://via.placeholder.com/200?text=KitKat" },
            { id: 6, name: "Gems", price: 10, category: "candy", image: "https://via.placeholder.com/200?text=Gems" },
            { id: 4, name: "Dairy Milk", price: 20, category: "candy", image: "https://via.placeholder.com/200?text=Dairy+Milk" },
            { id: 5, name: "KitKat", price: 15, category: "candy", image: "https://via.placeholder.com/200?text=KitKat" },
            { id: 6, name: "Gems", price: 10, category: "candy", image: "https://via.placeholder.com/200?text=Gems" },
            { id: 4, name: "Dairy Milk", price: 20, category: "candy", image: "https://via.placeholder.com/200?text=Dairy+Milk" },
            { id: 5, name: "KitKat", price: 15, category: "candy", image: "https://via.placeholder.com/200?text=KitKat" },
            { id: 6, name: "Gems", price: 10, category: "candy", image: "https://via.placeholder.com/200?text=Gems" },
            // Shop & Shampoo
            { id: 1, name: "Dove Shampoo", price: 2, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Dove+Shampoo" },
            { id: 2, name: "Clinic Plus", price: 1, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Clinic+Plus" },
            { id: 3, name: "Lifebuoy Soap", price: 10, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Lifebuoy+Soap" },
            { id: 4, name: "Dove Conditioner", price: 4, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Dove+Shampoo" },
            { id: 5, name: "Hean & Shoulders", price: 2, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Clinic+Plus" },
            { id: 6, name: "Sunsilk", price: 1, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Lifebuoy+Soap" },
            { id: 7, name: "Kesh Kanti ", price: 1, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Dove+Shampoo" },
            { id: 8, name: "Vatika", price: 1, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Clinic+Plus" },
            { id: 9, name: "Chik", price: 1, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Lifebuoy+Soap" },
            { id: 10, name: "Coconut Oil", price: 1, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Dove+Shampoo" },
            { id: 11, name: "Dabur Amla Oil", price: 1, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Clinic+Plus" },
            { id: 12, name: "Bajaj Almond", price: 1, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Lifebuoy+Soap" },
            { id: 13, name: "Navratan Oil", price: 1, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Dove+Shampoo" },
            { id: 14, name: "Himgange Oil", price: 1, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Clinic+Plus" },
            { id: 15, name: "Nisha Red Hair Colour", price: 10, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Lifebuoy+Soap" },
            { id: 16, name: "Nisha Black Hair Colour ", price: 10, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Dove+Shampoo" },
            { id: 17, name: "Nisha Red Hair Colour ", price: 15, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Clinic+Plus" },
            { id: 18, name: "Prem Dulhan", price: 10, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Dove+Shampoo" },
            { id: 19, name: "Godrej Rich Creme", price: 15, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Clinic+Plus" },
            { id: 20, name: "Garnier Black Colour", price: 45, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Lifebuoy+Soap" },
            { id: 21, name: "Streax Insta Black", price: 20, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Dove+Shampoo" },
            { id: 22, name: "Lux", price: 10, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Clinic+Plus" },
            { id: 23, name: "Dettol ", price: 10, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Clinic+Plus" },
            { id: 24, name: "Godrej No.1", price: 10, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Dove+Shampoo" },
            { id: 25, name: "Vidisha ", price: 10, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Clinic+Plus" },
            { id: 26, name: "Vidisha", price: 5, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Lifebuoy+Soap" },
            { id: 27, name: "Rin", price: 10, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Dove+Shampoo" },
            { id: 28, name: "Vim", price: 10, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Clinic+Plus" },
            { id: 29, name: "Ghadi ", price: 10, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Clinic+Plus" },
            { id: 30, name: "Ghadi", price: 5, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Dove+Shampoo" },
            { id: 31, name: "Arisel", price: 10, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Clinic+Plus" },
            { id: 32, name: "Surf Excel", price: 10, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Lifebuoy+Soap" },
            { id: 33, name: "Vidisha Powder", price: 10, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Dove+Shampoo" },
            { id: 34, name: "Vidisha Powder (1Kg)", price: 65, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Clinic+Plus" },
            { id: 35, name: "Vidisha Powder (50pgm) ", price: 35, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Clinic+Plus" },
            { id: 36, name: "Surf Excel (500gm)", price: 68, category: "shop-shampoo", image: "https://via.placeholder.com/200?text=Dove+Shampoo" },
            // Namkeen
            { id: 10, name: "Haldiram Bhujia", price: 10, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Bikano Mixture", price: 10, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Uncle Chipps", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Haldiram Moong Dal", price: 10, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Mixture", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Chakhna", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Haldiram Navrattan", price: 10, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Gathiya", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Sab Kuch", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Indori Sev", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Nut Cracker", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Salted Peanuts", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Haldiram Punjabi Tadka", price: 10, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Aloo Bhujia", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Panjabi Tadka", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Corn Flakes", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Moong Dal", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Shahi Masoor", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Chow Chow", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Chow Chow", price: 2, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Boom Boom Kurkure", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Boom Boom Kurkure", price: 2, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Boondi", price: 10, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Pudina Boondi", price: 10, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Loot Maar", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Katoti", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Crax", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Popcorn", price: 10, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Popcorn", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Kurkure", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 12, name: "Curls", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Tedhe Madhe", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "PuffCorn", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Lays", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Jeera Krunch", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Tiger Krunch", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Happy Happy", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Black Magic", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Butter Delite", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Twins", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "2in1", price: 10, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Parle-G", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Butter Cookies", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 12, name: "Moms Magic", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Moms Magic", price: 10, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Coconut", price: 10, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Good Day", price: 10, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Sachit Rus", price: 20, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Boondi", price: 10, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Pudina Boondi", price: 10, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Loot Maar", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Katoti", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Crax", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            { id: 10, name: "Popcorn", price: 10, category: "namkeen", image: "https://via.placeholder.com/200?text=Haldiram+Bhujia" },
            { id: 11, name: "Popcorn", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Bikano+Mixture" },
            { id: 12, name: "Kurkure", price: 5, category: "namkeen", image: "https://via.placeholder.com/200?text=Chips" },
            // Pooja Items
            { id: 13, name: "Agarbatti", price: 30, category: "pooja-items", image: "https://via.placeholder.com/200?text=Agarbatti" },
            { id: 14, name: "Diya", price: 10, category: "pooja-items", image: "https://via.placeholder.com/200?text=Diya" },
            { id: 15, name: "Camphor", price: 20, category: "pooja-items", image: "https://via.placeholder.com/200?text=Camphor" },
            { id: 13, name: "Agarbatti", price: 30, category: "pooja-items", image: "https://via.placeholder.com/200?text=Agarbatti" },
            { id: 14, name: "Diya", price: 10, category: "pooja-items", image: "https://via.placeholder.com/200?text=Diya" },
            { id: 15, name: "Camphor", price: 20, category: "pooja-items", image: "https://via.placeholder.com/200?text=Camphor" },
            { id: 13, name: "Agarbatti", price: 30, category: "pooja-items", image: "https://via.placeholder.com/200?text=Agarbatti" },
            { id: 14, name: "Diya", price: 10, category: "pooja-items", image: "https://via.placeholder.com/200?text=Diya" },
            { id: 15, name: "Camphor", price: 20, category: "pooja-items", image: "https://via.placeholder.com/200?text=Camphor" },
            { id: 13, name: "Agarbatti", price: 30, category: "pooja-items", image: "https://via.placeholder.com/200?text=Agarbatti" },
            { id: 14, name: "Diya", price: 10, category: "pooja-items", image: "https://via.placeholder.com/200?text=Diya" },
            { id: 15, name: "Camphor", price: 20, category: "pooja-items", image: "https://via.placeholder.com/200?text=Camphor" },
            // Electronic Items
            { id: 16, name: "Battery AA", price: 15, category: "electronic-items", image: "https://via.placeholder.com/200?text=Battery+AA" },
            { id: 17, name: "Bulb", price: 50, category: "electronic-items", image: "https://via.placeholder.com/200?text=Bulb" },
            { id: 18, name: "Extension Cord", price: 150, category: "electronic-items", image: "https://via.placeholder.com/200?text=Extension+Cord" },
            { id: 16, name: "Battery AA", price: 15, category: "electronic-items", image: "https://via.placeholder.com/200?text=Battery+AA" },
            { id: 17, name: "Bulb", price: 50, category: "electronic-items", image: "https://via.placeholder.com/200?text=Bulb" },
            { id: 18, name: "Extension Cord", price: 150, category: "electronic-items", image: "https://via.placeholder.com/200?text=Extension+Cord" },
            { id: 16, name: "Battery AA", price: 15, category: "electronic-items", image: "https://via.placeholder.com/200?text=Battery+AA" },
            { id: 17, name: "Bulb", price: 50, category: "electronic-items", image: "https://via.placeholder.com/200?text=Bulb" },
            { id: 18, name: "Extension Cord", price: 150, category: "electronic-items", image: "https://via.placeholder.com/200?text=Extension+Cord" },
            { id: 16, name: "Battery AA", price: 15, category: "electronic-items", image: "https://via.placeholder.com/200?text=Battery+AA" },
            { id: 17, name: "Bulb", price: 50, category: "electronic-items", image: "https://via.placeholder.com/200?text=Bulb" },
            { id: 18, name: "Extension Cord", price: 150, category: "electronic-items", image: "https://via.placeholder.com/200?text=Extension+Cord" },
            { id: 16, name: "Battery AA", price: 15, category: "electronic-items", image: "https://via.placeholder.com/200?text=Battery+AA" },
            { id: 17, name: "Bulb", price: 50, category: "electronic-items", image: "https://via.placeholder.com/200?text=Bulb" },
            { id: 18, name: "Extension Cord", price: 150, category: "electronic-items", image: "https://via.placeholder.com/200?text=Extension+Cord" },
        
            // Stationery Item
            { id: 19, name: "Pen", price: 10, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pen" },
            { id: 20, name: "Notebook", price: 40, category: "stationery-item", image: "https://via.placeholder.com/200?text=Notebook" },
            { id: 21, name: "Pencil", price: 5, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pencil" },
            { id: 19, name: "Pen", price: 10, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pen" },
            { id: 20, name: "Notebook", price: 40, category: "stationery-item", image: "https://via.placeholder.com/200?text=Notebook" },
            { id: 21, name: "Pencil", price: 5, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pencil" },
            { id: 19, name: "Pen", price: 10, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pen" },
            { id: 20, name: "Notebook", price: 40, category: "stationery-item", image: "https://via.placeholder.com/200?text=Notebook" },
            { id: 21, name: "Pencil", price: 5, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pencil" },
            { id: 19, name: "Pen", price: 10, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pen" },
            { id: 20, name: "Notebook", price: 40, category: "stationery-item", image: "https://via.placeholder.com/200?text=Notebook" },
            { id: 21, name: "Pencil", price: 5, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pencil" },
            { id: 19, name: "Pen", price: 10, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pen" },
            { id: 20, name: "Notebook", price: 40, category: "stationery-item", image: "https://via.placeholder.com/200?text=Notebook" },
            { id: 21, name: "Pencil", price: 5, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pencil" },
            { id: 19, name: "Pen", price: 10, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pen" },
            { id: 20, name: "Notebook", price: 40, category: "stationery-item", image: "https://via.placeholder.com/200?text=Notebook" },
            { id: 21, name: "Pencil", price: 5, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pencil" },
            { id: 19, name: "Pen", price: 10, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pen" },
            { id: 20, name: "Notebook", price: 40, category: "stationery-item", image: "https://via.placeholder.com/200?text=Notebook" },
            { id: 21, name: "Pencil", price: 5, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pencil" },
            { id: 19, name: "Pen", price: 10, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pen" },
            { id: 20, name: "Notebook", price: 40, category: "stationery-item", image: "https://via.placeholder.com/200?text=Notebook" },
            { id: 21, name: "Pencil", price: 5, category: "stationery-item", image: "https://via.placeholder.com/200?text=Pencil" },
            // Pan Masala
            { id: 22, name: "Rajni Gandha", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Rajni+Gandha" },
            { id: 23, name: "Vimal", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Vimal" },
            { id: 24, name: "Paan Parag", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Paan+Parag" },
            { id: 22, name: "Rajni Gandha", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Rajni+Gandha" },
            { id: 23, name: "Vimal", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Vimal" },
            { id: 24, name: "Paan Parag", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Paan+Parag" },
            { id: 22, name: "Rajni Gandha", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Rajni+Gandha" },
            { id: 23, name: "Vimal", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Vimal" },
            { id: 24, name: "Paan Parag", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Paan+Parag" },
            { id: 22, name: "Rajni Gandha", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Rajni+Gandha" },
            { id: 23, name: "Vimal", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Vimal" },
            { id: 24, name: "Paan Parag", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Paan+Parag" },
            { id: 22, name: "Rajni Gandha", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Rajni+Gandha" },
            { id: 23, name: "Vimal", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Vimal" },
            { id: 24, name: "Paan Parag", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Paan+Parag" },
            { id: 22, name: "Rajni Gandha", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Rajni+Gandha" },
            { id: 23, name: "Vimal", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Vimal" },
            { id: 24, name: "Paan Parag", price: 10, category: "pan-masala", image: "https://via.placeholder.com/200?text=Paan+Parag" },
            // Daal
            { id: 25, name: "Toor Daal", price: 80, category: "daal", image: "https://via.placeholder.com/200?text=Toor+Daal" },
            { id: 26, name: "Moong Daal", price: 90, category: "daal", image: "https://via.placeholder.com/200?text=Moong+Daal" },
            { id: 27, name: "Chana Daal", price: 70, category: "daal", image: "https://via.placeholder.com/200?text=Chana+Daal" },
            { id: 25, name: "Toor Daal", price: 80, category: "daal", image: "https://via.placeholder.com/200?text=Toor+Daal" },
            { id: 26, name: "Moong Daal", price: 90, category: "daal", image: "https://via.placeholder.com/200?text=Moong+Daal" },
            { id: 27, name: "Chana Daal", price: 70, category: "daal", image: "https://via.placeholder.com/200?text=Chana+Daal" },
            { id: 25, name: "Toor Daal", price: 80, category: "daal", image: "https://via.placeholder.com/200?text=Toor+Daal" },
            { id: 26, name: "Moong Daal", price: 90, category: "daal", image: "https://via.placeholder.com/200?text=Moong+Daal" },
            { id: 27, name: "Chana Daal", price: 70, category: "daal", image: "https://via.placeholder.com/200?text=Chana+Daal" },
            { id: 25, name: "Toor Daal", price: 80, category: "daal", image: "https://via.placeholder.com/200?text=Toor+Daal" },
            { id: 26, name: "Moong Daal", price: 90, category: "daal", image: "https://via.placeholder.com/200?text=Moong+Daal" },
            { id: 27, name: "Chana Daal", price: 70, category: "daal", image: "https://via.placeholder.com/200?text=Chana+Daal" },
            // Disposal Item
            { id: 28, name: "Paper Plates", price: 50, category: "disposal-item", image: "https://via.placeholder.com/200?text=Paper+Plates" },
            { id: 29, name: "Plastic Cups", price: 30, category: "disposal-item", image: "https://via.placeholder.com/200?text=Plastic+Cups" },
            { id: 30, name: "Spoons", price: 20, category: "disposal-item", image: "https://via.placeholder.com/200?text=Spoons" },
            { id: 28, name: "Paper Plates", price: 50, category: "disposal-item", image: "https://via.placeholder.com/200?text=Paper+Plates" },
            { id: 29, name: "Plastic Cups", price: 30, category: "disposal-item", image: "https://via.placeholder.com/200?text=Plastic+Cups" },
            { id: 30, name: "Spoons", price: 20, category: "disposal-item", image: "https://via.placeholder.com/200?text=Spoons" },
            { id: 28, name: "Paper Plates", price: 50, category: "disposal-item", image: "https://via.placeholder.com/200?text=Paper+Plates" },
            { id: 29, name: "Plastic Cups", price: 30, category: "disposal-item", image: "https://via.placeholder.com/200?text=Plastic+Cups" },
            { id: 30, name: "Spoons", price: 20, category: "disposal-item", image: "https://via.placeholder.com/200?text=Spoons" },
            { id: 28, name: "Paper Plates", price: 50, category: "disposal-item", image: "https://via.placeholder.com/200?text=Paper+Plates" },
            { id: 29, name: "Plastic Cups", price: 30, category: "disposal-item", image: "https://via.placeholder.com/200?text=Plastic+Cups" },
            { id: 30, name: "Spoons", price: 20, category: "disposal-item", image: "https://via.placeholder.com/200?text=Spoons" },
            { id: 28, name: "Paper Plates", price: 50, category: "disposal-item", image: "https://via.placeholder.com/200?text=Paper+Plates" },
            { id: 29, name: "Plastic Cups", price: 30, category: "disposal-item", image: "https://via.placeholder.com/200?text=Plastic+Cups" },
            { id: 30, name: "Spoons", price: 20, category: "disposal-item", image: "https://via.placeholder.com/200?text=Spoons" },
            // Masale
            { id: 31, name: "Turmeric Powder", price: 30, category: "masale", image: "https://via.placeholder.com/200?text=Turmeric+Powder" },
            { id: 32, name: "Chili Powder", price: 25, category: "masale", image: "https://via.placeholder.com/200?text=Chili+Powder" },
            { id: 33, name: "Garam Masala", price: 40, category: "masale", image: "https://via.placeholder.com/200?text=Garam+Masala" },
            { id: 31, name: "Turmeric Powder", price: 30, category: "masale", image: "https://via.placeholder.com/200?text=Turmeric+Powder" },
            { id: 32, name: "Chili Powder", price: 25, category: "masale", image: "https://via.placeholder.com/200?text=Chili+Powder" },
            { id: 33, name: "Garam Masala", price: 40, category: "masale", image: "https://via.placeholder.com/200?text=Garam+Masala" },
            { id: 31, name: "Turmeric Powder", price: 30, category: "masale", image: "https://via.placeholder.com/200?text=Turmeric+Powder" },
            { id: 32, name: "Chili Powder", price: 25, category: "masale", image: "https://via.placeholder.com/200?text=Chili+Powder" },
            { id: 33, name: "Garam Masala", price: 40, category: "masale", image: "https://via.placeholder.com/200?text=Garam+Masala" },
            { id: 31, name: "Turmeric Powder", price: 30, category: "masale", image: "https://via.placeholder.com/200?text=Turmeric+Powder" },
            { id: 32, name: "Chili Powder", price: 25, category: "masale", image: "https://via.placeholder.com/200?text=Chili+Powder" },
            { id: 33, name: "Garam Masala", price: 40, category: "masale", image: "https://via.placeholder.com/200?text=Garam+Masala" },
            { id: 31, name: "Turmeric Powder", price: 30, category: "masale", image: "https://via.placeholder.com/200?text=Turmeric+Powder" },
            { id: 32, name: "Chili Powder", price: 25, category: "masale", image: "https://via.placeholder.com/200?text=Chili+Powder" },
            { id: 33, name: "Garam Masala", price: 40, category: "masale", image: "https://via.placeholder.com/200?text=Garam+Masala" }
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
                        <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">🗑</button>
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
          total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2),
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