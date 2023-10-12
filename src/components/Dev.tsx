import { useState } from "react";

function Dev() {
  const [selectedProject, setSelectedProject] = useState<string>("Game Hub");

  const devProjects = {
    "Game Hub": "",
    "To-Do List": "",
    "Book Collection": "",
    "F1 Racer Standings": "",
    "Norrœna": "",
  };

  const handleClick = (item: string) => {
    setSelectedProject(item);
  };

  return (
    <>
      <h3>Dev</h3>
      <div className="devFlex">
        <div className="devList">
          <ul>
            {Object.keys(devProjects).map((item) => (
              <li key={item} onClick={() => handleClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="devImg">
          <img src={devProjects[selectedProject]} alt={selectedProject} />
        </div>
      </div>
    </>
  );
}

export default Dev;
