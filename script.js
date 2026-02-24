let expenses = [];
display();

function addExpense(){
    const exp = document.getElementById('expenseInput').value;
    const amo = document.getElementById('amountInput').value;
    const sel = document.getElementById('select').value;

    expenses.push({exp, amo, sel});
    document.getElementById('expenseInput').value = "";
    document.getElementById('amountInput'). value = "";
    document.getElementById('select').value = "";
    display()
    newAmount()
}

function display(){
    let display = document.getElementById('tabletable');
    let html = `    
                    <tr class="table">
                        <th>Expense Name</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>`;
    for(let i = 0; i < expenses.length; i++){
        html += `
                    
                    <tr class="table">
                        <td>${expenses[i].exp}</td>
                        <td>${expenses[i].amo}</td>
                        <td>${expenses[i].sel}</td>
                        <td>
                            <button onclick="edit(${i})">Edit</button>
                            <button onclick="dele(${i})">Delete</button>
                        </td>
                    </tr>
                `
    }
    display.innerHTML = html;
}

function dele(index){
    expenses.splice(index, 1);
    display()
    newAmount()
}

function edit(index){
    let name = prompt("Expense name:", expenses[index].exp);
    let amount = prompt("Amount:", expenses[index].amo);
    let category = prompt("Category:", expenses[index].sel);
    if(name && amount && category){
    expenses[index].exp = name;
    expenses[index].amo = Number(amount);
    expenses[index].sel = category;
    display()
    newAmount()
    }
}

function newAmount(){
    let totalExpenses = 0;
    for(let i = 0; i < expenses.length; i++){
        console.log(expenses[i])
        totalExpenses += Number(expenses[i].amo);
        console.log(totalExpenses);
    }

    document.getElementById("total-amount").innerHTML = `Total: $${totalExpenses}`
}