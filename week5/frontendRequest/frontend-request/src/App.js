import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty'
import BountyForm from './components/BountyForm';
function App() {
  const [bountyInfo, setBounties] = useState([]);

  const getBounties = () => {
    axios.get("/bountyInfo")
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))
  }
  const addBounty = (newBounty) => {
    axios.post("/bountyInfo", newBounty)
    .then(res => {
      setBounties(prevBounties => [...prevBounties, res.data] )
    })
    .catch(err => console.log(err))
  }

  const deleteBook = (bountyId) => {
    axios.delete(`/bountyInfo/${bountyId}`)
    .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err))
  }

  const editBounty = (updates, bountyId) => {
    axios.put(`/bountyInfo/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty: res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties();
  },  []);

  const bountyList = bountyInfo.map(bounties => 
  <Bounty 
    {...bounties} 
    deleteBook={deleteBook} 
    editBounty={editBounty}
    key={bounties.firstName}/>)
  return (
    <div className="bounties">
      <BountyForm 
        btnText='Add'
        submit={addBounty} />
      {bountyList}

    </div>
  );
}

export default App;
