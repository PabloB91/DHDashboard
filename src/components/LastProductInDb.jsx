import React, { Component } from 'react';
import { fetchProducts } from './fetchFunctions';  //-->Se importan la función y variable para obtener productos y el último ID de la BD

const fetch= require('node-fetch')


class LastProductInDb extends Component {
    constructor() {
        super();
        this.state = {
            lastProduct: {},
            lastProductId: null
        };
    }
    componentDidMount() {
        fetchProducts().then(({ data }) => {    //--> Utilizamos la función importada para traer los productos 
            /* console.log(data); */
            this.setState({
                lastProduct: data,
                lastProductId: data.products[data.products.length-1].Id
            });

            const { lastProductId } = this.state;

            fetch(`http://localhost:3020/api/products/${lastProductId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                /* console.log('Data fetched from nuevaURL:', data.product);  */
                // Actualizar el estado con el último producto
                this.setState({ lastProduct: data.product });
            })
            .catch(error => {
                console.error('Error fetching data from nuevaURL:', error);
            });
        });
    }
    render() {
        const { lastProduct } = this.state;
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 50 + '%' }} 
                            src={lastProduct.image} alt={lastProduct.description} />
                        </div>
                        <p>{lastProduct.description}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/LastProductDetail">Ver detalle del producto</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default LastProductInDb;