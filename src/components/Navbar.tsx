import Link from 'next/link';

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Experience</Link></li>
                    <li><Link href="#">Skills</Link></li>
                    <li><Link href="#">Projects</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
