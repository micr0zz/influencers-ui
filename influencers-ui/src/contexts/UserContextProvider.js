
import { useState } from "react";
import { UserContext } from "./UserContext";
import jsonData from "../services/follower-suggestions.json";
jsonData.map((influencer)=> influencer.isFollowed = false);

const UserContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [peopleIamFollowing, setpeopleIamFollowing] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);
  const [influencerData, setInfluencerData] = useState(jsonData);
  const [searchInput, setSearchInput] = useState('');
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")

  function addFollowing() {
    setpeopleIamFollowing(peopleIamFollowing+1);
  }
  function removeFollowing() {
    setpeopleIamFollowing(peopleIamFollowing-1);
  }
  function createInfluencer(){
    setLoading(true);
    const newInfluencer = {
      username: username,
      name: name,
      isFollowed: true
    }
    jsonData.unshift(newInfluencer)
    setInfluencerData(jsonData)
    addFollowing()
    setLoading(false);
  }
  function addInfluencer(){
    setLoading(true);
    async function getUsers() {
      let response = await fetch("https://randomuser.me/api/"); 
      let data = await response.json();
      return data;
    };
    getUsers().then((data) => {
      
      const newInfluencer = {
        profilePicture: data.results[0].picture.large,
        username: data.results[0].login.username,
        name: data.results[0].name.first + " " + data.results[0].name.last,
        isFollowed: true
      }
      jsonData.unshift(newInfluencer)
      setInfluencerData(jsonData)
      addFollowing()
      setLoading(false);
    });
    
  }
  
  
  const value = {
    influencerData,
    peopleIamFollowing,
    addFollowing,
    removeFollowing,
    searchInput,
    filteredResults,
    setFilteredResults,
    setSearchInput,
    addInfluencer,
    loading,
    name,
    setName,
    username,
    setUsername,
    createInfluencer
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
