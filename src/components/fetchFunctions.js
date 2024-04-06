//---Módulo que contiene las funciones de 'fetch' que se usan en los distintos componentes ---//

const fetch = require('node-fetch');

let exportarUltimoId= null;

function fetchProducts() {      //--> Esta función es para buscar los productos y encontrar el Id del último producto agregado a la base de datos
    return fetch('http://localhost:3020/api/products/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        /* console.log(data); */
        /* console.log(data.products[data.products.length-1].Id);  */
        exportarUltimoId = data.products[data.products.length-1].Id;

        return { data, exportarUltimoId };
    })
    .catch(error => {
        console.error('Error fetching data from URL:', error);
    });
}


function fetchUsers() {      //--> Esta función es para buscar los usuarios en la DB
    return fetch('http://localhost:3020/api/users/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        return { data };
    })
    .catch(error => {
        console.error('Error fetching data from URL:', error);
    });
}

export { fetchProducts, exportarUltimoId ,fetchUsers}