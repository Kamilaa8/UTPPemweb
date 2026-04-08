document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FITUR DARK/LIGHT MODE ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        // Menggunakan class toggle lebih aman daripada cek warna RGB
        body.classList.toggle('light-theme');
        
        if (body.classList.contains('light-theme')) {
            themeToggle.innerHTML = '<i class="fas fa-sun text-warning"></i>';
            // Opsional: Paksa style manual jika CSS class belum dibuat
            body.style.backgroundColor = '#ffffff';
            body.style.color = '#000000';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon text-warning"></i>';
            body.style.backgroundColor = '#000000';
            body.style.color = '#ffffff';
        }
    });

    // --- 2. DATA PENGALAMAN ---
    const dataPengalaman = {
        frontend: [
            { 
                judul: "Asisten Dosen Algoritma Pemrograman", 
                desc: "Membantu proses pembelajaran Python dan konsep algoritma, membimbing praktikum, serta membantu mahasiswa dalam memahami logika pemrograman dan penyelesaian masalah.", 
                tahun: "2026 - Aktif" 
            },
            { 
                judul: "Sekretaris Biro Kesekretariatan Himakom", 
                desc: "Mengelola administrasi organisasi, menyusun surat resmi dan laporan kegiatan, serta mengkoordinasikan dokumentasi dan arsip untuk mendukung kelancaran program kerja.", 
                tahun: "2026 - Aktif" 
            },
            { 
                judul: "Coach AIESEC Future Leaders Winter Peak 2025", 
                desc: "Membimbing peserta dalam pengembangan soft skills seperti leadership, komunikasi, dan teamwork, serta memfasilitasi diskusi dan aktivitas pengembangan diri.", 
                tahun: "2025"
            }
        ],
        uiux: [
            { 
                judul: "Sertifikasi Figma Dasar", 
                desc: "Menyelesaikan kursus online design system secara komprehensif untuk mendukung pembuatan antarmuka yang user-friendly.", 
                tahun: "2023" 
            },
            { 
                judul: "Redesign Web Kampus", 
                desc: "Membuat prototype high-fidelity menggunakan Figma dengan fokus pada peningkatan user experience bagi mahasiswa.", 
                tahun: "2023" 
            }
        ]
    };

    // --- 3. RENDER PENGALAMAN (DOM MANIPULATION) ---
    const skillBoxes = document.querySelectorAll('.skill-box');
    const expTitle = document.querySelector('.exp-title');
    const expContainer = document.querySelector('.mt-5 .col-12');

    function renderExperience(kategori) {
        // Hapus item lama
        const currentItems = document.querySelectorAll('.exp-item');
        currentItems.forEach(item => item.remove());

        // Ambil data
        const listData = (kategori === 'orange') ? dataPengalaman.frontend : dataPengalaman.uiux;
        expTitle.innerHTML = (kategori === 'orange') ? "EXPERIENCES" : "PROJECT UI/UX";

        // Buat elemen baru
        listData.forEach(data => {
            const expItem = document.createElement('div');
            expItem.className = 'exp-item'; // Class CSS yang sudah kita perbaiki tadi
            expItem.style.opacity = 0;

            // STRUKTUR BARU: Menggunakan exp-info agar sejajar dan rata kanan-kiri
            expItem.innerHTML = `
                <div class="exp-info">
                    <h5>${data.judul}</h5>
                    <p>${data.desc}</p>
                </div>
                <div class="exp-year">${data.tahun}</div>
            `;
            
            expContainer.appendChild(expItem);

            // Animasi Fade-in
            setTimeout(() => {
                expItem.style.transition = 'all 0.5s ease';
                expItem.style.opacity = 1;
            }, 50);
        });
    }

    // --- 4. EVENT LISTENERS ---
    skillBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Tambahkan sedikit feedback klik (skala kecil)
            box.style.transform = 'scale(0.95)';
            setTimeout(() => box.style.transform = 'scale(1)', 100);

            if (box.classList.contains('orange')) {
                renderExperience('orange');
            } else {
                renderExperience('neon');
            }
        });
    });

    // Jalankan pertama kali
    renderExperience('orange');
});