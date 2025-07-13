const button=document.getElementById("btn-right-part")
const partJs=document.getElementById("part-js")
const closeIcone=document.getElementById("img-part-js")

button.addEventListener("click",()=>{
    partJs.style.display="block"
})

closeIcone.addEventListener("click",()=>{
       partJs.style.display="none"
})