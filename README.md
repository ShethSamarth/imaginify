# Imaginify (AI SAAS)

This is a repository for Fullstack AI SAAS: Next.js 14, Stripe, Clerk, Cloudinary, React, TailwindCSS, ShadCN UI.

Key Features:

- Image Generative Fill
- Image Restoration
- Image Recoloring
- Object Removal
- Background Removal
- Download Transformed Images
- Transformed Image Details
- Credits System
- Stripe Payment Gateway
- Community Image Showcase
- Advanced Image Search (Find images by content or objects present inside the image quickly and accurately)
- Clerk Authentication
- MongoDB Database
- ShadcnUI & TailwindCSS
- Full mobile responsiveness

# Final Version

To visit the website, [click here.](https://ai-imaginify-ss.vercel.app)

### Cloning the repository

```shell
git clone https://github.com/ShethSamarth/imaginify.git
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

MONGODB_URL=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### Install packages

```shell
npm install
```

### Start the app

```shell
npm run dev
```
