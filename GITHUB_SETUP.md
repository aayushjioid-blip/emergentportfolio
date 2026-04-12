# GitHub Repository Setup Guide

Follow these steps to push your portfolio code to GitHub.

## Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Git Installed**: Verify git is installed by running `git --version`
3. **GitHub Authentication**: Set up SSH keys or Personal Access Token

## Step-by-Step Instructions

### 1. Initialize Git Repository (if not already done)

```bash
cd /app
git init
```

### 2. Create GitHub Repository

Go to GitHub and create a new repository:
- Repository name: `emergentportfolio`
- Owner: `aayushjioid-blip`
- Description: "Professional Product Manager Portfolio - Aayush Rajput"
- Visibility: Public or Private (your choice)
- **DO NOT** initialize with README, .gitignore, or license (we already have these)

### 3. Configure Git

```bash
# Set your git user (if not already set)
git config --global user.name "Aayush Rajput"
git config --global user.email "aayushhrajput@gmail.com"

# Or set locally for this repo only
git config user.name "Aayush Rajput"
git config user.email "aayushhrajput@gmail.com"
```

### 4. Add Files and Commit

```bash
cd /app

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Professional PM Portfolio

- React frontend with modern design
- FastAPI backend
- MongoDB integration
- Real resume data integrated
- AI expertise highlighted
- Responsive design with Tailwind CSS
- Shadcn UI components
- 4 major client projects showcased
- Complete certifications and training"
```

### 5. Add Remote Repository

```bash
# Add GitHub repository as remote
git remote add origin https://github.com/aayushjioid-blip/emergentportfolio.git

# Or if using SSH:
# git remote add origin git@github.com:aayushjioid-blip/emergentportfolio.git
```

### 6. Push to GitHub

```bash
# Push to main branch
git push -u origin main

# If you get an error about 'master' vs 'main', use:
# git branch -M main
# git push -u origin main
```

### 7. Verify

Go to https://github.com/aayushjioid-blip/emergentportfolio to verify your code is pushed!

## Alternative: Using GitHub CLI

If you have GitHub CLI installed:

```bash
cd /app

# Login to GitHub
gh auth login

# Create repository and push
gh repo create aayushjioid-blip/emergentportfolio --public --source=. --push

# Or for private repository:
# gh repo create aayushjioid-blip/emergentportfolio --private --source=. --push
```

## Troubleshooting

### Authentication Issues

If you get authentication errors:

1. **Using HTTPS**: Generate a Personal Access Token
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate new token with 'repo' permissions
   - Use token as password when pushing

2. **Using SSH**: Set up SSH keys
   ```bash
   ssh-keygen -t ed25519 -C "aayushhrajput@gmail.com"
   cat ~/.ssh/id_ed25519.pub
   # Copy output and add to GitHub Settings → SSH Keys
   ```

### Branch Name Issues

If your default branch is 'master' but GitHub expects 'main':

```bash
git branch -M main
git push -u origin main
```

## Next Steps After Pushing

1. **Add Repository Description**: Edit on GitHub
2. **Add Topics/Tags**: 
   - portfolio
   - react
   - product-manager
   - tailwind-css
   - fastapi
   - mongodb
3. **Enable GitHub Pages** (if you want): Settings → Pages
4. **Add License**: Consider MIT or your preferred license
5. **Update Repository URL**: In README.md if needed

## Keeping Repository Updated

When you make changes:

```bash
cd /app
git add .
git commit -m "Description of changes"
git push
```

---

**Repository URL**: https://github.com/aayushjioid-blip/emergentportfolio
**Live Site**: https://prodmanrajput.com
