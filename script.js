// Carne - 400 gr por pessoa + 6 horas, se for mais de 6 horas 650g por pessoa

// Cerveja - 1200 ml por pessoa, se for mais de 6 horas, 2000 ml

//Refrigerante, agua - 1000ml por pessoa, se for mais de 6 horas, 1500ml 

// Crianças valem por 0,5 (METADE )

// Eu preciso pegar a quantidade total de adultos e multiplicar por 400g

// Depois eu preciso pegar a quantidade de crianças e multiplicar por 400g /2 


// Com esses resultados eu vou chegar na quantidade total de carne que vou precisar 





let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')


let res = document.getElementById('resultado')


function calcular(){

let qtdAdultos = inputAdultos.value

let qtdCriancas = inputCriancas.value

let duracao = inputDuracao.value

let qtdTotalCarne = carnePP(duracao) * qtdAdultos + ( carnePP(duracao)/2 * qtdCriancas)

let qtdTotalCerveja = cervejaPP(duracao) * qtdAdultos 

let qtdTotalBebidas = bebidasPP(duracao) * qtdAdultos + ( bebidasPP(duracao)/2 * qtdCriancas)


res.innerHTML = '<p> Total de Carne: ' + qtdTotalCarne/1000 + ' kg </p>'
res.innerHTML += '<p>  Total de Cerveja: ' + Math.ceil(qtdTotalCerveja/355) + ' latas de cerveja</p>'
res.innerHTML += ' <p>Total de Bebidas: ' + Math.ceil(qtdTotalBebidas/2000) + ' Garrafas de Bebida</p>'



// console.log('Total de Carne ' + qtdTotalCarne)

// console.log('Total de Cerveja ' + qtdTotalCerveja)

// console.log('Total de Bebidas ' + qtdTotalBebidas)

}

function carnePP(duracao){
    let carne = 650    

    if ( duracao >= 6 ){
        carne = 650

        return carne 
    }else {
        carne = 400
        return carne
    }
}

function cervejaPP(duracao){
    let cerveja = 1200    

    if ( duracao >= 6 ){
        cerveja = 2000

        return cerveja 
    }else {
        cerveja = 1200
        return cerveja
    }
}

function bebidasPP(duracao){
    let bebibas = 1000  

    if ( duracao >= 6 ){
        bebibas = 1500

        return bebibas 
    }else {
        bebibas = 1000
        return bebibas
    }
}































// function calcular(){
//     console.log('calculando...')

//     let qtdAdultos = inputAdultos.value

//     let qtdCriancas = inputCriancas.value 

//     let duracao = inputDuracao.value

//     let qtdTotalCarne = carnePP(duracao) * qtdAdultos + (400/2 * qtdCriancas) 

//     console.log(qtdTotalCarne)
// }

// function carnePP(duracao){
//     let carne = 400

//     if (duracao >= 6 ){
//        return 650
//     }else {
//     return   400
//     }

// } 





