// price.js - Database Layanan Lannefy V3 (Sistem Daftar Harga/Paket)

const smmData = [
    {
        id: 'cat_ig',
        name: 'Instagram',
        icon: 'pict/instagram.png',
        services: [
        {
        id: 'ig_fol_1',
                name: 'Followers Instagram Kualitas Medium | High Drop',
                est: 'Cepat | Start 0-1 Jam',
                desc: 'Kualitas Layanan : Kualitas Menengah | Rate drop : 40-60%',
                packages: [
            {name: '1000 Followers', price: 15000 },
            {name: '2000 Followers', price: 18000 },
            {name: '3000 Followers', price: 26000 },
            {name: '4000 Followers', price: 35000 },
            {name: '5000 Followers', price: 40000 },
            {name: '7000 Followers', price: 55000 },
            {name: '10.000 Followers', price: 86000 }
           ] 
        },
        
            {
                id: 'ig_fol_g',
                name: 'Followers Instagram Kualitas Tinggi | Permanen 80-88% | Best Seller ',
                est: 'Super Cepat! | 15-25 Menit Selesai',
                desc: 'Kualitas Layanan : Kualitas tinggi | Rate drop : 12-20% | Best Seller!',
                packages: [
                
                    { name: '500 Followers', price: 15000 },
                    { name: '1000 Followers', price: 18000 },
                    { name: '2000 Followers', price: 36000 },
                { name: '3000 Followers', price: 53000 },
                { name: '4000 Followers', price: 67000 },
                    { name: '5000 Followers', price: 83000 },
                { name: '10.000 Followers', price: 170000 }
                ]
            },
        
        {
        id: 'ig_fol_c',
                name: 'Followers Instagram Indonesia Kualitas Tinggi',
                est: 'Lambat | Start 1×24 Jam',
                desc: 'Kualitas Layanan : Akun Indonesia Kualitas Tinggi | Permanen rate (%) 80-90%! | Layanan terbaik dengan presentase penurunan rendah. | RECOMMENDED | Cocok untuk kamu yang mencari followers permanen dengan harga tidak terlalu tinggi.',
                packages: [
            
                            { name: '250 Followers', price: 15000 },
                    { name: '500 Followers', price: 31000 },
                    { name: '700 Followers', price: 43000 },
                { name: '1000 Followers', price: 57000 }
                ]
            },
        
        { 
            id: 'id_foll_10',
            name: 'Followers Instagram Indonesia | Kualitas Premium | Permanen 90-99%',
            est: 'Lambat | Start 1×24 Jam',
            desc: 'Followers Indo dengan kualitas Premium Terbaik | Super Less drop! | Dengan rate permanen TINGGI !',
            packages: [
           
            {name: '150 Followers', price: 15000 },
            {name: '300 Followers', price: 25000},
            {name: '500 Followers', price: 40000},
            {name: '1000 Followers', price: 71000 },
            {name: '5000 Followers', price: 360000}
            
            ]
        },
        
        {
        id: 'ig_like_d',
                name: 'Likes Instagram Super murah | Low Drop',
                est: 'Cepat | start 0-1 Jam',
                desc: 'Kualitas Layanan : Medium Quality Super Cheap | Permanen rate (%) 65-80%! ',
                packages: [
                            { name: '4000 Like', price: 15000 },
                            { name: '7000 Like', price: 21000 },
                   { name: '10.000 Like', price: 30000 },
                            { name: '15.000 Like', price: 45000 },
                   { name: '20.000 Like', price: 57000 },
                            { name: '50.000 Like', price: 140000 },
                   
            ]
            },
        
                {
        id: 'ig_like_e',
                name: 'Likes Instagram Kualitas Tinggi | Rekomendasi',
                est: 'Cepat | Start 0-1 Jam',
                desc: 'Kualitas Layanan : Kualitas Tinggi | Permanen rate (%) 80-90%! ',
                packages: [
                            { name: '600 Like', price: 15000 },
                            { name: '1000 Like', price: 21000 },
                   { name: '2000 Like', price: 36000 },
                            { name: '3000 Like', price: 54000 },
                   { name: '5000 Like', price: 86000 },
                            { name: '10.000 Like', price: 175000 },
                   
            ]
            },
        
        
        ]
    },
    {
        id: 'cat_tk',
        name: 'TikTok',
        icon: 'pict/tiktok.png',
        services: [
            {
                id: 'tk_lik_f',
                name: 'likes TikTok Kualitas Super Tinggi | 100% Permanen & Anti Turun !',
                est: 'Cepat | Start 0-1 Jam',
                desc: 'Likes Super murah & Permanen | Permanen Rate 100%! | Best Seller! | Cocok untuk dorong video masuk FYP.',
                packages: [
                    { name: '8000 Like', price: 15000 },
                    { name: '12.000 Like', price: 18000 },
                    { name: '15.000 Like', price: 23000 },
                { name: '20.000 Like', price: 29000 },
                    { name: '30.000 Like', price: 45000 },
                    { name: '50.000 Like', price: 70000 },
                { name: '70.000 Like', price: 97000 },
                    { name: '100K Like', price: 135000 },
                    { name: '500K Like', price: 750000 }
                ]
            },
        
        {
                id: 'tk_lik_2',
                name: 'Followers TikTok Kualitas Tinggi | Indonesia ',
                est: 'Lambat | Start 1×24 Jam',
                desc: 'Followers Kualitas Tinggi | Permanen Rate 75-90%! | Akun Indonesia (Nama/Profil) | Cocok untuk dorong video masuk FYP.',
                packages: [
            {name: '145 Followers', price: 15000 },
            {name: '250 Followers', price: 21000 },
            {name: '300 Followers', price: 27000 },
            {name: '500 Followers', price: 41000 },
            {name: '700 Followers', price: 56000 },
            {name: '1000 Followers', price: 80000},
            {name: '2000 Followers', price: 155000 },
            {name: '3000 Followers', price: 237000 }
            
            ]
        },
        
        {
                id: 'tk_lik_2',
                name: 'Followers TikTok Kualitas Premium | Indonesia | Permanen 93%+',
                est: 'Lambat | Start 1×24 Jam',
                desc: 'Followers Kualitas Premium | Permanen Rate 93%+! | Akun Indonesia (Nama/Profil) | Cocok untuk dorong video masuk FYP.',
                packages: [
            
            {name: '100 Followers', price: 15000 },
            {name: '200 Followers', price: 25000 },
            {name: '300 Followers', price: 35000 },
            {name: '500 Followers', price: 57000 },
            {name: '700 Followers', price: 78000 },
            {name: '1000 Followers', price: 110000 }
            
            ]
        },
        
        {
                id: 'tk_lik_2',
                name: 'Views TikTok Indonesia | Kualitas Tinggi | Permanen 87%+',
                est: 'Cepat | Start 0-1 Jam',
                desc: 'Followers Kualitas Premium | Permanen Rate 93%+! | Akun Indonesia (Nama/Profil) | Cocok untuk dorong video masuk FYP.',
                packages: [
            {name: '20.000 Views', price: 15000 },
            {name: '40.000 Views', price: 26000 },
            {name: '70.000 Views', price: 41000 },
            {name: '100K Views', price: 58000 },
            {name: '300K Views', price: 165000},
            {name: '500K Views', price: 280000 }
            
            ]
        },
        
        
        ]
    },


];
