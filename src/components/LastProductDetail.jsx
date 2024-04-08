import React, { Component } from 'react';
import { exportarUltimoId, fetchProducts } from './fetchFunctions';  //-->Se importan la función y variable para obtener productos y el último ID de la BD

const fetch = require('node-fetch');

class LastProductDetail extends Component {
    constructor() {
        super();
        this.state = {
            lastProduct: {}
        };
    }
    componentDidMount() {
        fetchProducts().then(() => {    //--> Utilizamos la función importada para traer la variable que tiene el valor del último producto en la DB
            
            fetch(`http://localhost:3020/api/products/${exportarUltimoId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                /* console.log('Data fetched:', data.product);  */
                /* console.log(data.product.colors.join(', ')); */
                this.setState({ lastProduct: data.product });
            })
            .catch(error => {
                console.error('Error fetching data from nuevaURL:', error);
            });
        });
    }
    render() {
        const { lastProduct } = this.state;
        const colors = lastProduct.colors ? lastProduct.colors.join(', ') : '';  //--> Utilizamos esto para que al renderizar colores se vean separados por comas

        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
                    </div>
                    <div className="card-body">
                        <p>{lastProduct.name}</p>
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 50+ '%' }} 
                            src={lastProduct.image} alt={lastProduct.description} />
                        </div>
                        <p>{lastProduct.description}</p>
                        <p>Marca: {lastProduct.brand}</p>
                        <p>Categoría: {lastProduct.category}</p>
                        <p>Colores disponibles: {colors}</p>
                        <p>Precio ${lastProduct.price}</p>
                        <p>Descuento: {lastProduct.discount}%</p>
                        <p>Stock disponible: {lastProduct.quantity}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LastProductDetail;