tip_minus.addEventListener('click', function(e) {
   tip.value = document.getElementById("tip").value - 1;
   result_tip.innerHTML = Number(bill.value)*Number(tip.value)/100/Number(people.value);
   result_total.innerHTML = Number(bill.value)+Number(bill.value)*Number(tip.value)/100/Number(people.value);
   e.preventDefault()
}, false)

tip_plus.addEventListener('click', function(e) {
   tip.value = Number(document.getElementById("tip").value) + 1;
   result_tip.innerHTML = Number(bill.value)*Number(tip.value)/100/Number(people.value);
   result_total.innerHTML = Number(bill.value)+Number(bill.value)*Number(tip.value)/100/Number(people.value); 
   e.preventDefault()
 }, false)

 people_minus.addEventListener('click', function(e) {
   people.value = document.getElementById("people").value - 1;
   result_tip.innerHTML = Number(bill.value)*Number(tip.value)/100/Number(people.value);
   result_total.innerHTML = Number(bill.value)+Number(bill.value)*Number(tip.value)/100/Number(people.value);
   e.preventDefault()
}, false)

people_plus.addEventListener('click', function(e) {
    people.value = Number(document.getElementById("people").value) + 1;
    result_tip.innerHTML = Number(bill.value)*Number(tip.value)/100/Number(people.value);
    result_total.innerHTML = Number(bill.value)+Number(bill.value)*Number(tip.value)/100/Number(people.value);
    e.preventDefault()
 }, false)

 bill.addEventListener('focusout', function(e) {
   result_tip.innerHTML = '$' + Number(bill.value)*Number(tip.value)/100/Number(people.value);
   result_total.innerHTML = '$' + Number(bill.value)+Number(bill.value)*Number(tip.value)/100/Number(people.value);
   e.preventDefault()
 }, false)

 tip.addEventListener('focusout', function(e) {
   result_tip.innerHTML = Number(bill.value)*Number(tip.value)/100/Number(people.value);
   result_total.innerHTML = Number(bill.value)+Number(bill.value)*Number(tip.value)/100/Number(people.value);
   e.preventDefault()
 }, false)
 
