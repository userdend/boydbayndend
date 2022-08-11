export default function Work() {
  return (
    <div id="projects" className="projects-section">
      <h2 className="projects-section-header">These are some of my projects</h2>
      <div className="projects-grid">
        <a
          className="project project-tile"
          href="https://play.google.com/store/apps/details?id=com.userdend.umsscheduleviewer"
          target="_blank"
        >
          <img
            className="project-image"
            src={require("./asset/campusScheduleFinder.jpg")}
            alt="Campus Schedule Finder Photo"
          />
          <p className="project-title">
            <span className="code">{"<"}</span>
            {"[App] "}Campus Schedule Finder
            <span className="code">{"/>"}</span>
          </p>
        </a>
        <a
          className="project project-tile"
          href="https://umschedule.herokuapp.com/"
          target="_blank"
        >
          <img
            className="project-image"
            src={require("./asset/campusScheduleFinder2.jpg")}
            alt="Campus Schedule Finder Photo"
          />
          <p className="project-title">
            <span className="code">{"<"}</span>
            {"[Website] "}Campus Schedule Finder
            <span className="code">{"/>"}</span>
          </p>
        </a>
        <a
          className="project project-tile"
          href="https://socialapp-mevn.herokuapp.com/"
          target="_blank"
        >
          <img
            className="project-image"
            src={require("./asset/socialapp.jpg")}
            alt="Campus Schedule Finder Photo"
          />
          <p className="project-title">
            <span className="code">{"<"}</span>
            {"[WebApp] "}Social App
            <span className="code">{"/>"}</span>
          </p>
        </a>
      </div>
      <a href="" className="btn btn-show-all" target="_blank">
        Show all
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}
