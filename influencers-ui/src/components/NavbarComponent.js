import { Link } from "react-router-dom"
import React, {useContext } from 'react';
import {UserContext} from "../contexts/UserContext";


export default function StarsComponent(props) {
  const { peopleIamFollowing, searchInput, setSearchInput, setFilteredResults, addInfluencer } = useContext(UserContext);
  const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData = props.data.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(props.data)
      }
  }
  
  return (
    <div className="w3-padding w3-large w3-top w3-blue">
      <div class="w3-quarter">
        <div class="w3-bar">
          <span className="w3-bar-item">
             <span class="w3-text-black">{peopleIamFollowing}</span> Following</span>
        </div>
      </div>

      <div className="w3-half">
        <input type="text" class=" w3-border-0 w3-padding w3-round" style={{width:"100%"}}
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>

      <div class="w3-quarter">
        <div class="w3-bar w3-large">
          <span class="w3-bar-item w3-left"><i class="fa fa-search"></i></span>
          <Link href="#" class="w3-bar-item w3-btn w3-right  w3-text-white" 
            style={{height:"40px"}} to="../CreateInfluencer"><span className="w3-large">Admin</span></Link>
          <button href="#" class="w3-bar-item w3-margin-left w3-button w3-right w3-circle w3-white" 
            style={{height:"40px"}} onClick={addInfluencer}><span className="w3-large">+</span></button>
        </div>

      </div>
    </div>
  );
  
}