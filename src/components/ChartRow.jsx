import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.Nombre}</td>
                    <td>{props.Descripcion}</td>
                    <td>{props.Categoria}</td>
                    <td>
                        <ul>
                            {props.Colores.map( (color,i) => 
                                <li key={`color ${i}`}>{color}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.Detalle}</td>
                </tr>
            )
    }
    
        

export default ChartRow;