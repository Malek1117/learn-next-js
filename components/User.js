import styles from '../styles/User.module.css';
import Link from 'next/link';

export default function User({user}){
    return (
        <div className={styles.user}>
            <img src={user.avatar} alt="" />
            <p>Name : {user.first_name} {user.last_name}</p>
            <p>Email : {user.email}</p>
            <Link href={`/${user.id}`}>more</Link>
        </div>
    )
}