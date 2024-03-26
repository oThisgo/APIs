function read(){
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        divInfo = document.getElementById('info');
        if (this.readyState == 4 && this.status == 200){
            divInfo.innerHTML = this.responseText;
        }

        if (this.readyState == 4 && this.status == 404){
            divInfo.innerHTML = this.statusText;
        }
    };

    xhttp.open('GET', 'info.txt', true); //true is standard
    xhttp.send();
}

function getNums() {
    value = document.getElementById('txtValue').value;
    nums = document.getElementById('nums');
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        nums.innerHTML = "Carregando..."
        if (this.readyState == 4 && this.status == 200){
            nums.innerHTML = this.responseText;
        }
    };

    xhttp.open('GET', 'server.php?num=' + value, true);
    xhttp.send();
}