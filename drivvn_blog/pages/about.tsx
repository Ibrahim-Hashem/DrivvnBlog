import Navbar from '../components/Navbar';
import Head from 'next/head'
import Style from "../styles/About.module.css"


const about = () => {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <Navbar/>
            <h1>about</h1>
        </div>
    )
}

export default about
