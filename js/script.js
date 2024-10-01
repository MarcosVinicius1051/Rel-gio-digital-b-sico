let setTime = 1000; 

let valorMinuto = 0;
let valorSegundo = 0;
const valorTela = document.getElementById("clock");
contador()



function contador(){
    setTimeout(()=>{
        if(valorSegundo<61){
            if(valorMinuto.toString().length == 2){
                unidadeMinutos();
                contador()
            }else{
                unidadeSegundos();
                contador()
            }
        }  
        if(valorSegundo == 60){
            resetSegundos();
        }
    },setTime)
}

function addTela(val){
    valorTela.innerHTML = val;
    return; 
}



function unidadeSegundos(){
    switch(valorSegundo.toString().length){
        case 1: 
            addTela(`0${valorMinuto}:0${valorSegundo}`)
            return valorSegundo++;
        case 2: 
            addTela(`0${valorMinuto}:${valorSegundo}`)
            return valorSegundo++;
    }
}
function unidadeMinutos(){
    switch(valorSegundo.toString().length){
        case 1: 
            addTela(`${valorMinuto}:0${valorSegundo}`)
            return valorSegundo++;
        case 2: 
            addTela(`${valorMinuto}:${valorSegundo}`)
            return valorSegundo++;
    }
}
function resetSegundos(){
    return  valorMinuto++, valorSegundo = 0; 
}