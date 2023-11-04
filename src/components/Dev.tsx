import { useState } from "react";

function Dev() {
  const [selectedProject, setSelectedProject] = useState<string>("Game Hub");

  const devProjects: Record<
    string,
    {
      image: string;
      description: string;
      link: string;
    }
  > = {
    "Game Hub": {
      image: "/GameHub.png",
      description:
        "A game discovery web app (Rawg.io clone) that allows the user to filter by genre and platform in addition to searching a specific game. Makes use of the rawg API to get game data. Built with React, Vite, TypeScript, and ChakraUI.",
      link: "https://github.com/mknudson2/game-hub",
    },
    "To-Do List": {
      image: "/ToDo.png",
      description:
        "A simple to-do app that allows the users to add and delete items from a list while assigning priority. Built with JavaScript.",
      link: "https://github.com/mknudson2/week-7-day-3",
    },
    "Book Collection": {
      image: "/BookCollection.png",
      description:
        "A collection app that allows the user to sign-up/login, create and manage posts, and build a book collection. While the front-end is simple, the back-end is where this project shines along with its own API updated as the users update their collections and posts. Built using Flask, Jinja, PostgreSQL, with API testing via Insomnia.",
      link: "https://github.com/mknudson2/book-project",
    },
    "F1 Racer Standings": {
      image: "/F1.png",
      description:
        "A web app for checking F1 racer standings within a given season. Uses the Ergast Formula One API and built in JavaScript.",
      link: "https://github.com/mknudson2/week-7-day-4-hw",
    },
    Norrœna: {
      image: "/Norroena.png",
      description:
        "From my captstone project at Coding Temple, Norrœna is a prototype for a longstanding passion project of mine. Born of my background in academia, this project is aimed at being the ultimate hub for Old Norse/Old Icelandic studies for enthusiasts, novices, and experienced researches alike with interactive texts, a custom dictionary, resources, and unique lessons in Old Norse language. Users can create a profile and connect with other researchers all over the world. Built using React, Vite, TypeScript, Python, Flask, PostgreSQL, with API testing via Insomnia. ",
      link: "https://github.com/mknudson2/capstone-react",
    },
  };

  const handleClick = (item: string) => {
    setSelectedProject(item);
  };

  const selectedProjectData = devProjects[selectedProject];

  return (
    <>
      <h3 className="devTitle">Dev</h3>
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
          <img src={selectedProjectData.image} alt={selectedProject} />
        </div>
      </div>
      <p className="projectDescription">
        {selectedProjectData.description}
        <a
          href={selectedProjectData.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="gitHubIcon"
            src="/github-icon-1.svg"
            alt="GitHub Icon"
          />
        </a>
      </p>
    </>
  );
}

export default Dev;
