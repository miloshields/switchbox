function switchText(){
  
  val1 = document.getElementById("val1").value
  val2 = document.getElementById("val2").value
 

  if(document.getElementById("button").innerText == "->"){
    console.log("here as well")
    document.getElementById("val1").value = ""
    document.getElementById("val2").value = val1
    document.getElementById("button").innerText = "<-"
  }
  else{
    console.log("got here")
    document.getElementById("val2").value = ""
    document.getElementById("val1").value = val2
    document.getElementById("button").innerText = "->"
  }
}
document.getElementById("button").addEventListener("click", switchText);
