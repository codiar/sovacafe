// --- 1. CINEMATIC INTRO LOGIC ---
document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById('intro');
    const drop = document.getElementById('coffeeDrop');
    const ripple = document.getElementById('coffeeRipple');
    const logo = document.getElementById('introLogo');
    const steam = document.getElementById('steam');

    // Sequence Timing
    setTimeout(() => {
        drop.style.display = 'none';
        ripple.style.animation = 'rippleEffect 1.5s ease-out forwards';
        
        setTimeout(() => {
            logo.style.animation = 'fadeInScale 1.5s ease-out forwards';
            steam.style.opacity = '1';
            steam.style.animation = 'steamRise 4s infinite ease-in-out';
            
            // Trigger Hero Animations
            setTimeout(() => {
                intro.style.opacity = '0';
                document.body.style.overflowY = 'auto'; // Enable scroll
                
                setTimeout(() => {
                    intro.style.display = 'none';
                    document.querySelector('.hero-title').style.transition = 'all 1s ease';
                    document.querySelector('.hero-title').style.opacity = '1';
                    document.querySelector('.hero-title').style.transform = 'translateY(0)';
                    
                    document.querySelector('.hero-subtitle').style.transition = 'all 1s ease 0.3s';
                    document.querySelector('.hero-subtitle').style.opacity = '1';
                    document.querySelector('.hero-subtitle').style.transform = 'translateY(0)';
                }, 1000);
            }, 2500); // Time looking at logo
        }, 400); // Time after ripple starts
    }, 1900); // Time of drop fall
});

// --- 2. MOBILE MENU TOGGLE ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// --- 3. MENU DATA (Extracted from user images) ---
const WHATSAPP_NUMBER = "9647892966486"; // Replace with real number

const menuData = [
    // Hot Coffee
    { id: 1, category: "مشروبات ساخنة", nameAr: "كلاسك لاتيه", nameEn: "Classic Latte", price: 4500 },
    { id: 2, category: "مشروبات ساخنة", nameAr: "زعفران لاتيه", nameEn: "Saffron Latte", price: 5500 },
    { id: 3, category: "مشروبات ساخنة", nameAr: "سبانش لاتيه", nameEn: "Spanish Latte", price: 4500 },
    { id: 4, category: "مشروبات ساخنة", nameAr: "كراميل ميكاتو", nameEn: "Caramel Macchiato", price: 4500 },
    { id: 5, category: "مشروبات ساخنة", nameAr: "موكا", nameEn: "Mocha", price: 4500 },
    { id: 6, category: "مشروبات ساخنة", nameAr: "كابوتشينو", nameEn: "Cappuccino", price: 4000 },
    { id: 7, category: "مشروبات ساخنة", nameAr: "فلات وايت", nameEn: "Flat White", price: 4000 },
    { id: 8, category: "مشروبات ساخنة", nameAr: "راف سوفا", nameEn: "Raf Sova", price: 5000 },
    { id: 9, category: "مشروبات ساخنة", nameAr: "كورتادو", nameEn: "Cortado", price: 4000 },
    
    // Cold Coffee
    { id: 10, category: "مشروبات باردة", nameAr: "ايس كراميل لاتيه", nameEn: "Ice Caramel Latte", price: 4000 },
    { id: 11, category: "مشروبات باردة", nameAr: "ايس زعفران لاتيه", nameEn: "Ice Saffron Latte", price: 5500 },
    { id: 12, category: "مشروبات باردة", nameAr: "ايس كراميل ميكاتو", nameEn: "Ice Caramel Macchiato", price: 4500 },
    { id: 13, category: "مشروبات باردة", nameAr: "ايس موكا", nameEn: "Ice Mocha", price: 4500 },
    { id: 14, category: "مشروبات باردة", nameAr: "ايس لاتيه", nameEn: "Ice Latte", price: 4000 },
    { id: 15, category: "مشروبات باردة", nameAr: "ايس سبانش لاتيه", nameEn: "Ice Spanish Latte", price: 4500 },
    { id: 16, category: "مشروبات باردة", nameAr: "ايس أمريكانو", nameEn: "Ice Americano", price: 3500 },
    { id: 17, category: "مشروبات باردة", nameAr: "راف سوفا", nameEn: "Raf Sova", price: 5000 },

    // Tea
    { id: 18, category: "شاي", nameAr: "شاي عادي", nameEn: "Normal Tea", price: 1500 },
    { id: 19, category: "شاي", nameAr: "شاي كرك", nameEn: "Karak Tea", price: 3500 },
    { id: 20, category: "شاي", nameAr: "شاي ديلما", nameEn: "Dilmah Tea", price: 2000 },
    { id: 21, category: "شاي", nameAr: "ماء", nameEn: "Water", price: 500 },

    // Juices
    { id: 22, category: "عصائر", nameAr: "برتقال", nameEn: "Orange", price: 4000 },
    { id: 23, category: "عصائر", nameAr: "ليمون", nameEn: "Lemon", price: 4000 },
    { id: 24, category: "عصائر", nameAr: "ليمون نعناع", nameEn: "Lemon Mint", price: 4000 },
    { id: 25, category: "عصائر", nameAr: "فراولة", nameEn: "Strawberry", price: 4000 },
    { id: 26, category: "عصائر", nameAr: "أناناس", nameEn: "Pineapple", price: 4000 },
    { id: 27, category: "عصائر", nameAr: "مانجو", nameEn: "Mango", price: 4000 },
    { id: 28, category: "عصائر", nameAr: "رمان", nameEn: "Pomegranate", price: 4000 },
    { id: 29, category: "عصائر", nameAr: "كوكتيل", nameEn: "Cocktail", price: 4500 }
];

// --- 4. RENDER MENU ---
const menuGrid = document.getElementById('menuGrid');
const filterContainer = document.getElementById('menuFilters');

// Extract Unique Categories
const categories = ["الكل", ...new Set(menuData.map(item => item.category))];

// Create Filter Buttons
categories.forEach((cat, index) => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${index === 0 ? 'active' : ''}`;
    btn.innerText = cat;
    btn.onclick = () => filterMenu(cat, btn);
    filterContainer.appendChild(btn);
});

// Generate WhatsApp Link
function getWhatsAppLink(item) {
    const text = `مرحباً SOVA CAFE،%0Aأود طلب:%0A☕ ${item.nameAr} (${item.nameEn})%0A💰 السعر: ${item.price} دينار%0Aالكمية: [أدخل الكمية هنا]`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function renderCards(data) {
    menuGrid.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card reveal active'; // active immediately for filtered items
        card.innerHTML = `
            <div>
                <div class="menu-item-header">
                    <div>
                        <span class="menu-title">${item.nameAr}</span>
                        <span class="menu-title-en en-text">${item.nameEn}</span>
                    </div>
                    <span class="menu-price">${item.price} IQD</span>
                </div>
            </div>
            <a href="${getWhatsAppLink(item)}" target="_blank" class="order-btn">
                <i class="fa-brands fa-whatsapp"></i> اطلب عبر واتساب
            </a>
        `;
        menuGrid.appendChild(card);
    });
}

function filterMenu(category, btnElement) {
    // Update Active Class
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');

    // Filter Data
    if(category === "الكل") {
        renderCards(menuData);
    } else {
        const filtered = menuData.filter(item => item.category === category);
        renderCards(filtered);
    }
}

// Initial Render
renderCards(menuData);

// --- 5. SCROLL EFFECTS & NAVBAR ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation via Intersection Observer
const revealElements = document.querySelectorAll('.reveal:not(.menu-card)'); // Exclude menu cards from scroll reveal to prevent jumping on filter

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));
