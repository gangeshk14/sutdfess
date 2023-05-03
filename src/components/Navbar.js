import { Link } from 'react-router-dom'
import './Navbar.css'
import { useTheme } from '../hooks/useTheme'

export default function Navbar(props) {
    const { mode } = useTheme()

    return (
        <div className = 'navbar ${mode}'>
            <nav>
                <Link to = "/"><h1>SUTDfessions</h1></Link>
{/* 
            <button className = "button">
                Filter Advice
            </button>

            <button className = "button2">
                See All
            </button> */}
            {/* <SearchBar /> */}
            <Link to = "/submit">Submit Confession</Link>
        </nav>
    </div>
  )
}