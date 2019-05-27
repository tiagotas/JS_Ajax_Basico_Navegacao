
window.onload = function() {
    req();
}

function add_linha() {

    if(document.getElementById("add-linha")) {
       
        document.getElementById("add-linha").onclick = function() {

            var tabela = document.getElementById("lista_produtos");

            var linha_tr = document.createElement("tr");

            var coluna_id = document.createElement("td").appendChild(document.createTextNode("11"));
            var coluna_foto = document.createElement("td").appendChild(document.createTextNode("foto"));
            var coluna_desc = document.createElement("td").appendChild(document.createTextNode("descricao"));

            linha_tr.appendChild(coluna_id);
            linha_tr.appendChild(coluna_foto);
            linha_tr.appendChild(coluna_desc);
            
            tabela.appendChild(linha_tr);         
        }
    }  
}


function carrega_pagina(pagina) {
    var tasAjax = abreAjax();
    
    tasAjax.open('GET', pagina, true);
    tasAjax.onreadystatechange = function ()
    {
        if(tasAjax.readyState == 1)
        {
            document.getElementById("carregar-aqui").innerHTML = "Carregando...";          
        }            
        if(tasAjax.readyState == 4)
        {
            if(tasAjax.status == 200)
            {
                document.getElementById("carregar-aqui").innerHTML = tasAjax.responseText;
                add_linha();
            }
        }
    };
    tasAjax.send(null);	
}


function req() {

    document.getElementById("inicial").onclick = function() {
        carrega_pagina("inicial.php");
        return false;
    }

    document.getElementById("contato").onclick = function() {
        carrega_pagina("contato.php");
        return false;
    }

    document.getElementById("produtos").onclick = function() {
        carrega_pagina("produtos.php");        
        return false;
    }

    document.getElementById("sobre").onclick = function() {
        carrega_pagina("sobre.php");
        return false;
    }
}