let rock = document.querySelector(".i1");
let paper = document.querySelector(".i2");
let scisior = document.querySelector(".i3");
let result = document.querySelector('.result')
let container = document.querySelector('.container')
let button = document.querySelector('.new')


function secureRandom(max) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max;
}

let userinput = 4;
wininput = secureRandom(3);

console.log(wininput)

rock.addEventListener('click', ()=>{
    userinput = 0;
    if(wininput==2){
        result.classList.remove('hide');
        button.classList.remove('hide');
        result.innerText = "you won, computer chose : scisior";
        wininput = secureRandom(3);
        container.classList.add('hide')
    }else if(wininput==userinput){
        button.classList.remove('hide');
        result.classList.remove('hide');
        result.innerText = "its a draw";
        container.classList.add('hide')
        wininput = secureRandom(3);
    }else{
        button.classList.remove('hide');
        result.classList.remove('hide');
        result.innerText = "you lost, computer chose : paper";
        container.classList.add('hide')
        wininput = secureRandom(3);
    }
})
paper.addEventListener('click', ()=>{
    userinput = 1;
    if(wininput==0){
        button.classList.remove('hide');
        result.classList.remove('hide');
        result.innerText = "you won, computer chose : rock";
        wininput = secureRandom(3);
        container.classList.add('hide')
    }else if(wininput==userinput){
        button.classList.remove('hide');
        result.classList.remove('hide');
        result.innerText = "its a draw";
        container.classList.add('hide')
        wininput = secureRandom(3);
    }else{
        button.classList.remove('hide');
        result.classList.remove('hide');
        result.innerText = "you lost, computer chose : scissor";
        wininput = secureRandom(3);
        container.classList.add('hide')
    }
})
scisior.addEventListener('click', ()=>{
    userinput = 2;
    if(wininput==1){
        button.classList.remove('hide');
        result.classList.remove('hide');
        container.classList.add('hide')
        result.innerText = "you won, computer chose : paper";
        wininput = secureRandom(3);
    }else if(wininput==userinput){
        button.classList.remove('hide');
        container.classList.add('hide')
        result.classList.remove('hide');
        result.innerText = "its a draw";
        wininput = secureRandom(3);
    
    }else{
        button.classList.remove('hide');
        container.classList.add('hide')
        result.classList.remove('hide');
        result.innerText = "you lost, computer chose : rock";
        wininput = secureRandom(3);
    }
})

button.addEventListener('click',()=>{
    container.classList.remove('hide')
    result.classList.add('hide')
    button.classList.add('hide')
})
