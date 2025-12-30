
const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-cta">
                        <h2>Feel free to hit me up. I&apos;m looking <br /> forward to hearing from you.</h2>
                    </div>
                    <div className="footer-signature">
                        {/* Using logo as signature placeholder */}
                        <img src="/images/signa.png" alt="Yogesh" />
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="footer-socials">
                        <a href="https://www.linkedin.com/in/yogeshnanavare/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/linkedin.png" alt="Linkedin" />
                        </a>
                        <a href="https://x.com/yogesh_2604" target="_blank" rel="noopener noreferrer">
                            <img src="/images/twitter.png" alt="X (Twitter)" />
                        </a>
                        <a href="https://github.com/yogesh123gn" target="_blank" rel="noopener noreferrer">
                            <img src="/images/logo.png" alt="Github" />{/* GitHub icon placeholder if image not suitable or just text */}
                        </a>
                        <a href="https://drive.google.com/file/d/1b4WZOa5nHyqYYzZtnrDI4tLv2gMV4DJD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <img src="/images/file.png" alt="Resume" />
                        </a>
                    </div>
                    <div className="footer-email">
                        <a href="mailto:yogeshhnanavare@gmail.com">yogeshnanavare@gmail.com</a>
                    </div>
                </div>

                <div className="footer-nav">
                    <a href="#">HOME</a>
                    <a href="#">WORK</a>
                    <a href="#">AI+</a>
                    <a href="#">ACHIEVEMENTS</a>
                    <a href="#">WRITING</a>
                </div>

                <div className="footer-bottom">
                    <p>Yogesh Nanavare · Portfolio · Product Design © {new Date().getFullYear()} · Privacy policy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
