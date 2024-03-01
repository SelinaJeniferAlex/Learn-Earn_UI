document.getElementById("showBox").addEventListener("mouseover", function(event){
    event.preventDefault(); // Prevent the default link behavior

    var boxContainer = document.getElementById("boxContainer");
    var hiddenBox = document.getElementById("hiddenBox");

    if (boxContainer.style.display === "none") 
    {
        // Show the image container and image
        boxContainer.style.display = "block";
        hiddenBox.style.display = "block";
    } 
    else 
    {
        // Hide the image container and image
        boxContainer.style.display = "none";
        hiddenBox.style.display = "none";
    }
});
function login()
{
    window.location.href = "Login.html";
}
function enroll()
{
    window.location.href = "Enroll.html";
}
function card()
{
    confirm("?");
}

// view password codes
function myLogPassword()
{

    var a = document.getElementById('logPassword');
    var b = document.getElementById('eye');
    var c = document.getElementById('eye-slash');

    if(a.type === "password")
    {
        a.type = "text"
        b.style.opacity = "0";
        c.style.opacity = "1";
    }
    else
    {    
        a.type = "password"
        b.style.opacity = "1";
        c.style.opacity = "0";
    }
}
function myRegPassword()
{
    var d = document.getElementById('regPassword');
    var b = document.getElementById("eye-2");
    var c = document.getElementById("eye-slash-2");
    if(d.type === "password")
    {
        d.type = "text"
        b.style.opacity = "0";
        c.style.opacity = "1";
    }
    else
    {    
        d.type = "password"
        b.style.opacity = "1";
        c.style.opacity = "0";

    }
}
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    offset: 200,   // Offset (in pixels) from the top of the page
});
