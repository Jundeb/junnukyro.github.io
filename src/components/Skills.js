import "../css/Skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>
      <div className="skills-content">
        <div className="experience">
          <h2>Most Experience</h2>
          <div className="line"></div>
          <p>
            Svelte, React, C#, ASP.NET Core, SQL, Node.js, Blender, Unity,
            Bootstrap, git, MongoDB
          </p>
        </div>
        <div className="experience">
          <h2>Some Experience</h2>
          <div className="line"></div>
          <p>Java, C++, Cypress, Jest, AWS, Figma, Firebase, ReqEx, git</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
