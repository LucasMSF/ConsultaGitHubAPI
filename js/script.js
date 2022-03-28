//constante para guardar a URL da requisição
const URL = 'https://api.github.com/users/';
//variável para guardar o usuario digitado pelo cliente
var usuario = '';

//Constantes que armazenam os obejetos da DOM
const txtUsuario = $('#txtUsuario');
const btnProcurar = $('#btn');
const divResultado = $('#Resultado')

//Programando o evento click do Botão
btnProcurar.click(function () { 
    
    //Puxando usuário digitado pelo cliente 
    usuario = txtUsuario.val();

    //Declarando a requisição da biblioteca jquery
    $.ajax({
        type: "GET",
        url: `${URL}${usuario}`,
        //callback de sucesso
        success: function (resposta) {
            console.log(resposta)
            renderizarPerfil(resposta)    
        },
        //callback de erro
        error: function (erro) {
            console.log(erro);
            let msgErro = erro.responseJSON.message ? erro.responseJSON.message : erro.statusText;
            msgErro == 'Not Found' ? alert('Usuário não encontrado!') : alert('Erro Desconhecido!');
        }
    });
    
});

//Função resposável por adicionar os elementos HTML com os dados recebidos da requisição
function renderizarPerfil({login, bio, avatar_url, location, html_url}) {
    divResultado.empty();
    divResultado.css({display: 'none'});
    
    divResultado.append(
        $('<img></img>', {
            src: avatar_url,
            alt: 'Imagem de perfil',
            class: 'imgPerfil'
        }),
        $(`<h3>${login}</h3>`),
        $(`<h4>${bio ? bio : 'Biografia não informada!'}</h4>`),
        $(`<h4>${location ? location : 'Localidade não informada!'}</h4>`),
        $(`<h4><a href=${html_url} target="_blank">${html_url}</a></h4>`)
    );

    //Animção de FadeIn 
    divResultado.fadeIn(400);
}


