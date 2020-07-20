bill.addEventListener('focusout', function(e) {
  var num = Number(bill.value)*Number(tip.value)/100/Number(people.value);
  result_tip.innerHTML = '$' + num.toFixed(2);
  var num = Number(bill.value)*Number(tip.value)/100/Number(people.value) + Number(bill.value);
  result_total.innerHTML = '$' + num.toFixed(2);
  e.preventDefault()
}, false)

tip_minus.addEventListener('click', function(e) {
   tip.value = document.getElementById("tip").value - 1;
   var num = Number(bill.value)*Number(tip.value)/100/Number(people.value);
  result_tip.innerHTML = '$' + num.toFixed(2);
  var num = Number(bill.value)*Number(tip.value)/100/Number(people.value) + Number(bill.value);
  result_total.innerHTML = '$' + num.toFixed(2);
   e.preventDefault()
}, false)

tip_plus.addEventListener('click', function(e) {
   tip.value = Number(document.getElementById("tip").value) + 1;
   var num = Number(bill.value)*Number(tip.value)/100/Number(people.value);
  result_tip.innerHTML = '$' + num.toFixed(2);
  var num = Number(bill.value)*Number(tip.value)/100/Number(people.value) + Number(bill.value);
  result_total.innerHTML = '$' + num.toFixed(2);
   e.preventDefault()
 }, false)

 tip.addEventListener('focusout', function(e) {
  var num = Number(bill.value)*Number(tip.value)/100/Number(people.value);
  result_tip.innerHTML = '$' + num.toFixed(2);
  var num = Number(bill.value)*Number(tip.value)/100/Number(people.value) + Number(bill.value);
  result_total.innerHTML = '$' + num.toFixed(2);
   e.preventDefault()
 }, false)

 people_minus.addEventListener('click', function(e) {
   people.value = document.getElementById("people").value - 1;
   var num = Number(bill.value)*Number(tip.value)/100/Number(people.value);
   result_tip.innerHTML = '$' + num.toFixed(2);
   var num = Number(bill.value)*Number(tip.value)/100/Number(people.value) + Number(bill.value);
   result_total.innerHTML = '$' + num.toFixed(2);
   e.preventDefault()
}, false)

people_plus.addEventListener('click', function(e) {
    people.value = Number(document.getElementById("people").value) + 1;
    var num = Number(bill.value)*Number(tip.value)/100/Number(people.value);
    result_tip.innerHTML = '$' + num.toFixed(2);
    var num = Number(bill.value)*Number(tip.value)/100/Number(people.value) + Number(bill.value);
    result_total.innerHTML = '$' + num.toFixed(2);
    e.preventDefault()
 }, false)


 people.addEventListener('focusout', function(e) {
  var num = Number(bill.value)*Number(tip.value)/100/Number(people.value);
  result_tip.innerHTML = '$' + num.toFixed(2);
  var num = Number(bill.value)*Number(tip.value)/100/Number(people.value) + Number(bill.value);
  result_total.innerHTML = '$' + num.toFixed(2);
   e.preventDefault()
 }, false)