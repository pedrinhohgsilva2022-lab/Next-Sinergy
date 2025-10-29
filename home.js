let t1 = document.getElementById("t1")
let t1a = document.getElementById("t1a")
let t2 = document.getElementById("t2")
let t2a = document.getElementById("t2a")
 let produto1 =  document.getElementsByClassName("produto1")
  let produto2 =  document.getElementsByClassName("produto2")
  let produto3 = document.getElementsByClassName("produto3")
 let produto4 = document.getElementsByClassName("produto4")
  

function trocar1(){
 
  for(let a=0; a<produto1.length;a++){

    produto1[a].style.display="none"
    produto2[a].style.display="grid"

    t1.onclick=trocar3
    t1a.onclick=trocar3

}
  }
  function trocar3(){
   for(let a=0; a<produto1.length;a++){

    produto1[a].style.display="grid"
    produto2[a].style.display="none"

    t1.onclick=trocar1
    t1a.onclick=trocar1

}
}




function trocar2(){
     for(let a=0; a<produto3.length;a++){

    produto3[a].style.display="none"
    produto4[a].style.display="grid"

    t2.onclick=trocar4
    t2a.onclick=trocar4

    }
}
  
  function trocar4(){
    for(let a=0; a<produto3.length;a++){

    produto3[a].style.display="grid"
    produto4[a].style.display="none"

    t2.onclick=trocar2
    t2a.onclick=trocar2

}
  }