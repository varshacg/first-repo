import React from 'react';
import { useState , useEffect } from 'react';

const fruits=[
    {name:'Guava', price:50 },
    {name:'Apple', price:150 },
    {name:'Grapes', price:120 }
];

function MyCustomComponent(props){
    
    const[companyData,setCompanyData]=useState([]);


    const name = props.name;
    const company = props.company;
    const myStyle={ color:'green',fontSize: '25px'};
    
    async function getCompanyData(){
        const url='https://fake-json-api.mock.beeceptor.com/companies';
        /* fetch(url)
           .then((res)=>{
               res.json().then((company)=>{
                console.log(company)
               })
           })
           .catch((err)=>{
                console.log(err);
           }) */

                
                try {
                  const response = await fetch(url);
                  const company = await response.json();
                  console.log(company);
                  setCompanyData(company);
                } catch (error) {
                  console.error(error.message);
                }                 
    }
    useEffect(()=>{
        getCompanyData();
    },[]);
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
              
                <div>
                    <h2>CompanyData Table</h2>
                    <table border="1">
                        <thead>
                           <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Domain</th>
                            </tr>  
                        </thead>
                        <tbody>
                        {
                        companyData.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.domain}</td>
                            </tr>
                        ))
                        }
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
    );
}

export default MyCustomComponent;