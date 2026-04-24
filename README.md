<<<<<<< HEAD
# 📋 My Tasks — PWA To-Do App
=======
📋 My Tasks — PWA To-Do App
>>>>>>> 7ab9ec9172a6b9d609f1ad4cf7df44486b78fd7e

A lightweight, installable priority to-do app. Works offline. No frameworks, no build tools — just HTML, CSS, and JS.

## ✨ Features
- Add tasks with **High / Medium / Low / None** priority
- **Drag to reorder** on desktop (mouse) and mobile (touch)
- Filter by All / Active / Done
- Duplicate task detection with shake animation
- Offline support via Service Worker
- Installable on Android & iOS home screen
- Data persists in `localStorage`

---

## 🗂 File Structure

```
todo-pwa/
├── index.html       ← The entire app
├── manifest.json    ← PWA install metadata
├── sw.js            ← Service worker (offline cache)
├── icons/
│   ├── icon-192.png ← App icon (192×192)
│   └── icon-512.png ← App icon (512×512)
└── README.md
```

---

## 🎨 Icons (required before deploying)

Generate two square PNG icons and place them in the `icons/` folder:
- `icon-192.png` — 192×192 px
- `icon-512.png` — 512×512 px

**Free tools:**
- https://favicon.io — generate from emoji (try ✅ or 📋)
- https://realfavicongenerator.net — full set from one image

---

## 🚀 Deploy to GitHub Pages (free hosting)

### Step 1 — Create a GitHub repo

```bash
git init
git add .
git commit -m "Initial commit: My Tasks PWA"
```

Go to github.com → New repository → name it `todo-app` (or anything) → Create.

```bash
git remote add origin https://github.com/YOUR_USERNAME/todo-app.git
git branch -M main
git push -u origin main
```

### Step 2 — Enable GitHub Pages

1. Go to your repo on GitHub
2. **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` / root → **Save**
5. Your app is live at:
   `https://YOUR_USERNAME.github.io/todo-app/`

> ⚠️ Update `manifest.json` → `"start_url"` to match your path if needed.

---

## 📱 Install on Your Phone (Home Screen)

### Android (Chrome)
1. Open your GitHub Pages URL in **Chrome**
2. Tap the **3-dot menu (⋮)**
3. Tap **"Add to Home screen"**
4. Name it "My Tasks" → **Add**

### iPhone (Safari)
1. Open your GitHub Pages URL in **Safari** (must be Safari, not Chrome)
2. Tap the **Share button** (□↑)
3. Scroll down → **"Add to Home Screen"**
4. Tap **Add**

The app will appear on your home screen with a green icon and open fullscreen, just like a native app.

---

## ☁️ Optional: Deploy to AWS

### AWS Amplify (easiest — auto-deploys from GitHub)
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. **Host a web app → GitHub → Connect repo**
3. Select your `todo-app` repo and `main` branch
4. Amplify detects static site automatically → **Save and deploy**
5. Done — every `git push` triggers a redeploy

### AWS S3 Static Hosting
1. Create an S3 bucket (same name as your domain if using Route 53)
2. Enable **Static website hosting** in bucket Properties
3. Upload all files (`index.html`, `manifest.json`, `sw.js`, `icons/`)
4. Set **Bucket Policy** to allow public read:

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
  }]
}
```

5. Optionally add **CloudFront** for HTTPS + custom domain

---

## 🔧 Local Development

No build step needed. Just open `index.html` in a browser.

For Service Worker to work locally, serve over HTTP (not file://):

```bash
# Python
python3 -m http.server 8080

# Node.js
npx serve .
```

Then open `http://localhost:8080`

---

## 📄 License
<<<<<<< HEAD
MIT — free to use, modify, and distribute.
=======
MIT — free to use, modify, and distribute.
>>>>>>> 7ab9ec9172a6b9d609f1ad4cf7df44486b78fd7e
