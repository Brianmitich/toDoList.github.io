const InputBox = document.getElementById("input-box");
const List = document.querySelector("#list");
function addtask(){
    if(InputBox.value === ''){
        alert("You Must Write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        List.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        savedata();
    }
    InputBox.value ="";
}
List.addEventListener("click", function(f){
    if(f.target.tagName === "LI"){
        f.target.classList.toggle("checked");
        savedata();
    }
    else if(f.target.tagName === "SPAN"){
        f.target.parentElement.remove();
        savedata();
    }
} ,false);
function savedata(){
    localStorage.setItem("data", List.innerHTML);
}
function showdata(){
    List.innerHTML=localStorage.getItem("data");
}
showdata();