let payrollList = [];

// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('addEmployeeButton').addEventListener('click', addEmployee);
    document.getElementById('deleteEmployeeButton').addEventListener('click', openInputModal);
});

// Function to add an employee to the payroll list
function addEmployee() {
    const name = document.getElementById('employeeName').value;
    const daysWorked = parseInt(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

    if (name === '' || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deductionAmount)) {
        alert('Please fill in all fields correctly.');
        return;
    }

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deductionAmount;

    payrollList.push({
        name,
        daysWorked,
        dailyRate,
        grossPay,
        deductionAmount,
        netPay
    });

    updatePayrollTable();
    clearInputs();
}

// Function to open the input modal
function openInputModal() {
    document.getElementById('inputModal').style.display = 'block';
}

// Function to close the input modal
function closeInputModal() {
    document.getElementById('inputModal').style.display = 'none';
}

// Function to open the confirmation modal
function openConfirmModal() {
    const lineNumber = parseInt(document.getElementById('lineNumberToDelete').value);
    
    if (isNaN(lineNumber) || lineNumber <= 0 || lineNumber > payrollList.length) {
        alert('Invalid line number. Please enter a valid number.');
        return;
    }

    // If valid, close input modal and open confirm modal
    closeInputModal();
    document.getElementById('confirmModal').style.display = 'block';
}

// Function to close the confirmation modal
function closeConfirmModal() {
    document.getElementById('confirmModal').style.display = 'none';
}

// Function to confirm deletion
function confirmDelete() {
    const lineNumber = parseInt(document.getElementById('lineNumberToDelete').value);
    if (lineNumber > 0 && lineNumber <= payrollList.length) {
        payrollList.splice(lineNumber - 1, 1); // Remove the employee from the list
        updatePayrollTable(); // Update the displayed table
        alert("Employee deleted successfully.");
    } else {
        alert("Invalid line number. Please try again."); // Handle invalid line number
    }
    
    closeConfirmModal(); // Close confirmation modal
}

// Function to update the payroll table with current data
function updatePayrollTable() {
    const tbody = document.getElementById('payrollBody');
    tbody.innerHTML = ''; // Clear existing rows

    payrollList.forEach((employee, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.daysWorked}</td>
            <td>${employee.dailyRate.toFixed(2)}</td>
            <td>${employee.grossPay.toFixed(2)}</td>
            <td>${employee.deductionAmount.toFixed(2)}</td>
            <td>${employee.netPay.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
}

// Function to clear input fields
function clearInputs() {
    document.getElementById('employeeName').value = '';
    document.getElementById('daysWorked').value = '';
    document.getElementById('dailyRate').value = '';
    document.getElementById('deductionAmount').value = '';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
   const inputModal = document.getElementById('inputModal');
   const confirmModal = document.getElementById('confirmModal');

   if (event.target == inputModal) {
       closeInput
