
 function addDetail()

	{ formHide();
	  tableAppear();

	  var EmpID=document.sample.EmpID.value;

	  var name=document.sample.name.value;

	  var Dept=document.sample.Dept.value;

	  var emailID=document.sample.emailID.value;

	  var DOJ=document.sample.DOJ.value;



	var tr = document.createElement('tr');


	var td1 = tr.appendChild(document.createElement('td'));

	var td2 = tr.appendChild(document.createElement('td'));

	var td3 = tr.appendChild(document.createElement('td'));

	var td4 = tr.appendChild(document.createElement('td'));

	var td5 = tr.appendChild(document.createElement('td'));

	var td6 = tr.appendChild(document.createElement('td'));



	td1.innerHTML=EmpID;

	td2.innerHTML=name;

	td3.innerHTML=Dept;

	td4.innerHTML=emailID;

	td5.innerHTML=DOJ;

	td6.innerHTML='<button onclick="deleteRow(this);"'+'<span>X</span>'+'</button>';

	document.getElementById("tbl").appendChild(tr);
	document.getElementsByTagName("hello").setAttribute("display","none");

	}


       function deleteRow(x)
 {
x.parentNode.parentNode.parentNode.removeChild(x.parentNode.parentNode);

}        
function formAppear(){
document.getElementById('hello').hidden=false;

} 
function formHide(){
document.getElementById('hello').hidden=true;

}
function tableAppear(){
	  document.getElementById('tbl').hidden=false;

}
function tableHide(){
	  document.getElementById('tbl').hidden=true;

}
