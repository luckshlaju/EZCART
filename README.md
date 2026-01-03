EZCART – E-Commerce Web Application
Project Objective

To design and develop a modern e-commerce web application that demonstrates frontend architecture, database integration, and cart functionality using Next.js and Supabase, with a focus on incremental feature development.

Technologies Used

Next.js (App Router)

React

Supabase (PostgreSQL & Authentication)

HTML, CSS, JavaScript

Git & GitHub – Version Control

Architecture Overview

This project follows a component-based web application architecture.

The frontend is built using Next.js App Router.

Product data and cart data are stored in Supabase PostgreSQL.

Authentication is handled using Supabase Auth.

State management for the cart is implemented using React Context API.

Images are served from the Next.js public directory.

Current Implementation Scope

To keep development structured and scalable, features are being implemented page by page.

✅ Implemented

Shoes Product Page

Products are fetched dynamically from the Supabase database.

Each product includes name, price, and image.

Add to Cart functionality is fully database-backed.

Cart Page

Displays products added from the Shoes page.

Shows product images, quantity, and total price.

Supports quantity decrement and item removal.

Cart data persists across refreshes.

Authentication

Login and Signup pages implemented using Supabase Auth.

Currently supports a default username and password for testing.

UI & Navigation

Cart count badge in header.

Clean navigation between Home, Products, Cart, and Account pages.

⚠️ Partially Implemented / Static

Other product categories are currently UI-only.

Only the Shoes page is connected to the database.

Checkout and order placement are not implemented yet.

Development Approach

This project is being developed using an incremental enhancement approach:

Start with one product category (Shoes).

Ensure database integration and cart logic are stable.

Gradually extend the same logic to other categories.

Scale authentication and cart to support multiple users in later stages.

This approach allows better control over complexity and easier debugging.

Future Enhancements

Extend database integration to all product categories.

Implement user-specific carts.

Add checkout and order management.

Introduce product detail pages.

Admin dashboard for product management.

Payment gateway integration.

Author

Luckshvadhan B
Information Technology Engineering Student
