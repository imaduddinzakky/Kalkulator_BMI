const pria = document.getElementById("pria");
const wanita = document.getElementById("wanita");
const bb = document.getElementById("bb");
const usia = document.getElementById("usia");
const tinggi = document.getElementById("tinggi");
const kalk = document.getElementById("kalkulator");
const inputForm = document.getElementById("inputForm");
const hasil = document.getElementById("hasil");
const statusbb1 = document.getElementById("statusbb1");
const statusbb2 = document.getElementById("statusbb2");
const hasilBMI = document.getElementById("hasilBMI");
const explnBMI1 = document.getElementById("explnBMI1");
const explnBMI2 = document.getElementById("explnBMI2");
const s1 = document.getElementById("penyakit1");
const s2 = document.getElementById("penyakit2");

let bmi = 0.0;

//fungsi untuk validasi input
var checkForm = () => {
    if(!pria.checked && !wanita.checked){
        alert("Silahkan pilih jenis kelamin");
    }else if(bb.value === "" || usia.value === "" || tinggi.value === "" ){
        alert("Semua Form Wajib Diisi");
    //batas nilai wajar
    }else if(bb.value > 500 || bb.value < 0){
        alert("Berat badan melebihi limit (0 - 500kg)");
    }else if(usia.value > 150 || usia.value < 0){
        alert("Umur melebihi limit (0 - 200)");
    }else if(tinggi.value > 500 || tinggi.value < 0 ){
        alert("Tinggi badan melebihi limit (0 - 300cm)");
    }else{
        HitungBMI();
    }
}

//fungsi untuk mereset form
var resetForm = () => {
    inputForm.reset();
}

//fungsi untuk melakukan perhitungan nilai BMI dan pindah halaman
var HitungBMI = () => {
    bmi = bb.value / ((tinggi.value/100) * (tinggi.value/100));
    //1 angka dibelakang koma
    bmi = bmi.toFixed(1);
    //Tamplikan halaman kedua
    kalk.style.display = "none";
    hasil.style.display = "block";
    displayHasil();
}

//Function untuk menampilkan angka dan teks penjelasan BMI yang sesuai pada tampilan results atau hasil perhitungan kalkulator BMI
var displayHasil = () => {
    hasilBMI.innerHTML = bmi;
    if(bmi < 18.5){
        statusbb1.innerHTML = "Berat Badan Kurang";
        statusbb2.innerHTML = "Anda kekurangan berat badan";
        explnBMI1.innerHTML = "Hasil BMI kurang dari 18.5"
        explnBMI2.innerHTML = "Anda berada dalam kategori underweight atau berat badan kurang. Cara terbaik untuk meningkatkan berat badan adalah menambah asupan kalori dan perbanyak makanan bernutrisi. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk meningkatkan berat badan hingga batas normal."
        s1.classList.remove("disable");
    }else if(bmi < 30 && bmi >= 25.0 ){
        statusbb1.innerHTML = "Berat Badan Lebih";
        statusbb2.innerHTML = "Anda kelebihan berat badan";
        explnBMI1.innerHTML = "Hasil BMI diantara 25.0 dan 29.9 "
        explnBMI2.innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur asupan kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."
        s2.classList.remove("disable");
    }else if(bmi >= 30){
        statusbb1.innerHTML = "Berat Badan Obesitas";
        statusbb2.innerHTML = "Anda memiliki obesitas";
        explnBMI1.innerHTML = "Hasil BMI 30.0 atau lebih"
        explnBMI2.innerHTML = "Anda berada dalam kategori obesitas. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur asupan kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk segera menurunkan berat badan hingga batas normal."
        s2.classList.remove("disable");
    }else{
        statusbb1.innerHTML = "Berat Badan Normal";
        statusbb2.innerHTML = "Anda memiliki berat badan normal";
        explnBMI1.innerHTML = "Hasil BMI diantara 18.5 dan 24.9"
        explnBMI2.innerHTML = "Anda berada dalam kategori normal atau berat badan cukup. Selamat! Teruslah menjaga asupan makanan dan nutrisimu agar berat badanmu tetap terjaga."
        s1.classList.remove("disable");
    }
}