// Exemplo de atribuição de imagem pelo js 
//
//document.getElementById(id_c).src = './src/images/urso.png'
//

var qnt_c = 0 // quantidade de cartas viradas :D
//var carta1 = ''
//var carta2 = ''

function virar(posicao){
    id_f = `f_${posicao}`
    id_c = `c_${posicao}`
    
    let fundo = document.getElementById(id_f).classList.value

    if(fundo == ''){
        document.getElementById(id_c).classList.remove('hidden');
        document.getElementById(id_f).classList.add('hidden');

        qnt_c += 1
    }else{
        document.getElementById(id_c).classList.add('hidden');
        document.getElementById(id_f).classList.remove('hidden');

        qnt_c -=1
    }


}