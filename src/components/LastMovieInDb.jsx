import React, { Component } from 'react';

const fetch= require('node-fetch')


let exportarUltimoId= null;

function LastIndexInDb() {      //--> Esta función es para encontrar el Id del último producto agregado a la base de datos
    return fetch('http://localhost:3020/api/products/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        /* console.log(data); */
        console.log(data.products[data.products.length-1].Id); 
        exportarUltimoId = data.products[data.products.length-1].Id;

        return { data, exportarUltimoId };
    })
    .catch(error => {
        console.error('Error fetching data from URL:', error);
    });
}

class LastMovieInDb extends Component {
    constructor() {
        super();
        this.state = {
            ultimoProducto: {},
            ultimoProductoId: null
        };
    }
    componentDidMount() {
        LastIndexInDb().then(({ data }) => {
            console.log(data);
            this.setState({
                ultimoProducto: data,
                ultimoProductoId: data.products[data.products.length-1].Id
            });

            const { ultimoProductoId } = this.state;

            fetch(`http://localhost:3020/api/products/${ultimoProductoId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('Data fetched from nuevaURL:', data.product); 
                // Actualizar el estado con el último producto
                this.setState({ ultimoProducto: data.product });
            })
            .catch(error => {
                console.error('Error fetching data from nuevaURL:', error);
            });
        });
    }
    render() {
        const { ultimoProducto } = this.state;
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} 
                            src={ultimoProducto.image} alt={ultimoProducto.description} />
                        </div>
                        <p>{ultimoProducto.description}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/LastMovieDetail">Ver detalle del producto</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default LastMovieInDb;

export { LastIndexInDb ,exportarUltimoId }; // Exporta la variable exportarUltimoId