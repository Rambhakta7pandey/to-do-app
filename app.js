let input=document.querySelector("input");
let btn=document.querySelector("button")
let ul= document.querySelector("ul");

input.addEventListener("input",function(){
    let cleanedValue=input.value.replace(/[^a-zA-z1-9 ]/g,"");
    input.value=cleanedValue;
})

btn.addEventListener("click",function(){
    if(input.value.trim()===""){
        alert("empty item cannot be added ");
        return;
    }
    let list=document.createElement("li");
    list.innerText=input.value;
    ul.appendChild(list);

let delbutton=document.createElement("button");
delbutton.innerText="delete";
delbutton.classList.add("delete");
list.appendChild(delbutton);
console.log("item created")
reset();
})

function reset(){
    input.value="";
}

input.addEventListener("keydown",function(event){
if (event.key=="Enter"){
    btn.click();
}
})

ul.addEventListener("click",function(e){
  if(e.target.nodeName=="BUTTON"){
    let item=event.target.parentElement;
    item.remove();
  }
})
