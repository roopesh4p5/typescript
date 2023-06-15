// const year=document.getElementById('year')
// const thisyear=new Date().getFullYear().toString();
// year!.setAttribute('presentyear',thisyear)
// if(year){
//     year.innerText=thisyear;
// }


const year=document.getElementById('year') as HTMLElement
const thisyear=new Date().getFullYear();
year.setAttribute('present',thisyear.toString());
year.textContent=thisyear.toString();


// const year=document.getElementById('year')
// const thisyear=new Date().getFullYear();
// year!.setAttribute('present',thisyear.toString());
// year!.textContent=thisyear.toString();
