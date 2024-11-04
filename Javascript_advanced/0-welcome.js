function welcome(firstName, lastName) {
    firstName = 'Bosco';
    lastName = 'Ishimwe';
    
    let fullName = `${firstName} ${lastName}`;
    function displayFullName() {
        alert ("Welcome " + fullName + "!");
    }
    displayFullName();
}
welcome();
