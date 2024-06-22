function khodamAnda() {
  const name = document.getElementById("inputNama").value;

  if (!name) {
    const warning = document.getElementById("warning");
    warning.append("!Masukan Nama Anda");
    return;
  }

  const popup = document.getElementById("popup");
  popup.classList.add("popup");

  const hasil = document.getElementById("khodam");
  const khodams = [
    "Tidak Memiliki khodam",
    "Tidak Memiliki khodam",
    "Ambatukam",
    "Si imut",
    "Mas Rusdi",
    "Ambatron",
    "Ambacong",
    "Mas Fuad",
    "Mr.Ironi",
  ];
  const randomKhodams = Math.floor(Math.random() * khodams.length);
  const hasilTeks = khodams[randomKhodams];
  hasil.append(hasilTeks);
}

function back() {
  window.location.reload();
}
