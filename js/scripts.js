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
}
