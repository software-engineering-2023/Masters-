function showAlertGeneral() {
    alert("Success");
  }  
  var succeed = document.getElementById('success');
  succeed.addEventListener('click', checkFields);

  var requestC = document.getElementById('applyCredit');
  requestC.addEventListener('click', checkFields);
  var requestL = document.getElementById('reqLoan');
  requestL.addEventListener('click', checkFields);
  var payC = document.getElementById('payCredit');
  payC.addEventListener('click', checkFields);
  var payL = document.getElementById('payLoan');
  payL.addEventListener('click', checkFields);

  var transferr = document.getElementById('transfer');
  transferr.addEventListener('click', showAlertGeneral);
  var transferr1 = document.getElementById('transfer1');
  transferr1.addEventListener('click', checkFields);
  var transferr2 = document.getElementById('transfer2');
  transferr2.addEventListener('click', checkFields);

function showAlert() {
    alert("Points Redeemed");
  }  
  var redeemP = document.getElementById('redeem');
  redeemP.addEventListener('click', checkFields);

function showAlert1() {
    alert("Credit Card Reported Missing");
  }  
  var missingC = document.getElementById('missing');
  missingC.addEventListener('click', checkFields);


// Function to check if all fields are filled and display appropriate messages
function checkFields() {
    var requiredFields = ['Name', 'National ID', 'Birthdate', 'Phone', 'Email', 'Address', 'Type'];

    for (var i = 0; i < requiredFields.length; i++) {
        var field = document.getElementsByName(requiredFields[i])[0];
        if (field.value === '') {
            alert("Please fill in all fields.");
            return;
        }
    }

    alert("Request pending. We will send you a confirmation shortly.");
}

// Trigger the checkFields function when the openAcc button is clicked
var openAccButton = document.getElementById('openAcc');
openAccButton.addEventListener('click', checkFields);


// Function to check if all fields are filled and display appropriate messages
function checkFields2() {
    var requiredFields = ['Name1', 'National ID 1', 'Account'];

    for (var i = 0; i < requiredFields.length; i++) {
        var field = document.getElementsByName(requiredFields[i])[0];
        if (field.value === '') {
            alert("Please fill in all fields.");
            return;
        }
    }

    alert("Request pending. We will send you a confirmation shortly.");
}

var closeAccButton = document.getElementById('closeAcc');
closeAccButton.addEventListener('click', checkFields2);


// // Function to validate form fields and perform action
// function performAction(event) {
// 	event.preventDefault(); // Prevent form submission

// 	var accountInput = document.getElementById('accountInput');
// 	var actionSelect = document.getElementById('actionSelect');

// 	// Check if the account input is empty
// 	if (accountInput.value === '') {
// 		alert('Please fill in the Account to Manage field.');
// 		return;
// 	}

// 	// Check if the action select field has a selected option
// 	if (actionSelect.value === '') {
// 		alert('Please choose an Action to Perform.');
// 		return;
// 	}

// 	// Check if the selected action is either "block" or "unblock"
// 	if (actionSelect.value !== 'block' && actionSelect.value !== 'unblock') {
// 		alert('Please choose a valid action.');
// 		return;
// 	}

// 	// Perform the specified action
// 	if (actionSelect.value === 'block') {
// 		alert('The account is now blocked.');
// 	} else if (actionSelect.value === 'unblock') {
// 		alert('The account is now unblocked and active.');
// 	}
// }

// // Trigger the performAction function when the Perform Action button is clicked
// var performActionButton = document.getElementById('performActionBtn');
// performActionButton.addEventListener('click', performAction);


// Function to handle redeeming points
function redeemPoints() {
    alert('Points redeemed successfully!');
}

// Add a click event listener to the Redeem Points button
var redeemPointsButton = document.getElementById('redeemPointsBtn');
redeemPointsButton.addEventListener('click', redeemPoints);
