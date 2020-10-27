const Product = require('../model/productModel')
const productData = require('./products.json')
const Review = require('../model/reviewsModel')
const mongoose = require('./connection')

Product.deleteMany({}).then(() => {
    Product.collection.insert(productData).then(products => {
        console.log(products)
    }).catch(err => {
        console.log(err)
    })
}).then(() => {
    mongoose.connection.close()
})

Review.deleteMany({}).then(() => {
    Review.collection.insert(productData).then(reviews => {
        console.log(reviews)
    }).catch(err => {
        console.log(err)
    })
}).then(() => {
    mongoose.connection.close()
})


Product.find({}).remove(() => {
  Review.find({}).remove(() => {
    let bike = Product.create({
        product: "BMX Bike",
        img: "https://eriksbikeshop.vtexassets.com/arquivos/ids/275722-1200-auto?width=1200&height=auto&aspect=true",
        price: 399.99,
        productDescription: "The 2021 Cult Gateway BMX Bike is a great entry-level bike; the 20.5 inch top tube makes it easier to handle for smaller new riders."
    }).then(product => {
      Promise.all([
        Review.create({
            date: "Oct. 24 2020",
            rating: 8,
            Reviews: "It's a great bike to learn in, there have been no problems with the bike so far!"
        }).then(review => {
          product.reviews.push(review)
        }),
        Review.create({
            date: "May. 18 2020",
            rating: 10,
            Reviews: "It's very durable and is worth the price for being so, love the bike!"
        }).then(review => {
          product.reviews.push(review)
        })
      ]).then(() => {
        product.save()
      })
    })
    let keurig = Product.create({
        product: "Keurig® K-Café™ Special Edition Single Serve Coffee, Latte & Cappuccino Maker",
        img: "https://b3h2.scene7.com/is/image/BedBathandBeyond/201215865635445p?$690$&wid=690&hei=690",
        price: 189.99,
        productDescription: "Enjoy coffee and delicious specialty beverages with Keurig's K-Cafe Special Edition Single Serve Coffee, Latte & Cappuccino Maker. With 4 settings, a 60 oz. tank capacity, and included milk frother this machine will make great drinks for the family."
    }).then(product => {
      Promise.all([
        Review.create({
            date: "Oct. 4 2020",
            rating: 9,
            Reviews: "The instructions to make great coffee is straight to the point and fast love my new keurig."
        }).then(review => {
          product.reviews.push(review)
        }),
        Review.create({
            date: "Nov. 3 2020",
            rating: 8,
            Reviews: "I love the customer service support team! My keurig came deffective but i'm getting my new tomorrow fast and easy customer support!"
        }).then(review => {
          product.reviews.push(review)
        })
      ]).then(() => {
        product.save()
      })
    })
    let addidas = Product.create({
        product: "NMD_R1 V2 TOKYO NIGHTS SHOES",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/eaa53e6eb713482597a0abb501817fca_9366/NMD_R1_V2_Tokyo_Nights_Shoes_Black_FY1251_01_standard.jpg",
        price: 140.00,
        productDescription: "Ready. Set. Wander. These adidas NMD_R1 V2 Tokyo Nights Shoes are made for the restless hearts who can't sit still. Slip them on and explore."
    }).then(product => {
      Promise.all([
        Review.create({
            date: "Jun. 12 2020",
            rating: 8,
            Reviews: "Very stylish and fits great would recommend. Also very comfortable."
        }).then(review => {
          product.reviews.push(review)
        }),
        Review.create({
            date: "May. 1 2020",
            rating: 10,
            Reviews: "I love the way the vibrant colors contrast against the black body."
        }).then(review => {
          product.reviews.push(review)
        })
      ]).then(() => {
        product.save()
      })
    })
    let gamingmonitor = Product.create({
        product: "27” UltraGear FHD IPS 1ms 240Hz G-Sync Compatible",
        img: "https://www.lg.com/us/images/monitors/md07500132/gallery/desktop-02.jpg",
        price: 399.99,
        productDescription: "Jump into your favorite games without the distraction of unsightly borders. With an ultra-thin 3-side bezel that unites form and function. Enjoy more comfortable viewing with versatile screen tilt, height and pivot adjustments."
    }).then(product => {
      Promise.all([
        Review.create({
            date: "Jun. 19 2020",
            rating: 8,
            Reviews: "Very fluid display love the colors that it displays very vibrant."
        }).then(review => {
          product.reviews.push(review)
        }),
        Review.create({
            date: "May. 3 2020",
            rating: 10,
            Reviews: "Amazing! way better than my last monitor"
        }).then(review => {
          product.reviews.push(review)
        })
      ]).then(() => {
        product.save()
      })
    })
    let supreme = Product.create({
        product: "Louis Vuitton x Supreme pre-owned logo hoodie",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQVxMu4HT46MXFuFhL5mbbXwt5c-dGH6hvCNRZ4QJgkAiVcLe-bLucl8qk427d1HAt0vW-PJO5Zplenknnif21lRnYIRKybfblhtmylCirbYoyWcuJMzQW23A&usqp=CAE",
        price: 12800.00,
        productDescription: "Please be mindful that this piece has led a previous life, and may tell its story through minor imperfection. Purchasing this item continues its narrative, so you can be confident that you’re making a POSITIVELY CONSCIOUS choice for the planet."
    }).then(product => {
      Promise.all([
        Review.create({
            date: "Jun. 1 2020",
            rating: 9,
            Reviews: "Very stylish and fits great would recommend. Also very comfortable."
        }).then(review => {
          product.reviews.push(review)
        }),
      ]).then(() => {
        product.save()
      })
    })
    let toaster = Product.create({
        product: "Revolution Cooking R180 High Speed Smart Toaster in Chrome",
        img: "https://b3h2.scene7.com/is/image/BedBathandBeyond/381160369546186p?$690$&wid=690&hei=690",
        price: 299.99,
        productDescription: "The Revolution Cooking R180 High Speed Toaster is the world’s first high-speed smart toaster with touchscreen display. Its intelligent controls customize toasting time and temperature based on selected food settings."
    }).then(product => {
      Promise.all([
        Review.create({
            date: "Jun. 10 2020",
            rating: 10,
            Reviews: "Amazing and futuristic!"
        }).then(review => {
          product.reviews.push(review)
        }),
        Review.create({
            date: "May. 21 2020",
            rating: 10,
            Reviews: "Never thought this was something that could exist!"
        }).then(review => {
          product.reviews.push(review)
        })
      ]).then(() => {
        product.save()
      })
    })
    let snuggie = Product.create({
        product: "Oversized Wearable Hoodie Blanket (Navy, Sherpa Fleece)",
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFvudhKwdm2q2U64wGuuflK7G2IMOsdMcctg2WPYlDO89J6Sfd4KYR_lkGzmpkbv4fIh0eFa6YzGHxQNtYFvVSF6iOO62umsVONtq1CIO1KCvuDKhOmc4g7g&usqp=CAY",
        price: 37.99,
        productDescription: "Comfortable sweatshirt and sherpa blanket all in one. Enjoy max comfort and warmth with this oversized pullover hoodie blanket."
    }).then(product => {
      Promise.all([
        Review.create({
            date: "Jun. 12 2020",
            rating: 8,
            Reviews: "Ive always wanted these! I am not dissapointed"
        }).then(review => {
          product.reviews.push(review)
        }),
        Review.create({
            date: "May. 1 2020",
            rating: 10,
            Reviews: "very soft material!"
        }).then(review => {
          product.reviews.push(review)
        })
      ]).then(() => {
        product.save()
      })
    })
  })
})