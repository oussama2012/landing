# Marasi Perfume Landing Page

A professional luxury perfume landing page with Google Sheets order form integration.

## Features

- **Luxury Design**: Black & gold theme with premium aesthetics
- **Bilingual Support**: Complete Arabic/English content
- **Responsive Layout**: Mobile, tablet, and desktop optimized
- **Order Form Integration**: Direct Google Sheets data collection
- **Product Showcase**: Multiple perfume color variants
- **Professional UI**: Modern animations and smooth interactions

## Live Demo

Open `index.html` in your browser to see the landing page in action.

## Project Structure

```
landing/
├── index.html              # Main landing page
├── style.css              # Luxury styling (black & gold theme)
├── script.js              # Interactive functionality
├── google-apps-script.js  # Google Sheets integration code
├── simple-test.html       # Form testing page
├── debug-test.html        # Debug testing page
├── test-form.html         # Additional test form
├── TROUBLESHOOTING.md     # Debugging guide
├── SETUP_INSTRUCTIONS.md  # Setup guide
└── assets/                # Images and media files
```

## Setup Instructions

### 1. Google Sheets Integration
1. Go to [script.google.com](https://script.google.com)
2. Create a new project
3. Copy the code from `google-apps-script.js`
4. Deploy as web app with "Anyone" access
5. Update the script URL in `index.html` (line 265)

### 2. Google Sheet Configuration
- Sheet ID: `1RLd7LbjH5yoj1JaWUa7hipULaVSpHuuLCkNTmtXzdMM`
- Headers: التاريخ والوقت, المنتج, الاسم, رقم الهاتف, العنوان, المدينة, الكمية, ملاحظات

### 3. Local Development
Simply open `index.html` in your web browser - no server required.

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox/Grid
- **JavaScript**: Interactive functionality
- **Google Apps Script**: Backend form processing
- **Google Sheets**: Data storage
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Playfair Display, Poppins)

## Responsive Design

- **Mobile**: Optimized for smartphones
- **Tablet**: Adapted layout for tablets
- **Desktop**: Full-featured experience

## Design Features

- Luxury black background with gold accents (#D4AF37, #FFD700)
- Professional typography with Arabic support
- Smooth animations and hover effects
- Modern card-based layout
- Bilingual content with RTL support

## Form Data Collection

The order form collects:
- Product selection (perfume colors)
- Customer name
- Phone number
- Address and city
- Quantity
- Additional notes
- Timestamp

## Troubleshooting

See `TROUBLESHOOTING.md` for common issues and solutions.

## License

This project is for Marasi Perfume company use.

## Contributing

This is a private project for Marasi Perfume. For modifications, contact the development team.

---

**Marasi Perfume** - Luxury fragrances for the modern individual
