// script.js
document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        // Ubah background body dari hitam ke putih atau sebaliknya
        if (body.style.backgroundColor === 'rgb(255, 255, 255)') {
            body.style.backgroundColor = '#000000';
            body.style.color = '#ffffff';
            themeToggle.innerHTML = '<i class="fas fa-moon text-warning"></i>';
        } else {
            body.style.backgroundColor = '#ffffff';
            body.style.color = '#000000';
            themeToggle.innerHTML = '<i class="fas fa-sun text-warning"></i>';
        }
    });

    // Ambil elemen yang dibutuhkan
    const skillBoxes = document.querySelectorAll('.skill-box');
    const expTitle = document.querySelector('.exp-title');
    const expContainer = document.querySelector('.mt-5 .col-12'); // Wadah daftar pengalaman

    // Data Pengalaman Palsu (Bisa kamu ganti dengan data asli)
    const dataPengalaman = {
        frontend: [
            { judul: "Asisten Praktikum Web", desc: "Mengajar HTML, CSS, JS Dasar", tahun: "2023" },
            { judul: "Project Web Portfolio UTP", desc: "Membangun web dengan konsep SPA", tahun: "2024" }
        ],
        uiux: [
            { judul: "Sertifikasi Figma Dasar", desc: "Menyelesaikan kursus online design system", tahun: "2023" },
            { judul: "Redesign Web Kampus", desc: "Membuat prototype high-fidelity", tahun: "2023" }
        ]
    };

    // Fungsi untuk merender daftar pengalaman secara dinamis
    function renderExperience(kategori) {
        // 1. Hapus daftar yang lama (kecuali judul utamanya)
        const currentItems = document.querySelectorAll('.exp-item');
        currentItems.forEach(item => item.remove());

        // 2. Ambil data yang sesuai kategori
        const listData = (kategori === 'orange') ? dataPengalaman.frontend : dataPengalaman.uiux;
        
        // Update Judul
        expTitle.innerHTML = (kategori === 'orange') ? "PENGALAMAN FRONTEND" : "PROYEK UI/UX";

        // 3. Buat elemen HTML baru untuk setiap data (DOM MANIPULATION)
        listData.forEach(data => {
            const expItem = document.createElement('div');
            expItem.className = 'exp-item d-flex justify-content-between align-items-center';
            expItem.style.opacity = 0; // Untuk animasi nanti

            expItem.innerHTML = `
                <div>
                    <h5 class="mb-1">${data.judul}</h5>
                    <p class="text-muted small mb-0">${data.desc}</p>
                </div>
                <div class="exp-year">${data.tahun}</div>
            `;
            
            expContainer.appendChild(expItem);

            // Tambahkan animasi muncul sedikit (Fitur Interaktif)
            setTimeout(() => {
                expItem.style.transition = 'opacity 0.5s ease';
                expItem.style.opacity = 1;
            }, 100);
        });
    }

    // Tambahkan Event Listener (Fitur Interaktif)
    skillBoxes.forEach(box => {
        box.addEventListener('click', () => {
            if (box.classList.contains('orange')) {
                renderExperience('orange');
            } else {
                renderExperience('neon');
            }
        });
    });

    // Render default saat pertama kali dimuat
    renderExperience('orange');
});

