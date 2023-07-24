import { useState } from "react";


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
  const [newFriend, setnewFriend] = useState(initialFriends); 


  function addFriend(friend){
    setnewFriend((newFriend) => [...newFriend, friend])

  }

  function handleClick(){
    setisOpen(isOpen => (!isOpen));
  }
  return (
    <div className="app">
      <div className='sidebar'>
        <List friend={newFriend}/>
        <Form isOpen={isOpen} addFriend={addFriend}/>
        { !isOpen ?  <Button onClick={handleClick} >Add friend</Button> : <Button onClick={handleClick}>Close</Button> }

      </div>

      <FormBill items={initialFriends}/>

 
     
    </div>
  )
}

const List = ({friend})=> {
 
  return(

    <div>
       <ul>
     {friend.map((item)=> (
      <RenderList items={item} key={item.name}/>
     ))}

   
    </ul>
   
    </div>
   


  )
}

const RenderList = ({items})=> { 
   return(
    <li>
      <img src={items.image}></img>
      <h3>{items.name}</h3>
      {
        items.balance < 0 && (
          <p className="red">You owe {items.name} {Math.abs(items.balance)}</p>
        )
      }
        {
        items.balance > 0 && (
          <p className="green">{items.name} owes you {Math.abs(items.balance)}</p>
        )
      }
        {
        items.balance === 0 && (
          <p >You and {items.name} are even</p>
        )
      }
     
     <Button>Select</Button>
    </li>
   )
}

const Button = ({children, onClick})=>  { 
 return( 
  <button className="button" onClick={onClick}>{children}</button>
 )
}

const Form = ({ isOpen, addFriend }) => {
  const [friend, setFriend] = useState('');
  const [imgUrl, setimgUrl] = useState('https://i.pravatar.cc/48');

  function handleSubmit(e) {
    e.preventDefault();

    if (!friend || !imgUrl) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
       name: friend,
       image: imgUrl, // The imgUrl should be used directly, no need for additional construction
      balance: 0,
    };

    addFriend(newFriend);

    setFriend('');
    setimgUrl('https://i.pravatar.cc/48'); // Reset the imgUrl back to the initial value
  }

  return (
    <div>
      {isOpen && (
        <form className="form-add-friend" onSubmit={handleSubmit}>
          <label>👫 Friend name</label>
          <input type="text" value={friend} onChange={(e) => setFriend(e.target.value)} />
          <label>🌆 Image URL</label>
          <input type="text" value={imgUrl} onChange={(e) => setimgUrl(e.target.value)} />
          <Button>Add</Button>
        </form>
      )}
    </div>
  );
};

const FormBill = ()=>{
  return(
    <form className="form-split-bill">
       <h2> Split bill with X</h2>
       <label>💰 Bill Value</label>
       <input type="number"/>
       <label>👩‍💼 Your expense</label>
       <input type="text"/>
       <label>👫 X expense</label>
       <input type="text" disabled/>
       <label>🤑 Who is paying the bill</label>
       <select>
        <option value="user">You</option>
        <option value="friend">Friend</option>
       </select>

       <Button>Split Bill</Button>
    </form>
  )
}

export default App;
