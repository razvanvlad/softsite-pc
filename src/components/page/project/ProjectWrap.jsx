import React from "react";
import ProjectCardFilter from "./ProjectCardFilter";

function ProjectWrap(props) {
  return (
    <>
      <div className="project-area sec-mar">
        <div className="container">
          <div className="title-wrap">
            <div className={`${"sec-title"} ${props.white}`}>
              <span>Proiecte SOFTSITE</span>
              <h2>Portofoliu Proiecte</h2>
              <p>
              Oferim o gamă completă de servicii IT, noi suntem partenerul firmei tale. Oferim profesionalism și seriozitate în orice colaborare. Vă putem dezvolta, automatiza și promova afacerea.
              </p>
            </div>
          </div>
          <ProjectCardFilter/>
        </div>
      </div>
    </>
  );
}

export default ProjectWrap;
