import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import Card from '../components/Card'
import style from "../styles/Home.module.css"

interface BlogModel {
  _id: number;
  blog: object;
}

export default function Home({ blogs }) {
  // console.log(blogs);
  return (
    <>
      <Head>
        <title>Drivvn Blog</title>
      </Head>
      <div className={style.card_container}>
        <div className={style.grid}>
        {
          blogs.map((blog: BlogModel) => {
            return(
                <Card key={blog._id} blog={blog}/>
            )
          })
        }
        </div>
      </div>
      
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { db } = await connectToDatabase();
  const data = await db.collection("listingsAndReviews").find({}).limit(20).toArray();

  const blogs = JSON.parse(JSON.stringify(data));

  return {
    props: { blogs: blogs },
  }
}