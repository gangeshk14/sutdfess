import './ConfessionList.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'


export default function AdminList({confessions}) {
  
  const {mode} = useTheme()

  if (confessions.length === 0){
    return (<div className = "error">No confessions to load...</div>)
  }
  return (
    <div className = 'confession-list'>
        {confessions.map(confession => (
            <div key = {confession.id} className = {`card ${mode}`}>
                <h3>{confession.title}</h3>
                <div>{confession.content}</div>
                <p>#{confession.type}</p>
                {/* <Link to = {`/confessions/${recipe.id}`}>Cook This</Link> */}
                
            </div>
        ))}

    </div>
  )
}