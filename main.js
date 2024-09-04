window.onload = function () {
  document.querySelector("h1").style.opacity= 1;
};


const text = "Hello World!!!";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.querySelector("h2").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

typeWriter();


