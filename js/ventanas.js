//ubicar en el DOM
const dev = document.querySelector('#dev');
const cybersecurity = document.querySelector('#cybersecurity');
const consulting = document.querySelector('#consulting');
const support = document.querySelector('#support');

const btndev = document.querySelector('#btn-dev');
const btncybersecurity = document.querySelector('#btn-cybersecurity');
const btnconsulting = document.querySelector('#btn-consulting');
const btnsupport = document.querySelector('#btn-support');

//estado inicial
cybersecurity.style.display = 'none';
consulting.style.display = 'none';
support.style.display = 'none';

//agregar event listener
btndev.addEventListener(
        'click',
        function(){
            dev.style.display = 'block';
            cybersecurity.style.display = 'none'; 
            consulting.style.display = 'none'; 
            support.style.display = 'none';
        }
);
btncybersecurity.addEventListener(
        'click',
        function(){
            dev.style.display = 'none';
            cybersecurity.style.display = 'block'; 
            consulting.style.display = 'none'; 
            support.style.display = 'none';
        }
);
btnconsulting.addEventListener(
        'click',
        function(){
            dev.style.display = 'none';
            cybersecurity.style.display = 'none'; 
            consulting.style.display = 'block'; 
            support.style.display = 'none';
        }
);
btnsupport.addEventListener(
        'click',
        function(){
            dev.style.display = 'none';
            cybersecurity.style.display = 'none'; 
            consulting.style.display = 'none'; 
            support.style.display = 'block';
        }
);