import React, { useEffect, useState } from 'react'
import Message from './Message'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../Firebase';


// 
// int n=5;
// int temp=n;

const Messages = () => {
  const dispatch=useDispatch();
  const {searchText,emails}=useSelector(store=>store.appSlice);

  const[tempEmails, setTempEmails]=useState(emails);


  useEffect(()=>{
     // const q=query(collection(db,"emails"),) // this is used for sorting 

       const q=query(collection(db,"emails"),orderBy("createdAt",'desc'));
       const unsubscribe=onSnapshot(q,(snapshot)=>{
    // const unsubscribe=onSnapshot(collection(db,"emails"),(snapshot)=>{
      const  allEmails=snapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
      }));
     // console.log(allEmails);
      dispatch(setEmail(allEmails));
     })
     // clean up
return ()=> unsubscribe();
  },[]);// this call once but if we provide [text] then calls when text changes


  useEffect(()=>{
    const filteredEmail = emails?.filter((email) => {
      return email.subject.toLowerCase().includes(searchText.toLowerCase()) || email.to.toLowerCase().includes(searchText.toLowerCase()) || email.message.toLowerCase().includes(searchText.toLowerCase())
    });
    setTempEmails(filteredEmail);
  },[searchText,emails]);

  return (
    <div>
      {
        tempEmails && tempEmails ?.map((email)=> <Message email={email}/>)
      }
  
  
    </div>
  
  )
}

export default Messages
