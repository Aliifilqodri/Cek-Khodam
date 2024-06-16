document.addEventListener("DOMContentLoaded", () => {
    const checkButton = document.getElementById("check-button");
    const resultText = document.getElementById("result-text");
    const khodamNames = [
        "Khodam Si Petir Menari",
        "Khodam Si Angin Berbisik",
        "Khodam Si Harimau Melompat",
        "Khodam Si Kucing Tidur",
        "Khodam Si Naga Terbang",
        "Anak Keren",
        "Khodam Si Burung Bernyanyi",
        "Khodam Si Ular Menggeliat",
        "Khodam Si Gajah Berjalan",
        "Khodam Si Singa Mengaum",
        "Khodam Si Kuda Berlari",
        "Khodam Pikachu Ngereog",
        "Khodam Sempak Bolong",
        "Khodam Si Hantu Galau",
        "Khodam Si Tuyul Tertawa",
        "Khodam Si Kuntilanak Narsis",
        "Khodam Si Genderuwo Pemalu",
        "Khodam Si Pocong Berlari",
        "Khodam Si Setan Gundul",
        "Khodam Si Jenglot Melambai",
        "Khodam Si Lele Menyanyi",
        "Khodam Si Bebek Joget",
        "Khodam Si Ayam Terbang",
        "Khodam Si Kelinci Keren",
        "Khodam Si Domba Santai",
        "Khodam Si Kambing Guling",
        "Khodam Si Sapi Terbang",
        "Khodam Si Buaya Ngamuk",
        "Khodam Si Harimau Bernyanyi",
        "Khodam Si Singa Menari",
        "Khodam Si Ikan Lompat",
        "Khodam Si Udang Nyengir",
        "Khodam Si Kepiting Joget",
        "Khodam Si Kerang Ngompol",
        "Khodam Si Babi Hutan Ngamuk",
        "Khodam Si Gajah Menari",
        "Khodam Si Monyet Terbang",
        "Khodam Si Burung Gagak",
        "Khodam Si Lumba-lumba",
        "Khodam Si Beruang Kutub",
        "Khodam Si Singa Laut",
        "Khodam Si Gurita Pintar",
        "Khodam Si Kucing Manja",
        "Khodam Si Kelinci Madu",
        "Khodam Si Kuda Poni",
        "Khodam Si Panda Pemalu",
        "Khodam Si Rusa Lincah",
        "Khodam Si Srigala Menggigit",
        "Khodam Si Rubah Pintar",
        "Khodam Si Musang Nakal",
        "Sempak Batman",
        "Kadal Gurun",
        "Bocah Baru Bangun Tidur",
        "Khodam Si Banteng Perkasa"
    ];

    checkButton.addEventListener("click", () => {
        const nameInput = document.getElementById("name-input").value.trim();
        if (nameInput === "") {
            resultText.textContent = "Silakan masukkan nama Anda!";
        } else {
            const randomIndex = Math.floor(Math.random() * khodamNames.length);
            const khodamName = khodamNames[randomIndex];
            resultText.textContent = `Khodam Anda adalah: ${khodamName}`;
        }
    });
});
