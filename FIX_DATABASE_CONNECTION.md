# How to Fix the Contact Form Database Connection Issue

## Current Status
The contact form is now successfully reaching the API endpoint (no more 404 errors), but it's failing with a "Database connection error" (500 Internal Server Error). This means the API is working, but it can't connect to the database.

## Root Cause
The database connection is failing because the `DATABASE_URL` environment variable is not properly configured in your Vercel project settings.

## Solution

### 1. Fix Environment Variable in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to the "Settings" tab
4. Click on "Environment Variables" in the sidebar
5. Add a new environment variable:
   - **Name**: `DATABASE_URL`
   - **Value**: `postgresql://neondb_owner:npg_rP2EXKRzh8oA@ep-proud-breeze-a24g1jyx-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`
   - **Important**: Make sure the value does NOT start with `psql '` and does NOT have any quotes around it

### 2. Redeploy the Application

After adding the environment variable:
1. Go to the "Deployments" tab
2. Click on the "Redeploy" button (or make a small change to trigger a new deployment)
3. Wait for the deployment to complete

### 3. Verify the Fix

1. Visit your website
2. Try submitting the contact form
3. Check the Vercel function logs if you still see errors:
   - Go to the "Functions" tab in your Vercel dashboard
   - Find the `/api/contact` function
   - Check its logs for any error messages

## Additional Notes

1. **Security Warning**: The database credentials in the codebase are for testing only. For a production environment, you should:
   - Use more secure credentials
   - Consider using Vercel's secret management
   - Regularly rotate your database passwords

2. **Local Testing**: You can test the database connection locally by:
   ```bash
   cd /Users/mr/unilogic-landing
   node test-db-connection.js
   ```

3. **Configuration Verification**: You can verify all configurations are correct by running:
   ```bash
   cd /Users/mr/unilogic-landing
   node verify-deployment.js
   ```

## Troubleshooting

If you still encounter issues after following these steps:

1. Check the Vercel function logs for detailed error messages
2. Verify the database is accepting connections from Vercel's IP addresses
3. Ensure the database credentials are correct
4. Check if there are any firewall rules blocking the connection

The contact form should work correctly once the DATABASE_URL environment variable is properly configured in Vercel.