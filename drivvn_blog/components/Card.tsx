import Link from 'next/link'
import style from '../styles/Card.module.css'
const Card = ({ blog }) => {
    return (
        <Link key={blog._id} href={`/${blog._id}`}>
            <div className={style.card}>
                <h2>Property Name: {blog.name}</h2>
                <p>Property ID: {blog._id}</p>
                <p>Summary: {blog.summary}</p>
            </div>
        </Link>
    )
}

export default Card
