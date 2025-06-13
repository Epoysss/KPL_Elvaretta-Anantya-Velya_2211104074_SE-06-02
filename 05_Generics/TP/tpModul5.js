// MENAMBAHKAN METHOD DENGAN GENERIC
class HaloGeneric {
    // Method untuk menyapa user
    static SapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

// Memanggil method untuk menyapa user dengan menggunakan parameter "Elvaretta Anantya Velya"
HaloGeneric.SapaUser("Elvaretta Anantya Velya");


class DataGeneric { constructor(data) { this.data = data; } printData() { console.log(`Data yang tersimpan adalah: ${this.data}`); } }

// Membuat instance dari kelas DataGeneric dengan menyimpan data "2211104074"
const data = new DataGeneric("2211104074"); data.printData();
