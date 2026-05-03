// price.js - Database Layanan Lannefy V3 (Sistem Daftar Harga/Paket)

const smmData = [
    {
        id: 'cat_ig',
        name: 'Layanan Instagram',
        icon: 'pict/instagram.png',
        services: [
            {
                id: 'ig_fol_g',
                name: '[#172] IG Followers High Quality - Permanen 80-88% - BEST SELLER - SUPERFAST',
                est: 'Superinstan | 15 Menit Selesai',
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
                name: '[#173] IG Followers Indo High Quality - Permanen 80-90%! ',
                est: 'Slow',
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
            name: '[174] IG Followers Indo PREMIUM QUALITY - Permanen 90-99%',
            est: 'Slow',
            desc: 'Followers Indo dengan kualitas Premium Terbaik - Super Less drop! - Dengan rate permanen TINGGI !',
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
                name: '[#175] IG Likes Super murah',
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
                name: '[#176] IG Likes High Quality',
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
                est: 'Slow',
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
                est: 'Slow',
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
    id: 'lk_tt_01',
    name: '[180] Likes TikTok High Quality - 90-99% PERMANEN - BEST SELLER - RECOMMENDED!',
    est: 'Fast',
    desc: 'Likes TikTok dengan kualitas tinggi ! | Rating permanen 90-99% | Best Seller & Rekomendasi admin | cocok untuk kamu yang mencari likes vt murah + permanen 90%+',
    packages: [
    { name: '9000 like', price: 15000 },
    { name: '14.000 like', price: 20000 },
    { name: '20.000 like', price: 30000},
    { name: '30.000 like', price: 43000 },
    { name: '40.000 like', price: 58000 },
    { name: '50.000 like', price: 70000 },
    
    ]
}
        
        
        ]
    },


];
