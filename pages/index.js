import Navbar from '../components/navbar';
import User from '../components/User';
import Head from 'next/head';

const IndexPage = ({users}) => {      
return (
    <>
        <style jsx>
            {`
                .usersContainer{
                    display: grid;
                    grid-template-columns: repeat(3, 25%);
                    padding: 30px 5%;
                    grid-gap: 30px 12.5%;
                }
            `}
        </style>
        <Head>
            <title>All Users || Home</title>
        </Head>
        <div>
            <Navbar />
            <div className="usersContainer">
                {users.data.map(user =><User key={user.id} user={user} />)}
            </div>
        </div>
    </>
)};
export default IndexPage;

export const getStaticProps = async () =>{
    const res = await fetch('https://reqres.in/api/users?page=1');
    const users = await res.json();
   
    return {
        props: {
            users
        }
    }
}