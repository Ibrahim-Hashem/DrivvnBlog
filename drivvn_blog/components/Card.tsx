 import style from '../styles/Card.module.css'
const Card = ({blog}) => {
    return (
        <div  className={style.card}>
            <h2>Property Name: {blog.name}</h2>
            <p>Property ID: {blog._id}</p>
            <p>Summary: {blog.summary}</p>
        </div>
    )
}

export default Card
