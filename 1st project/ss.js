//vars 
let name=document.getElementById('name');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let submit=document.getElementById('submit');
let count=document.getElementById('count');
let srch = document.getElementById("s")
let hg ='create';
let df;
//Total
function getTotal() { 
    if ( price.value!='' ){let result = ( +price.value + +ads.value + +taxes.value) - +discount.value; 
        total.innerHTML = result + '$';
total.style.background =  '#4b0082'}
else{total.innerHTML='' ;total.style.background =  '#6A059D'}}
//creat
let data=[]
if (localStorage.phone != null) {
    data=JSON.parse(localStorage.phone)
}else {data=[]};
submit.onclick = function () {
                     let pro={
                     name:name.value,
                     price:price.value,
                     taxes:taxes.value,
                     ads:ads.value,
                     discount:discount.value,
                     total:total.innerHTML,
                     category:category.value,
                     count:count.value};
                    if (name.value && price.value && category.value != '') {switch (hg) {
        case 'create':if (pro.count > 1) {
            for (let i = 0; i < pro.count; i++) {
                data.push(pro);
            }
        }else{data.push(pro) }
            break;
        case 'update' :
     data[df]=pro
     submit.innerHTML='CREATE'
     hg = 'create'
}
}else{}
                    
                     

localStorage.setItem('phone', JSON.stringify(data))
clear()
show()
}    
// clear
 function clear() {
     name.value='';
     price.value='';
     taxes.value='';
     ads.value='';
     discount.value='';
     total.value='';
     category.value='';
     count.value='';
     total.innerHTML='';
}
//read
function show() {
    getTotal()
    let tbl='';
       for (let i = 0; i < data.length; i++) {
        tbl += ` 
        <tr>
            <td>${i+1}</td>
            <td>${data[i].name}</td>
            <td>${data[i].price + "$"}</td>
            <td>${data[i].taxes + "$"} </td>
            <td>${data[i].ads + "$"} </td>
            <td>${data[i].discount + "$"} </td>
            <td>${data[i].total}  </td>
            <td>${data[i].category}</td>
            <td><button onclick="upd(${i})" id="UD">UPDATE</button></td>
            <td><button onclick="del(${i})" id="DEL">DEL</button></td>
        <tr>
        `
        };
        document.getElementById('tbdy').innerHTML= tbl ;
}
//del
function del(i) {
    data.splice(i,1);
    localStorage.phone = JSON.stringify(data);
    show();
}
// dell all
delall.onclick =function () {
    localStorage.clear()
    data.splice(0)
    srch.value = ''    
show()
}
//upd
function upd(i) {
    name.value=data[i].name;
    price.value=data[i].price;
    taxes.value=data[i].taxes;
    ads.value=data[i].ads;
    discount.value=data[i].discount;
    total.value=data[i].total;
    getTotal()
    category.value=data[i].category;
    submit.innerHTML='update';
    hg='update';
    df=i;
scroll({top: 0 , behavior : "smooth"}) }
let searchby=""
function serchby(id) {
switch (id) {
      case "ST":
           searchby="name"
        break;
     case "SP":    
     searchby="price"
           break;
        case "SC":
        searchby="category";
        }
    s.placeholder = "search by " + searchby
    srch.focus()
    console.log(searchby)
}   
//search
function search(value) {let tbl='';
switch (searchby) {
    case "name": for (let i = 0; i < data.length; i++) {
        if (data[i].name.includes(value.toUpperCase())) {;
            tbl += `
        <tr>
            <td>${i+1}</td>
            <td>${data[i].name}</td>
            <td>${data[i].price + "$"}</td>
            <td>${data[i].taxes + "$"} </td>
            <td>${data[i].ads + "$"} </td>
            <td>${data[i].discount + "$"} </td>
            <td>${data[i].total}  </td>
            <td>${data[i].category}</td> 
            <td><button onclick="upd(${i})" id="UD">UPDATE</button></td>
            <td><button onclick="del(${i})" id="DEL">DEL</button></td>
        <tr>`
        }}    
        break;
        case "price": for (let i = 0; i < data.length; i++) {
            if (data[i].price.includes(value.toUpperCase())) {
                tbl += `
            <tr>
                <td>${i+1}</td>
                <td>${data[i].name}</td>
                <td>${data[i].price + "$"}</td>
                <td>${data[i].taxes + "$"} </td>
                <td>${data[i].ads + "$"} </td>
                <td>${data[i].discount + "$"} </td>
                <td>${data[i].total}  </td>
                <td>${data[i].category}</td> 
                <td><button onclick="upd(${i})" id="UD">UPDATE</button></td>
                <td><button onclick="del(${i})" id="DEL">DEL</button></td>
            <tr>`
            }}
        break;
        case "category": for (let i = 0; i < data.length; i++) {
            if (data[i].category.includes(value.toUpperCase())) {;
                tbl += `
            <tr>
                <td>${i+1}</td>
                <td>${data[i].name}</td>
                <td>${data[i].price + "$"}</td>
                <td>${data[i].taxes + "$"} </td>
                <td>${data[i].ads + "$"} </td>
                <td>${data[i].discount + "$"} </td>
                <td>${data[i].total}  </td>
                <td>${data[i].category}</td> 
                <td><button onclick="upd(${i})" id="UD">UPDATE</button></td>
                <td><button onclick="del(${i})" id="DEL">DEL</button></td>
            <tr>`
            }}
 }
document.getElementById('tbdy').innerHTML= tbl ; }
//clear search
clearr.onclick= function clearSech() {srch.value = ''
show()
}
window.onload = show()
