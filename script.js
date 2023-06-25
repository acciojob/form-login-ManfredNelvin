function getFormValue() {
  // Retrieve the form element
  const form = document.getElementById('myForm');

  // Retrieve the values of the first name and last name input fields
  const firstName = form.elements['firstName'].value;
  const lastName = form.elements['lastName'].value;

  // Display the first and last name using alert
  alert('First Name: ' + firstName + '\nLast Name: ' + lastName);
}
