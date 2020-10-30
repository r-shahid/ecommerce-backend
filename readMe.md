# Welcome to Impulse Shopping

## Project Links

- [Netlify: impulse]()
- [Heroku]()
- [github backend](https://github.com/r-shahid/ecommerce-backend)
- [github frontend](https://github.com/r-shahid/ecommerce-frontend)

---

## Project Schedule

| Day   | Deliverable                                          | Status |
| :---- | :--------------------------------------------------- | :----- |
| Day 1 | Markdown Approval                                    | []     |
| Day 2 | MVP                                                  | []     |
| Day 3 | MVP                                                  | []     |
| Day 4 | MVP + HTML/CSS w/ SCSS                               | []     |
| Day 5 | MVP/P-MVP + debugging                                | []     |


---

## Project Description

Welcome to impulse shopping. This is a web application where both consumer and vendors come together to buy and sell the products they want! With impulse, users can browse through whatever products they desire, check on more details on the product, add it to cart and be able to checkout. The consumer user can also be able to look at their past orders and reviews of the product they are looking at. Posts are made by sellers to add on products page.

---

## Team member roles

Esteban Gonzalez: Backend - Server side - connecting with Postman/Mongo and API - Assistant with React components - React architect designer

Riana Shahid: Product Lead / Product Manager - Pull and commit approvals - Front end - React component technician - Styling of web app

Tonimarie Morris: Frontend - React component main technician - React architect designer - Styling of web app

Zack Yang: Backend - Setup and foundation - Web App planner


---

## Wireframes

- [Home Page](https://res.cloudinary.com/rshahid/image/upload/v1603468497/impulse/desktop_home_f79oy1.png)
- [Tablet - Home Page](https://res.cloudinary.com/rshahid/image/upload/v1603468497/impulse/tablet_home_gc4e3a.png)
- [Mobile - Home Page](https://res.cloudinary.com/rshahid/image/upload/v1603468497/impulse/mobile_home_n6wequ.png)

- [Products Page](https://res.cloudinary.com/rshahid/image/upload/v1603471251/impulse/desktop_product_page_ycf9ru.png)
- [Tablet - Products Page](https://res.cloudinary.com/rshahid/image/upload/v1603471523/impulse/tablet_product_page_bzmjir.png)
- [Mobile - Products Page](https://res.cloudinary.com/rshahid/image/upload/v1603471843/impulse/mobile_product_page_kxobe6.png)
  
- [Desktop - Checkout Page](https://res.cloudinary.com/rshahid/image/upload/v1603473917/impulse/Desktop_cart_tfqd4c.png)
- [Tablet - Checkout Page](https://res.cloudinary.com/rshahid/image/upload/v1603473015/impulse/Tablet_Cart_ysb3jf.png)
- [Mobile - Checkout Page](https://res.cloudinary.com/rshahid/image/upload/v1603472619/impulse/mobile_cart_elh26o.png)
  
<!-- - [Past Orders Page]()
- [Tablet - Past Orders Page]()
- [Mobile - Past Orders Page]() -->
  
- [Desktop - Seller Page](https://res.cloudinary.com/rshahid/image/upload/v1603478472/impulse/desktop_seller_fiyfep.png)
- [Tablet - Seller Page](https://res.cloudinary.com/rshahid/image/upload/v1603478803/impulse/tablet_seller_vbn9qs.png)
- [Mobile - Seller Page](https://res.cloudinary.com/rshahid/image/upload/v1603478995/impulse/mobile_seller_u9infx.png)

- [About Us Page](https://wireframepro.mockflow.com/view/Mb414763c3b6afe3d4affd1843fe377031600054978450)
---

## MVP Time-Frame
<!-- * means it's not done yet 
for routes I put 3 bc of all the confusion with the urls-->

| Component                      | Priority | Estimated Time | Actual Time |
| :----------------------------- | :------- | :------------- | :---------- |
| Repos | H | 1 hr | 1 hr |
| Server/Backend | H | 4 hr | 10 hr |
| DB | H | 3 hrs | 6 hrs* |
| Component Structure | H | .5 hr | 1 hr |
| Forms | H | 3 hrs | 4 hrs |
| Responsiveness | H | 3 hrs |  |
| Styling | M | 3 hrs |  |
| Products | H | 2 hrs |  |
| Cart | M | 2 hrs |  |
| Routes | H | 2.5 hrs | 3 hrs* |
| Event Handling | H | 2.5 hrs | 4 hrs* |
| Netlify | H | 1 hr |  |
| Heroku | H | 1 hr |  |
| Nav Bar | H | 1.5 hrs |  |
| About Us | L  | 1 hr |  |
| Connection btw FE & BE | H | 2 hrs |  |
| Seller | M | 2 hrs |  |


## PostMVP Time-Frame

| Component                              | Priority | Estimated Time | Actual Time |
| :------------------------------------- | :------- | :------------- | :---------- |
| Order History | L | 2 hr |  |
| Checkout | L | 3 hr |  |
| Carousel | L | .5 hr |  |



---

## Time Matrix

[Time Matrix link]()

---

### MVP
- Landing Page (Home)
- Products
- Cart
- Checkout Page
- Nav Bar
- About Us


### PostMVP
- Seller Page/Post
- Past Orders
- Product Description/Review


---

## Components

| Component             |                     Description                      |
| :------------:        | :--------------------------------------------------: |
| Products                  | Home Page for Web App                           |
| Product   | Highlights specific product, shows description with users being able to read and post reviews   |
| Cart                  | Cart Page to show products before checkout                 |
| Past Orders           | Past Orders Page showing the history of user purchases      |
| Seller                | Seller Page being able to post/sell their product   |
| Checkout Page         | Final page after cart to finalize purchase with user  |
| About Us              | About Us Page showing team members involved with creation of app |


---

## React Architecture

[React Architecture link](https://res.cloudinary.com/dczjejcpv/image/upload/v1603471144/F2111BC5-47CB-4575-AAE8-BD8E4F25F7AF_qfqlzg.jpg)

---

## backend routing table
| **URL** | **HTTP Verb** | Action |
|------------|-------------|-------------|
| /products      | GET       |  it should get all products from the db that was created
| /products        | POST       |  it should add new products to the db and return the entire list as json
| /products/:id      | GET       | it should get that individual product from the db and return as json
| /products/:id      | PUT       | it should update the individual product to the db and return as it json
| /products/:id      | DELETE      | it should delete the individual product to the db  and return the entire list as json 

---
## Additional Libraries

- React
- Node
- Mongoose
- Mongo
- Postman

---

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```javaScript
function reverse(string) {
	// here is the code to reverse a string of text
}
```

---

## Issues and Resolutions
