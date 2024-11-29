let payroll = [];

// Function to convert a value to x decimal places
function ConvertDecimal(value, decimals) {
    return isNaN(value) ? '' : value.toFixed(decimals);
}

// Function to initialize payroll
function initPayroll() {
    payroll = [];
    document.getElementById("payrollBody").innerHTML = '';
}

// Function to display payroll
function showPayroll() {
    let tbody = '';

    payroll.forEach((employee, index) => {
        tbody += `<tr>
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.daysWorked}</td>
            <td style='text-align:right'>${ConvertDecimal(employee.dailyRate, 2)}</td>
            <td style='text-align:right'>${ConvertDecimal(employee.grossPay, 2)}</td>
            <td style='text-align:right'>${ConvertDecimal(employee.deductionAmount, 2)}</td>
            <td style='text-align:right'>${ConvertDecimal(employee.netPay, 2)}</td>
        </tr>`;
    });

    document.getElementById("payrollBody").innerHTML = tbody;
}

// Main program
(() => {
    initPayroll();

    document.getElementById('addEmployeeButton').addEventListener('click', () => {
        const name = document.getElementById('employeeName').value.trim();
        const daysWorked = parseInt(document.getElementById('daysWorked').value);
        const dailyRate = parseFloat(document.getElementById('dailyRate').value);
        const deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

        // Validation for input fields
        if (name === '' || isNaN(daysWorked) || daysWorked < 0 || isNaN(dailyRate) || dailyRate < 0 || isNaN(deductionAmount) || deductionAmount < 0) {
            alert('Please fill in all fields correctly.');
            return;
        }

        const grossPay = daysWorked * dailyRate;
        const netPay = grossPay - deductionAmount;

        payroll.push({ name, daysWorked, dailyRate, grossPay, deductionAmount, netPay });
        
        showPayroll();
        clearInputs(); // Clear inputs after adding an employee
    });

    // Open modal for deletion
    document.getElementById('deleteEmployeeButton').addEventListener('click', openInputModal);

    function openInputModal() {
        document.getElementById('inputModal').style.display = 'block'; // Show the modal
    }

    function closeInputModal() {
        document.getElementById('inputModal').style.display = 'none';
    }

    document.getElementById('nextDeleteButton').addEventListener('click', confirmDelete);

    function confirmDelete() {
        const lineNumber = parseInt(document.getElementById('lineNumberToDelete').value);
        
        if (lineNumber > 0 && lineNumber <= payroll.length) {
            payroll.splice(lineNumber - 1, 1);
            showPayroll();
            closeInputModal(); // Close modal after deletion
            clearDeleteInput(); // Clear input field for deletion
        } else {
            alert('Invalid line number. Please enter a valid number.');
        }
    }

    function clearInputs() {
        document.getElementById('employeeName').value = '';
        document.getElementById('daysWorked').value = '';
        document.getElementById('dailyRate').value = '';
        document.getElementById('deductionAmount').value = '';
   }

   function clearDeleteInput() {
       document.getElementById('lineNumberToDelete').value = ''; // Clear input field for deletion
   }

   window.onclick = function(event) {
       const inputModal = document.getElementById('inputModal');
       if (event.target == inputModal) {
           closeInputModal();
       }
   };

   // Ensure the closing of the confirmation modal is handled properly
   document.querySelector('.close').onclick = closeConfirmModal;

   function closeConfirmModal() {
       document.getElementById("confirmModal").style.display = "none"; 
   }
})();
