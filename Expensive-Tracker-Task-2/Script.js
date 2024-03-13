const expenseForm = document.getElementById('expenseForm');
const expenseInput = document.getElementById('expenseInput');
const amountInput = document.getElementById('amountInput');
const expenseList = document.getElementById('expenseList');

let expenses = [];

// Function to render expenses
function renderExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${expense.description} - $${expense.amount}
            <button onclick="editExpense(${index})">Edit</button>
            <button onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(li);
    });
}

// Function to add expense
function addExpense(description, amount) {
    expenses.push({ description, amount });
    renderExpenses();
}

// Function to edit expense
function editExpense(index) {
    const newDescription = prompt('Enter new description:');
    const newAmount = parseFloat(prompt('Enter new amount:'));
    if (newDescription && !isNaN(newAmount)) {
        expenses[index].description = newDescription;
        expenses[index].amount = newAmount;
        renderExpenses();
    } else {
        alert('Invalid input!');
    }
}

// Function to delete expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
}

// Event listener for form submission
expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const description = expenseInput.value.trim();
    const amount = parseFloat(amountInput.value);
    if (description && !isNaN(amount)) {
        addExpense(description, amount);
        expenseInput.value = '';
        amountInput.value = '';
    } else {
        alert('Please enter valid values!');
    }
});
