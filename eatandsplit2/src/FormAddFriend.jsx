import React, { useState } from 'react'
import Button from './Button'


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

const FormAddFriend = ({onAddFriend}) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48');

    function handleSubmit(e){
        e.preventDefault();
        if(!name || !image) return;

        const id = crypto.randomUUID();

        const newFriend ={
            id, 
            name: name, 
            image: image, 
            balance: 0,
        }

        onAddFriend(newFriend); 

        setName(''); 
        setImage('https://i.pravatar.cc/48');

    }
  return (
   <form className='form-add-friend' onSubmit={handleSubmit}>
    <label>👫 Name</label>
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
    <label>🌆 Image URL</label>
    <input type="text" value={image} onChange={(e)=> setImage(e.target.value)} />

    <Button>Add</Button>


   </form>
  )
}

export default FormAddFriend