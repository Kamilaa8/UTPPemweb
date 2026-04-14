document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATA PENGALAMAN (Untuk Halaman Index/Home) ---
    const dataPengalaman = {
        frontend: [
            { 
                judul: "Asisten Dosen Algoritma Pemrograman", 
                desc: "Membantu proses pembelajaran Python dan konsep algoritma, membimbing praktikum, serta membantu mahasiswa dalam memahami logika pemrograman.", 
                tahun: "2026 - Aktif" 
            },
            { 
                judul: "Sekretaris Biro Kesekretariatan Himakom", 
                desc: "Mengelola administrasi organisasi, menyusun surat resmi, dan mengkoordinasikan dokumentasi untuk kelancaran program kerja.", 
                tahun: "2026 - Aktif" 
            },
            { 
                judul: "Coach AIESEC Future Leaders 2025", 
                desc: "Membimbing peserta dalam pengembangan soft skills seperti leadership, komunikasi, dan teamwork.", 
                tahun: "2025"
            }
        ],
        uiux: [
            { 
                judul: "UI App RELIS", 
                desc: "Design aplikasi untuk mendaftarkan diri menjadi relawan tempat terjadinya bencana alam.", 
                tahun: "2026",
            },
            { 
                judul: "Web Rekam Medis", 
                desc: "Design sistem untuk menyimpan dan mengelola data kesehatan pasien secara digital.", 
                tahun: "2025"
            }
        ]
    };

    // --- 2. RENDER PENGALAMAN (Home Page) ---
    const skillBoxes = document.querySelectorAll('.skill-box');
    const expTitle = document.querySelector('.exp-title');
    const expContainer = document.querySelector('#experience-list'); 

    function renderExperience(kategori) {
        if (!expContainer) return;

        expContainer.innerHTML = '';
        const listData = (kategori === 'orange') ? dataPengalaman.frontend : dataPengalaman.uiux;
        
        if (expTitle) {
            expTitle.innerHTML = (kategori === 'orange') ? "EXPERIENCES" : "PROJECT UI/UX";
        }

        listData.forEach(data => {
            const expItem = document.createElement('div');
            expItem.className = 'exp-item';
            
            const content = `
                <div class="exp-info">
                    <h5>${data.judul}</h5>
                    <p>${data.desc}</p>
                </div>
                <div class="exp-year">${data.tahun}</div>
            `;

            if (kategori === 'neon') {
                expItem.style.cursor = 'pointer';
                expItem.innerHTML = `<a href="projects.html" style="text-decoration: none; color: inherit; display: flex; width: 100%; justify-content: space-between;">${content}</a>`;
            } else {
                expItem.innerHTML = `<a href="about.html" style="text-decoration: none; color: inherit; display: flex; width: 100%; justify-content: space-between;">${content}</a>`;
            }

            expContainer.appendChild(expItem);
        });
    }

    // --- 3. EVENT LISTENERS SKILL BOX (Home Page) ---
    skillBoxes.forEach(box => {
        box.addEventListener('click', () => {
            box.style.transform = 'scale(0.95)';
            setTimeout(() => box.style.transform = 'scale(1)', 100);
            const kategori = box.classList.contains('orange') ? 'orange' : 'neon';
            renderExperience(kategori);
        });
    });

    // --- 4. GALLERY INTERACTION (About Page) ---
    const docCards = document.querySelectorAll('.documentation-card');
    docCards.forEach(card => {
        card.addEventListener('click', () => {
            docCards.forEach(c => c.style.boxShadow = 'none');
            card.style.boxShadow = '0 0 20px rgba(204, 255, 0, 0.4)';
        });
    });

    // --- 5. FOLDER STACK INTERACTION (Projects Page) ---
    const folders = document.querySelectorAll('.folder-card-full');

    if (folders.length > 0) {
        folders.forEach((folder, index) => {
            // Berikan z-index awal berdasarkan urutan
            folder.style.zIndex = index;

            folder.addEventListener('click', () => {
                const isActive = folder.classList.contains('active');

                // Reset semua folder
                folders.forEach((f, i) => {
                    f.classList.remove('active');
                    f.style.zIndex = i;
                });

                // Jika yang diklik belum aktif, buka dan naikkan ke paling depan
                if (!isActive) {
                    folder.classList.add('active');
                    folder.style.zIndex = "999";
                }
            });
        });
    }

    // --- 6. INITIALIZATION ---
    if (expContainer) renderExperience('orange');
});