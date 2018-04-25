function euroToPounds(){

  var amount = parseInt(document.getElementById("value1").value);

  var pounds = amount * 0.86;
  var message = amount + ' euros converts to ' + pounds + ' sterling.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}

//converts euros into US dollars
function euroToUSDollar(){

  var amount = parseInt(document.getElementById("value1").value);

  var USDollar = amount * 1.06;
  var message = amount + ' euros converts to ' + USDollar + 'USDollar.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}

//converts euros into Yen
function euroToYen(){

  var amount = parseInt(document.getElementById("value1").value);

  var ToYen = amount * 121.12;
  var message = amount + ' euros converts to ' + ToYen + 'Yen.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}

//converts euros into bitcoin
function euroTobitcoin(){

  var amount = parseInt(document.getElementById("value1").value);

  var Tobitcoin = amount * 0.00082;
  var message = amount + ' euros converts to ' + Tobitcoin + 'Bitcoin.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}
