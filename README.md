# Avani J C — Portfolio Website

A dark, futuristic personal portfolio website built with pure HTML, CSS, and JavaScript.

## 📁 File Structure

avani-portfolio/
├── index.html          ← Main HTML file (entry point)
├── css/
│   ├── style.css       ← Main styles (theme, layout, components)
│   └── animations.css  ← Scroll reveal & animation keyframes
├── js/
│   ├── main.js         ← Core interactions (cursor, nav, typewriter, form)
│   ├── particles.js    ← Canvas particle background
│   └── animations.js   ← Scroll effects, tilt, glitch, progress bar
├── assets/             ← Add your profile photo or other images here
└── README.md           ← This file
```
## 🚀 How to Run

### Option 1: VS Code Live Server (Recommended)
1. Open the `avani-portfolio/` folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Opens at `http://127.0.0.1:5500`

### Option 2: Direct Browser
- Simply double-click `index.html` to open in your browser
- Note: Some features work best with a local server

## ✏️ How to Customize

### Update Your Info
All personal content is in `index.html`. Search for these sections:
- **Hero** → Name, tagline, subtitle
- **About** → Bio paragraph, highlights
- **Skills** → Pill tags and bar percentages
- **Projects** → Title, description, tech stack, GitHub links
- **Certifications** → Cert name, issuer, badge
- **Contact** → Email, phone, social links

### Add a Profile Photo
1. Place your photo in the `assets/` folder (e.g., `assets/avatar.jpg`)
2. In `index.html`, find `.avatar-core` and replace the initials with:
```html
<img src="assets/avatar.jpg" alt="Avani J C" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">
```

### Add Real Project Links
Find each `.proj-link` anchor in the Projects section and update `href="#"` with your GitHub repo URL.

### Connect Contact Form
To make the form actually send emails, integrate **EmailJS**:
1. Sign up at https://emailjs.com
2. Add their SDK before `</body>`
3. Replace the `setTimeout` in `main.js` form handler with `emailjs.send(...)` call

### Change Accent Color
In `css/style.css`, update these CSS variables:
```css
--cyan: #00f7ff;       /* Primary accent */
--purple: #7c3aed;     /* Secondary accent */
```

## 🎨 Features
- ✅ Custom animated cursor with trail
- ✅ Particle background with mouse interaction
- ✅ Typewriter effect (hero section)
- ✅ Scroll reveal animations
- ✅ Skill bar animations (triggered on scroll)
- ✅ 3D tilt effect on project/cert cards
- ✅ Glitch text effect on section titles (hover)
- ✅ Scroll progress bar
- ✅ Mobile responsive with hamburger menu
- ✅ Neon glow effects throughout
- ✅ Animated orbital rings (hero visual)
- ✅ Floating tech tags

## 📱 Responsive Breakpoints
- Desktop: 1024px+
- Tablet: 768px–1024px
- Mobile: < 768px

## 🛠️ Built With
- HTML5, CSS3, Vanilla JavaScript
- Google Fonts: Orbitron, Syne, JetBrains Mono
- No frameworks, no dependencies!