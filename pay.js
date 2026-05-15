// pay.js - Lannefy Checkout Logic Full (Persistent Timer 10 Min + Upload Fitur)

document.addEventListener('DOMContentLoaded', () => {

    const rawData = localStorage.getItem('lannefyOrder');
    
    if (!rawData) {
        alert('Data pesanan tidak ditemukan. Silakan buat pesanan kembali.');
        window.location.href = 'index.html';
        return;
    }

    const orderData = JSON.parse(rawData);
    const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num);

    // Ambil elemen DOM
    const elKategori = document.getElementById('detKategori');
    const elLayanan = document.getElementById('detLayanan');
    const elPaket = document.getElementById('detPaket');
    const elTarget = document.getElementById('detTarget');

    // Isi Data
    document.getElementById('invId').textContent = orderData.invoice;
    elKategori.textContent = orderData.kategori;
    elLayanan.textContent = orderData.layanan;
    elPaket.textContent = orderData.paket;
    elTarget.textContent = orderData.target;
    
    const totalRupiah = formatRp(orderData.total);
    document.getElementById('detTotal').textContent = totalRupiah;

    // Fungsi Dinamis Mengecilkan Teks Panjang
    function adjustFontSizeForLength(element) {
        const textLength = element.textContent.length;
        if (textLength > 60) {
            element.style.fontSize = '0.7rem';
        } else if (textLength > 40) {
            element.style.fontSize = '0.75rem';
        } else if (textLength > 25) {
            element.style.fontSize = '0.85rem';
        }
    }

    adjustFontSizeForLength(elLayanan);
    adjustFontSizeForLength(elPaket);
    adjustFontSizeForLength(elTarget);

    // Tombol Salin Nominal
    document.getElementById('copyTotal').addEventListener('click', () => {
        navigator.clipboard.writeText(orderData.total);
        showToast('Nominal berhasil disalin!');
    });

    // Logika Unduh Gambar QRIS
    document.getElementById('btnDownloadQris').addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'pict/qrpay.jpg'; 
        link.download = 'QRIS_Lannefy.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('QRIS sedang diunduh...');
    });

    // --- SETUP FORMAT PESANAN WHATSAPP ---
    const adminWA = "6283894934396"; 
    
    const rawWaText = `Halo Admin Lannefy.id, saya sudah melakukan pembayaran! 🚀\n\n` +
                      `*DETAIL PESANAN*\n` +
                      `No. Invoice: ${orderData.invoice}\n` +
                      `Kategori: ${orderData.kategori}\n` +
                      `Layanan: ${orderData.layanan}\n` +
                      `Paket: ${orderData.paket}\n` +
                      `Target: ${orderData.target}\n` +
                      `*Total Bayar: ${totalRupiah}*\n\n` +
                      `Berikut saya lampirkan bukti transfer. Tolong segera diproses ya min!`;

    const encodedWaText = encodeURIComponent(rawWaText);
    document.getElementById('btnConfirmWa').href = `https://wa.me/${adminWA}?text=${encodedWaText}`;

    // Logika Tombol Buat Ulang Pesanan
    document.getElementById('btnResetOrder').addEventListener('click', () => {
        if(confirm("Yakin ingin membatalkan pesanan ini dan membuat ulang?")) {
            localStorage.removeItem('lannefyOrder');
            window.location.href = 'index.html';
        }
    });

    // --- TIMER PERSISTENT (SET KE 10 MENIT) ---
    const totalWaktu = 10 * 60; // 600 Detik (10 Menit)
    
    if (!orderData.expireTime) {
        orderData.expireTime = Date.now() + (totalWaktu * 1000);
        localStorage.setItem('lannefyOrder', JSON.stringify(orderData));
    }

    const timerText = document.getElementById('countdownTimer');
    const progressBar = document.getElementById('timerProgress');

    function handleExpired() {
        timerText.textContent = "00:00";
        progressBar.style.width = '0%';
        alert("Waktu pembayaran telah habis. Silakan buat pesanan ulang.");
        localStorage.removeItem('lannefyOrder');
        window.location.href = 'index.html';
    }

    const countdownInterval = setInterval(() => {
        let sisaWaktu = Math.floor((orderData.expireTime - Date.now()) / 1000);

        if (sisaWaktu <= 0) {
            clearInterval(countdownInterval);
            handleExpired();
            return;
        }

        let menit = Math.floor(sisaWaktu / 60);
        let detik = sisaWaktu % 60;
        timerText.textContent = `${menit.toString().padStart(2, '0')}:${detik.toString().padStart(2, '0')}`;

        let percent = (sisaWaktu / totalWaktu) * 100;
        progressBar.style.width = Math.min(percent, 100) + '%';

        // Perubahan Warna Progress Bar
        if (sisaWaktu <= 300 && sisaWaktu > 120) { // Kuning saat sisa 5 menit
            progressBar.className = 'progress-fill bg-oren';
            timerText.className = 'countdown-text text-oren';
        }
        else if (sisaWaktu <= 120) { // Merah saat sisa 2 menit
            progressBar.className = 'progress-fill bg-red';
            timerText.className = 'countdown-text text-red';
        }
    }, 1000); 

    // --- LOGIKA UPLOAD BUKTI PEMBAYARAN ---
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileUpload');
    const uploadPlaceholder = document.getElementById('uploadPlaceholder');
    const uploadPreview = document.getElementById('uploadPreview');
    const imgPreview = document.getElementById('imgPreview');
    const btnRemoveFile = document.getElementById('btnRemoveFile');
    const btnConfirmWa = document.getElementById('btnConfirmWa');

    uploadArea.addEventListener('click', (e) => {
        if (e.target !== btnRemoveFile && !e.target.closest('#btnRemoveFile')) {
            fileInput.click();
        }
    });

    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                alert('Ukuran file maksimal 2MB!');
                this.value = '';
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                imgPreview.src = e.target.result;
                uploadPlaceholder.classList.add('hidden');
                uploadPreview.classList.remove('hidden');
                
                // MUNCULKAN TOMBOL WA
                btnConfirmWa.classList.remove('hidden');
                
                uploadArea.style.border = 'none';
                uploadArea.style.padding = '0';
                
                showToast('Bukti transfer berhasil diunggah!');
                
                // Scroll agar tombol WA terlihat jelas
                setTimeout(() => {
                    btnConfirmWa.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 200);
            }
            reader.readAsDataURL(file);
        }
    });

    btnRemoveFile.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.value = '';
        imgPreview.src = '';
        uploadPlaceholder.classList.remove('hidden');
        uploadPreview.classList.add('hidden');
        
        // SEMBUNYIKAN TOMBOL WA
        btnConfirmWa.classList.add('hidden');
        
        uploadArea.style.border = '2px dashed #000000';
        uploadArea.style.padding = '30px 15px';
    });

    // Efek Drag & Drop Upload
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.backgroundColor = '#E2E8F0';
    });
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.backgroundColor = '#FAFAFA';
    });
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.backgroundColor = '#FAFAFA';
        if (e.dataTransfer.files.length > 0) {
            fileInput.files = e.dataTransfer.files;
            fileInput.dispatchEvent(new Event('change')); 
        }
    });

    // --- FUNGSI TOAST ---
    function showToast(message) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400); 
        }, 3000);
    }
});
