import React from 'react';
import './App.css';

function Avatar(props)
{
  const name=props.name;
  var firstname=name.split(' ').slice(0, -1);
  var lastname=name.split(' ').slice(-1);
  return (
    <div>
      <h1>{firstname}</h1>
      <h1>{lastname}</h1>
       <img className="Image" src={props.image} alt="Image" />
      </div>
    );

}


function Display()
{
  return(
  <div className="App">
      <Avatar name="Meghan Kuhn" image="http://s1.dmcdn.net/QSHKf.jpg" />
   </div>
  );  
}

export default Display;

