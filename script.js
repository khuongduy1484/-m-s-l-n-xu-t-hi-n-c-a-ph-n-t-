// let arr = [];
// let  number = 1;
// for (let i = 0;i<10;i++) {
//    arr[i] = [];
//     for (let j = 0; j < 10; j++) {
//         arr[i][j] =number ++;
//     }
// }
// document.write(arr);
let arr = [];
for (let i = 0;i<100;i++){
    arr[i] = Math.floor(Math.random() * 101);
}
let a ='';
for (let i = 0,j=1;i<arr.length && j<=10;i++,j++){
    a+=arr[i]+' ';
     if (j===10) {
            a+='</br>';
            j=1
    }
}
document.getElementById('arr').innerHTML=a;

function kiem_tr_so_lan_xuat_hien() {
    let number = Number(document.getElementById('number1').value);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (number === arr[i]) count++;
    }
  document.getElementById('arr2').innerHTML = count;
}

