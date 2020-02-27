
var gender;
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
  
  gender=document.getElementById("gender").value;

  year=parseInt(document.getElementById("year").value);
  if ( month <= 0 || month > 12) {
    alert("Key in valid month.");
    return;
  }
  if ( date <= 0 || date > 31 ) {
    alert("Key in valid date.");
    return;
  }
  if ( year === 0 || year > 2020) {
    alert("Key in valid year.")
    return;
  }
  findAkanName();
}
function findAkanName (){
  const day = new Date(`${date}-${month}-${year}`)
  let dateweek = day.getDay()
  console.log(`${date}-${month}-${year}`)

  var days = ["Sunday","Monday","Tuesday","Wednsesday","Thursday","Friday","Saturday"];
  var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

  if(gender === "male"){
    alert("You are a male who was born on a " +days[dateweek] + ".Your Akan name is, "+male[dateweek]);
    return;
  }
  else if(gender==="female"){
    alert("You are a female who was born on a " +days[dateweek] + ".Your Akan name is, "+female[dateweek]);
    return;
  }
else {
    alert("Key in the correct data.");
  }
}
