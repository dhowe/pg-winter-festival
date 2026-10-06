# PG Winter Festival 2025 Website

This is the PG Winter Festival website downloaded from Framer and prepared for GitHub Pages hosting.

## 📁 File Structure

```
winterfest/
├── index.html              # Main website file
├── robots.txt              # SEO robots file
├── .nojekyll               # Disables Jekyll processing
├── .gitignore              # Git ignore rules
├── README.md               # This file
└── assets/
    ├── images/             # 18 website images (PNG)
    ├── fonts/              # 39 web fonts (WOFF2)
    ├── framer/             # Framer framework files
    ├── js/                 # JavaScript files
    └── css/                # Stylesheets
```

## 🚀 GitHub Pages Deployment

### Quick Setup

1. **Create Repository**: Create a new public repository on GitHub (e.g., `pg-winter-festival-2025`)

2. **Initialize Git** (if not already done):
   ```bash
   cd /Users/dhowe/git/winterfest
   git init
   git add .
   git commit -m "Initial commit: PG Winter Festival website"
   ```

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/pg-winter-festival-2025.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select:
     - Branch: `main` (or `master`)
     - Folder: `/ (root)`
   - Click **Save**

5. **Access Your Site**: After a few minutes, your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/pg-winter-festival-2025/
   ```

## 💻 Local Development

To test locally before deploying:

```bash
# Using Python 3
python3 -m http.server 8000

# Or using Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## ⚙️ Configuration

- **`.nojekyll`**: Present to disable Jekyll processing (prevents GitHub Pages from modifying files)
- **`robots.txt`**: Configured for search engine indexing
- **Asset Paths**: All resources use relative paths for compatibility with GitHub Pages

## 📝 Notes

- This is a Framer-generated single-page application
- The `#when` section and other hash-based navigation work client-side
- All assets are self-contained and don't require external dependencies
- The site is fully functional offline once loaded

## 🔧 Troubleshooting

If the site doesn't load properly on GitHub Pages:

1. Check that GitHub Pages is enabled in repository settings
2. Verify the correct branch and folder are selected
3. Clear browser cache and reload
4. Check the browser console for any errors
5. Ensure all files were pushed correctly (`git status` and `git log`)
