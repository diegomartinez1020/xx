document.querySelector('#btnIng').addEventListener('click', datos);
tableing();


function datos(){
    var sName = document.querySelector('#txtName').value,
    sDui = document.querySelector('#txtDui').value,
    sPlaca = document.querySelector('#txtPlaca').value,
    sNit = document.querySelector('#txtnit').value,
    sFechaNac = document.querySelector('#txtFechaNac').value,
    sMarca = document.querySelector('#txtMarca').value,
    sModelo = document.querySelector('#txtModelo').value,
    sFallas = document.querySelector('#txtFallas').value;

    addCar(sName, sDui, sPlaca, sNit, sFechaNac , sMarca, sModelo, sFallas);
    tableing();
}


function tableing(){
    var list = geting(),
    tbody = document.querySelector('#tableing tbody');

    tbody.innerHTML = '';

for(var i = 0 ; i < list.length; i++)
{
var row = tbody.insertRow(i),
nameCell =row.insertCell(0),
DuiCell = row.insertCell(1),
PlacaCell = row.insertCell(2),
nitCell =row.insertCell(3),
FechaNacCell =row.insertCell(4),
MarcaCell =row.insertCell(5),
ModeloCell =row.insertCell(6),
FallasCell =row.insertCell(7);

nameCell.innerHTML = list[i].name;
DuiCell.innerHTML = list[i].Dui;
PlacaCell.innerHTML =list[i].Placa;
nitCell.innerHTML = list[i].nit;
FechaNacCell.innerHTML = list[i].FechaNac;
MarcaCell.innerHTML = list[i].Marca;
ModeloCell.innerHTML = list[i].Modelo;
FallasCell.innerHTML = list[i].Fallas;


tbody.appendChild(row);

    }

}