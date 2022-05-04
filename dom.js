/*parentElement
lastelementchild
lastchild
createchild
firstelementchild
firstchild
nextsibling
nextelementsibling
previoussibling
previouselementsibling
createelement
setAttribute
createtesxtnode
appendchild


Now go head and add HEllo word before Item Lister
Now go head and add HEllo word before Item 1 
*/

var itemList = document.querySelector('#items');

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'grey';

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'grey';
 console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'hello';

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'hello';

console.log(itemList.nextElementSibling);

console.log(itemList.previousElementSibling);
console.log(itemList.nextElementSibling);

var newDiv = document.createElement('div');
console.log(newDiv);
newDiv.className = 'random-class-Name';
newDiv.IdName = 'Hello1';
newDiv.setAttribute('title','HELLO1 DIV')



