const URL = 'https://api.github.com/users/';
var usuario = '';

const txtUsuario = $('#txtUsuario');
const btnProcurar = $('#btn');
const divResultado = $('#Resultado')

btnProcurar.click(function () { 
    
    usuario = txtUsuario.val();

    $.ajax({
        type: "GET",
        url: `${URL}${usuario}`,
        success: function (resposta) {
            console.log(resposta)
            renderizarPerfil(resposta)    
        },
        error: function (erro) {
            console.log(erro);
            let msgErro = erro.responseJSON.message
            msgErro == 'Not Found' ? alert('Usuário não encontrado!') : alert('Erro Desconhecido!')
        }
    });
    
});

function renderizarPerfil({login, bio, avatar_url, location, html_url}) {
    divResultado.empty();  
    divResultado.append(
        $('<img></img>', {
            src: avatar_url,
            alt: 'Imagem de perfil',
            class: 'imgPerfil'
        }),
        $(`<h3>${login}</h3>`),
        $(`<h4>${bio}</h4>`),
        $(`<h4>${location}</h4>`),
        $(`<h4><a href=${html_url}>${html_url}</a></h4>`)
        
    );
}


