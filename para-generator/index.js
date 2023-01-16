const input= document.getElementById("nwords");
let container= document.querySelector(".container");

const genWords = (n)=> {
    let text="";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0; i<n; ++i){
        const random= (Math.random() * 25).toFixed(0);
        text += letters[random];
        // console.log(random);
    }
    return text;
};



let numWords;
const genPara = () => {
    numWords= Number(input.value);

    const para = document.createElement("p");

    let data="";

    for(let i=0; i<numWords; ++i){
        rnum=(Math.random() * 15).toFixed(0);
        data += genWords(rnum);
        data += " ";
    }
    para.innerText=data;

    para.setAttribute("class", "para");
    container.append(para);
};

// genPara();