function kirimPesan() {
    
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const subjek = document.getElementById("subjek").value;
    const pesan = document.getElementById("pesan").value;


    if (nama === "" || email === "" || subjek === "" || pesan === "") {
        alert("Semua field harus diisi!");
        return;
    }

    alert("Pesan berhasil dikirim!\nTerima kasih, " + nama);

    document.getElementById("nama").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subjek").value = "";
    document.getElementById("pesan").value = "";
}
