let inputs = document.querySelector("#inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value==""){
        alert("please enter your task");
    }
    else{
        let newEle= document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <button class="delete-btn"><i class="fas fa-trash"></i></button>`;
        text.appendChild(newEle);
        inputs.value="";

        let deleteBtn = newEle.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            newEle.remove();
        });
        
    }
}
