import Navbar from "../components/navbar"
import Head from 'next/head';

export default function About (){
    return(
        <>
            <Head>
                <title>About Page</title>
            </Head>
            <Navbar />
            <h1>About Page</h1>
        </>
    )
}