import Navbar from '../components/Navbar';
import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import Style from "../styles/Profile.module.css"
const profile = () => {
    return (
        <div>
            <Navbar/>
            <h1>profile</h1>
        </div>
    )
}

export default profile
