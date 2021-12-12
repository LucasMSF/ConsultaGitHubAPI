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

<<<<<<< HEAD
function renderizarPerfil({login, bio, avatar_url, location, html_url}) {
=======
function renderizarPerfil({login, bio, avatar_url, location, url}) {
>>>>>>> 8f4d234a680b3eb42e3224505c4fc9428337554e
    divResultado.empty();  
    divResultado.append(
        $('<img></img>', {
            src: avatar_url,
<<<<<<< HEAD
            alt: 'Imagem de perfil',
            class: 'imgPerfil'
=======
            alt: 'Imagem de perfil'
>>>>>>> 8f4d234a680b3eb42e3224505c4fc9428337554e
        }),
        $(`<h3>${login}</h3>`),
        $(`<h4>${bio}</h4>`),
        $(`<h4>${location}</h4>`),
<<<<<<< HEAD
        $(`<h4><a href=${html_url}>${html_url}</a></h4>`)
        
=======
        $(`<h4>${url}</h4>`) 
>>>>>>> 8f4d234a680b3eb42e3224505c4fc9428337554e
    );
}


