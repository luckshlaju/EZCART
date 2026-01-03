# EZCART – E-Commerce Web Application

## Project Objective
To design and develop a modern e-commerce web application that demonstrates frontend architecture, database integration, and cart functionality using Next.js and Supabase, with a focus on incremental and scalable feature development.

## Technologies Used
- Next.js (App Router), React
- Supabase – PostgreSQL Database & Authentication
- HTML, CSS, JavaScript
- Git & GitHub – Version Control and Documentation

## Architecture Overview
This project follows a component-based web application architecture.  
The frontend is built using Next.js, while Supabase is used as the backend for authentication, product storage, and cart data persistence.

Currently, only the **Shoes product page** is fully integrated with the database. Other sections are UI-ready and will be connected incrementally.

## Implementation Details
1. Built the frontend using Next.js App Router and reusable components.
2. Created product and cart tables in Supabase PostgreSQL.
3. Implemented authentication using Supabase email and password login.
4. Integrated the Shoes page with Supabase to fetch products dynamically.
5. Implemented a database-backed cart system with quantity control and persistence.
6. Displayed cart item count in the header for real-time feedback.
7. Served product images using the Next.js public directory.

## Current Scope
- Only the **Shoes page** is dynamically connected to the database.
- Cart functionality works based on products added from the Shoes page.
- Authentication currently uses a **default username and password** for testing.
- Other product categories are static and will be enhanced in future updates.

## Future Enhancements
- Extend database integration to all product categories.
- Implement user-specific carts.
- Add checkout and order management.
- Introduce product detail pages.
- Admin dashboard for product management.

## Author
**Luckshvadhan B**  
Information Technology Student
