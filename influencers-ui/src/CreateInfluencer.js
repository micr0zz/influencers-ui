import { Link } from "react-router-dom"
import React, {useContext} from "react";
import {UserContext} from "./contexts/UserContext";

export default function CreateInfluencer() {
  const {setName, setUsername, createInfluencer} = useContext(UserContext);
  
  return (
    <div className="w3-container">
      <Link to="/">
        <i className="fa fa-home w3-center w3-margin-bottom" 
          aria-hidden="true" style={{margin:"auto", width:"100%", fontSize:"100px"}}>
        </i>
      </Link>
      <div className="w3-card-4 w3-margin-bottom" style={{margin:"auto", width:"50%"}}>
        <div className="w3-container w3-blue w3-center">
          <h2><i class="fa fa-star-o" aria-hidden="true"></i> Influencer</h2>
        </div>
        
        <div id="taskForm" class="w3-container w3-padding-16" style={{backgroundColor:"#EEEEEE"}}>
          <label><i class="fa fa-star" aria-hidden="true"></i>Username</label>
          <input onChange={event => setUsername(event.target.value)}
            className="w3-input w3-margin-bottom" type="text"/>
            
          <label><i class="fa fa-star" aria-hidden="true"></i>Name</label>
          <input name="name" id="name" className="w3-input w3-margin-bottom"
            onChange={event => setName(event.target.value)}  type="text"/>
          <Link onClick={createInfluencer} to="/"
          value="Submit" className="w3-input w3-btn w3-blue w3-margin-top" style={{margin:"auto", width:"50%"}}> 
            Add</Link>
        </div>
      </div>
    </div>
    
  );
}
