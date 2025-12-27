import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <h1 id="myname">Hi, I&apos;m Yogesh :)</h1>
        <br />
        <p>A software engineer. I am passionate about coding and learning new technologies.</p>
        <p>I have experience in developing web applications using React, TypeScript, and Node.js.</p>
        <p>I am always eager to learn new technologies and work on challenging projects.</p>
        <br />

        <div className="socials">
          <a href="https://drive.google.com/file/d/1b4WZOa5nHyqYYzZtnrDI4tLv2gMV4DJD/view?usp=sharing">
            <span className="icons"><img src="/images/file.png" alt="Resume" /><p>Resume</p></span>
          </a>
          <a href="https://www.linkedin.com/in/yogeshnanavare/">
            <span className="icons"><img src="/images/linkedin.png" alt="Linkedin" /> <p>Linkedin</p></span>
          </a>
          <a href="https://x.com/yogesh_2604">
            <span className="icons"><img src="/images/twitter.png" alt="X.com" /><p>X.com</p> </span>
          </a>
          <a href="https://github.com/yogesh123gn">
            <span className="icons"><img src="/images/logo.png" alt="Github" /><p>Github</p> </span>
          </a>
        </div>

        <div className="verticle">
          <div className="vl"></div>
        </div>

        <div className="star1">
          <img src="/images/google-gemini-icon.png" alt="star" />
        </div>

        <div className="skills">
          <h2>Skills</h2>
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
            <Skill name="NestJS" imageSrc="/images/nestjs.png" />
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


        <div className="projects">
          <h2>Projects</h2>
          <div className="cards">
            <ProjectCard
              imageSrc="/images/Carpooling.png"
              title="Smart Cab"
              description="Decentralized Carpooling web application built using Blockchain"
            />
            <ProjectCard
              imageSrc="/images/RedisForge.png"
              title="RedisForge"
              description="A custom-built Redis server that mimics core functionalities from scratch, designed for optimized in-memory data storage and retrieval."
            />
            <ProjectCard
              imageSrc="/images/nestjs.png"
              title="Card title"
              description="Decentralized Carpooling web application build using Blockchain"
            />
          </div>
        </div>

        <div className="contact">
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
