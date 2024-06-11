const input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

function dataHandling(data) {
  data.forEach(function (anggota) {
    console.log(
      `Nomor ID : ${anggota[0]} \nNama Lengkap: ${anggota[1]} \nTTL: ${
        anggota[2] + " " + anggota[3]
      } \nHobi: ${anggota[4]} \n`
    );
  });
}

dataHandling(input);
