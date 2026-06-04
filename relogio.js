function relogioDigital() {
    let data = new Date();

    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();

    if(hora < 10) {
        hora = "0"+hora
    }
    if(minuto < 10) {
        minuto = "0"+minuto
    }
    if(segundo < 10) {
        segundo = "0"+segundo
    }

    let relogio = `${hora}:${minuto}:${segundo}`  

    document.querySelector('.digital').innerHTML = relogio;

    document.querySelector('.p_h').style.transform = `rotate(${hora*30}deg)`;
    document.querySelector('.p_m').style.transform = `rotate(${minuto*6}deg)`;
    document.querySelector('.p_s').style.transform = `rotate(${segundo*6}deg)`;

    setTimeout(relogioDigital, 1000)

}

relogioDigital()