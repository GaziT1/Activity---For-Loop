window.addEventListener("load",addListener);
var count = "";
function addListener()
{
		document.getElementById("btnsubmit").addEventListener("click",Check);
}
function Check()
{
	if (count == "")
		{
			Howmnygrdes()
		}
	else
	{
		Grades(count)
	}
}
function Howmnygrdes()
{
	count = document.getElementById("txtinput").value;
	if (count % 1 == 0)
		{
			document.getElementById("lblinput").textContent = "What are the grades? ";
			document.getElementById("txtinput").value = ""
		}
	else
	{
		alert("Whole Numbers Please!")
		document.getElementById("txtinput").value = ""
	}

}

function Grades(times)
{
	var gradeinput = 0
	var grade = 0;
	for (let i = 0; i <= parseInt(times); i++)
		{
			gradeinput = parseFloat(document.getElementById("txtinput").value)
			if (gradeinput <= 100.00 && gradeinput >= 0.00)
				{
					grade = grade + parseFloat(document.getElementById("txtinput").value)
				}
			else 
			{
				alert("Number must be within 0 and 100!")
				document.getElementById("txtinput").value = ""
			}
		}
	document.getElementById("lbloutput").textContent = "Grade average: " + grade
}
