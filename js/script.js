
const calc = window.document.getElementById('calcular');

calc.addEventListener('click', imc);


function imc(){
    const name = window.document.getElementById('name').value;
    const height = window.document.getElementById('height').value;
    const weight = window.document.getElementById('weight').value;
    const res = window.document.getElementById('result');
    let status = '';
    if(name !== '' && height !== '' && weight !== ''){
       const valIMC = Number((weight)/(height^2)).toFixed(1);
       
      if(valIMC >= 18.25 && valIMC <= 24.9 ){
        status = " abaixo do peso" ;
      }else if(valIMC <= 29.9){
        status = " abaixo do peso" ;
      }else if(valIMC <= 34.9){
        status = "Obesidade classe I";
      }else if(valIMC <= 39.9){
       status = "Obesidade classe II";
     }else {
       status = "Obesidade classe III ";
     }

       res.textContent = `Ola! ${name} o valor do seu imc é ${valIMC} status: ${status}`

    }else {
      res.textContent =  "prencha todos os campos!"; 
    }
}

