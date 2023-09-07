document.addEventListener("DOMContentLoaded", function () {
    const data = [];
    const userName = document.getElementById("userName");
    const age = document.getElementById("age");
    const allowance = document.getElementById("allowance");
    const registerBtn = document.getElementById("registerBtn");
    const tableBody = document.getElementById("nav-table-body");
    const averageAgeCell = document.getElementById("averageAge");
    const averageAllowanceCell = document.getElementById("averageAllowance");

    const pushToData = (person) => {
       data.push({
            userName: person.userName,
            age: person.age,
            allowance: person.allowance,
       })
    }

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

    const averageAge = (arr) => {
        let total = 0;
        arr.forEach((person) => {
            const age = parseInt(person.age);
            total += age;
        });

        return Math.floor(total/arr.length);
    }

    const averageAllowance = (arr) => {
        let total = 0;
        arr.forEach((person) => {
            const allowance = parseInt(person.allowance);
            total += allowance;
        });
        
        return Math.floor(total/arr.length);
    }

    registerBtn.addEventListener("click", async function () {
        registerBtn.disabled = true;
        registerBtn.classList.add("hide-button");        
        const person = new Person(userName.value, age.value, allowance.value);

        await validation(person).then(() => {
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
            newRow.appendChild(indexCell);
            newRow.appendChild(nameCell);
            newRow.appendChild(ageCell);
            newRow.appendChild(allowanceCell);
            newRow.appendChild(blankCell);
    
            tableBody.appendChild(newRow);
            
            userName.value = "";
            age.value = "";
            allowance.value = "";
            
            averageAgeCell.textContent = averageAge(data);
            averageAllowanceCell.textContent = averageAllowance(data);

            console.log(tableBody);
            console.log(data);
        }).catch((error) => {
            alert(error);
        }).finally(() => {
            registerBtn.disabled = false;
            registerBtn.classList.remove("hide-button");
        })
    });
});

