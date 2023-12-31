import React from 'react'
import Button from './Button';
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

const FriendList = ({friends, onSelect, openBill}) => {
  return (
    <div>
    <ul>
        {friends.map((friends)=> (
           <List friend={friends} key={friends.id} onSelect={onSelect} toggleClick={openBill}/>
        ))}
    </ul>
    </div>
  )
}

const List = ({friend, onSelect, toggleClick})=>{

    const isOpen = toggleClick?.id === friend.id;
    return(
        <li className={isOpen ? "selected": ""}>
            <img src={friend.image} alt={friend.name}></img>
            <h3>{friend.name}</h3>
           { friend.balance < 0 && <p className='red'>You owe {friend.name} ${Math.abs(friend.balance)}</p> }
           { friend.balance > 0 && <p className='green'>{friend.name} owes you ${(friend.balance)}</p> }
           {friend.balance === 0 && <p>You and {friend.name} are even</p>}

           <Button onClick={()=> onSelect(friend)}>{isOpen ? 'Close': 'Select'}</Button>
        </li>
    )
}

export default FriendList