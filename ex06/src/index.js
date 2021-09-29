function firstName(firstName) {
    return firstName.toUpperCase();
}

function lastName(lastName) {
    return lastName.toLowerCase();
}

console.log(firstName("firstName"));
console.log(lastName("lastName"));

module.exports = {
    firstName,
    lastName
}