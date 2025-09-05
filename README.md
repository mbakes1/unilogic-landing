# Unilogic Landing Page

This is the landing page for Unilogic, a digital transformation company for South Africa's public sector.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the `.env.example` file to `.env.local` and add your environment variables:
   ```bash
   cp apps/web/.env.example apps/web/.env.local
   ```

3. For local development:
   ```bash
   npm run dev:web
   ```

## Environment Variables

For the contact form to work with Neon DB, you need to set the following environment variables in your Vercel project settings:

- `DATABASE_URL`: The connection string for your Neon DB instance

The DATABASE_URL should be in the format:
`postgresql://username:password@host.region.aws.neon.tech/database_name?sslmode=require`

## API Routes

The contact form submits to `/api/contact` which is handled by the serverless function in `apps/web/api/contact.ts`.

## Development

To run the web application locally:
```bash
npm run dev:web
```

To run all workspaces:
```bash
npm run dev
```

## Testing Database Connection

To test the database connection locally, create a `.env` file in the root directory with your DATABASE_URL and run:
```bash
npx ts-node test-db-connection.ts
```

## Deployment

This application is designed to be deployed on Vercel. 

**Important**: When setting up the project on Vercel, you must configure the following settings in your project settings:
- **Root Directory**: Set this to `apps/web` 
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

Make sure to also set the environment variables in your Vercel project settings.