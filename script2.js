var p=document.getElementsByTagName('p')[0];
var form=document.getElementsByTagName('form')[0];
var inp1=document.querySelectorAll('input')[0];
var inp2=document.querySelectorAll('input')[1];
var sub=document.querySelectorAll('input')[2];
var rest=document.querySelectorAll('input')[3];
var adding=(a,b)=>a+b
var subt=(a,b)=>a-b
var mult=(a,b)=>a*b
var divide=(a,b)=>a/b
form.style.fontFamily='cursive'
p.style.fontStyle='italic';
p.style.fontFamily="Trebuchet MS"
// p.style.opacity='0.6'
p.style.color='red'
function submitme(){
    if((isNaN(inp1.value)===true || isNaN(inp2.value)===true) || (inp1.value== '' || inp2.value=='')){
    p.textContent='Not possible to calculate! Please enter correct value'
    }
    else{
    p.innerHTML=''
    form.innerHTML=`<label for='selection'>Do you want to: </label>
    Add
    <input type='radio' name='select' value='add' id='selection'>
    Subtract
    <input type='radio' name='select' value='subt' id='selection'>
    Multiply
    <input type='radio' name='select' value='mult' id='selection'>
    Divide
    <input type='radio' name='select' value='div' id='selection'>
    <a href="index.html"><input type='button' value='Go to front page'></a>`
    var sel0=document.querySelectorAll('input')[0];
    var sel1=document.querySelectorAll('input')[1];
    var sel2=document.querySelectorAll('input')[2];
    var sel3=document.querySelectorAll('input')[3];


    sel0.addEventListener('click',()=>{
        p.textContent=`${Number(inp1.value)} + ${Number(inp2.value)} = ${adding(Number(inp1.value),Number(inp2.value))}`;
    })
    sel1.addEventListener('click',()=>
    {
        p.textContent=`${Number(inp1.value)} - ${Number(inp2.value)} = ${subt(Number(inp1.value),Number(inp2.value))}`;
    }
    )
    sel2.addEventListener('click',()=>
    {
        p.textContent=`${Number(inp1.value)} x ${Number(inp2.value)} = ${mult(Number(inp1.value),Number(inp2.value))}`;
    }
    )
    sel3.addEventListener('click',()=>
    {
        p.textContent=`${Number(inp1.value)} / ${Number(inp2.value)} = ${divide(Number(inp1.value),Number(inp2.value))}`    }
    )
    }
    var front=document.getElementsByTagName('input')[4]
    front.style.padding='20px'
    
}

sub.addEventListener('click',submitme)


