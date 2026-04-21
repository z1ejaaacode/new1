// price.js - Database Layanan Lannefy V3 (Sistem Daftar Harga/Paket)

const smmData = [
    {
        id: 'cat_ig',
        name: 'Layanan Instagram',
        icon: 'pict/instagram.png',
        services: [
            {
                id: 'ig_fol_b',
                name: '[#171] IG Followers Bot Super Murah - Kualitas Rendah',
                est: 'Super Fast',
                desc: 'Followers Instagram dengan harga super murah, kualiatas layanan : Rendah | High Drop | No Complain apabila turun drastis!',
                packages: [
                    { name: '3000 Followers', price: 15000 },
                    { name: '4000 Followers', price: 22000 },
                    { name: '5000 Followers', price: 27000 },
                { name: '7000 Followers', price: 36000 },
                { name: '10.000 Followers', price: 50000 }
                ]
            },
            {
                id: 'ig_fol_g',
                name: '[#172] IG Followers High Quality - Permanen 65-80%',
                est: 'Instant',
                desc: 'Kualitas Layanan : Kualitas tinggi | Rate drop : 20-35% | Best Seller!',
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
                name: '[#173] IG Followers Indo High Quality - Permanen 80-88%! ',
                est: 'Fast',
                desc: 'Kualitas Layanan : Akun Indonesia Kualitas Tinggi | Permanen rate (%) 80-88%! | Layanan terbaik dengan presentase penurunan rendah. | RECOMMENDED',
                packages: [
                            { name: '250 Followers', price: 15000 },
                    { name: '500 Followers', price: 31000 },
                    { name: '700 Followers', price: 43000 },
                { name: '1000 Followers', price: 57000 }
                ]
            },
        
        {
        id: 'ig_like_d',
                name: '[#174] IG Likes Super murah',
                est: 'Fast',
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
                name: '[#175] IG Likes High Quality',
                est: 'Fast',
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
        name: 'Layanan TikTok',
        icon: 'pict/tiktok.png',
        services: [
            {
                id: 'tk_lik_f',
                name: '[#176] TikTok Likes Super Murah! - Permanen rate (%) 80-90% !!',
                est: 'Slow',
                desc: 'Likes Super murah & Permanen | Permanen Rate (%) 80-90% ! | Best Seller! | Cocok untuk dorong video masuk FYP.',
                packages: [
                    { name: '20.000 Like', price: 15000 },
                    { name: '30.000 Like', price: 18000 },
                    { name: '40.000 Like', price: 23000 },
                { name: '50.000 Like', price: 28000 },
                    { name: '70.000 Like', price: 40000 },
                    { name: '100.000 Like', price: 60000 },
                { name: '500.000 Like', price: 260000 },
                    { name: '700.000 Like', price: 365000 },
                    { name: '1 Juta Like', price: 520000 }
                ]
            },
        
                {
        id: 'tt_fol_h',
                name: '[#177] TikTok Followers High Quality - Less Drop ',
                est: 'Fast',
                desc: 'Kualitas Layanan : Kualitas Tinggi | Permanen rate (%) 70-88%! | Layanan terbaik dengan presentase penurunan rendah. | RECOMMENDED',
                packages: [
                            { name: '250 Followers', price: 15000 },
                    { name: '500 Followers', price: 22000 },
                    { name: '700 Followers', price: 31000 },
                { name: '1000 Followers', price: 43000 },
                    { name: '2000 Followers', price: 83000 },
                    { name: '3000 Followers', price: 125000 },
                { name: '5000 Followers', price: 210000 }
                ]
            },
        
                        {
        id: 'tt_fol_i',
                name: '[#178] TikTok Followers Indonesia High Quality - Less Drop ',
                est: 'Fast',
                desc: 'Kualitas Layanan : Akun Indonesia Kualitas Tinggi | Permanen rate (%) 85-95%! | Layanan terbaik dengan presentase penurunan rendah. | RECOMMENDED',
                packages: [
                            { name: '145 Followers', price: 15000 },
                    { name: '200 Followers', price: 18000 },
                    { name: '300 Followers', price: 25000 },
                { name: '400 Followers', price: 34000 },
                    { name: '500 Followers', price: 42000 },
                    { name: '700 Followers', price: 57000 },
                { name: '1000 Followers', price: 850000 }
                ]
            },
        
                        {
        id: 'tt_fol_k',
                name: '[#179] TikTok Followers Indo Super High Quality - Esklusif Price - Premium Quality - PROVIDER ',
                est: 'Fast',
                desc: 'Kualitas Layanan : Akun indonesia Kualitas Super Tinggi/Premium | Permanen rate (%) 98-100%! | Layanan terbaik ANTI TURUN | Esklusif price',
                packages: [
                            { name: '1000 Followers', price: 120000 }
                ]
            },
        
        
        ]
    }
];
