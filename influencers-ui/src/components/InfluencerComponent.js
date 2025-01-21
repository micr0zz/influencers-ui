import React, {useContext} from "react";
import {UserContext} from "../contexts/UserContext";


export default function InfluencerComponent(props) {
  const { addFollowing, removeFollowing } = useContext(UserContext);
  
  function handleFollow(){
    props.data.isFollowed = !props.data.isFollowed;
    (props.data.isFollowed)?addFollowing():removeFollowing();
  }
  
  var description = props.data.biography;
  if(props.data.biography===""){
    description = props.data.website;
    if(props.data.website===""){
      description = props.data.name;
    }
  }
  if(!props.data.biography)
    description = props.data.name;
  return (
    <React.Fragment> 
      <img src={props.data.profilePicture} 
        className="w3-bar-item w3-circle w3-hide-small" alt="shit">
      </img>
      <div className="w3-bar-item bio">
        <b><span className="w3-large">@ {props.data.username}</span><br></br></b>
        <div className="biography"><span>{description}</span></div>
      </div>
      <button onClick={handleFollow}
        style={{backgroundColor:(props.data.isFollowed)?"#D3D3D3":"#0080FF"}}
        className="w3-bar-item w3-right">
        <i className={(props.data.isFollowed)?"":"fa fa-user-plus"} style={{marginRight:"10px",fontSize:"16px"}}></i>
      {(props.data.isFollowed)?"Following...":"Follow"}
      </button>
    </React.Fragment>
    );
  
}