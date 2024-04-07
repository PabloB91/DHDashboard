import React, {Component} from 'react';
import ChartRow from './ChartRow';
import { fetchProducts} from './fetchFunctions';  //-->Se importan la funciones para traer productos



class Chart extends Component {
    constructor() {
        super();
        this.state = {
            products: "",
            categories: ""
        };
    }
    componentDidMount() {
        fetchProducts().then(data => {      //--> Utilizamos la función importada para obtener la información de los productos
            /* console.log(data.data.products); */
            const categoriesCount=Object.keys(data.data.meta.countByCategory).length    //-->Esto busca y cuenta las llaves dentro del objeto 'data' que trae la función (en este caso son los nombres de las categorías)
            const productCount= data.data.meta.count    //-->Esto busca el valor de la llave 'count' dentro del objeto 'data' que trae la función (en este caso es el número de productos)
            /* console.log(productCount); */
            this.setState({products: data.data.products, categories: categoriesCount})
        });
    }
    render() {
        const {products}= this.state
        let tableRowsData= [];
        for (const iterator of products) {
            /* console.log(iterator); */
            tableRowsData.push( 
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
                                    <th>Descripcion</th>
                                    <th>Categoria</th>
                                    <th>Colores</th>
                                    <th>Detalle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                tableRowsData.map( ( row , i) => {
                                    return <ChartRow { ...row} key={i}/>
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