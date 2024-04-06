import React, {Component} from "react";

const fetch= require('node-fetch')



class CategoriesInDb extends Component {
  constructor() {
    super();
    this.state = {
      countByCategory: {}
    };
  };
  componentDidMount() {
    fetch('http://localhost:3020/api/products/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ countByCategory: data.meta.countByCategory });
      /* console.log('Data fetched:', data.meta.countByCategory); */
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };
  render() {
    const { countByCategory } = this.state;
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Categorías en la Base de Datos
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              {Object.keys(countByCategory).map((category, index) => (
                <div key={index} className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{category}</div>
                    <p className="card-text">Productos: {countByCategory[category]}</p> {/* El valor 'category' entre corchetes sirve como iterador entre los elementos del array 'countByCategory' */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesInDb;