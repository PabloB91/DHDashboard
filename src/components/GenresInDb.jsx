/* import { response } from "express"; */
import React, {Component} from "react";

const fetch= require('node-fetch')



class GenresInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countByCategory: {}
    };
  }

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
      console.log('Data fetched:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }

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

export default GenresInDb;