const mysql = require('mysql');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const conn = mysql.createConnection({
    host : 'localhost' ,
    user : 'root' ,
    password : '',
    database : 'loja'
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');

    conn.connect(function(erro){
        if (!erro){
            sql = "SELECT p.nome AS Produto, p.preco AS Preço, p.quantidade AS Quantidade, c.nome AS Categoria FROM produto p INNER JOIN categoria c ON c.id = p.categoria";
            conn.query(sql, function(guaxinim, result, fields){
                if (!guaxinim){
                    res.end(JSON.stringify(result));
                }else {
                    res.end('{ "resposta" : "Erro ao executar a consulta" }')
                }
            })
        }else {
            res.end('{ "resposta" : "Erro na conexão" }')
        }
    });
});

server.listen(port, hostname, () => {
    console.log('Servidor sendo executado em: http://'+ hostname +':'+port+'/');
});