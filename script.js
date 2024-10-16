window.onload = function() {
    // Animasi untuk Hero Section
    gsap.from(".hero-content h1", { duration: 1, opacity: 0, y: 50 });
    gsap.from(".hero-content p", { duration: 1.5, opacity: 0, y: 50, delay: 0.5 });
    gsap.from(".hero-content .btn-primary", { duration: 2, opacity: 0, y: 50, delay: 1 });

    // Animasi untuk About Section
    gsap.from(".about-content h2", { 
        scrollTrigger: ".about-section", 
        duration: 1, 
        opacity: 0, 
        y: 100 
    });
    gsap.from(".about-content p", { 
        scrollTrigger: ".about-section", 
        duration: 1.5, 
        opacity: 0, 
        y: 100, 
        delay: 0.5 
    });
    gsap.from(".about-image img", { 
        scrollTrigger: ".about-section", 
        duration: 1.5, 
        opacity: 0, 
        x: -100, 
        delay: 0.5 
    });

    // Animasi untuk Produk Section
    gsap.from(".product-item", {
        scrollTrigger: ".products-section",
        duration: 1,
        opacity: 0,
        stagger: 0.3,
        y: 100
    });

    // Animasi untuk Form di Contact Section
    gsap.from(".contact-form", {
        scrollTrigger: ".contact-section",
        duration: 1,
        opacity: 0,
        y: 100
    });
    gsap.from(".contact-info", {
        scrollTrigger: ".contact-section",
        duration: 1.5,
        opacity: 0,
        x: -100,
        delay: 0.5
    });
};

// Pilih semua elemen product-item
const products = document.querySelectorAll('.product-item');

// Iterasi setiap produk untuk menambahkan efek hover
products.forEach((product) => {
    // GSAP animasi hover masuk
    product.addEventListener('mouseenter', () => {
        gsap.to(product, { 
            duration: 0.5, 
            y: -10,  // Naik sedikit
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",  // Tambah shadow
            ease: "power2.out"  // Efek transisi smooth
        });
        gsap.to(product.querySelector('img'), { 
            duration: 0.5, 
            scale: 1.1,  // Zoom pada gambar
            ease: "power2.out"
        });
        gsap.to(product.querySelector('h3'), { 
            duration: 0.3, 
            color: "#28a745"  // Ubah warna judul menjadi hijau
        });
        gsap.to(product.querySelector('p'), { 
            duration: 0.3, 
            color: "#333"  // Ubah warna deskripsi menjadi lebih gelap
        });
    });

    // GSAP animasi hover keluar
    product.addEventListener('mouseleave', () => {
        gsap.to(product, { 
            duration: 0.5, 
            y: 0,  // Kembali ke posisi semula
            boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",  // Hilangkan shadow
            ease: "power2.out"
        });
        gsap.to(product.querySelector('img'), { 
            duration: 0.5, 
            scale: 1,  // Kembali ke ukuran asli
            ease: "power2.out"
        });
        gsap.to(product.querySelector('h3'), { 
            duration: 0.3, 
            color: "#333"  // Kembali ke warna semula
        });
        gsap.to(product.querySelector('p'), { 
            duration: 0.3, 
            color: "#666"  // Kembali ke warna semula
        });
    });
});

// Toggle the hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.createElement('div');

// Create a close button for the mobile menu
closeBtn.classList.add('close-btn');

navLinks.prepend(closeBtn);

// Add event listener to hamburger
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle active class to show/hide menu
    hamburger.classList.toggle('active'); // Toggle active class on hamburger
});

// Add event listener to close button
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active'); // Hide the menu
    hamburger.classList.remove('active'); // Remove active class on hamburger
});

// Menutup menu ketika salah satu link di menu diklik
navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});
