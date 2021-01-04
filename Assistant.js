alert("Hi I am your personal assistant");
var myAssistantName = prompt("What would you like to call me");
document.getElementById("footer").innerHTML = myAssistantName + " Personal Assistant <BR> Barthdry Corporation 2019 - 2021";
var Gsearch = prompt("Ask Me Anything");
function googlesearch(ans)
{
    query = ans;
    url ='http://www.google.com/search?q=' + query;
    window.open(url,'_blank');
}
document.getElementById("result").innerHTML = "Allow Popups to Perform Search Functions"
googlesearch(Gsearch)

