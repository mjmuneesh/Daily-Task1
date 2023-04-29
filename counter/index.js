function Increment(){
    let box=document.getElementById("a").value;
     box++;
    document.getElementById("a").value=box;
    
}
function Decrement(){
    let box=document.getElementById("a").value;
     if(box>0){
        box--;
     }
    document.getElementById("a").value=box;
    
}
function Reset(){
    let box=document.getElementById("a").value;
     box=0;
    document.getElementById("a").value=box;
    
}