document.getElementById('btnSubmit').onclick = function(e) {
    e.preventDefault();
    var princ = parseInt(document.getElementById('principle').value);
    var dur = parseInt(document.getElementById('time').value);
    var interest = parseInt(document.getElementById('interest').value);
    interestAmount = (princ * dur * interest) / 100;
    console.log(interestAmount);
    totalAmount = princ + interestAmount;
    console.log(totalAmount);
    interestAmountPerc = Math.round((interestAmount/totalAmount) * 100, 2);
    console.log(interestAmountPerc);
    totalAmountPerc = (100 - interestAmountPerc);
    document.getElementById('total').value = totalAmount;
    console.log(totalAmountPerc);
    if(totalAmount===0) {
        totalAmountPerc = 0;
    }
    var chart = anychart.bar([
        ["Total Amount (%)", totalAmountPerc],
        ["Interest (%)", interestAmountPerc]
      ]);
      chart.title("EMI Calculator");
      chart.container("container").draw();
}

// anychart.onDocumentReady(function() {
//     // JSON data
//     chart = anychart.fromJson(json);
//     // draw chart
//     chart.draw();
//   });

document.getElementById('btnClear').onclick = function(e) {
    document.getElementById('frm').reset();
}