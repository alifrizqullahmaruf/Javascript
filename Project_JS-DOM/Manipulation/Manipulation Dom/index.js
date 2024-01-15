// ===========Membuat variabel yang di ambil melalui kondisi===========
// const judul = document.getElementById("judul");
const judul = document.getElementsByTagName('h1')[0];



// ===========Mengubah teks dari html melalui js===========
// judul.innerHTML = "Alif Ria";



// ===========Mengubah css melalui js===========
// judul.style.color = 'white'
// judul.style.backgroundColor = 'salmon'



// ===========Menambahakan attribute yang ada pada tag HTML ===========
judul.setAttribute('class', 'Alif');
// ini akan menambahkan atribut class setelah atribute id

// judul.getAttribute('id');
// ini akan menampilkan attribute id dalam variabel judul

// judul.removeAttribute('id');
// Ini akan menghapus attribute id dalam variabel judul


// ===========Memanipulasi class yang ada pada HTML===========
judul.classList;
// Check ada class apa saja yang ada pada HTML

judul.classList.add('heading');
// Menambhakan class dalam variabel

judul.classList.remove('Alif')
// Menghapus nama class yang ada pada variabel

judul.classList.toggle('biru-muda');
// jika tidak ada nama class maka akan di tambahakan
// namun jika ada nama class maka akan di hapus


judul.classList.item(2);
// Mengembalikan class pada judul dengan indeks 2

judul.classList.contains('biru-muda');
// ngecheck apakah pada variabel tersebut terdapat class dengan nama biru-muda

judul.classList.replace('Alif', 'Riz');
// mengubah class Alif dengan Riz


