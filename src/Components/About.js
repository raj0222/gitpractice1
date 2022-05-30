import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
  const [showdata, setShowdata] = useState();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos").then((response) => {
      setShowdata(response.data);
    });
  }, []);
  console.log("datashow", showdata);


  return (
  
    <div>
        <div className="container ">
         <h2>id     title</h2> 
      {showdata?.length === 0 ? (
        <div></div>
      ) : (
        showdata?.map((item) => {
           
          return (
            <div key={item.id}>
                <div className="row">
                <div className="col">
              
              <table>
             
                <tbody>
                    <td style={{color:"red"}}><h3>{item.id}</h3></td>
                               
                    <td  style={{color:"blue"}}> <h3>{item.title}</h3></td>
                </tbody>
              </table>
              </div>
              </div>
              </div>
            
          );
        })
      )}
      </div>
    </div>
  );
};

export default About;
