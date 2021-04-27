import {useRouter} from 'next/router';
import Link from 'next/link';
const Blog = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <div>
            <h1>{id}</h1>
            <Link href='/'>Back</Link>
        </div>
    )
}

export default Blog
