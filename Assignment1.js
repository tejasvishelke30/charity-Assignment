function refreshPage()
{
 window.location.reload();
}

function donateButton()
{
document.getElementById("myDonation").setAttribute("style", "display:block;");
document.getElementById("cbtn").focus();
}

function skipButton()
{
document.getElementById("myDonation").setAttribute("style", "display:none;");
document.getElementById("dbtn").focus();
}

function closeButton()
{
document.getElementById("myDonation").setAttribute("style", "display:none;");
}
