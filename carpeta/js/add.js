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
