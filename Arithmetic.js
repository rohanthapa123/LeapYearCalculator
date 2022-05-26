let enteredYear = document.getElementById("input");
const alertBox = document.querySelector(".alert");
let burgerBtn = document.querySelector(".burger-btn");
let message = document.querySelector(".message");


///this function is called from the output from calculate function 
//it make the popup visible and add the html element containing answer
function alertPopUp(value){
    alertBox.style.visibility = "visible";
    message.innerHTML = value;
}
//this function is callled when cross botton is clicked which make the popup btn hidden
burgerBtn.addEventListener("click", function close(){
    alertBox.style.visibility = "hidden";
})

//function that calculate whethere it is a leap year or not 
//made using nested if-else 
function calculate() {
    let year = enteredYear.value;
    console.log(year)
    if(year != ""){
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                alertPopUp("<h3>The year " + year + " is a leap year</h3>" );//the output is passed to alertPopUp function
            } else {
                alertPopUp("<h3>`The year "+year+ " is not a leap year`</h3>")
            }
        } else {
            alertPopUp("<h3>The year " + year + " is a leap year</h3>")
        }
    } else {
        alertPopUp("<h3>The year " +year + " is not a leap year</h3>")
    }}
    else{
        alertPopUp("<h3>Enter certain value</h3>");
    }
}