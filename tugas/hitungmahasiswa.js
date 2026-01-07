//Elemen input
const namaInput = document.getElementById('nama');
const nimInput = document.getElementById('nim');
const matkulInput = document.getElementById('matkul');
const tugasInput = document.getElementById('tugas');
const utsInput = document.getElementById('uts');
const uasInput = document.getElementById('uas');
const kehadiranInput = document.getElementById('kehadiran');

//Elemen hasil
const resultTitle = document.getElementById('resultTitle');
const nilaiFinal = document.getElementById('nilaiFinal');
const gradeDisplay = document.getElementById('gradeDisplay');
const statusDisplay = document.getElementById('statusDisplay');
const detailTugas = document.getElementById('detailTugas');
const detailUTS = document.getElementById('detailUTS');
const detailUAS = document.getElementById('detailUAS');
const detailKehadiran = document.getElementById('detailKehadiran');

//Tombol
const hitungBtn = document.getElementById('hitungBtn');
const resetBtn = document.getElementById('resetBtn');

//Fungsi untuk menghitung nilai akhir
function hitungNilai() {
    //validasi input
    if (!namaInput.value.trim() || !nimInput.value.trim() || !matkulInput.value.trim()) {
        alert('Harap isi nama, NIM, dan mata kuliah terlebih dahulu!');
        return;
    }

    //Ambil nilai dari input
    const tugas = parseFloat(tugasInput.value) || 0;
    const uts = parseFloat(utsInput.value) || 0;
    const uas = parseFloat(uasInput.value) || 0;
    const kehadiran = parseFloat(kehadiranInput.value) || 0;

    //Validasi rentang nilai
    if (tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100 || kehadiran < 0 || kehadiran > 100) {
        alert('Nilai harus berada di antara 0 dan 100!');
        return;
    }

    //Hitung nilai akhir dengan bobot
    const nilaiAkhir = (tugas * 0.2) + (uts * 0.3) + (uas * 0.4) + (kehadiran * 0.1);

    //Tentukan grade
    let grade;
    if (nilaiAkhir >= 85) grade = 'A';
    else if (nilaiAkhir >= 70) grade = 'B';
    else if (nilaiAkhir >= 60) grade = 'C';
    else if (nilaiAkhir >= 50) grade = 'D';
    else  grade = 'E';

    //Tentukan status kelulusan
    const status = (grade === 'A' || grade === 'B' || grade === 'C') ? 'LULUS' : 'TIDAK LULUS';

    //Tampilkan hasil
    resultTitle.textContent = `${namaInput.value} (${nimInput.value}) - ${matkulInput.value}`;
    nilaiFinal.textContent = nilaiAkhir.toFixed(2);
    gradeDisplay.textContent = `Grade: ${grade}`;
    statusDisplay.textContent = `Status: ${status}`;

    //Tampilkan detail perhitungan
    detailTugas.textContent = (tugas * 0.2).toFixed(2);
    detailUTS.textContent = (uts * 0.3).toFixed(2);
    detailUAS.textContent = (uas * 0.4).toFixed(2);
    detailKehadiran.textContent = (kehadiran * 0.1).toFixed(2);

    //Atur warna berdasarkan grade
    gradeDisplay.className = `grade grade-${grade}`;
    statusDisplay.className = `status ${status === 'LULUS' ? 'status-lulus' : 'status-tidak-lulus'}`;
}

//Fungsi untuk mereset form
function resetForm() {
    namaInput.value = '';
    nimInput.value = '';
    matkulInput.value = '';
    tugasInput.value = '';
    utsInput.value = '';
    uasInput.value = '';
    kehadiranInput.value = '';

    resultTitle.textContent = 'Masukkan data nilai terlebih dahulu';
    nilaiFinal.textContent = '-';
    gradeDisplay.textContent = '-';
    statusDisplay.textContent = '-';
    gradeDisplay.className = 'grade';
    statusDisplay.className = 'status';

    detailTugas.textContent = '-';
    detailUTS.textContent = '-';
    detailUAS.textContent = '-';
    detailKehadiran.textContent = '-';
}

// Event listener untuk tombol hitung 
hitungBtn.addEventListener('click', hitungNilai);

//Event listener untuk tombol reset
resetBtn.addEventListener('click', resetForm);

//Event listener untuk tombol enter pada input
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        hitungNilai();
    }
    if (event.key === 'Escape'){
        resetForm();
    }
});

//Validasi input real-time
function validateInput(input) {
    const value = parseFloat(input.value);
    if(isNaN(value) || value < 0) {
        input.value = '';
    } else if (value > 100) {
        input.value = '100';
    }
}

tugasInput.addEventListener('change', () => validateInput(tugasInput));
utsInput.addEventListener('change', () => validateInput(utsInput));
uasInput.addEventListener('change', () => validateInput(uasInput));
kehadiranInput.addEventListener('change', () => validateInput(kehadiranInput));

//Inisialisasi dengan data contoh 
window.addEventListener('load', function () {
    //Isi dengan data contoh (opsional)
    namaInput.value = 'Triyani Putri';
    nimInput.value = '251011701254';
    matkulInput.value = 'Pemrograman Web 1';
    tugasInput.value ='90';
    utsInput.value = '85';
    uasInput.value = '90';
    kehadiranInput.value = '100';
});