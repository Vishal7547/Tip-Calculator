

const tipcalcy = () =>{

let amount = document.getElementById('bill_amount').value;
let per =    document.getElementById('tip_per').value;
let tip =    amount * (per/100);
let total = tip + Number(amount);
document.getElementById('tip_total').value=tip;
document.getElementById('total_billed').value=total;

}
