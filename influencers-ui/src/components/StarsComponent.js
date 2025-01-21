import React,{useContext} from "react";
import InfluencerComponent from "./InfluencerComponent";
import {UserContext} from "../contexts/UserContext";

export default function StarsComponent(props) {
   const { searchInput, filteredResults } = useContext(UserContext);
  return (
    <ul className="w3-ul w3-card-4">
      {
        searchInput.length > 1 ? (filteredResults.map((influencer) =>
          <li className="w3-bar w3-hover-light-grey">
            <InfluencerComponent data={influencer}/>
          </li>)
        ):(props.data.map((influencer) =>
          <li className="w3-bar w3-hover-light-grey">
            <InfluencerComponent data={influencer}/>
          </li>)
        )
      }
    </ul>
  );
  
}
