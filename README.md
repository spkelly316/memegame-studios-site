# Meme Game Studios Homepage

This is the main hub website for [memegamestudios.com](https://memegamestudios.com). It serves as a launcher page that links to multiple games hosted on subdomains.

## Overview

The homepage features an iPhone-style app launcher interface with a grid of game icons. Each icon represents a game and links to its respective subdomain.

## Structure

- `index.html` - Main HTML file
- `styles.css` - All styling (mobile-first, responsive design)
- `README.md` - This file

## Deployment

This site is configured for deployment on Netlify:

- **Build command**: Not required (static site)
- **Publish directory**: `/` (root)
- **Node version**: Not required

Simply push to your repository and Netlify will automatically deploy.

## Adding a New Game Icon

To add a new game to the launcher:

1. **Open `index.html`** and locate the `.icons-grid` section (inside the `.phone-frame` div).

2. **Add a new icon link** following this pattern:

```html
<a href="https://yourgame.memegamestudios.com" class="icon-link" role="listitem" aria-label="Your Game Name">
    <div class="icon-container">
        <div class="icon yourgame-icon">
            <span class="icon-emoji">🎮</span>
        </div>
        <span class="icon-label">Your Game Name</span>
    </div>
</a>
```

3. **Customize the icon**:
   - Replace `yourgame-icon` with a unique class name (e.g., `spacegame-icon`)
   - Change the emoji in `<span class="icon-emoji">` to match your game
   - Update the label text
   - Update the `href` URL to point to your subdomain

4. **Add custom icon styling** (optional):
   - Open `styles.css`
   - Find the "Individual icon color variations" section
   - Add a new gradient for your icon:

```css
.yourgame-icon {
    background: linear-gradient(135deg, #color1 0%, #color2 100%);
}
```

5. **For "Coming Soon" games**:
   - Use the `coming-soon` class on the icon link
   - Remove the `href` attribute or set it to `#`
   - The icon will automatically appear dimmed with a "Soon" badge

## Customizing Icons

### Using Emojis (Current Method)
Icons currently use emojis. Simply change the emoji in the HTML:
```html
<span class="icon-emoji">🚁</span>
```

### Using Custom Images
To use custom icon images:

1. Place your icon images in a folder (e.g., `icons/`)
2. Update the icon HTML:
```html
<div class="icon yourgame-icon">
    <img src="icons/yourgame.png" alt="Your Game" class="icon-image">
</div>
```
3. Add CSS for the image:
```css
.icon-image {
    width: 60%;
    height: 60%;
    object-fit: contain;
}
```

### Using SVG
You can also inline SVG directly in the HTML for scalable icons.

## Open Graph Image

The site references `/og-image.png` for social media sharing. To add your own:

1. Create an image (recommended: 1200x630px)
2. Save it as `og-image.png` in the root directory
3. The meta tags in `index.html` will automatically reference it

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## Development

This is a static site with no build process required. Simply:

1. Edit `index.html` or `styles.css`
2. Test locally by opening `index.html` in a browser
3. Commit and push to deploy

## License

© 2024 Meme Game Studios. All rights reserved.

