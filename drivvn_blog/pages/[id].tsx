import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head'
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
