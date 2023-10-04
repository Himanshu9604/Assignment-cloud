function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelectorAll('input[name="gender"]:checked');
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    if (firstName && lastName && dob && country && gender.length > 0 && profession && email && mobile) {
        var genderValues = [];
        gender.forEach(function(genderInput) {
            genderValues.push(genderInput.value);
        });

        var popupText = "First Name: " + firstName + "\n";
        popupText += "Last Name: " + lastName + "\n";
        popupText += "Date of Birth: " + dob + "\n";
        popupText += "Country: " + country + "\n";
        popupText += "Gender: " + genderValues.join(", ") + "\n";
        popupText += "Profession: " + profession + "\n";
        popupText += "Email: " + email + "\n";
        popupText += "Mobile Number: " + mobile;

        alert(popupText);
        resetForm();
    } else {
        alert("Please fill in all the required fields.");
    }
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}
