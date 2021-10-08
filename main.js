const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow)
{

let count1=0;
let count2=0;

for(let i=0; i<firstRow.length; i++) {
  if (firstRow.charAt(i) == 'а') {
    count1++;
  }
}

for(let i=0; i<secondRow.length; i++) {
  if (secondRow.charAt(i) == 'а') {
    count2++;
  }
}

if (count1 >= count2){
  return count1;
}
else{
  return count2;
}

}

console.log(getRow(firstRow, secondRow));

var phone = prompt('Введите номер');
var lenPhone = phone.length;
var tt=phone.split('');
if(lenPhone == 12){
tt.splice(2,"", " (");
tt.splice(6,"", ") ");
tt.splice(10,"", "-");
tt.splice(13,"", "-");
}else if(lenPhone == 13){
tt.splice(3,"", "(");
tt.splice(7,"", ")");
tt.splice(11,"", "-");
tt.splice(14,"", "-");
}
alert(tt.join(''))