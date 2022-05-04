/*Make the 2nd item have green background color
Make the 3rd item invisible
*/
var item2 = document.querySelector
('.list-group-item:nth-child(2)');
item2.style.backgroundColor = 'green';

var item3 = document.querySelector
('.list-group-item:nth-child(3)');
item3.style.color = 'white';


var titles = document.querySelectorAll('.list-group-item');
titles[1].style.color = 'green';


var odd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
}