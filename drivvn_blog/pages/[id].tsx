import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb';
import { GetStaticProps, GetStaticPaths } from 'next';
import { brotliDecompress } from 'node:zlib';

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/blogs");
    const blogs = await res.json();
    const paths = blogs.map(blog=>{
        return {params:{id: blog._id}}
    })
    return {
        paths,
        fallback:false,
    }
}

export const getStaticProps: GetStaticProps = async (context)=>{
    const id = context.params.id;
    const res = await fetch("http://localhost:3000/api/blogs/"+ parseInt(id))
    console.log(res);

    return {
        props:{},
    }
} 



const Blog = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Head>
                <title>{id}</title> {/*make dynamic with blog name*/}
            </Head>
            <div>
                <h1>{id}</h1>
                <Link href='/'>Back</Link>
            </div>
        </>
    )
}
export default Blog