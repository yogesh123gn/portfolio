import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard"; // Keep if needed elsewhere, otherwise remove
import FeaturedProject from "@/components/FeaturedProject";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";
import HeroBackground from "@/components/HeroBackground";

export default function Home() {
  return (
    <div className="container">
      {/* <BackgroundHexagons /> */}
      <Navbar />
      <main>
        <div className="hero-section">
          {/* <HeroBackground /> */}
          <div className="hero-wrapper">
            <img src="/images/piccc.png" alt="Profile" className="hero-image" />
          </div>
          <h1 id="myname">Hi, I&apos;m Yogesh <picture className="inline-block align-middle">
            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.webp" type="image/webp" />
            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.gif" style={{ filter: "hue-rotate(160deg) brightness(1.2) saturate(0.8)" }} alt="🤗" width="50" height="50" />

          </picture></h1>
          <br />
          <p>A software engineer. I am passionate about coding and learning new technologies.</p>
          <p>I have experience in developing web applications using React, TypeScript, and Node.js.</p>
          <p>I am always eager to learn new technologies and work on challenging projects.</p>
          <br />
        </div>

        <div className="socials">
          <a href="https://drive.google.com/file/d/1b4WZOa5nHyqYYzZtnrDI4tLv2gMV4DJD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <span className="icons"><img src="/images/file.png" alt="Resume" /><p>Resume</p></span>
          </a>
          <a href="https://www.linkedin.com/in/yogeshnanavare/" target="_blank" rel="noopener noreferrer">
            <span className="icons"><img src="/images/linkedin.png" alt="Linkedin" /> <p>Linkedin</p></span>
          </a>
          <a href="https://x.com/yogesh_2604" target="_blank" rel="noopener noreferrer">
            <span className="icons"><img src="/images/twitter.png" alt="X.com" /><p>X.com</p> </span>
          </a>
          <a href="https://github.com/yogesh123gn" target="_blank" rel="noopener noreferrer">
            <span className="icons"><img src="/images/logo.png" alt="Github" /><p>Github</p> </span>
          </a>
        </div>

        {/* <div className="verticle">
          <div className="vl"></div>
        </div> */}

        {/* <div className="star1">
          <img src="/images/google-gemini-icon.png" alt="star" />
        </div> */}

        <Experience />

        <div className="skills" id="skills">
          {/* <h2 style={{ marginBottom: "100px" }}></h2> */}
          <h1 className="experience-title" style={{ marginBottom: "80px" }}>Skills.</h1>
          <ul>
            <Skill name="C++" imageSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" />
            <Skill name="Java" imageSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" />
            <Skill name="TypeScript" imageSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" />
            <Skill name="Python" imageSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
            <Skill name="MySQL" imageSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" />
            <Skill name="GraphQL" imageSrc="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" />
          </ul>
          <ul>
            <Skill name="React" imageSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
            <Skill name="Node.js" imageSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" />
            <Skill name="NestJS" imageSrc="/images/nestjs.svg" />
            <Skill name="MongoDB" imageSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" />
            <Skill name="Git" imageSrc="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" />
          </ul>
          <ul>
            <Skill name="Docker" imageSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" />
            <Skill name="Kubernetes" imageSrc="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" />
            <Skill name="Kafka" imageSrc="https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" />
            <Skill name="Postman" imageSrc="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" />
          </ul>

        </div>

        <div className="projects" id="projects">
          {/* <h2 style={{ marginBottom: "20px" }}>My Work</h2> */}
          <h1 className="experience-title" style={{ marginBottom: "80px", padding: "2px" }}>My Work.</h1>

          <div className="project-list" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <FeaturedProject
              title="PuneRides"
              headline="Premium Bike Rental Service 🛵"
              description="PuneRides is a modern, responsive web application designed to simplify the bike rental experience in Pune. Whether you need a scooter for daily commutes or a cruiser for a weekend getaway, PuneRides offers a seamless platform to browse and book premium two-wheelers."
              tags={["Web App", "Rental Platform", "E-commerce"]}
              status="Launched"
              imageSrc="/images/laptop.png"
              align="right"
              glowColor="rgba(5, 15, 101, 0.7)"
              caseStudyLink="https://pune-rides-doeq.vercel.app/"
            />

            <FeaturedProject
              title="RedisForge"
              headline="High-performance custom Redis server implementation"
              description="A custom-built Redis server that mimics core functionalities from scratch. Designed for optimized in-memory data storage and retrieval, demonstrating deep understanding of database internals."
              tags={["Systems Engineering", "C++", "Database"]}
              status="Prototype"
              imageSrc="/images/RedisForge.webp"
              caseStudyLink="#"
            />

            <FeaturedProject
              title="Project Nest"
              headline="Scalable server-side architecture with NestJS"
              description="An advanced web application utilizing NestJS for scalable server-side architecture. Features real-time updates and modular design patterns."
              tags={["Backend", "NestJS", "TypeScript"]}
              status="Completed"
              imageSrc="/images/nestjs.svg"
              align="right"
              caseStudyLink="#"
            />
          </div>
        </div>

        {/* <div className="contact" id="contact">
          <div>
            <h2>Get in touch</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" />
              </div>
            </form>
          </div>
          <div>

          </div>
        </div> */}
      </main>
      <Footer />
    </div>
  );
}
