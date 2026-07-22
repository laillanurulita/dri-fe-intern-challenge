# Monkey Coffee Landing Page

This project is a responsive frontend implementation of the Monkey Coffee landing page, built with Next.js and Tailwind CSS as part of a Frontend Internship Technical Challenge. The goal of this project is to translate the provided Figma design into a responsive and interactive website while following modern frontend development practices.

## Live Demo
- https://dri-fe-intern-challenge.vercel.app/

## Github Repository 
- https://github.com/laillanurulita/dri-fe-intern-challenge

## Features

- Responsive landing page
- Reusable React components
- Built with Next.js App Router
- Styled using Tailwind CSS
- Optimized image rendering with Next.js Image
- Clean and structured component architecture

## Technologies Used

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- ESLint
- Lucide React

## Installation

1. Clone the repository

```bash
git clone https://github.com/laillanurulita/dri-fe-intern-challenge.git
```

2. Go to the project directory

```bash
cd dri-fe-intern-challenge
```

3. Install dependencies

```bash
npm install
```

4. Run the development server

```bash
npm run dev
```

5. Open:

```
http://localhost:3000
```

## Build

```bash
npm run build
```


## Hydration & Cart Persistence

This project focuses on implementing the landing page based on the provided Figma design. Therefore, shopping cart persistence was not included in the scope of this project.

If cart persistence were required, I would store the cart data in `localStorage` and initialize it after the component mounts using React's `useEffect`. This approach prevents hydration mismatches by ensuring that browser-only APIs are accessed only on the client side after server-side rendering has completed.

## Author

Lailla Nurulita Ramadhani

Frontend Developer Enthusiast