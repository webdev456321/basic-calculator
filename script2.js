let body=document.querySelectorAll('body')[0]
let form1=document.getElementsByTagName('form')[0]
let inp1=document.querySelectorAll('input')[0];
let inp2=document.getElementsByTagName('input')[1];
let a1=document.getElementsByTagName('a')[0]
let de=document.querySelectorAll('button')[0];

let span1=document.getElementsByTagName("span")[0]
let buttonPad=document.querySelectorAll('button');

let equal=document.querySelectorAll('button')[17];
let dot=document.querySelectorAll('button')[18];
let bracket2=document.querySelectorAll('button')[19];

let res=document.querySelectorAll('input')[2];
let heading=document.querySelector('.heading')
let div2=document.querySelectorAll('div')[1];

let p1=document.createElement('p')
p1.style.textAlign='center'
p1.style.cursor='pointer'
p1.style.borderRadius='9999px'
p1.style.border='1px solid black'
p1.style.color='red'

inp1.value=''
inp2.value=''


a1.addEventListener('click',()=>{
    if(div2.textContent!==""){
        p1.textContent="X"
        div2.appendChild(p1)
        div2.classList.remove('d-none')
        div2.style.zIndex='9999'
        form1.style.transition='1s'
        heading.style.transition='1s'
        heading.style.opacity='0'
        form1.style.opacity='0'
    }

})
p1.addEventListener('click',()=>{
    div2.classList.add('d-none')
    heading.style.opacity='1'
    form1.style.opacity='1'
})
    
for(let i=1;i<17;i++){
    buttonPad[i].addEventListener('click',()=>{
        inp1.value=inp1.value+buttonPad[i].value
    })
}

span1.addEventListener('click',()=>{
    body.style.transition='2s'
    if(span1.title==='dark'){
        span1.textContent='light_mode'
        span1.title='light'
        span1.style.color='yellow'
        span1.style.backgroundColor='rgb(221, 221, 221)'
        body.classList.remove('bg-dark')
        inp2.style.color='red'
        body.classList.add('bg-light')
    }
    else{
        span1.textContent='dark_mode'
        span1.title='dark'
        span1.style.color='grey'
        span1.style.backgroundColor='rgb(48, 48, 147)'
        body.classList.add('bg-dark')
        body.classList.remove('bg-light')
        inp2.style.color='rgb(213, 255, 205)'
    }
})

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
    let result=new Function("return "+inp1.value)
    inp2.value=result()

    let p=document.createElement('p');
    p.textContent=inp1.value+" = "+inp2.value;
    div2.appendChild(p)
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
        let result=new Function("return "+inp1.value)
        inp2.value=result()

        let p=document.createElement('p');
        p.textContent=inp1.value+" = "+inp2.value;
        div2.appendChild(p)

    }

 })
