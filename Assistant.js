alert("Hi I am your personal assistant");
var myAssistantName = prompt("What would you like to call me");
if (myAssistantName == ""){
document.getElementById("footer").innerHTML = "JS Personal Assistant <BR> Barthdry Corporation 2019 - 2021";
} else{
document.getElementById("footer").innerHTML = myAssistantName + " Personal Assistant <BR> Barthdry Corporation 2019 - 2021";
}
switch(prompt("Ask Me anything")){
case "Google":
var Gsearch = prompt(" Google Anything");
function googlesearch(ans){ 
    query = ans;
    url ='http://www.google.com/search?q=' + query;
    window.open(url,'_blank');
}
document.getElementById("result").innerHTML = "Allow Popups to Perform Search Functions";
googlesearch(Gsearch);
case "add":
var num1 = Prompt("Enter Number 1");
var num2 = Prompt("Enter Number 2");
var sum = num1 + num2 
Alert("The Sum is" + sum)
 default: 
document.getElementById("result").innerHTML = "Sorry I don't Understand";
}
