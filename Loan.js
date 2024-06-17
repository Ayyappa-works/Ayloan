function Loan(){

    //
    let name = document.getElementById("Fullname").value;
    const nameexp =/^[a-z]+$/;
    let namestatus = false;
    if(name ===""){
        document.getElementById("emptyname").innerHTML="name is mandatory";
    }
    else{
        if(name.match(nameexp)){
            namestatus = true;
        }
        else{
            document.getElementById("emptyname").innerHTML="only characters";
        }
    }

    //number validation
    let number=document.getElementById("Phonenumber").value;
    const numberexp = /^[0-9]+$/;
    let numberstatus= false;

    if(number ===""){
        document.getElementById("emptynumber").innerHTML="number is mandatory";
    }
    else{
        if(number.match(numberexp)){
            if(number.length === 10){
                numberstatus=true;
            }
            else{
                document.getElementById("emptynumber").innerHTML="invalid phone number";
            }
        }
        else{
            document.getElementById("emptynumber").innerHTML="only numbers";
        }
    }

    //email validation
    let email = document.getElementById("emailid").value;
    const emailexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailstatus=false;

    if(email === ""){
        document.getElementById("emptyemail").innerHTML="email is mandatory";
    }
    else{
        if(email.match(emailexp)){
            emailstatus = true;
        }
        else{
            document.getElementById("emptyemail").innerHTML="email format is not correct";
        }
    }

    //city
    let city = document.getElementById("cityid").value;
    let citystatus = false;
    if(city===""){
        document.getElementById("emptycity").innerHTML="city name is mandatory";
    }
    else{
        if(city.match(nameexp)){
            citystatus = true;
        }
    }

    //state
    let state = document.getElementById("stateid").value;
    let statestatus = false;
    if(state === ""){
        document.getElementById("emptystate").innerHTML="state name is mandatory";
    }
    else{
        if(state.match(nameexp)){ 
            statestatus = true;
        }
    }

    //pincode
    let pincode = document.getElementById("pincodeid").value;
    let pincodestatus = false;
    if(pincode === ""){
        document.getElementById("emptypincode").innerHTML="pincode is mandatory";
    }
    else{
        pincodestatus = true;
    }
    

    // address
    let address = document.getElementById("addressid").value;
    let addressstatus = false;
    if(state === ""){
        document.getElementById("emptyaddress").innerHTML="address name is mandatory";
    }
    else{
        if(address.match(nameexp)){ 
            addressstatus = true;
        }
    }

    // return
    if(namestatus === true && numberstatus === true && emailstatus === true && citystatus === true && statestatus === true && addressstatus === true && pincodestatus === true){
        return true;
    }
    else {
        return false;
    }
}

function Loan1(){

    //pancard
    let pancard = document.getElementById("pancard").value;
    const pancardexp = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    let pancardstatus = false;

    if(pancard === ""){
        document.getElementById("emptypancard").innerHTML = "Pancard is mandatory";
    }
    else{
        if(pancard.match(pancardexp)){
            pancardstatus = true;
        }
        else{
            document.getElementById("emptypancard").innerHTML ="pancard number is incorrect";
        }
    }


    //monthly salary
    let salary = document.getElementById("salary").value;
    const numberexp = /^[0-9]+$/;
    let salarystatus = false;

    if(salary === ""){
        document.getElementById("emptysalary").innerHTML="salary is mandatory";
    }
    else{
        if(salary.match(numberexp)){
            salarystatus = true;
        }
        else{
            document.getElementById("emptysalary").innerHTML="only in digits";
        }
    }

    //Occupation
    let Occupation = document.getElementById("Occupation").value;
    let Occupationstatus = false;
    const nameexp=/^[a-z]+$/;

    if(Occupation === ""){
        document.getElementById("emptyOccupation").innerHTML="Occupation is mandatory";
    }
    else{
        if(Occupation.match(nameexp)){
            Occupationstatus = true;
        }
        else{
            document.getElementById("emptyOccupation").innerHTML="only in characters";
        }
    }

    //return
    if(pancardstatus === true && salarystatus === true && Occupationstatus === true){
        return true;
    }
    else{
        return false;
    }
}

function Bank(){

    //holder name
    let name = document.getElementById("name").value;
    const nameexp = /^[a-z]+$/;
    let namestatus = false;

    if(name === ""){
        document.getElementById("emptyname").innerHTML="name is mandatory";
    }
    else{
        if(name.match(nameexp)){
            namestatus = true;
        }
        else{
            document.getElementById("emptyname").innerHTML="only characters";
        }
    }

    //bank name
    let bankname = document.getElementById("bankname").value;
    let banknamestatus = false;

    if(name === ""){
        document.getElementById("emptybankname").innerHTML="name is mandatory";
    }
    else{
        if(name.match(nameexp)){
            banknamestatus = true;
        }
        else{
            document.getElementById("emptybankname").innerHTML="invalid bank name";
        }
    }

    //account number
    let account_number = document.getElementById("account_number").value;
    const numberexp = /^[0-9]+$/;
    let account_numberstatus = false;

    if(account_number === ""){
        document.getElementById("emptyaccount_number").innerHTML="account number is mandatory";
    }
    else{
        if(account_number.match(numberexp)){
            account_numberstatus = true;
        }
        else{
            document.getElementById("emptyaccount_number").innerHTML="invalid account number"
        }
    }

    //IFSC code

    let IFSC = document.getElementById("IFSC").value;
    const IFSCexp = /^[A-Za-z]{4}\d{7}$/;
    let IFSCstatus = false;

    if(IFSC === ""){
        document.getElementById("emptyIFSC").innerHTML="IFSC code is mandatory";
    }
    else{
        if(IFSC.match(IFSCexp)){
            IFSCstatus = true;
        }
        else{
            document.getElementById("emptyIFSC").innerHTML="invalid IFSC code"
        }
    }

    //city
    let city = document.getElementById("cityid").value;
    let citystatus = false;
    if(city===""){
        document.getElementById("emptycity").innerHTML="city name is mandatory";
    }
    else{
        if(city.match(nameexp)){
            citystatus = true;
        }
    }

    //state
    let state = document.getElementById("stateid").value;
    let statestatus = false;
    if(state === ""){
        document.getElementById("emptystate").innerHTML="state name is mandatory";
    }
    else{
        if(state.match(nameexp)){ 
            statestatus = true;
        }
    }
    //return
    if(namestatus === true && banknamestatus === true && account_numberstatus === true && IFSCstatus === true && statestatus === true && citystatus === true ){
        alert("Congratulations ! You are eligible for a loan of ₹10,00,000. The amount will be credited to your account within 60 minutes.");
        return true;
    }
    else{
        return false;
    }
}
function contact(){
    //name
    let name=document.getElementById("username").value;
    const nameexp = /^[a-z]+$/;
    let namestatus = false;
    if(name === ""){
        document.getElementById("Emptyname").innerHTML="For submission, the name is mandatory";
    }
    else if(name.match(nameexp)){
        namestatus = true;
    }
    else{
        document.getElementById("Emptyname").innerHTML="The name is invalid";
    }
    
    //email
    let email =document.getElementById("email").value;
    const emailexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailstatus = false;
    
    if(email === ""){
        document.getElementById("EmptyEmail").innerHTML="For submission, the email is mandatory";
    }
    else{
        if(email.match(emailexp)){
            emailstatus = true;
        }
        else{
            document.getElementById("EmptyEmail").innerHTML="Invalid email";
        }
    }

    //return
    if(namestatus === true && emailstatus === true){
        alert("Your comment has been received. We will answer or help you through the email submitted in the form");
    }
}