"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./globals.css";
import SkillList from "../json/SkillList.json";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <section className="top-page">
        <h1>
          <span
            data-aos="zoom-out-left"
            data-aos-delay={200}
            data-aos-duration={2000}
          >
            Rifqi{" "}
          </span>
          <span
            data-aos="zoom-out-left"
            data-aos-delay={400}
            data-aos-duration={2000}
          >
            Ziyad{" "}
          </span>
          <span
            data-aos="zoom-out-left"
            data-aos-delay={700}
            data-aos-duration={2000}
          >
            Imtinan
          </span>
        </h1>
        {/* <h1>I am Full Stack Developer</h1> */}
        <div>
          <h6 className="about-me" data-aos="fade-up" data-aos-delay={600}>
            Experienced Frontend Developer with over 2 years of expertise in
            crafting engaging and responsive user interfaces. Proficient in
            implementing web designs using HTML, CSS, JavaScript, React.js, and
            possessing a background in learning Backend technologies such as
            Node.js, Express.js, and MySql, which provides a deeper
            understanding of the entire web development ecosystem.
          </h6>
        </div>
      </section>
      {/* start my skill */}
      <section
        className="my-skill"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay={300}
      >
        <h1>My Skills</h1>
        <div className="wrapper">
          <div className="frontend">
            <h2>Frontend Development</h2>
            {/* <div>
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg"
                  alt="html-icon"
                />
              </a>
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg"
                  alt="icon-css"
                />
              </a>
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="js-icon"
                />
              </a>
              <a target="_blank" href="https://react.dev/">
                <img
                  src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
                  alt="react-icon"
                />
              </a>
              <a target="_blank" href="https://nextjs.org/">
                <img
                  src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png"
                  alt="next-icon"
                />
              </a>
              <a target="_blank" href="https://jquery.com/">
                <img
                  src="https://www.vectorlogo.zone/logos/jquery/jquery-vertical.svg"
                  alt="jquery"
                />
              </a>
              <a target="_blank" href="https://redux.js.org/">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="redux"
                />
              </a>
              <a target="_blank" href="https://getbootstrap.com/">
                <img
                  src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg"
                  alt="bootstrap"
                />
              </a>
            </div> */}
            <div>
              {SkillList["Frontend Developer"].map((data, index) => {
                return (
                  <a key={index} target="_blank" href={data._href}>
                    <Image
                      src={data._src}
                      alt={data._alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: 70 }} //
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="backend">
            <h2>Backend Developement</h2>
            {/* <div>
              <a target="_blank" href="https://nodejs.org/en">
                <img
                  src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"
                  alt="node.js"
                />
              </a>
              <a target="_blank" href="https://expressjs.com/">
                <img
                  src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
                  alt="express.js"
                />
              </a>
              <a target="_blank" href="https://www.mysql.com/">
                <img
                  src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg"
                  alt="mysql"
                />
              </a>
              <a target="_blank" href="https://redis.io/">
                <img
                  src="https://www.vectorlogo.zone/logos/redis/redis-ar21.svg"
                  alt="redis"
                />
              </a>
            </div> */}
            <div>
              {SkillList["Backend Developer"].map((data, index) => {
                return (
                  <a key={index} target="_blank" href={data._href}>
                    <Image
                      src={data._src}
                      alt={data._alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: 70 }} //
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="others">
            <h2>Others</h2>
            {/* <div>
              <a target="_blank" href="https://git-scm.com/">
                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"
                  alt="git"
                />
              </a>
              <a target="_blank" href="https://www.npmjs.com/">
                <img
                  src="https://www.vectorlogo.zone/logos/npmjs/npmjs-ar21.svg"
                  alt="npm"
                />
              </a>
              <a target="_blank" href="https://www.postman.com/">
                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg"
                  alt="postman"
                />
              </a>
              <a target="_blank" href="https://github.com/">
                <img
                  src="https://www.vectorlogo.zone/logos/github/github-ar21.svg"
                  alt="github"
                />
              </a>
              <a target="_blank" href="https://about.gitea.com/">
                <img
                  src="https://www.vectorlogo.zone/logos/giteaio/giteaio-ar21.svg"
                  alt="gitea"
                />
              </a>
            </div> */}
            <div>
              {SkillList["Others"].map((data, index) => {
                return (
                  <a key={index} target="_blank" href={data._href}>
                    <Image
                      src={data._src}
                      alt={data._alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: 70 }} //
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* end my skill */}
      {/* start portfolio */}
      <section
        className="portfolio"
        data-aos="fade-up-right"
        data-aos-delay={100}
      >
        <h1>Portfolio</h1>
        <div className="wrapper">
          <div className="folio">
            <div className="col-desc" data-aos="fade-left">
              <a href="https://ignica.com" target="_blank" className="title">
                <h2>ignica.com</h2>
                <h3>↗</h3>
              </a>
              <h6>
                It is a company profile website that contains product &amp;
                service, case study, contact, and news sections. Redesigned the
                UI of the home page to enhance user experience and
                responsiveness. Technologies used: JavaScript, jQuery,
                Bootstrap, PHP.
              </h6>
            </div>
            <a
              href="https://ignica.com"
              target="_blank"
              className="col-image"
              data-aos="fade-right"
            >
              <img
                src="./images/ignica/Screenshot 2023-09-13 at 09.32.34.webp"
                alt="ignica"
              />
            </a>
          </div>
          <div className="folio">
            <div className="col-desc" data-aos="fade-right">
              <h2 className="title">Workflow</h2>
              <h6>
                It is a web application designed to meet the needs of our
                client's office. It consists of several modules, such as petty
                payment, general recruitment, master data, and target
                management. Designed and developed the UI according to the
                client's requirements and integrated it with the backend through
                APIs. Technologies used: React.js, Bootstrap, Redux, Golang.
              </h6>
            </div>
            <div className="col-image" data-aos="fade-left">
              <img src="./images/workflow/home page.png" alt="ignica" />
            </div>
          </div>
        </div>
      </section>
      {/* end portfolio */}
      {/* start work experience */}
      <section
        className="work-experience"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <h1>Work Experience</h1>
        <div className="wrapper">
          <div>
            <h2>
              Frontend Developer, PT Boston Makmur Gemilang (Sep 2021 - Sep
              2023)
            </h2>
            <ul>
              <li>
                Implementing the web user interface in accordance with the
                provided UI design.
              </li>
              <li>Integrating the interface with the backend using APIs.</li>
              <li>
                Identifying and resolving bugs or errors that arise in the web
                application.
              </li>
              <li>
                Enhancing the performance of the web application, including
                source code optimization.
              </li>
              <li>
                Collaborating with the development team and engaging in regular
                discussions regarding client requirements and requests, as well
                as identifying appropriate technical solutions.
              </li>
              <li>
                Engaging in discussions with the development team regarding the
                selection of programming languages, frameworks, and libraries to
                be used in the project, while also adhering to consistent code
                styling practices in web development.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="education" data-aos="fade-up" data-aos-delay={100}>
        <h1>Education</h1>
        <div className="wrapper">
          <div className="edu-wrap">
            <h2>
              Full Stack Developer, Bootcamp Fazztrack (Mei 2021 – Agu 2021)
            </h2>
            <ul>
              <li>
                Learn frontend using libraries/frameworks React.js, Next.js,
                Redux
              </li>
              <li>Learn backend using Node.js, Express.js, Redis, MySql.</li>
              <li>
                Coaching soft skills, such as public speaking, self management
                &amp; time management, growth mindset.
              </li>
              <li>
                Create a website for purchasing cinema tickets, realtime chat
                and E-wallet.
              </li>
            </ul>
          </div>
          <div>
            <h2>
              Ilmu Pengetahuan Alam, Madrasah Aliyah Khazanah Kebajikan (Jun
              2016 – Apr 2019)
            </h2>
            <ul>
              <li>
                Study general subjects, such as Mathematics, Physics, Chemistry,
                etc.
              </li>
              <li>
                Studying Islamic religious subjects, such as Fiqih, Aqidah
                Akhlak, Al-Quran Hadits and Sejarah Kebudayaan Islam, etc.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* end work experience */}
      <section className="social-media" data-aos="fade-up" data-aos-delay={100}>
        <h1>
          Social Media &amp; <br />
          Contact
        </h1>
        <div className="wrapper">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rifqiziyadimtinan/"
          >
            <img
              src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
              alt="linkedin"
            />
            Rifqi Ziyad Imtinan
          </a>
          <a target="_blank" href="https://github.com/rifqiziyad">
            <img
              src="https://www.vectorlogo.zone/logos/github/github-tile.svg"
              alt="github"
            />
            rifqiziyad
          </a>
          <a target="_blank" href="https://www.facebook.com/rifqiziyadimtinan/">
            <img
              src="https://www.vectorlogo.zone/logos/facebook/facebook-official.svg"
              alt="facvebook"
            />
            Rifqi Ziyad Imtinan
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/rifqiziyadimtinan/"
          >
            <img
              src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg"
              alt="instagram"
            />
            rifqiziyadimtinan
          </a>
          <div>
            <img
              src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg"
              alt="gmail"
            />
            rifqiimtinan@gmail.com
          </div>
        </div>
      </section>
      {/* Loading Component */}
      {/* <div className="loader" id="loader">
        <div className="box-load1" />
        <div className="box-load2" />
        <div className="box-load3" />
      </div> */}
      {/* End Loading Component */}
    </div>
  );
}
