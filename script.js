const vardi = ['Andris', 'Liene', 'Marija', 'Kristers', 'Mairis'];
const balvas = ['Laptop', 'PS5', 'Iphone', 'Televizors', 'PC'];
const naudaKopa = 100000;
let uzvaretajuSkaits = 5;
let rindas = document.querySelector('.rindas');//pievienot mainīgo
rindas.innerHTML = ' ';
let uz2 = document.querySelector('.balvas');//pievienot mainīgo
balvas.innerHTML = ' ';

for (let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = Math.random() * vardi.length;//vārdu skaits
    rand = Math.floor(rand);//apaļo lejā
    let uzvaretajs = vardi[rand];
    let uz2 = balvas[rand];
    //console.log(vardi[rand]);

    rindas.innerHTML += `
<tr>
    <td>${i + 1}</td>
    <td>${uzvaretajs}</td>
    <td>${uz2}</td>
    </tr>
    `
    
}