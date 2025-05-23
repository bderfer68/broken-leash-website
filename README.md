# Broken Leash Website

A multi-page website for the rock band Broken Leash with a dark, gritty aesthetic.

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

\`\`\`
SPOTIFY_EMBED_SRC=https://open.spotify.com/embed/track/YOUR_TRACK_ID
FORMSPREE_ID=YOUR_FORMSPREE_ID
\`\`\`

### 2. Replacing Embeds

#### Spotify Embed
1. Go to Spotify and find the track or album you want to embed
2. Click "Share" and select "Embed"
3. Copy the src URL from the iframe code
4. Update the `SPOTIFY_EMBED_SRC` environment variable

#### Songkick Tourbox
1. Sign up for a Songkick account and claim your artist profile
2. Go to the Tourbox widget section in your dashboard
3. Generate your widget code
4. Replace the placeholder script in the `/shows` page with your actual Songkick embed code

### 3. Formspree Setup
1. Create an account at [Formspree](https://formspree.io/)
2. Create a new form and get your form ID
3. Update the `FORMSPREE_ID` environment variable
4. Update the form action URL in `components/contact-form.tsx`

### 4. Images
1. Replace the placeholder logo in `/public/images/broken-leash-logo.png`
2. Add a noise texture at `/public/images/noise.png`
3. Replace placeholder images in the gallery with actual band photos

## Deployment

This site is ready to deploy on Vercel:

\`\`\`bash
vercel
\`\`\`

## Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

## Features

- Responsive design with mobile-first approach
- Dark, gritty aesthetic with custom color scheme
- Animated elements with scroll-triggered animations
- Image gallery with lightbox
- Contact form with Formspree integration
- Phone number subscription with validation
- Upcoming shows listing
- Spotify music embed
- Social media integration
\`\`\`

Let's add the noise texture:
