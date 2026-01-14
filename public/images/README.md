# Image Directory Structure

This directory contains all static images for the PKNIC website.

## Directory Structure

```
public/images/
├── events/       # Event photos and thumbnails
├── partners/     # Partner and sponsor logos
└── logos/        # PKNIC branding and logos
```

## How to Add Images

1. **For Event Images:**
   - Place in `public/images/events/`
   - Update the `image` field in `constants.ts` EVENTS array
   - Example: `image: "/images/events/sf-connect.jpg"`

2. **For Partner Logos:**
   - Place in `public/images/partners/`
   - Used in the Partners section
   - Example: `logo: "/images/partners/kotra-logo.png"`

3. **For Site Logos:**
   - Place in `public/images/logos/`
   - Used in navbar, footer, or hero sections
   - Example: `src="/images/logos/pknic-logo.svg"`

## Image Naming Convention

Use descriptive, lowercase names with hyphens:
- ✅ `ai-career-event.jpg`
- ✅ `kotra-logo.png`
- ❌ `IMG_1234.jpg`
- ❌ `Photo 2024.png`

## Recommended Image Sizes

- **Event images:** 600x400px (3:2 ratio)
- **Partner logos:** 200x100px (transparent PNG)
- **Hero images:** 1200x600px

## Supported Formats

- JPG/JPEG - photos and event images
- PNG - logos with transparency
- SVG - vector logos (preferred for logos)
- WebP - modern format for better compression
