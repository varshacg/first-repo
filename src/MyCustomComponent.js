import React from 'react';
import { useState , useEffect } from 'react';
import axios, { Axios } from 'axios';

const fruits=[
    {name:'Guava', price:50 },
    {name:'Apple', price:150 },
    {name:'Grapes', price:120 }
];

function MyCustomComponent(props){
    
    const[companyData,setCompanyData]=useState([]);
    const[newCompany ,setNewCompany]=useState(null);

    const name = props.name;
    const company = props.company;
    const myStyle={ color:'green',fontSize: '25px'};

    // fetching data from API
    async function getCompanyData(){
        const url='https://jsonplaceholder.typicode.com/posts';
        /* fetch(url)
           .then((res)=>{
               res.json().then((company)=>{
                console.log(company)
               })
           })
           .catch((err)=>{
                console.log(err);
           }) */

                
                /* try {
                  const response = await fetch(url);
                  const company = await response.json();
                  console.log(company);
                  setCompanyData(company);
                } catch (error) {
                  console.error(error.message);
                }  */   
            try{
                const response =await axios.get(url); 
                console.log(response.data);
                setCompanyData(response.data);      
            } catch(err){
                console.log(err);
            }
              
    }

    //send data to API using axios
    async function sendData(){
        const url='https://jsonplaceholder.typicode.com/posts';
        try{
             const newEntry={
                id:companyData.length+1,
                userId: '1',
                title: "id minus libero illum nam ad officiis",
                }
             const response = await axios.post(url,newEntry);
             console.log(response.data); 
             setCompanyData((prevData)=>[...prevData,response.data]);
             setNewCompany(response.data);
        }catch(err){
            console.log(err);
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
                    <h2>Data Table</h2>
                    <table border="1">
                        <thead>
                           <tr>
                            <th>ID</th>
                            <th>UserId</th>
                            <th>Title</th>
                            </tr>  
                        </thead>
                        <tbody>
                        {
                        companyData.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.userId}</td>
                                <td>{item.title}</td>
                            </tr>
                        ))
                        }
                        </tbody>
                    </table>
                    
                </div>
                <div>
                    <h1>Send Data</h1>
                    <button onClick={sendData}>Send Data</button>
                    {newCompany && (
                       <div>
                          <h3>New Data</h3>
                        <p>ID:{newCompany.id}</p>
                        <p>userID:{newCompany.userId}</p>
                        <p>Domain:{newCompany.title}</p>
                       </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyCustomComponent;