import React, {Component} from 'react';
import ChartRow from './ChartRow';
import { fetchProducts} from './fetchFunctions';  //-->Se importan la funciones para traer productos



class Chart extends Component {
    constructor() {
        super();
        this.state = {
            products: ""
        };
    }
    componentDidMount() {
        fetchProducts().then(data => {      //--> Utilizamos la función importada para obtener la información de los productos
            /* console.log(data.data.products); */
            this.setState({products: data.data.products})
        });
    }
    render() {
        const {products}= this.state
        let tableRowsData= [];      //--> Creamos el array para pasar como 'props'
        for (const iterator of products) {
            /* console.log(iterator); */
            tableRowsData.push(         //--> Poblamos el array con los datos que incorporamos al componente a través de 'fetch'
                {
                    Nombre: iterator.name,
                    Descripcion: iterator.description,
                    Categoria: iterator.category,
                    Colores: iterator.colors,
                    Detalle: iterator.detail
                },)
            
        };
        /* console.log(tableRowsData); */
        return (
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Listado de Productos</h5>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Categoría</th>
                                    <th>Colores</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                tableRowsData.map( ( row , i) => {
                                    return <ChartRow { ...row} key={i}/>    //--> Pasamos el array como 'prop'
                                })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chart;