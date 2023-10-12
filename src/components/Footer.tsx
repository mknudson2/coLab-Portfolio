function Footer() {
    const handleViewRepoClick = () => {
        window.location.href = "https://github.com/mknudson2/coLab-Portfolio";
      };

  return (
    <>
    <a href="#top" className="toTopLink">
        <p className="toTop">—Back to the top—</p>
    </a>
      <div className="flexFooter">
        <div className="flexFooterLinks">
          <ul className="footerLinksListItems">
            <li>
              <a href="mailto:michaelknudsonphd@gmail.com">
                <p>
                  <img src="/gmail-svgrepo-com.svg" alt="" />
                  Email
                </p>
              </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/michaelknudson2/">
              <p>
                    <img className="roundFooteerImgs" src="/linkedin-svgrepo-com.svg" alt="" />
                    LinkedIn
                                  </p>
                </a>
            </li>
            <li>
              <a href="https://github.com/mknudson2">
                  <p>
                    <img className="roundFooteerImgs" src="/github-icon-1.svg" alt="" />
                    GitHub
                  </p>
              </a>
            </li>
            <li>
              <a href="https://wisc.academia.edu/MichaelKnudson">
                  <p>
                    <img className="roundFooteerImgs" src="/academia-svgrepo-com.svg" alt="" />
                    Academia.edu
                  </p>
              </a>
            </li>
          </ul>
        </div>
        <div className="footerRepo">
          <h3>Like this page?</h3>
          <button onClick={handleViewRepoClick}>View Repo</button>
        </div>
      </div>
    </>
  );
}

export default Footer;
