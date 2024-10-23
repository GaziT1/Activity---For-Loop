window.addEventListener("load",addListener);
var count = "", gradeinput = 0, sum = 0, count2 = 0;
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
	if (count % 1 !== 0 || count == "" || count < 1)
		{
			alert("Whole Numbers Please!")
			document.getElementById("txtinput").value = ""
		}
	else
	{
		document.getElementById("lblinput").textContent = "What are the grades? ";
		document.getElementById("txtinput").value = ""
	}

}

function Grades(times)
{
	
		gradeinput = parseFloat(document.getElementById("txtinput").value)
		if (gradeinput > 100.00 || gradeinput < 0.00 || gradeinput == "")
			{
				alert("Number must be within 0 and 100!")
				document.getElementById("txtinput").value = ""
			}
		else 
			{
				for (let i = 0; i < parseInt(times); i++)
					{
						sum = sum + gradeinput
						gradeinput = 0;
						var gradeaverage = sum/times
						var gradecollegescale = gradeaverage/25
						document.getElementById("txtinput").value = ""
						document.getElementById("txtinput").focus
					}
				count2 += 1
				if (count2 == count)
					{
						document.getElementById("txtinput").disabled = true;
						document.getElementById("lbloutput").textContent = "Grade average: " + gradeaverage + "  College Scale: " + gradecollegescale
					}
										
			}
}
