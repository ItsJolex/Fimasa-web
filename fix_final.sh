#!/bin/bash

# 1. Instalar tailwind y configurar
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

cat << 'JS' > tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary-fixed-dim": "#ffb4a4",
        "inverse-on-surface": "#f0effc",
        "on-secondary-fixed": "#1b1b1b",
        "on-secondary": "#ffffff",
        "surface": "#fbf8ff",
        "inverse-surface": "#2f3039",
        "on-primary-fixed": "#001257",
        "secondary-container": "#e2e2e2",
        "on-primary": "#ffffff",
        "background": "#FFFFFF",
        "on-tertiary-container": "#ffae9b",
        "on-primary-container": "#b3bfff",
        "on-primary-fixed-variant": "#0033c1",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "secondary-fixed-dim": "#c6c6c6",
        "on-tertiary": "#ffffff",
        "surface-container-highest": "#e2e1ee",
        "on-tertiary-fixed-variant": "#8c1800",
        "on-secondary-fixed-variant": "#474747",
        "surface-container-high": "#e8e7f4",
        "primary-fixed": "#dde1ff",
        "surface-container-low": "#f3f2ff",
        "on-secondary-container": "#646464",
        "border-accent": "#E5E5E5",
        "primary-fixed-dim": "#b9c3ff",
        "secondary-fixed": "#e2e2e2",
        "primary": "#00299f",
        "inverse-primary": "#b9c3ff",
        "outline": "#747687",
        "on-tertiary-fixed": "#3d0600",
        "surface-container": "#eeedf9",
        "surface-dim": "#dad9e5",
        "text-main": "#000000",
        "tertiary-container": "#9b1e02",
        "primary-container": "#003ad7",
        "tertiary-fixed": "#ffdad3",
        "secondary": "#5e5e5e",
        "on-background": "#1a1b24",
        "surface-variant": "#e2e1ee",
        "surface-bright": "#fbf8ff",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#c4c5d8",
        "surface-tint": "#244ce5",
        "on-surface-variant": "#444655",
        "on-surface": "#1a1b24",
        "on-error-container": "#93000a",
        "tertiary": "#721200",
        "error": "#ba1a1a"
      },
      borderRadius: {
        "DEFAULT": "0px",
        "none": "0px",
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "0px"
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-xl": "2.5rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "margin": "2rem",
        "gutter": "1rem"
      },
      fontFamily: {
        "body-md": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "headline-md": ["Barlow Condensed", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-lg": ["Barlow Condensed", "sans-serif"],
        "headline-sm": ["Barlow Condensed", "sans-serif"],
        "headline-xl": ["Barlow Condensed", "sans-serif"]
      },
      fontSize: {
        "body-md": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
        "label-md": ["12px", { "lineHeight": "16px", "fontWeight": "600" }],
        "headline-md": ["24px", { "lineHeight": "28px", "fontWeight": "700" }],
        "body-sm": ["12px", { "lineHeight": "16px", "fontWeight": "400" }],
        "body-lg": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "headline-lg": ["32px", { "lineHeight": "38px", "fontWeight": "700" }],
        "headline-sm": ["18px", { "lineHeight": "22px", "fontWeight": "700" }],
        "headline-xl": ["40px", { "lineHeight": "48px", "fontWeight": "700" }]
      }
    }
  }
}
JS

cat << 'CSS' > src/style.css
@tailwind base;
@tailwind components;
@tailwind utilities;
CSS

# Eliminar CDN e inline config de index.html y vincular style.css
sed -i 's/<script src="https:\/\/cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>//g' index.html
sed -i '/<script id="tailwind-config">/,/<\/script>/d' index.html
sed -i '/<head>/a \    <link rel="stylesheet" href="/src/style.css" />' index.html

# 2. Fix broken anchors
sed -i 's/href="#catalogo"/href="#servicios"/g' index.html
sed -i 's/<a href="#">Aviso Legal<\/a>/<a href="#inicio">Aviso Legal<\/a>/g' index.html

# 3. Fix SEO og:image and og:url
sed -i '/<meta property="og:description"/a \    <meta property="og:image" content="https://famesa-web.vercel.app/images/image_1.webp" />\
    <meta property="og:url" content="https://famesa-web.vercel.app/" />' index.html

