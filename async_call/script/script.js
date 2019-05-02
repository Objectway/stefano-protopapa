fetch("./response.json").then(response =>
    response.json().then(data => ({
        data: data,
        status: response.status
    })
)).then(res => {
    var listUtenti = res.data;
    listUtenti.forEach((element) => {
        const node = document.createElement("li");           
        const usrName = document.createTextNode(element.cognome + " " + element.nome);   
        node.appendChild(usrName);        
        node.setAttribute("id", element.id);              
        document.getElementById("myList").appendChild(node); 
        node.onclick = () => {
            getDati(node.id);
        }
    });
});


function getDati(usrId)
{
    fetch("./response.json").then(response =>
        response.json().then(data => ({
            data: data,
            status: response.status
        })
    )).then(res => {
        const persona = res.data.filter(item => item.id == usrId);
        document.getElementById("nome").innerHTML = persona[0].nome;
        document.getElementById("cogn").innerHTML = persona[0].cognome;
        document.getElementById("gender").innerHTML = persona[0].genere;
        document.getElementById("work").innerHTML = persona[0].professione;
    });
}