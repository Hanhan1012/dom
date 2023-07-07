const container = document.querySelector('#container');

const div1= document.createElement('div');
div1.classList.add('div');
div1.textContent = 'This is the glorious text-content!'

container.appendChild(div1)

const p=document.createElement('p');
p.style.color = "red";
p.textContent ="Hey, I'm red";
container.appendChild(p);

const h3= document.createElement("h3");
h3.style.color= "blue"
h3.textContent="I'm a blue h3";
container.appendChild(h3);

const div= document.createElement("div")
div.style.backgroundColor="pink";
div.style.border= "black" 
container.appendChild(div)

const h1=document.createElement("h1")
h1.textContent="i'm in a div"
div.appendChild(h1);

const p1=document.createElement("P");
p1.textContent="ME TOO!";
div.appendChild(p1)
