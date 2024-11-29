// JavaScript Code
//------------Global Variables
let payroll = [];

// Function to convert a value to x decimal places
function ConvertDecimal(value, decimals) {
    return isNaN(value) ? '' : value.toFixed(decimals);
}

// Function to compute net pay
function computeNetPay() {
    const daysWorked = parseInt(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

    if (!isNaN(daysWorked) && !isNaN(dailyRate) && !isNaN(deductionAmount)) {
        const grossPay = daysWorked * dailyRate;
        const netPay = grossPay - deductionAmount;
        document.getElementById("netPayDisplay").innerText = ConvertDecimal(netPay, 2); // Example display element
    }
}

// Function to initialize payroll
function initPayroll() {
    payroll = [];
    document.getElementById("payrollBody").innerHTML = '';
}

// Function to display payroll
function showPayroll() {
    let tbody = '';
    let totalNetPay = 0;

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
        
        totalNetPay += employee.netPay;
    });

    document.getElementById("payrollBody").innerHTML = tbody;
    document.getElementById("totalNetPay").innerHTML = ConvertDecimal(totalNetPay, 2);
}

// Main program
(() => {
    initPayroll();

    document.getElementById('addEmployeeButton').addEventListener('click', () => {
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

        payroll.push({ name, daysWorked, dailyRate, grossPay, deductionAmount, netPay });
        
        showPayroll();
        clearInputs(); // Clear inputs after adding an employee
    });

    document.getElementById('deleteEmployeeButton').addEventListener('click', openInputModal);

    function openInputModal() {
        document.getElementById('inputModal').style.display = 'block';
    }

    function closeInputModal() {
        document.getElementById('inputModal').style.display = 'none';
    }

    document.getElementById('nextDeleteButton').addEventListener('click', confirmDelete); // Updated ID

    function confirmDelete() {
        const lineNumber = parseInt(document.getElementById('lineNumberToDelete').value);
        
        if (lineNumber > 0 && lineNumber <= payroll.length) {
            payroll.splice(lineNumber - 1, 1);
            showPayroll();
            closeInputModal(); // Close modal after deletion
            document.getElementById('lineNumberToDelete').value = ''; // Clear input field for deletion
        } else {
            alert('Invalid line number. Please enter a valid number.');
        }
    }

    function clearInputs() {
        document.getElementById('employeeName').value = '';
        document.getElementById('daysWorked').value = '';
        document.getElementById('dailyRate').value = '';
        document.getElementById('deductionAmount').value = '';
        

   window.onclick = function(event) {
       const inputModal = document.getElementById('inputModal');
       if (event.target == inputModal) {
           closeInputModal();
       }
   };
})();
