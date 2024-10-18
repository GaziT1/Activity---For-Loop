window.addEventListener("load",addListener);
var count
function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click",Howmnygrdes);
}

function Howmnygrdes()
{
	count = document.getElementById("txtinput").value;
	if (count % 2 == 0)
		{
			document.getElementById("lblinput").textContent = "What are the grades? ";
			document.getElementById("txtinput").value = ""
			Grades(count)
		}
	else
	{
		alert("Whole Numbers Please!")
		document.getElementById("txtinput").value = ""
		Howmnygrdes()
	}

}

function Grades(times)
{
	
}