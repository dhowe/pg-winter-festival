#!/bin/bash

# Quick setup script for GitHub Pages deployment
cd /Users/dhowe/git/winterfest

echo "🎉 PG Winter Festival - GitHub Pages Setup"
echo "=========================================="
echo ""

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if already initialized
if [ -d ".git" ]; then
    echo "⚠️  Git repository already initialized."
    echo ""
    read -p "Do you want to reset and reinitialize? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -rf .git
        echo "✓ Old repository removed"
    else
        echo "✓ Keeping existing repository"
        exit 0
    fi
fi

# Initialize Git repository
echo "📦 Initializing Git repository..."
git init
git add .
git commit -m "Initial commit: PG Winter Festival website

- Downloaded from Framer
- Organized for GitHub Pages
- Assets in /assets directory
- Ready for deployment"

echo ""
echo "✅ Git repository initialized!"
echo ""
echo "📋 Next steps:"
echo ""
echo "1. Create a new repository on GitHub:"
echo "   https://github.com/new"
echo ""
echo "2. Copy the repository URL (e.g., https://github.com/yourusername/pg-winter-festival-2025.git)"
echo ""
echo "3. Link and push to GitHub:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/pg-winter-festival-2025.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. Enable GitHub Pages:"
echo "   - Go to Repository Settings → Pages"
echo "   - Select branch: main"
echo "   - Select folder: / (root)"
echo "   - Click Save"
echo ""
echo "5. Your site will be live at:"
echo "   https://YOUR_USERNAME.github.io/pg-winter-festival-2025/"
echo ""
echo "🎊 Done! Your website is ready for deployment!"
