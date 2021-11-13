const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redp = document.createElement('p');
redp.style.color = "red";
redp.textContent = "Hey I'm red!"
container.appendChild(redp);

const blueh3 = document.createElement('h3');
blueh3.style.color = "blue";
blueh3.textContent = "I'm blue h3!"
container.appendChild(blueh3);

const newdiv = document.createElement('div');
newdiv.style.border = '10px solid black';
newdiv.style.backgroundColor = "pink";

const divh1 = document.createElement('h1');
divh1.textContent = "I'm in a div";

const divp = document.createElement('p');
divp.textContent = "ME TOO!";
newdiv.appendChild(divh1);
newdiv.appendChild(divp);

container.appendChild(newdiv);

const btn = document.querySelector('#btn');
//btn.onclick = () => alert("Hello World");
//btn.addEventListener('click', () => {
//    alert("Hello World");
//  });

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});