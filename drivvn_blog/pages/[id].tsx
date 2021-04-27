import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next';


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
    const id= context.params.id;
    const res = await fetch("http://localhost:3000/api/blogs/")
    const blogs =  await res.json();
    const blog = blogs.find(blog=>{
        return blog._id === id 
    })
    return {
        props:{blog},
    }
} 



const Blog = ({blog}) => {
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
                <h1>{blog._id}</h1>
            </div>
        </>
    )
}
export default Blog