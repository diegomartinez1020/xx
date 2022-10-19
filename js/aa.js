document.querySelector('#btnIng').addEventListener('click', datos);
tableing();


function datos(){
    var sName = document.querySelector('#Name').value,
    sDui = document.querySelector('#Dui').value,
    sPlaca = document.querySelector('#Placa').value,
    sNit = document.querySelector('#Nit').value,
    sFechaNac = document.querySelector('#FechaNac').value,
    sMarca = document.querySelector('#Marca').value,
    sModelo = document.querySelector('#Modelo').value,
    sFallas = document.querySelector('#Fallas').value;

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


nameCell.innerHTML = list[i].Name; 
DuiCell.innerHTML = list[i].Dui;
PlacaCell.innerHTML =list[i].Placa;
nitCell.innerHTML = list[i].Nit;
FechaNacCell.innerHTML = list[i].FechaNac;
MarcaCell.innerHTML = list[i].Marca;
ModeloCell.innerHTML = list[i].Modelo;
FallasCell.innerHTML = list[i].Fallas;

console.log();
tbody.appendChild(row);

    }

}

var ing = [];

function addCar(pName, pDui, pPlaca, pNit, pFechaNac, pMarca, pModelo, pFallas){

var newCar ={
Name : pName,
Dui : pDui,
Placa : pPlaca,
Nit : pNit, 
FechaNac : pFechaNac,
Marca: pMarca,
Modelo : pModelo,
Fallas : pFallas 
    };
    console.log(newCar);
    ing.push(newCar);
}

localStorage.setItem('Name',Name);
localStorage.setItem('Dui',Dui);
localStorage.setItem('Nit',Nit);
localStorage.setItem('FechaNac',FechaNac);
localStorage.setItem('Marca',Marca);
localStorage.setItem('Modelo',Modelo);
localStorage.setItem('Fallas',Fallas);


function geting(){
    return ing;
}
