function validateForm() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (firstName === "" || lastName === "" || dob === "" || country === "" || genderCheckboxes.length === 0 || profession === "" || email === "" || mobile === "") {
        alert("Please fill in all the required fields.");
        return false;
    }

    return true;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("survey-form").reset();
}

document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("popup-first-name").textContent = document.getElementById("first-name").value;
    document.getElementById("popup-last-name").textContent = document.getElementById("last-name").value;
    document.getElementById("popup-dob").textContent = document.getElementById("dob").value;
    document.getElementById("popup-country").textContent = document.getElementById("country").value;

    const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    const genderValues = [...genderCheckboxes].map(checkbox => checkbox.value).join(", ");
    document.getElementById("popup-gender").textContent = genderValues;

    document.getElementById("popup-profession").textContent = document.getElementById("profession").value;
    document.getElementById("popup-email").textContent = document.getElementById("email").value;
    document.getElementById("popup-mobile").textContent = document.getElementById("mobile").value;

    document.getElementById("popup").style.display = "flex";
});
