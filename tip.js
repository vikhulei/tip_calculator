bill.addEventListener('focusout', function(e) {
  var num = Number(bill.value)*Number(tip.value)/100/Number(people.value);
  result_tip.innerHTML = '$' + num.toFixed(2);
  var num = (Number(bill.value)*Number(tip.value)/100 + Number(bill.value))/Number(people.value);
  result_total.innerHTML = '$' + num.toFixed(2);
   e.preventDefault()
}, false)

tip_minus.addEventListener('click', function(e) {
  tip.value = document.getElementById("tip").value - 1;
  var num = Number(bill.value)*Number(tip.value)/100/Number(people.value);
  result_tip.innerHTML = '$' + num.toFixed(2);
  var num = (Number(bill.value)*Number(tip.value)/100 + Number(bill.value))/Number(people.value);
  result_total.innerHTML = '$' + num.toFixed(2);
   e.preventDefault()
}, false)

tip_plus.addEventListener('click', function(e) {
  tip.value = Number(document.getElementById("tip").value) + 1;
  var num = Number(bill.value)*Number(tip.value)/100/Number(people.value);
  result_tip.innerHTML = '$' + num.toFixed(2);
  var num = (Number(bill.value)*Number(tip.value)/100 + Number(bill.value))/Number(people.value);
  result_total.innerHTML = '$' + num.toFixed(2);
   e.preventDefault()
 }, false)

 tip.addEventListener('focusout', function(e) {
  var num = Number(bill.value)*Number(tip.value)/100/Number(people.value);
  result_tip.innerHTML = '$' + num.toFixed(2);
  var num = (Number(bill.value)*Number(tip.value)/100 + Number(bill.value))/Number(people.value);
  result_total.innerHTML = '$' + num.toFixed(2);
   e.preventDefault()
 }, false)

 people_minus.addEventListener('click', function(e) {
  people.value = document.getElementById("people").value - 1;
  var num = Number(bill.value)*Number(tip.value)/100/Number(people.value);
  result_tip.innerHTML = '$' + num.toFixed(2);
  var num = (Number(bill.value)*Number(tip.value)/100 + Number(bill.value))/Number(people.value);
  result_total.innerHTML = '$' + num.toFixed(2);
  if (Number(people.value) > 1) {
    document.getElementById("sp1").style.visibility = "visible";
    document.getElementById("sp2").style.visibility = "visible";
  } else if (Number(people.value) === 1) {
    document.getElementById("sp1").style.visibility = "hidden";
    document.getElementById("sp2").style.visibility = "hidden";
  }
   e.preventDefault()
}, false)

people_plus.addEventListener('click', function(e) {
  people.value = Number(document.getElementById("people").value) + 1;
  var num = Number(bill.value)*Number(tip.value)/100/Number(people.value);
  result_tip.innerHTML = '$' + num.toFixed(2);
  var num = (Number(bill.value)*Number(tip.value)/100 + Number(bill.value))/Number(people.value);
  result_total.innerHTML = '$' + num.toFixed(2);
      if (Number(people.value) > 1) {
        document.getElementById("sp1").style.visibility = "visible";
        document.getElementById("sp2").style.visibility = "visible";
      } else if (Number(people.value) === 1) {
        document.getElementById("sp1").style.visibility = "hidden";
        document.getElementById("sp2").style.visibility = "hidden";
      }
    e.preventDefault()
 }, false)

 people.addEventListener('focusout', function(e) {
  var num = Number(bill.value)*Number(tip.value)/100/Number(people.value);
  result_tip.innerHTML = '$' + num.toFixed(2);
  var num = (Number(bill.value)*Number(tip.value)/100 + Number(bill.value))/Number(people.value);
  result_total.innerHTML = '$' + num.toFixed(2);
  if (Number(people.value) > 1) {
    document.getElementById("sp1").style.visibility = "visible";
    document.getElementById("sp2").style.visibility = "visible";
  } else if (Number(people.value) === 1) {
    document.getElementById("sp1").style.visibility = "hidden";
    document.getElementById("sp2").style.visibility = "hidden";
  }
   e.preventDefault()
 }, false)

var form = document.getElementById("tip_calculator");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

 /*
 function() {
  if (Number(people.value) < 1) {
    alert('');
 
  }

} */