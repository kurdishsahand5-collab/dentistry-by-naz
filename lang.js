// lang.js — Add this to every page with: <script src="lang.js"></script>
// Place this file in your GitHub repository root

(function() {
// Map of English pages to their Kurdish equivalents
const langMap = {
‘index.html’:       ‘index-ckb.html’,
‘gallery.html’:     ‘gallery-ckb.html’,
‘about.html’:       ‘about-ckb.html’,
‘services.html’:    ‘services-ckb.html’,
‘contact.html’:     ‘contact-ckb.html’,
‘booking.html’:     ‘booking-ckb.html’,
};

// Reverse map: Kurdish → English
const reverseLangMap = {};
for (const [en, ckb] of Object.entries(langMap)) {
reverseLangMap[ckb] = en;
}

// Get current page filename
const path = window.location.pathname;
const page = path.split(’/’).pop() || ‘index.html’;

// Detect if current page is Kurdish or English
const isKurdish = page.includes(’-ckb’);
const savedLang = localStorage.getItem(‘preferred-lang’);

// On page load: redirect if language doesn’t match saved preference
if (savedLang === ‘ckb’ && !isKurdish) {
const kurdishPage = langMap[page];
if (kurdishPage) {
window.location.replace(kurdishPage);
return;
}
}

if (savedLang === ‘en’ && isKurdish) {
const englishPage = reverseLangMap[page];
if (englishPage) {
window.location.replace(englishPage);
return;
}
}

// Save language based on current page
if (isKurdish) {
localStorage.setItem(‘preferred-lang’, ‘ckb’);
} else {
localStorage.setItem(‘preferred-lang’, ‘en’);
}

// When user clicks a language switcher button, save choice
document.addEventListener(‘DOMContentLoaded’, function() {
document.querySelectorAll(’.lang-btn’).forEach(function(btn) {
btn.addEventListener(‘click’, function() {
const href = btn.getAttribute(‘href’);
if (href && href.includes(’-ckb’)) {
localStorage.setItem(‘preferred-lang’, ‘ckb’);
} else {
localStorage.setItem(‘preferred-lang’, ‘en’);
}
});
});
});
})();
