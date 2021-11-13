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