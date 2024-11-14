let condicao = true

while (condicao) {
    let menu = Number(prompt(" Olá querido(a) usuário(a), nesse programa aqui você poderá converter, \n os Celsius em Farenheit, e os Farenheit em Celsius. \n \n  1) Converter Celsius para Fahrenheit. \n 2) Converter Fahrenheit para Celsius \n 3) Sair do programa. \n \n Insira um número conforme o calculo que quiser fazer: "))
    switch (menu) {
        case 1:
            let calculo2Celsius = Celsius()
            alert(" Os grados em Farenheit são: " + calculo2Celsius)
            break;
        case 2:
            let calculo2Farenheit = Farenheit()
            alert(" Os grados em Celsius são: " + calculo2Farenheit)
            break;
        case 3:
            alert(" Obrigado por usar o nosso programa ")
            sair();
            continuar; false
            break;
        default:
            alert(" Tente novamente: ")
            break;
    }
}

function Celsius() {
    let celsius = Number(prompt(" Insira o valor aqui: "))
    let calculoCelsius = (celsius * 1.8) + 32
    return calculoCelsius;
}

function Farenheit() {
    let farenheit = Number(prompt(" Insira o valor aqui: "))
    let calculoFarenheit = (farenheit - 32) * 0.55
    return calculoFarenheit;
}

