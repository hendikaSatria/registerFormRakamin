//event listener untuk memastikan code HTML run terlebih dahulu dari js
document.addEventListener("DOMContentLoaded", function () {
    const data = [];
    const userName = document.getElementById("userName");
    const age = document.getElementById("age");
    const allowance = document.getElementById("allowance");
    const registerBtn = document.getElementById("registerBtn");
    const tableBody = document.getElementById("nav-table-body");
    const averageAgeCell = document.getElementById("averageAge");
    const averageAllowanceCell = document.getElementById("averageAllowance");

    // untuk mengepush user data ke data array
    const pushToData = (person) => {
       data.push({
            userName: person.userName,
            age: person.age,
            allowance: person.allowance,
       })
    }

    //Async function untuk validasi user dengan set timeout selama 2 detik
    async function validation(person) {
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    const result = await person.validate();
                    resolve(result);
                    pushToData(person); 
                } catch (error) {
                    reject(error); 
                }
            }, 2000); 
        });
    }

    //Menghitung rata-rata umur
    const averageAge = (arr) => {
        let total = 0;
        arr.forEach((person) => {
            const age = parseInt(person.age);
            total += age;
        });

        return Math.floor(total/arr.length);
    }

    //Menghitunf rata-rata uang sangu
    const averageAllowance = (arr) => {
        let total = 0;
        arr.forEach((person) => {
            const allowance = parseInt(person.allowance);
            total += allowance;
        });
        
        return Math.floor(total/arr.length);
    }

    //event listener untuk button
    registerBtn.addEventListener("click", async function () {
        //Disable button saat user register unutk mencegah multiple click dan data input dari user 
        registerBtn.disabled = true;
        registerBtn.classList.add("hide-button");        

        //membuat person object
        const person = new Person(userName.value, age.value, allowance.value);

        //validasi user
        await validation(person).then(() => {
            //Membuat  tablle row dan col untuk user data yg di submit
            const newRow = document.createElement("tr");
            const indexCell = document.createElement("th");
            indexCell.setAttribute("scope", "row");
            indexCell.textContent = data.length ;
    
            const nameCell = document.createElement("td");
            nameCell.textContent = person.userName;
    
            const ageCell = document.createElement("td");
            ageCell.textContent = person.age;
    
            const allowanceCell = document.createElement("td");
            allowanceCell.textContent = person.allowance;
            
            const blankCell = document.createElement("td");

            //memasukan cells ke row baru yg telah di buat dan di append ke tbody
            newRow.appendChild(indexCell);
            newRow.appendChild(nameCell);
            newRow.appendChild(ageCell);
            newRow.appendChild(allowanceCell);
            newRow.appendChild(blankCell);
            tableBody.appendChild(newRow);

            //mengkosongkan form setelah data success di masukan ke array
            userName.value = "";
            age.value = "";
            allowance.value = "";

            // mengubah cell teraats untuk rata-rata umur dan uang sangu
            averageAgeCell.textContent = averageAge(data);
            averageAllowanceCell.textContent = averageAllowance(data);

            console.log(tableBody);
            console.log(data);
        }).catch((error) => {
            alert(error);
        }).finally(() => {
            //memunculkan button kembali
            registerBtn.disabled = false;
            registerBtn.classList.remove("hide-button");
        })
    });
});

