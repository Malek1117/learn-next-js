import styles from '../styles/User.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function User({user}){
    return (
        <>
            <Head>
                <title>{user.first_name} || User</title>
            </Head>
            <div className={styles.main}>
                <div className={styles.user}>
                    <img src={user.avatar} alt="" />
                    <p>Name : {user.first_name} {user.last_name}</p>
                    <p>Email : {user.email}</p>
                    <Link href="/">Home</Link>
                </div>
            </div>
        </>
    )
}

export const getStaticProps = async (context)=>{
    const res = await fetch(`https://reqres.in/api/users/${context.params.id}`);
    const user = await res.json();
    
    return {
        props : {
            id : context.params.id,
            user : user.data
        },
        notFound : false
    }
}

export const getStaticPaths = async ()=>{
    return {
        paths: [
            {
                params : {id:'1'}
            },
            {
                params : {id:'2'} 
            },
            {
                params : {id:'3'} 
            },
            {
                params : {id:'4'} 
            },
            {
                params : {id:'5'} 
            },
            {
                params : {id:'6'} 
            }
        ],
        fallback: false
    }
}