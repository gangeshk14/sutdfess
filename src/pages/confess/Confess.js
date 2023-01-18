import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {collection, addDoc} from 'firebase/firestore'
import { db } from '../../firebase/config'
import "./Confess.css"

export default function Confess() {
  const navigate = useNavigate()
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [type,setType] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const doc = {title,content,type}
    try{
      const docRef = await addDoc(collection(db,'submissions'),doc)
      navigate("/submit")
    } catch(e){
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div className = 'create'>
      <form onSubmit = {handleSubmit}>
      <h2 className = "page-title">Submit Confession</h2>
      <label>
        <span>Title</span>
        <input
        type = "text"
        onChange={(e)=> setTitle(e.target.value)}
        value = {title}
        required
        />
      </label>

      <label>
        <span>Confesss!!!</span>
        <input
        type = "text"
        onChange={(e)=> setContent(e.target.value)}
        value = {content}
        required
        />
      </label>
      <label>
        <span>Type</span>
        <input
        type = "text"
        onChange={(e)=> setType(e.target.value)}
        value = {type}
        required
        />
      </label>

      <button className = "btn">submit</button>
      </form>
    </div>
  )
}
