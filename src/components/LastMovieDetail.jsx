import React, { Component } from 'react';
import { exportarUltimoId, LastIndexInDb } from './LastMovieInDb';  //-->Se importan la función y variable para obtener el último ID de la BD

const fetch = require('node-fetch');

class LastMovieDetail extends Component {
    constructor() {
        super();
        this.state = {
            ultimoProducto: {},
        };
    }
    componentDidMount() {
        LastIndexInDb().then(() => {
            //-->Se utiliza la función importada para obtener el ultimo Id en la BD
            const url = `http://localhost:3020/api/products/${exportarUltimoId}`;
            
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('Data fetched:', data.product); 
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
                        <p>{ultimoProducto.name}</p>
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} 
                            src={ultimoProducto.image} alt={ultimoProducto.description} />
                        </div>
                        <p>{ultimoProducto.description}</p>
                        <p>Marca: {ultimoProducto.brand}</p>
                        <p>Categoría: {ultimoProducto.category}</p>
                        <p>Colores disponibles: {ultimoProducto.colors}</p>
                        <p>Precio ${ultimoProducto.price}</p>
                        <p>Descuento: {ultimoProducto.discount}%</p>
                        <p>Stock disponible: {ultimoProducto.quantity}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default LastMovieDetail;