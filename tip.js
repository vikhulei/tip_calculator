function function_calc() {
  var resultTip = Number(bill.value)*Number(tip.value)/100/Number(people.value);
  result_tip.innerHTML = '$' + resultTip.toFixed(2);
  var resultTotal = (Number(bill.value)*Number(tip.value)/100 + Number(bill.value))/Number(people.value);
  result_total.innerHTML = '$' + resultTotal.toFixed(2);
}

function function_if() {
if (Number(people.value) > 1) {
  document.getElementById("sp1").style.visibility = "visible";
  document.getElementById("sp2").style.visibility = "visible";
} else if (Number(people.value) === 1) {
  document.getElementById("sp1").style.visibility = "hidden";
  document.getElementById("sp2").style.visibility = "hidden";
}
}


bill.addEventListener('focusout', function f_bill() {
function_calc();
})

tip_plus.addEventListener('click', function f_tipPlus() {
  tip.value = Number(document.getElementById("tip").value) + 1;
  function_calc();
})

tip_minus.addEventListener('click', function f_tipPlus() {
  tip.value = Number(document.getElementById("tip").value) - 1;
  function_calc();
})

tip.addEventListener('focusout', function f_tip() {
  function_calc();
})


people_minus.addEventListener('click', function f_peopleMinus() {
  people.value = document.getElementById("people").value - 1;
  function_calc();
  function_if();
})

people_plus.addEventListener('click', function f_peopePlus() {
  people.value = document.getElementById("people").value +++1 ;
  function_calc();
  function_if();
})

people.addEventListener('focusout', function f_peope() {
  function_calc();
  function_if();
})

var form = document.getElementById("tip_calculator");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
