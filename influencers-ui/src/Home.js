import "./styles.css";
import React,{useState,useContext} from "react";
import StarsComponent from "./components/StarsComponent.js";
import NavbarComponent from "./components/NavbarComponent";
import axios from "axios";
import {UserContext} from "./contexts/UserContext";

let influencersPerPage = 6;
let arrayForHoldingInfluencers = [];


export default function App() {
  const { influencerData, loading } = useContext(UserContext)
  const [next, setNext] = useState(6); 

  axios.get("/api/influencers").then((response) => {
    
  });

  for(let i=0; i<influencersPerPage; i++){
    arrayForHoldingInfluencers[i] = influencerData[i]; 
  }

  function showMoreInfluencers(){
    if(arrayForHoldingInfluencers.length >= influencerData.length){
      arrayForHoldingInfluencers = [];
      for(let i=0; i<influencersPerPage; i++){
        arrayForHoldingInfluencers[i] = influencerData[i]; 
      }
      setNext(influencersPerPage)
    }else{
      let diff = influencerData.length - arrayForHoldingInfluencers.length;
      if(diff>=6){
        for(let i=next; i<next + influencersPerPage; i++){
          arrayForHoldingInfluencers[i] = influencerData[i]; 
        }
        setNext(next + influencersPerPage)
      }else{
        for(let i=next; i<next + diff; i++){
          arrayForHoldingInfluencers[i] = influencerData[i]; 
        }
        setNext(next + diff)
      }
      
    }
  }
  return (
    
    <div className="App">
      {loading && <p id="spinner"><i className="fa fa-spinner w3-spin w3-display-middle" style={{fontSize:"64px"}}></i></p>}
      <NavbarComponent data={arrayForHoldingInfluencers}/>
      <StarsComponent data={arrayForHoldingInfluencers}/>
      <div className="loadButton">
        <button className={(arrayForHoldingInfluencers.length===influencerData.length)?
          "w3-button w3-white w3-border w3-border-blue":"w3-button w3-white w3-border w3-border-blue w3-animate-bottom"}
          onClick={showMoreInfluencers}>
          
          {(arrayForHoldingInfluencers.length===influencerData.length)?
            <><i className="fa fa-caret-up w3-xlarge" aria-hidden="true" 
              style={{marginRight:"10px"}}>
              </i><span className="w3-large">Show Less</span></>:
            <><i className="fa fa-caret-down w3-large" aria-hidden="true" 
              style={{marginRight:"10px"}}>
              </i><span className="w3-large">Show more</span></>
          }
        </button>
      </div>
    </div>
  );
}
