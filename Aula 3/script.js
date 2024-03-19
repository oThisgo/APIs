function read(){
    car = { modelo : "Classe A" , ano : 2002};
    pessoa = {
        nome : "Thiago",
        idade : 19,
        altura : 1.83,
        pai : false,
        endereco : null,
        filhos : [
            { nome : "Black", idade : 7},
            { nome : "Bolinha", idade : 6},
        ],
        formacao : [2022, 2025, 2027],
        veiculo : car,
        imprimir : function(){
            texto = this.nome + " - Idade: " + this.idade + " - Carro: " + this.veiculo.modelo;
            return texto
        }
    };

    pObjeto = document.getElementById("pObjeto");
    pObjeto.innerHTML = pessoa.imprimir()
}

function calcular(){

    retangulo = {
        altura : document.getElementById('altura').value(), 
        largura : document.getElementById('largura').value(),
        area : function(){
            return this.largura * this.altura;
        }
    }

    divResult = document.getElementById('divResult');
    divResult.innerHTML = 'Área: '+ retangulo.area();
    divResult.style.background = 'grey';
    divResult.style.width = retangulo.largura + 'px';
    divResult.style.height = retangulo.altura + 'px';
}

$(document).ready( function(){
    $('#minhaDiv').css( 'width', '200px' );
    $('#minhaDiv').css( 'height', '300px' );
    $('#minhaDiv').css( 'background-color', 'red' );
    $('#minhaDiv').css( 'color', 'white' );
    $('#minhaDiv').html( '<i> Oi </i>' );
    $('#minhaDiv').hide( 3000 , function(){
        alert('Div escondida');
    } );
} );

$('#change').click( function() {
    //$('#minhaDiv').show( 3000 , function(){
    //    alert('Div mostrada');
    //} );
    $('#minhaDiv').toggle( 3000 );
})
