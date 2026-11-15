# Makmul Sidogede

Responsive frontend snack storefront, continuing the cream/coral visual identity of the Makmul promo video. Built with semantic HTML, CSS, vanilla JavaScript and Vite. No backend, tracking, payment gateway, or real order submission.

## Run

npm install
npm run dev
npm test
npm run build
npm run preview

## Features

Seven requested snacks; category/search/favorite filters; sorting; product details with ingredient reference notes; persistent local cart; quantity controls; surprise mix box; honest checkout simulation and copyable summary; accessible native dialogs; mobile cart bar; reduced-motion support.

Prices, ingredients, serving sizes and product descriptions are illustrative, not verified commercial data. All photos are reference serving photos, not photographs of Makmul's products. Generic risol photos may illustrate several filling variants. Photo origins and licenses: public/images/CREDITS.json. Retain credits and any required attribution when republishing.

## Deployment

Vercel: framework Vite, build command npm run build, output directory dist. The repository includes no secrets. Configure a production deployment from main.

## Tests

npm test runs catalog, filtering, ordering, cart sanitization and subtotal checks. tests/browser-check.mjs exercises filters, favorites, cart quantity/subtotal, persistence, checkout disclaimer, page errors and horizontal overflow at 1440/768/390/360px. Its local Chromium path must be adjusted on another machine.

Production readiness requires confirmed menu/prices, real product photography, fulfillment/contact details, food/allergen information, and a separate backend/payment integration if real commerce is wanted.
