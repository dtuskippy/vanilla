let root = document.getElementById('root');


function renderElement(element) {
  root.appendChild(element);
}

function Header(title) {
  let headerElement = document.createElement('header');
  headerElement.textContent = title;
  renderElement(headerElement);
}

function Counter(){
  let count = 0;
  let counterElement = document.createElement('h2');
  counterElement.textContent = count;
  renderElement(counterElement);
  counterElement.addEventListener('click',function() {
    counterElement.textContent = ++count;
  })
}

function Footer(year) {
  let footerElement = document.createElement('footer');
  footerElement.textContent = `Copyright ${year}`;
  renderElement(footerElement);
  
}









Header('Svet Gizma');
Counter();
Footer(2022);