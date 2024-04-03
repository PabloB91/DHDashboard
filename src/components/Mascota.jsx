import React, { Component } from 'react';
const fetch= require('node-fetch')

class Gif extends Component {
    constructor(props){
        super(props)
        this.state = {
            gif: ""
        }
    }

    ComponentDidMount (){
        fetch('https://api.giphy.com/v1/gifs/random?api_key=FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69&tag=&rating=g')
        .then(response => response.json())
        .then(data => this.setState(
            {
            gif: data.data.image_url
            }
        ))
    }
    render() {
        let contenido;

        if (this.state.gif == ""){
            contenido= <h3>Cargando..</h3>
        }else {
            contenido= <img src={this.state.gif} ></img>
        }
        <div>
            {contenido}
            <button>Hace click acá para ver un Gif!</button>
        </div>
    }
}

export default Gif