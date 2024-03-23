document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var dob = document.getElementById('dob').value;
    var dobDate = new Date(dob);
    var today = new Date();
    
    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDiff = today.getMonth() - dobDate.getMonth();
    
    // Adjust age if the current month is before the birth month
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }
    
    document.getElementById('result').innerText = "Your age is: " + age;
});