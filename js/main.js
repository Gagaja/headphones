function showSpec(elementId){
    let x = document.getElementById('specification');
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

document.getElementById('table-spec')
let table = "";
let row = "";
let col = "";
for(i = 0 ; i< 2; i++) {
    table += '<tr>';
    for(j = 0; j<7; j++){
        table += '<td>' + j + '</td>'; 
    }
    table += '</tr>';
}
document.getElementById("table-spec").innerHTML = "<table>" + table + "</table>";