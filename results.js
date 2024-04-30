let totalAlbumSales=0;
let longNames=[];
let busqueda=[];

// Data
const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording',
    name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

musicData.forEach(artista=>{
    totalAlbumSales+=artista.sales;
    if(artista.sales>1000000){
        document.body.innerHTML+='<h2 class="msg1">'+artista.artist+' es un gran artista'+'</h2>';
    }
    if(artista.name.length>8){
        longNames.push(artista);
    }
});

longNames.forEach(e=>{
    document.body.innerHTML+='<h2 class="msg2">'+e.artist+' tiene un nombre muy grande';
});

function agregar(artista, nombre, ventas){
    let obj = new Object();
    obj.artist=artista;
    obj.name=nombre;
    obj.sales=ventas;
    musicData.push(obj);
}

function buscar(nombre){
    busqueda=[];
    musicData.forEach(m=>{
        if(m.name.toLowerCase().includes(nombre.toLowerCase())){
            busqueda.push(m);
        }
    });
}

function borrar(artista){
    let i=0;
    musicData.forEach(m=>{
        if(m.artist==artista){
            musicData.splice(i, 1);
            return;
        }
        i++;
    });
}

function search(){
    busqueda.forEach(e=>{
        document.body.innerHTML+='<h2 class="msg3">“El álbum '+e.name+' del artista '+e.artist+' vendió aproximadamente '+e.sales+' copias.';
    });
}

agregar('Radiohead', 'Ok Computer', 5000000);
borrar('Adele');
borrar('Prince');
borrar('Justin Bieber');

let contInp = document.createElement('DIV');
contInp.setAttribute('class', 'contInp');
document.body.appendChild(contInp)
let buscador = document.createElement('INPUT');
buscador.setAttribute('class', 'buscador');
buscador.placeholder='Nombre del album';
contInp.appendChild(buscador);
contInp.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="lupa" onclick="search()"><path fill="black" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>';
document.querySelector('.buscador').addEventListener('input', (e)=>{
    buscar(e.target.value);
    let bodyT = document.querySelector('tbody');
    bodyT.innerHTML='';
    busqueda.forEach(e=>{
        bodyT.innerHTML+='<tr><td>'+e.artist+'</td><td>'+e.name+'</td><td>'+e.sales+'</td></tr>';
    });
});
let tabla = document.createElement('TABLE');
let encabezado = document.createElement('THEAD');
encabezado.innerHTML='<th>Artista</th><th>Nombre</th><th>Ventas</th>';
tabla.appendChild(encabezado);
let bodyT = document.createElement('TBODY');
musicData.forEach(e=>{
    bodyT.innerHTML+='<tr><td>'+e.artist+'</td><td>'+e.name+'</td><td>'+e.sales+'</td></tr>';
});
tabla.appendChild(bodyT);
document.body.appendChild(tabla);


console.log(musicData);