

import React from 'react'
import FriendList from './FriendList'
import FormAddFriend from './FormAddFriend'
import Button from './Button'
import { useState } from 'react'
import FormSplitBill from './FormSplitBill'

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {

  const [isOpen, setisOpen] = useState(false);
  const [friends, setFriend] = useState(initialFriends);
  const[openBill, setOpenBill] = useState(null); 

  function ToggleOpen(){
    setisOpen(isOpen => !isOpen);
  }

  function AddFriend(friend){ 
    setFriend(friends => [...friends, friend]);
    setisOpen(false);
  }

  function SelectedFriend(friend){ 
    setOpenBill(selected => selected?.id === friend.id ? null : friend);
  }
  function SplitBill(value){
    setFriend(friends => friends.map((friend)=> friend.id === openBill.id ? {...friend, balance: friend.balance + value}: friend))
    setOpenBill(null);
  }




  return (
    <div className="app">
      <div className='sidebar'>
        <FriendList friends={friends} onSelect={SelectedFriend} openBill={openBill} />
     { isOpen && <FormAddFriend onAddFriend={AddFriend} /> }

        <Button onClick={ToggleOpen}>{isOpen ? 'Close': 'Add Friend'}</Button>
      </div>
     { openBill && <FormSplitBill newFriend={openBill} onSplit={SplitBill}/> }

    </div>
  )
}

export default App