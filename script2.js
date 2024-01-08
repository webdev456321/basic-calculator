var form=document.getElementsByTagName('form')[0];
var inp1=document.querySelectorAll('input')[0];
var inp2=document.getElementsByTagName('input')[1];

var de=document.querySelectorAll('button')[0];

let buttonPad=document.querySelectorAll('button');

let equal=document.querySelectorAll('button')[17];
let dot=document.querySelectorAll('button')[18];
let bracket2=document.querySelectorAll('button')[19];

var res=document.querySelectorAll('input')[2];
var h1=document.querySelectorAll('div')[0];

inp1.value=''
inp2.value=''

for(let i=1;i<17;i++){
    buttonPad[i].addEventListener('click',()=>{
        inp1.value=inp1.value+buttonPad[i].value
    })
}

dot.addEventListener('click',()=>{
    inp1.value=inp1.value+'.'
})

bracket2.addEventListener('click',()=>{
    inp1.value=inp1.value+')'
})

equal.addEventListener('click',()=>{
    if(inp2.value.length===0){
        inp2.value=inp2.value+"Not possible to calculate"
    }
    inp2.value=eval(inp1.value)
})

res.addEventListener('click',()=>{
    inp1.value=''
    inp2.value=''
})
de.addEventListener('click',()=>{
    inp1.value=inp1.value.slice(0,-1)
})

inp1.addEventListener('keypress',(event)=>{
    if(event.keyCode===13){
        event.preventDefault()
        if(inp2.value.length===0){
            inp2.value=inp2.value+'Not Possible to Calculate'
        }
        inp2.value=eval(inp1.value)

    }

 })
