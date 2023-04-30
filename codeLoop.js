function countDown()
{ 
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                //This is the upgraded part of the timer
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than ½ way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
    //This line deactivates the start button
    document.getElementById("startButton").disabled = true;
    //This line actives the stop button
    document.getElementById("stopButton").disabled = false;
}
function countDont()
{
    alert("You have activated the Emergency Stop");
    //This line activates the start button
    document.getElementById("startButton").disabled = false;
    //This line inactives the stop button
    document.getElementById("stopButton").disabled = true;
}
function checkCredentials()
{
    //An alert before sending the login information for confirmation
    alert("Confirm Login Information")
    //The three entry fields followed by the sum of all the entries
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badgeID = document.getElementById("badgeID").value;
    var identification = lastName + " , " + firstName + " - " + badgeID;
    //The designated length has been increased to 40 to account for the full name and a 10 digit ID number
    if(identification.length > 20 || identification.length < 3)
    {
        document.getElementById("loginStatus").innerHTML = "Incorrect Login Information"
    }
    if(badgeID > 999 || badgeID < 100)
    {
        document.getElementById("loginStatus").innerHTML = "Incorrect Login Information"
    }
    //This was a pain to figure out how to get to work properly but eventually I got there
    else if(identification.length <=20 || identification.length <=3)
    {
    document.getElementById("loginStatus").innerHTML = "Identification" + " = " + identification;
    //An alert declaring success
    alert("Login Successful - Welcome " + firstName)
    }
    

}    
//This is a bit of javascript that is important for audio that are connected to particular functions and will make things easier
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function(){this.sound.play();}
}