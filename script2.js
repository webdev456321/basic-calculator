var form=document.getElementsByTagName('form')[0];
var inp1=document.querySelectorAll('input')[0];
var inp2=document.getElementsByTagName('input')[1];
var de=document.querySelectorAll('button')[0];
var num1=document.querySelectorAll('button')[1];
var num2=document.querySelectorAll('button')[2];
var num3=document.querySelectorAll('button')[3];
var num4=document.querySelectorAll('button')[4];
var num5=document.querySelectorAll('button')[5];
var num6=document.querySelectorAll('button')[6];
var num7=document.querySelectorAll('button')[7];
var num8=document.querySelectorAll('button')[8];
var num9=document.querySelectorAll('button')[9];
var num10=document.querySelectorAll('button')[10];
var num11=document.querySelectorAll('button')[11];
var num12=document.querySelectorAll('button')[12];
var num13=document.querySelectorAll('button')[13];
var num14=document.querySelectorAll('button')[14];
var num15=document.querySelectorAll('button')[15];
var res=document.querySelectorAll('input')[2];
var h1=document.querySelectorAll('div')[0];
var num16=document.querySelectorAll('button')[17];
var bracket1=document.querySelectorAll('button')[16];
var bracket2=document.querySelectorAll('button')[18];

form.style.fontFamily='cursive'
inp1.value=''
inp2.value=''
num1.addEventListener('click',()=>{
    inp1.value=inp1.value+1
})
num2.addEventListener('click',()=>{
    inp1.value=inp1.value+2
})
num3.addEventListener('click',()=>{
    inp1.value=inp1.value+3
})
num4.addEventListener('click',()=>{
  inp1.value=`${inp1.value}+`
  
})
num5.addEventListener('click',()=>{
    inp1.value=`${inp1.value}*`
   
})
num6.addEventListener('click',()=>{
    inp1.value=inp1.value+4
})
num7.addEventListener('click',()=>{
    inp1.value=inp1.value+5
})
num8.addEventListener('click',()=>{
    inp1.value=inp1.value+6
})
num9.addEventListener('click',()=>{
    inp1.value=`${inp1.value}-`

})
num10.addEventListener('click',()=>{
    inp1.value=`${inp1.value}/`
})
num11.addEventListener('click',()=>{
    inp1.value=inp1.value+7
})
num12.addEventListener('click',()=>{
    inp1.value=inp1.value+8
})
num13.addEventListener('click',()=>{
    inp1.value=inp1.value+9
})
num14.addEventListener('click',()=>{
    inp1.value=inp1.value+0
})
num15.addEventListener('click',()=>{
    inp1.value=`${inp1.value}%`

})
bracket1.addEventListener('click',()=>{
    inp1.value=inp1.value+'('
})
bracket2.addEventListener('click',()=>{
    inp1.value=inp1.value+')'
})

num16.addEventListener('click',()=>{
    if(inp2.value===''){
        inp2.value=inp2.value+'Not Possible to Calculate'
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
