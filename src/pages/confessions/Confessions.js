import React, { useEffect, useState } from 'react'
import {collection, getDocs} from 'firebase/firestore'
import { db } from '../../firebase/config'
import "./Confessions.css"
import ConfessionList from '../../components/ConfessionList'
export default function Confessions() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const ref = collection(db,'displayed')
    setIsPending(true)
    
    getDocs(ref)
     .then((snapshot) => {
       if (snapshot.empty) {
        setError('No confessions to load')
        setIsPending(false)
       } else{
       let results = []
       snapshot.docs.forEach(doc => {
        results.push({id:doc.id, ...doc.data()})
       })
       setIsPending(false)
       setData(results)
      }
     }).catch(err => {
      setError(err.message)
      setIsPending(false)
     })

  }, [])
  return (
        <div className = "home">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {data && <ConfessionList confessions={data} />}
        </div>
  )
}
