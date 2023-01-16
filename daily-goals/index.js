const title= document.getElementById("title");
const description= document.getElementById("description");
const form= document.querySelector("form");
const containers= document.querySelector(".container");

// console.log(container);

const tasks= localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

showAllTasks();

var i=0;
function showAllTasks(){
    tasks.forEach((value, index) =>{
        const div= document.createElement("div");
        div.setAttribute("class", `task`);

        const innerdiv= document.createElement("div");
        div.append(innerdiv);
        
        const p= document.createElement("p");
        p.innerText=value.title;
        p.style.fontWeight='bold';
        innerdiv.append(p);
        
        const span= document.createElement("span");
        span.innerText=value.description;
        innerdiv.append(span);

        const btn= document.createElement("button");
        btn.setAttribute("class", "deleteBtn");
        btn.innerHTML="-";

        btn.addEventListener("click", ()=>{
            removeTasks();
            tasks.splice(index, 1);
            showAllTasks();
            localStorage.setItem("tasks", JSON.stringify(tasks));
        });
        
        div.append(btn);
        containers.append(div);
    });
}

function removeTasks(){
    tasks.forEach((value) => {
            const div = document.querySelector(`.task`);
            div.remove();
    });
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    removeTasks();
    tasks.push({
        title: title.value, description: description.value,
    });

    // console.log(tasks);
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showAllTasks();
});

