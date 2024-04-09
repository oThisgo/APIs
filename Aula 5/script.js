function read(){
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            data = JSON.parse(this.responseText);
            //console.log(data);

            text = "Nome: " + data.nome + "<br>";
            text += "Idade: " + data.idade + "<br>";
            text += "Anos de Formação: " + data.formacoes + "<br>";
            text += "Formações: <br>";

            data.grau.forEach( titulo => {
                text += titulo + "<br>";
            });

            data.animais.forEach( animal => {
                text += animal.nome + " - " + animal.idade + " anos <br>";
            });

            document.getElementById("data").innerHTML = text;
        }
    };

    xhttp.open("GET", "meuJson.json", true);
    xhttp.send();

}

function products(){
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            data = JSON.parse(this.responseText);

            if (data.resposta){
                alert(data.resposta);
            }else{
                content = "<table border='2'>";
                content += "<tr>";
                content += "<th>Código</th>";
                content += "<th>Nome</th>";
                content += "<th>Preco</th>";
                content += "<th>Quantidade</th>";
                content += "<th>Categoria</th>";
                content += "<th>Excluir</th>";
                content += "<tr>";


                data.produtos.forEach(produto => {
                    content += "<tr>";
                    content += "<td>"+produto.id+"</td>";
                    content += "<td>"+produto.nome+"</td>";
                    content += "<td>"+produto.preco+"</td>";
                    content += "<td>"+produto.quantidade+"</td>";
                    content += "<td>"+produto.codCategoria+"</td>";
                    content += "<td><button onclick='excluir("+produto.id+")'>Excluir</button></td>";
                });
                content += "</table>";
                document.getElementById("products").innerHTML = content;
            }
        }
    };

    xhttp.open("GET", "server.php?buscar", true);
    xhttp.send();

}

function excluir(id){
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            data = JSON.parse(this.responseText);
            if(data.resposta){
                alert(data.resposta);
                products();
            }
        }
    }

    xhttp.open("GET", "server.php?excluir&id="+id, true);
    xhttp.send();
}

function inserir(){
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            data = JSON.parse(this.responseText);
            if(data.resposta){
                alert(data.resposta);
                products();
            }
        }
    }

    nome = document.getElementById("txtNome").value;
    preco = document.getElementById("txtPreco").value;
    qtd = document.getElementById("txtQtd").value;
    xhttp.open("POST", "server.php?inserir", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nome="+nome+"&preco="+preco+"&qtd="+qtd);
}