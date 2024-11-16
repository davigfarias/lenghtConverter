const initialValue = prompt('Olá! Vou converter um valor de uma medida para outra pra você!\n\n Primeiro, digite o valor inicial que deseja converter...')
const confirmation = confirm('Certo, o valor digitado foi ' + initialValue + ' Certo?')
let go
let calc

const numberedValue = Number(initialValue)

switch(confirmation)
{
    case true:
        go = true
        break

    case false:
        go = false
        break
}

if(go) {
    const choice = prompt('Certo, para qual unidade de medida vamos converter ' +  initialValue + '? \n\n 1) milímetro(mm) \n 2) centímetro(cm)\n 3) decímetro(dm)\n 4) ecâmetro(dam)\n 5) hectômetro(hm)\n 6) quilômetro(km)\n Escolha pelo número.\n\n Lembre-se que vou considerar o valor base como centímetros')

    switch(choice)
    {
        case '1':
            calc = numberedValue * 10;
            alert('O valor ' + initialValue + ' convertido para milímetros é ' + calc +'mm')
            break
        case '2':
            alert('O valor é ' + initialValue + ' cm')
            break
        case '3':
            calc = numberedValue/10;
            alert('O valor ' + initialValue + ' convertido para decímetros é ' + calc +'dm')
            break
        case '4':
            calc = numberedValue/1000;
            alert('O valor ' + initialValue + ' convertido para decâmetro é ' + calc + 'dam')
            break
        case '5':
            calc = numberedValue/10000;
            alert('O valor ' + initialValue + ' convertido para hectômetro é ' + calc + 'hm')
            break
        case '6':
            calc = numberedValue/100000;
            alert('O valor ' + initialValue + ' convertido para quilômetro é ' + calc + 'km')
            break
        default:
            alert('Ops, valor não esperado. Finalizando...')
    }

} else {
    alert('Finalizando...')
}
