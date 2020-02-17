var check;
var check2;
var CC;
var YY;
var month;
var date;
let submitDetails = document.getElementById('submit');

submitDetails.addEventListener('click', submitBirthday)
function submitBirthday(e) {
  e.preventDefault();
  month = parseInt(document.getElementById("month").value);
  date = parseInt(document.getElementById("date").value);
  check = document.getElementById("Check").value;
  check2=document.getElementById("Check2").value;

  CC=parseInt(document.getElementById("year").value.slice(0,2))
  YY=parseInt(document.getElementById("year").value.slice(2,4))

  if ( month <= 0 || month > 12) {
    alert("Key in valid month.");
    return;
  }
  if ( date <= 0 || date > 31 ) {
    alert("Key in valid date.");
    return;
  }
  if ( year = 0 || year > 2020) {
    alert("Key in valid year.")
    return;
  }
  findAkanName();
}
function findAkanName (){
  var dateweek = Math.floor( ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*( month +1)/10)) + date ) % 7);

  var days = ["Sunday","Monday","Tuesday","Wednsesday","Thursday","Friday","Saturday"];
  var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

  if (check2 == "female") {
    alert("You are a female who was born on a " +days[dateweek] + ".Your Akan name is, "+female[dateweek]);
    return;


  }
  if ( check == "male") {
    alert("You are a male who was born on a " +days[dateweek] + ".Your Akan name is, "+male[dateweek]);
    return;


  }
  else {
    alert("Key in the correct data.");
  }
}
