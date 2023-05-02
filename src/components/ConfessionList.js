import './ConfessionList.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'


export default function ConfessionList({confessions}) {
  
  const {mode} = useTheme()

  const [searchQuery, setSearchQuery] = useState('')

  const filteredConfessions = confessions.filter(confession => {
    return confession.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    confession.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    confession.type.toLowerCase().includes(searchQuery.toLowerCase())
  })

  if (confessions.length === 0){
    return (<div className = "error">No confessions to load...</div>)
  }
  return (
    <div className = 'confession-list'>
      <div className='search-container'>
        <input type='text' placeholder='Search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
        {filteredConfessions.map(confession => (
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