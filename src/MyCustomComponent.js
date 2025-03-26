import React from 'react';

const fruits=[
    {name:'Guava', price:50 },
    {name:'Apple', price:150 },
    {name:'Grapes', price:120 }
];

function myCustomComponent(props){

    const name = props.name;
    const company = props.company;
    const myStyle={ color:'green',fontSize: '25px'};
    
    return(
        <div>
            <h1 style={myStyle}>I am a component,MY name is {name} and my company name is {company}</h1>
            <div>
                List of items
                <ul>
                    <li>Guava, 50</li>
                    <li>Apple, 150</li>
                    <li>Grapes, 120</li>
                </ul>
                <table border="1">
                    <tr>
                       <th>Fruit</th> 
                       <th>Price</th>
                    </tr>
                    {
                        fruits.map((item)=>(
                            <tr>
                               <td>{item.name}</td>
                               <td>{item.price}</td>
                            </tr>
                        ))
                    }
                    
                    

                </table>
            </div>
        </div>
    );
}

export default myCustomComponent;