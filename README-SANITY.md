# Sanity CMS Integration Guide

This project now includes Sanity CMS integration for dynamic content management.

## Setup Instructions

### 1. Install Sanity CLI
```bash
npm install -g @sanity/cli
```

### 2. Create Sanity Project
```bash
# In a separate directory (e.g., sanity-studio)
sanity init

# Follow the prompts:
# - Create new project
# - Choose a project name
# - Use default dataset configuration
# - Choose "Clean project with no predefined schemas"
```

### 3. Configure Schemas
Copy the schema files from `sanity-schemas/` to your Sanity project's `schemas/` directory:

```bash
# In your sanity-studio directory
cp ../your-react-app/sanity-schemas/* schemas/
```

Update your `schemas/index.js` to import the new schemas.

### 4. Environment Variables
Create a `.env` file in your React project root:

```env
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
```

You can find your project ID in your Sanity project's `sanity.json` file.

### 5. Start Sanity Studio
```bash
# In your sanity-studio directory
sanity start
```

This will start the Sanity Studio at `http://localhost:3333`

### 6. Add Content
Use the Sanity Studio interface to add:
- News articles
- Team members
- Leadership profiles
- Sponsors
- Tournaments

### 7. Deploy Sanity Studio (Optional)
```bash
sanity deploy
```

## Content Types

### News Articles
- Title, excerpt, content
- Author, publish date, category
- Featured image
- Featured flag for homepage

### Team Members
- Player name, real name, role
- Game, biography
- Player image, achievements
- Statistics, social media links
- Featured flag for homepage

### Leadership
- Name, role, biography
- Profile image, achievements
- Social media links

### Sponsors
- Name, logo, tier
- Website, description

### Tournaments
- Name, game, dates
- Prize pool, format, status
- Participants, results
- Tournament image

## API Usage

The React components now fetch data from Sanity using the configured client and GROQ queries. The `useSanityData` hook handles loading states and error handling.

## Next Steps

1. Set up your Sanity project
2. Add your project credentials to `.env`
3. Populate content in Sanity Studio
4. Your React app will automatically display the dynamic content