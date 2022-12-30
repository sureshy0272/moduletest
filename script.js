function submitForm() {
    let firstname = document.getElementById('fname').value;
    let lastname = document.getElementById('lname').value;
    let email = document.getElementById('emaill').value;
    let reason = document.getElementById('reasonn').value;
   console.log(firstname, lastname, email, reason);
    if(firstname != null && lastname != null && email != null && reason != null){
        alert("Successfully submitted!")
    }
    else{
        alert("Please fill all the fields!")
    }
}