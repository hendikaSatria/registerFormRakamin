class Person {
    constructor(userName, age, allowance) {
        this.userName = userName;
        this.age = age;
        this.allowance = allowance;
    }

    //Validasi nama (nyoba pake regex kak hehehe)
    _validateUserName() {
        const minimumChar = /^.{10,}$/; // minimal 10 characters
        const containsOnlyLetters = /^[^\d]+$/.test(this.userName); // tidak boleh ada nomor
        return minimumChar.test(this.userName) && containsOnlyLetters;
    }

    // validasi umur
    _validateAge() {
        return this.age >= 25;
    }

    // validasi uang sangu
    _validateAllowance() {
        return this.allowance >= 100000 && this.allowance <= 1000000;
    }

    //async function untuk validasi untuk mengecek semua kriteria user dan men throw error jika salah satu kriteria gagal
    async validate() {
        if (this._validateUserName() && this._validateAge() && this._validateAllowance()) {
            return true;
        } else if (!this._validateUserName()) {
            userName.value = "";
            throw new Error("username minimal 10 karater dan tidak boleh ada angka atau sepcial character"); 
        } else if (!this._validateAge()) {
            age.value = "";
            throw new Error("Umur minimal 25"); 
        } else if (!this._validateAllowance()) {
            allowance.value = "";
            throw new Error("Uang sangu minimal 100.000 dan maksimum 1.000.000"); 
        }
        return false;
    }
}


