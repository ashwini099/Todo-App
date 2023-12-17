let btn=document.querySelector('button');
let inp=document.querySelector('input');
let lis=document.querySelector('ol');
btn.addEventListener('click',function(){
    let li=document.createElement('li');
   li.innerText=inp.value;
 let ol=document.querySelector('ol');
 ol.appendChild(li);

 let delbtn=document.createElement('button');
delbtn.innerText='delete';
delbtn.classList.add('delete');
let list=document.querySelector('li');
list.appendChild(delbtn);
inp.value='';
})


    lis.addEventListener('click',function(event){
        if(event.target,this.nodeName='BUTTON'){
            let par=event.target.parentElement;
            par.remove();
        }
      
    })

