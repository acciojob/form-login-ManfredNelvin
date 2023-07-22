function getFormValue() {
  // Get the form element by its ID
  const form = document.getElementById("myForm");

  // Get the input values of first name and last name
  const firstName = form.elements["firstName"].value;
  const lastName = form.elements["lastName"].value;

  // Display the first and last name using alert()
  alert("First Name: " + firstName + "\nLast Name: " + lastName);
}
