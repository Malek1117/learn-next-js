import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
	return (
		<div className={styles.nav}>
			<Link href='/'>Home</Link>
			<Link href='/about'>About</Link>
			<Link href='/contact-us'>Contact Us</Link>
		</div>
	);
};

export default Navbar;