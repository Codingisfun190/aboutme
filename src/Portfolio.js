const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div>
        <h2>Portfolio</h2>
      </div>
      <div className="gallery">
        <div className="projects">
          <div className="box">
            <a
              href="https://codingisfun190.github.io/EarthTribe/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="../MyProjects/aboutme/src/images/Earthtribe-thumbnail.PNG"
                alt="First project"
              />
            </a>
          </div>
          <div className="box">second project</div>
          <div className="box">third project</div>
          <div className="box">forth project</div>
          <div className="box">fifth project</div>
          <div className="box">sixth project</div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

/* <a class="link" href="https://github.com/dolaku/TriviaGame" target="_blank" rel="noopener noreferrer">…</a><a href="https://dolaku.github.io/TriviaGame/" target="_blank">…</a> */
