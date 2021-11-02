const arrayNameNumbers = [
'zero', 
'one',
'two',
'three',
'four',
'five',
'six',
'seven',
'eight',
'nine'
];
function numberName(a, arr){
  return (a >= 0 && a < 10) ? arr[a] : false;
}

let nameCurrentNumber = numberName(+prompt('Enter number', 0), arrayNameNumbers);
nameCurrentNumber ? alert (nameCurrentNumber) : alert ('Error');