import "../app/globals.css";

const Footer = () => {
  return (
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
        <a target="_blank" href="https://www.instagram.com/rifqiziyadimtinan/">
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
  );
};

export default Footer;
