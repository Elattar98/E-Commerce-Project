var nameInpt = document.getElementById('name')
var labels = document.getElementsByTagName('label')
var nameAlert= document.getElementsByClassName('alert name')

nameInpt.addEventListener("input", function(){
  if(!nameInpt.value){
    nameInpt.style.outline= "2px solid red"
    nameInpt.style.outlineOffset= "-1px"
    nameAlert[0].style.visibility= "visible"
  }else{
    nameInpt.style.outline= "2px solid green"
    nameInpt.style.outlineOffset= "-1px"
    nameAlert[0].style.visibility= "hidden"
  }
})

nameInpt.onclick = function(){
  nameInpt.placeholder= ""
  labels[0].style.visibility= "visible"
}

nameInpt.onblur = function(){
  nameInpt.placeholder= "Name"
  labels[0].style.visibility= "hidden"
}


var emailInpt= document.getElementById('e-mail')
var emailAlert= document.getElementsByClassName('alert email')
var emailPattern = /\w+@.+[.]com$/g

emailInpt.addEventListener("input", function(){
  if(emailPattern.test(emailInpt.value) === false){
    emailInpt.style.outline= "2px solid red"
    emailInpt.style.outlineOffset= "-1px"
    emailAlert[0].style.visibility= "visible"
  }else{
    emailInpt.style.outline= "2px solid green"
    emailInpt.style.outlineOffset= "-1px"
    emailAlert[0].style.visibility= "hidden"
  }
})

emailInpt.onclick = function(){
  emailInpt.placeholder= ""
  labels[1].style.visibility= "visible"
}

emailInpt.onblur = function(){
  emailInpt.placeholder= "Email"
  labels[1].style.visibility= "hidden"
}

var subjectInpt = document.getElementById('subject')
var subjectAlert= document.getElementsByClassName('alert subject')
subjectInpt.addEventListener("input", function(){
  if(!subjectInpt.value){
    subjectInpt.style.outline= "2px solid red"
    subjectInpt.style.outlineOffset= "-1px"
    subjectAlert[0].style.visibility= "visible"
  }else{
    subjectInpt.style.outline= "2px solid green"
    subjectInpt.style.outlineOffset= "-1px"
    subjectAlert[0].style.visibility= "hidden"
  }
})

subjectInpt.onclick = function(){
  subjectInpt.placeholder= ""
  labels[2].style.visibility= "visible"
}

subjectInpt.onblur = function(){
  subjectInpt.placeholder= "Subject"
  labels[2].style.visibility= "hidden"
}

var txtarea = document.getElementById('message')
var txtareaAlert= document.getElementsByClassName('alert message')
  txtarea.addEventListener("input", function(){
    if((txtarea.value).length<25){
      txtarea.style.outline= "2px solid red"
      txtarea.style.outlineOffset= "-1px"
      txtareaAlert[0].style.visibility= "visible"
    }else{
      txtarea.style.outline= "2px solid green"
      txtarea.style.outlineOffset= "-1px"
      txtareaAlert[0].style.visibility= "hidden"
    }
})
