import React, { useEffect, useState } from 'react'
import {collection, getDocs} from 'firebase/firestore'
import { db } from '../../firebase/config'
import "./Admin.css"
import ConfessionList from '../../components/ConfessionList'
import { Link } from 'react-router-dom'
import AdminList from '../../components/AdminList'

export default function Admin() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const ref = collection(db,'submissions')
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
  console.log(data)
  return (
    <div>
    {error && <p className="error">{error}</p>}
    {isPending && <p className="loading">Loading...</p>}
    {data && <AdminList confessions={data} />}
    </div>
)
}
