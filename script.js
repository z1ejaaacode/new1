// script.js - Lannefy Professional Logic Engine (V4 - Integrated with Termux Server)

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SETUP SIDEBAR & SCROLL ---
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebar = document.getElementById('closeSidebar');

    function toggleMenu() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        if(window.innerWidth <= 1024) {
            document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
        }
    }

    [menuToggle, closeSidebar, overlay].forEach(el => el.addEventListener('click', toggleMenu));

    const navLinks = document.querySelectorAll('.sidebar-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            if(window.innerWidth <= 1024) toggleMenu();
            
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if(target) window.scrollTo({ top: target.offsetTop - 90, behavior: 'smooth' });
        });
    });

    // --- 2. LOGIKA FORM ORDER 3 DROPDOWN ---
    const categoryDropdown = document.getElementById('categoryDropdown');
    const categoryOptions = document.getElementById('categoryOptions');
    const categorySelected = categoryDropdown.querySelector('.dropdown-selected span');
    
    const serviceDropdown = document.getElementById('serviceDropdown');
    const serviceOptions = document.getElementById('serviceOptions');
    const serviceSelected = serviceDropdown.querySelector('.dropdown-selected span');

    const packageDropdown = document.getElementById('packageDropdown');
    const packageOptions = document.getElementById('packageOptions');
    const packageSelected = packageDropdown.querySelector('.dropdown-selected span');

    const targetInput = document.getElementById('targetInput');
    
    let selectedPrice = 0; 
    let isPackageSelected = false; 

    const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num);

    function adjustFontSizeForLength(element) {
        const textLength = element.textContent.trim().length;
        if (textLength > 60) {
            element.style.fontSize = '0.75rem';
        } else if (textLength > 40) {
            element.style.fontSize = '0.8rem';
        } else if (textLength > 25) {
            element.style.fontSize = '0.85rem';
        } else {
            element.style.fontSize = '0.95rem';
        }
    }

    function setupDrop(el) {
        el.querySelector('.dropdown-selected').addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.custom-dropdown').forEach(d => { if(d !== el) d.classList.remove('open') });
            el.classList.toggle('open');
        });
    }
    
    setupDrop(categoryDropdown);
    setupDrop(serviceDropdown);
    setupDrop(packageDropdown);
    document.addEventListener('click', () => document.querySelectorAll('.custom-dropdown').forEach(d => d.classList.remove('open')));

    function loadCategories() {
        categoryOptions.innerHTML = '';
        smmData.forEach(cat => {
            const div = document.createElement('div');
            div.className = 'option-item';
            div.innerHTML = `<div class="option-content"><span><img src="${cat.icon}">${cat.name}</span></div>`;
            div.addEventListener('click', () => {
                categorySelected.innerHTML = `<img src="${cat.icon}">${cat.name}`;
                adjustFontSizeForLength(categorySelected); 
                loadServices(cat);
                categoryDropdown.classList.remove('open');
                showToast(`Kategori dipilih`);
            });
            categoryOptions.appendChild(div);
        });
    }

    function loadServices(cat) {
        serviceOptions.innerHTML = '';
        serviceSelected.innerHTML = 'Pilih Layanan...';
        serviceSelected.style.fontSize = '0.95rem'; 
        packageOptions.innerHTML = '';
        packageSelected.innerHTML = 'Pilih Daftar Harga...';
        packageSelected.style.fontSize = '0.95rem'; 
        isPackageSelected = false;
        resetDetails();

        cat.services.forEach(service => {
            const div = document.createElement('div');
            div.className = 'option-item';
            div.innerHTML = `<div class="option-content"><span>${service.name}</span></div>`;
            div.addEventListener('click', () => {
                serviceSelected.innerHTML = `<span>${service.name}</span>`;
                adjustFontSizeForLength(serviceSelected); 
                loadPackages(service); 
                serviceDropdown.classList.remove('open');
            });
            serviceOptions.appendChild(div);
        });
    }

    function loadPackages(service) {
        document.getElementById('infoEst').textContent = service.est;
        document.getElementById('infoDesc').textContent = service.desc;

        packageOptions.innerHTML = '';
        packageSelected.innerHTML = 'Pilih Paket Harga...';
        packageSelected.style.fontSize = '0.95rem'; 
        isPackageSelected = false;
        document.getElementById('totalPayText').textContent = 'Rp 0';

        service.packages.forEach(pkg => {
            const div = document.createElement('div');
            div.className = 'option-item';
            div.innerHTML = `<div class="option-content"><span>${pkg.name} - <strong>${formatRp(pkg.price)}</strong></span></div>`;
            div.addEventListener('click', () => {
                packageSelected.innerHTML = `<span>${pkg.name}</span>`;
                adjustFontSizeForLength(packageSelected); 
                selectedPrice = pkg.price;
                document.getElementById('totalPayText').textContent = formatRp(selectedPrice);
                isPackageSelected = true;
                packageDropdown.classList.remove('open');
                setTimeout(() => targetInput.focus(), 100);
            });
            packageOptions.appendChild(div);
        });
    }

    function resetDetails() {
        document.getElementById('infoEst').textContent = '-';
        document.getElementById('infoDesc').textContent = '-';
        document.getElementById('totalPayText').textContent = 'Rp 0';
        selectedPrice = 0;
    }

    if(typeof smmData !== 'undefined') loadCategories();

    targetInput.addEventListener('input', (e) => {
        let val = e.target.value.trim();
        if(val === '') return;
        const isUrl = /(http|https):\/\//.test(val) || val.includes('.com') || val.includes('/');
        if(!isUrl) {
            if(!val.startsWith('@')) e.target.value = '@' + val;
            if(val.startsWith('@@')) e.target.value = val.replace('@@', '@');
        } else {
            if(val.startsWith('@')) e.target.value = val.substring(1);
        }
    });

    function showToast(message) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // --- 5. PROGRESS BAR & INTEGRASI TERMUX ---
    const orderForm = document.getElementById('orderForm');
    const orderModal = document.getElementById('orderModal');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const progressPercent = document.getElementById('progressPercent');

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if(!isPackageSelected || targetInput.value.trim() === '') {
            alert('Lengkapi data pesanan terlebih dahulu!');
            return;
        }
        orderModal.classList.add('open');
        startProcessing();
    });

    function startProcessing() {
        let timer = 100;
        progressBar.style.width = '0%';
        
        // Warna Awal (Danger)
        progressBar.style.backgroundColor = 'var(--danger)';
        progressText.style.color = 'var(--danger)';
        
        const interval = setInterval(() => {
            timer--;
            let percent = 100 - timer;
            progressBar.style.width = percent + '%';
            progressPercent.textContent = percent + '%';

            if(percent < 30) {
                progressText.textContent = 'Membuat pesanan...';
            } else if(percent < 70) {
                // Warna Menengah (Warning)
                progressBar.style.backgroundColor = 'var(--warning)';
                progressText.style.color = 'var(--warning)';
                progressText.textContent = 'Menghubungkan ke server...';
            } else {
                // Warna Akhir (Success)
                progressBar.style.backgroundColor = 'var(--success)';
                progressText.style.color = 'var(--success)';
                progressText.textContent = 'Pesanan Berhasil! Mengalihkan...';
            }

            if(timer <= 0) {
                clearInterval(interval);
                
                const orderData = {
                    invoice: 'LNFY-' + Math.floor(Math.random() * 1000000),
                    kategori: categorySelected.innerText.trim(),
                    layanan: serviceSelected.innerText.trim(),
                    paket: packageSelected.innerText.trim(),
                    target: targetInput.value.trim(),
                    total: selectedPrice,
                    tanggal: new Date().toLocaleString('id-ID'),
                    status: 'Pending'
                };

                localStorage.setItem('lannefyOrder', JSON.stringify(orderData));

                fetch('http://localhost:3000/store-order', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(orderData)
                })
                .then(() => {
                    window.location.href = 'pay.html';
                })
                .catch(err => {
                    window.location.href = 'pay.html';
                });
            }
        }, 100);
    }

    // --- 6. FAQ & TESTIMONI LOGIC ---
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            const item = this.parentElement;
            const content = this.nextElementSibling;
            item.classList.toggle('active');
            content.style.maxHeight = item.classList.contains('active') ? content.scrollHeight + "px" : null;
        });
    });
});
