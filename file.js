
const contentData = {
    'series': {
        subtitle: 'Lineup Terbaru',
        title: 'Galaxy S26 Series',
        desc: 'Era baru Galaxy AI telah tiba untuk semua varian.',
        img: 'all-series-main.png',
        color: '#000000'
    },
    'base-plus': {
        subtitle: 'The New Standard',
        title: 'Galaxy S26 | S26+',
        desc: 'Pilih ukuranmu. Performa flagship yang sama hebatnya.',
        img: 's26-and-plus.png', // Gambar yang menampilkan kedua HP berdampingan
        color: '#121212'
    },
    'ultra': {
        subtitle: 'The Ultimate Power',
        title: 'Galaxy S26 Ultra',
        desc: 'Kamera 200MP dan S Pen. Standar baru smartphone premium.',
        img: 's26-ultra-violet.png',
        color: '#050505'
    }
};

function updateHero(type) {
    const data = contentData[type];
    const imgElement = document.getElementById('main-hero-img');
    const textContainer = document.getElementById('hero-text-container');
    
    // Animasi keluar
    imgElement.style.opacity = '0';
    imgElement.style.transform = 'translateX(50px)'; // Efek geser ke kanan
    textContainer.style.opacity = '0';

    setTimeout(() => {
        // Ganti Konten
        document.getElementById('hero-subtitle').innerText = data.subtitle;
        document.getElementById('hero-title').innerText = data.title;
        document.getElementById('hero-description').innerText = data.desc;
        imgElement.src = data.img;
        document.getElementById('hero').style.background = data.color;

        // Animasi masuk
        imgElement.style.opacity = '1';
        imgElement.style.transform = 'translateX(0)';
        textContainer.style.opacity = '1';
    }, 400);
}
    // 1. Daftar gambar sesuai jumlah model (3 tampilan)
    const images = [
        'Samsung S26 series.jpg', // Gambar 1
        'Samsung S26 Ultra.jpg',  // Gambar 2
        'Samsung S26+.jpg'   // Gambar 3
    ];

    let currentIndex = 0;
    const heroImg = document.getElementById('main-hero-img');

    // 2. Fungsi untuk mengubah gambar
    function updateDisplay() {
        // Efek transisi halus (fade out)
        heroImg.style.opacity = '0.5';
        
        setTimeout(() => {
            heroImg.src = images[currentIndex];
            heroImg.style.opacity = '1';
        }, 200);
    }

    // 3. Logika Tombol Next
    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateDisplay();
    }

    // 4. Logika Tombol Prev
    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateDisplay();
    }

    // 5. Otomatis geser setiap 5 detik
    setInterval(nextSlide, 5000);

    const colorSlider = document.getElementById('productColorSlider');
    const colorText = document.getElementById('colorDisplayName');

    // Fungsi untuk mendeteksi perpindahan slide
    colorSlider.addEventListener('slide.bs.carousel', function (e) {
        // Ambil nama warna dari atribut data-color-name pada slide yang akan muncul
        const nextColor = e.relatedTarget.getAttribute('data-color-name');
        colorText.innerText = nextColor;
    });

// 1. Fungsi untuk memindahkan slide saat Dot Warna diklik
function goToColor(index) {
    const sliderEl = document.querySelector('#productColorSlider');
    const carousel = bootstrap.Carousel.getOrCreateInstance(sliderEl);
    carousel.to(index);
}

// 2. Event Listener untuk mengubah teks nama warna saat gambar digeser
document.addEventListener('DOMContentLoaded', function() {
    const sliderEl = document.getElementById('productColorSlider');
    const colorText = document.getElementById('colorDisplayName');

    if (sliderEl) {
        sliderEl.addEventListener('slid.bs.carousel', function (event) {
            // Ambil atribut data-bs-color dari item yang sedang aktif
            const activeItem = event.relatedTarget;
            const colorName = activeItem.getAttribute('data-bs-color');
            
            // Ubah teks dengan animasi fade sederhana
            colorText.style.opacity = '0';
            setTimeout(() => {
                colorText.innerText = colorName;
                colorText.style.opacity = '1';
            }, 200);
        });
    }
});