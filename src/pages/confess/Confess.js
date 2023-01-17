import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {collection, addDoc} from 'firebase/firestore'
import { db } from '../../firebase/config'
export default function Confess() {
  const navigate = useNavigate()
  const [fess,setFess] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const doc = {fess}
    try{
      const docRef = await addDoc(collection(db,'confessions'),doc)
      navigate("/")
    } catch(e){
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div>
      <form onSubmit = {handleSubmit}>
      <h2 className = "page-title">Submit Confession</h2>
      <label>
        <span>Confession</span>
        <input
        type = "text"
        onChange={(e)=> setFess(e.target.value)}
        value = {fess}
        required
        />
      </label>

      <button className = "btn">submit</button>
      </form>



    </div>
  )
}
