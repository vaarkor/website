# VÅR - Vokalensemble Aarhus

A modern, block-based website for VÅR choir built with Payload CMS, Next.js, and Tailwind CSS.

## Features

- 🎵 **Block-based content management** - Flexible page builder with customizable blocks
- 🎨 **Spring/Forest theming** - Light mode with spring colors, dark mode with warm forest tones
- 📱 **Fully responsive** - Optimized for all devices
- 🎥 **Rich media support** - Background videos, YouTube embeds, and parallax images
- ⚡ **Modern tech stack** - Next.js 15, Payload CMS 3, TypeScript, Tailwind CSS

## Block Types

### Hero Video Block

Full-screen background video with two call-to-action buttons. Perfect for the homepage.

### Zig-Zag Block

Alternating image and text sections in a zig-zag pattern. Ideal for the "Join Us" page with rehearsal information.

### Parallax Block

Rich text content overlaying a fixed background image with parallax scrolling effect.

### Video + Text Block

YouTube video embed alongside rich text content, configurable left or right positioning.

## Prerequisites

- Node.js 20.9.0 or higher
- npm, pnpm, or yarn
- MongoDB database (MongoDB Atlas recommended for production)

## Getting Started

### 1. Clone and Install

```bash
# Navigate to project directory
cd vaar-website

# Install dependencies
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
# MongoDB Connection
DATABASE_MONGODB_URI=mongodb://localhost:27017/vaar-website
# For MongoDB Atlas, use: mongodb+srv://username:password@cluster.mongodb.net/vaar-website

# Payload Secret (generate a strong random string)
PAYLOAD_SECRET=your-super-secret-key-here

# Next.js
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

**Generate a secure PAYLOAD_SECRET:**

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3. Run Development Server

```bash
npm run dev
```

Visit:

- **Frontend:** http://localhost:3000
- **Admin Panel:** http://localhost:3000/admin

### 4. Create Your First Admin User

On first visit to `/admin`, you'll be prompted to create an admin account.

### 5. Build Your Pages

In the admin panel:

1. **Upload Media**
   - Go to Media collection
   - Upload choir photos and background video

2. **Create Homepage** (slug: `home`)
   - Add Hero Video block with your choir video
   - Configure buttons to link to `/join-us` and `/hire-us`

3. **Create "Join Us" Page** (slug: `join-us`)
   - Add Zig-Zag blocks with rehearsal information
   - Include conductor's email for audition inquiries

4. **Create "Hire Us" Page** (slug: `hire-us`)
   - Add Parallax blocks with booking information
   - Add Video+Text blocks with performance videos

## Production Deployment

### Deploy to Vercel with MongoDB Atlas

1. **Set up MongoDB Atlas**
   - Create account at [mongodb.com/atlas](https://www.mongodb.com/atlas)
   - Create a cluster and database
   - Get connection string

2. **Deploy to Vercel**

   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Deploy
   vercel
   ```

3. **Configure Environment Variables in Vercel**
   - Go to your Vercel project settings
   - Add environment variables:
     ```
     DATABASE_MONGODB_URI=mongodb+srv://...
     PAYLOAD_SECRET=your-production-secret
     NEXT_PUBLIC_SERVER_URL=https://your-domain.vercel.app
     ```

4. **Redeploy**
   ```bash
   vercel --prod
   ```

### Vercel Blob Storage (Optional)

For media file storage on Vercel:

```bash
npm install @vercel/blob
```

Configure in `payload.config.ts` to use Vercel Blob instead of local storage.

## Project Structure

```
src/
├── app/
│   ├── (frontend)/          # Public-facing pages
│   │   ├── [slug]/          # Dynamic page routes
│   │   ├── layout.tsx       # Main layout with Tailwind
│   │   └── page.tsx         # Homepage
│   └── (payload)/           # Payload admin panel
├── blocks/                  # Block components
│   ├── HeroVideo/
│   ├── ZigZag/
│   ├── Parallax/
│   └── VideoText/
├── collections/             # Payload collections
│   ├── Users.ts
│   ├── Media.ts
│   └── Pages.ts
├── components/              # React components
│   └── RenderBlocks/        # Block renderer
├── lib/                     # Utilities
│   └── serializeLexical.tsx # Rich text serializer
└── payload.config.ts        # Payload configuration
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Generate TypeScript types
npm run generate:types

# Generate import map
npm run generate:importmap

# Run linter
npm run lint

# Run tests
npm test
```

## Customization

### Theme Colors

Edit `tailwind.config.ts` to customize colors:

- **spring** - Light mode palette
- **forest** - Dark mode palette
- **forest-green** - Primary brand color
- **warm-brown** - Dark mode accent

### Adding New Blocks

1. Create block in `src/collections/Pages.ts`
2. Create component in `src/blocks/YourBlock/index.tsx`
3. Add to `src/components/RenderBlocks/index.tsx`
4. Run `npm run generate:types`

## Support

For Payload CMS documentation: https://payloadcms.com/docs  
For Next.js documentation: https://nextjs.org/docs
