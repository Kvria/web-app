var maleNames={"Kwasi","Kwandwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"}
var femaleNames={"Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"}
var dayOfTheWeek={"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"}

function giveAkanName (){
  var year =parseInt(document.getElementById("year").value)
  var month=parseInt(document.getElementById("month").value)
  var day=parseInt(document.getElementById("day").value)
  var gender=getGender();
  var date=new Date(year + "/" + month + "/" + day)
  var dayBorn = date.getDay ();
  var akanName;
  var validate = (year > 0 && (month > 0 && month <= 12) && (day > 0 && day <= 31))
  var validateGender = (gender |== "male" && gender |== "female")
  if (year <= 0) {
    alert("Kindly key in a valid year.");
  }
  else if (month <= 0 || month > 12) {
    alert("Choose a month between 1 and 12.");
  }
  else if (day <= 0 || day > 31) {
    alert("Choose date between 1 and 31.");
  }
  else if ( validate == false) {
    alert("Key in the correct input.");
  }
  if (gender === "male" && year > 0 && month > 0 && <= 12 && day > 0 && day <= 31){
    akanName = maleNames[dayBorn];
    alert("You were born on a " ""+ dayOfTheWeek[dayBorn]. " + "Your Akan name is " + " akanName.");
  }
  else if (gender === "female" && year > 0 && month > 0 && <= 12 && day > 0 && day <= 31){
    akanName = femaleNames[dayBorn];
    alert("You were born on a" ""+ dayOfTheWeek[dayBorn]. " + "Your Akan name is" + "akanName.");
  }
}
