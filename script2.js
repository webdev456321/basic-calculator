let body=document.querySelectorAll('body')[0]
let form1=document.getElementsByTagName('form')[0]
let inp1=document.querySelectorAll('input')[0];
let inp2=document.getElementsByTagName('input')[1];
let a1=document.getElementsByTagName('a')[0]
let de=document.querySelectorAll('button')[0];
let span1=document.getElementsByTagName("span")[0]
let equal=document.querySelectorAll('button')[17];
let heading=document.querySelector('.heading')
let div2=document.querySelectorAll('div')[1];

let p1=document.createElement('p')
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
        body.style.overflow="hidden"
    }


})
p1.addEventListener('click',()=>{
    div2.classList.add('d-none')
    heading.style.opacity='1'
    form1.style.opacity='1'
    body.removeAttribute('style',"overflow:hidden")
})

const inputValues=(val)=>{
    inp1.value+=val
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

const calculations=()=>{
    const pattern= /[0-9\s+\-*/%().]/g
    const res=inp1.value.match(pattern)
    if(res){
    try{
        let evaluation=new Function("return "+res.join(""))
        inp2.value=evaluation()

        let p=document.createElement('p');
        p.textContent=inp1.value+" = "+inp2.value;
        div2.appendChild(p)

        }
        catch(e){
            inp2.value='Not Possible to Calculate'
        }
    }
    else{
        inp2.value="Invalid Expression"
    }
}

equal.addEventListener('click',()=>{
    calculations()
})

de.addEventListener('click',()=>{
    inp1.value=inp1.value.slice(0,-1)
    inp2.value=''
})

inp1.addEventListener('keydown',(event)=>{
    if(event.key==="Enter"){
        event.preventDefault()
        calculations()
    }
 })
