
function opcao(img1,img2,img3,p,n){
    let ig=document.getElementById("img-grande")
    ig.src=img1
    let im1=document.getElementById("img-media1")
    im1.src=img2
    let im2=document.getElementById("img-media2")
    im2.src=img3
    document.getElementById("preco").textContent="R$ "+p;
    document.getElementById("nome").textContent="Tenis adidas forum low - cor "+n;
    
}

opcao1()



function opcao1(){
    img1="img/adidas branco (1).png"
    img2="img/adidas branco (2).png"
    img3="img/adidas branco (3).png"
    p="489,90"
    n="verde"
    opcao(img1,img2,img3,p,n)
}
function opcao2(){
    img1="img/adidas off white (1).png"
     img2="img/adidas off white (2).png"
    img3="img/adidas off white (3).png"
    p="489,90"
    n="cinza"
    opcao(img1,img2,img3,p,n)
}
function opcao3(){
   
    img1="img/adidas preto (1).png"
    img2="img/adidas preto (2).png"
     img3="img/adidas preto (3).png"
    p="489,90"
    n="preto"
    opcao(img1,img2,img3,p,n)
}
function opcao4(){
    img1="img/adidas verde  (1).png"

     img2="img/adidas verde  (2).png"

    img3="img/adidas verde  (3).png"
    p="489,90"
    n="verde"
    opcao(img1,img2,img3,p,n)
}
/* //function opcao5(){
    
//     img1="img/adidas vermelho (1).png"
  
    img2="img/adidas vermelho (2).png"
 
    img3="img/adidas vermelho (3).png"
    p="489,90"
    n="vermelho"
    opcao(img1,img2,img3,p,n)
}*/
const select = document.getElementById("quantidade");
const max = 5;
for (let i = 1; i <= max; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
}
  