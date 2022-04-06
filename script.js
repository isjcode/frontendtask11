function task_one() {
    if (confirm("Press OK!") == true) {
        document.body.style.backgroundColor = "black";
    }
}

function task_two() {
    let age = prompt("Enter your age, please.")

    while (isNaN(age) || age < 0 || age > 130 || age.trim() == 0) {
        age = prompt("Enter a correct age, please.");
    }

    if (age < 18) {
        alert("Too small.")
    }
}
