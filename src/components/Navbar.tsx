import Link from 'next/link';

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#experience">Experience</Link></li>
                    <li><Link href="#skills">Skills</Link></li>
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
