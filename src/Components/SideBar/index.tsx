import styles from "../components.module.css";

interface Page {
  page: string;
  link: string;
}

interface Project {
  name: string;
  pages: Page[];
}

export default function SideBar() {
  const projects: Project[] = [
    {
      name: "Projeto Teste",
      pages: [
        { page: "Teste 1", link: "teste1" },
        { page: "Teste 2", link: "teste2" },
        { page: "Teste 3", link: "teste3" },
        { page: "Teste 4", link: "teste4" },
        { page: "Teste 5", link: "teste5" }
      ]
    }
  ];

  return (
    <div className={styles.sideBar}>
      {projects.map((project, projectIndex) => (
        <div key={projectIndex}>
          <div className={styles.sideBarTitle}>
            <h4>{project.name}</h4>
          </div>
          <div className={styles.sideBarLinksProject}>
            <ul>
              {project.pages.map((page, pageIndex) => (
                <li key={pageIndex}>
                  <a href={page.link}>{page.page}</a><button>Editar</button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.sideBarLogouf}>
            <a href="#">Logout</a>
          </div>
        </div>
      ))}
    </div>
  );
}