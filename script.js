document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATA PENGALAMAN (JSON Object) ---
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
                link: "https://www.figma.com/proto/VZvvlKDemAaffYvea4Pv1g/Tugas-2-RPL-Figma-Desain-UI?t=NIS2TNP9I6ISfwFj-1"
            },
            { 
                judul: "Web Rekam Medis", 
                desc: "Design sistem untuk menyimpan dan mengelola data kesehatan pasien secara digital.", 
                tahun: "2025",
                link: "https://www.figma.com/proto/fRzU5xHBZ5E9Qie9cjLlLI/Projek-Basis-Data-Sistem-Pencatatan-Rekam-Medis?node-id=0-1&t=NIS2TNP9I6ISfwFj-1"
            }
        ]
    };

    // --- 2. RENDER PENGALAMAN ---
    const skillBoxes = document.querySelectorAll('.skill-box');
    const expTitle = document.querySelector('.exp-title');
    const expContainer = document.querySelector('#experience-list'); 

    function renderExperience(kategori) {
        if (!expContainer) return;

        // Kosongkan container
        expContainer.innerHTML = '';

        // Pilih data
        const listData = (kategori === 'orange') ? dataPengalaman.frontend : dataPengalaman.uiux;
        
        if (expTitle) {
            expTitle.innerHTML = (kategori === 'orange') ? "EXPERIENCES" : "PROJECT UI/UX";
        }

        // Render item
        listData.forEach(data => {
            const expItem = document.createElement('div');
            expItem.className = 'exp-item';
            
            // Cek apakah ada link, kalau ada bungkus dengan tag <a>, kalau tidak biarkan teks biasa
            const content = `
                <div class="exp-info">
                    <h5>${data.judul}</h5>
                    <p>${data.desc}</p>
                </div>
                <div class="exp-year">${data.tahun}</div>
            `;

            // Jika ada link, bungkus innerHTML-nya
            if (data.link) {
                expItem.innerHTML = `<a href="${data.link}" target="_blank" style="text-decoration: none; color: inherit; display: flex; width: 100%; justify-content: space-between;">${content}</a>`;
                expItem.style.cursor = "pointer";
            } else {
                expItem.innerHTML = content;
            }

            expContainer.appendChild(expItem);
        });
    }

    // --- 3. EVENT LISTENERS SKILL BOX (Home Page) ---
    skillBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Animasi klik tipis
            box.style.transform = 'scale(0.95)';
            setTimeout(() => box.style.transform = 'scale(1)', 100);

            const kategori = box.classList.contains('orange') ? 'orange' : 'neon';
            renderExperience(kategori);
        });
    });

    // --- 4. SIMPLE GALLERY INTERACTION (About Page) ---
    const docCards = document.querySelectorAll('.documentation-card');

    docCards.forEach(card => {
        card.addEventListener('click', () => {
            // Hanya tambah shadow tanpa merusak rotasi/layout
            docCards.forEach(c => c.style.boxShadow = 'none');
            card.style.boxShadow = '0 0 20px rgba(204, 255, 0, 0.4)';
        });
    });

    // Jalankan default render
    renderExperience('orange');
});