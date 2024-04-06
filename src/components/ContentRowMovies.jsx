import React, { Component } from 'react';
import SmallCard from './SmallCard';
import { fetchProducts, fetchUsers } from './fetchFunctions';  //-->Se importan la funciones para traer productos y usuarios


class ContentRowProducts extends Component {
    constructor() {
        super();
        this.state = {
            products: "",
            categories: "",
            users: ""
        };
    }
    componentDidMount() {
        fetchProducts().then(data => {      //--> Utilizamos la función importada para obtener la información de los productos
            /* console.log(data.data.meta.countByCategory) */
            /* const categoriesCount=data.data.meta.countByCategory */
            const categoriesCount=Object.keys(data.data.meta.countByCategory).length    //-->Esto busca y cuenta las llaves dentro del objeto 'data' que trae la función (en este caso son los nombres de las categorías)
            const productCount= data.data.meta.count    //-->Esto busca el valor de la llave 'count' dentro del objeto 'data' que trae la función (en este caso es el número de productos)
            /* console.log(productCount); */
            this.setState({products: productCount, categories: categoriesCount})
        });
        fetchUsers().then(data => {     //--> Utilizamos la función importada para obtener la información de los usuarios
            /* console.log("USUARIOS:"); */
            /* console.log(data) */
            const usersCount= data.data.meta.count
            this.setState({users: usersCount})
        });
    }
    render() {
        const { products } = this.state;
        const { categories }= this.state;
        const { users } = this.state;
        /* console.log(products);
        console.log(categories); */
        //--> Creamos los objetos literales con la información que va a mostrarse en cada tarjeta, y los pasamos como 'props',
        //-- utilizamos las variables configuradas en el estado del componente para mostrar la información de cantidades (products, cateogries, users).
        let productsInDB = {
            title: 'Products in Data Base',
            color: 'primary', 
            quantity: products,
            icon: 'fa-guitar'
        };
        let categoriesInDB = {
            title: 'Categories in Data Base',
            color: 'primary', 
            quantity: categories,
            icon: 'fa-clipboard-list'
        }
        let usersInDB = {
            title: 'Users in Data Base',
            color: 'primary', 
            quantity: users,
            icon: 'fa-user'
        }
        
        let cardProps = [productsInDB, categoriesInDB, usersInDB];  //--> Array con los objetos literales que se va a pasar como 'props'

        return (
            <div className="row">
                {cardProps.map( (element, i) => {
                    return <SmallCard {...element} key={i}/>
                })}
            </div>
        )
    }
}

export default ContentRowProducts;