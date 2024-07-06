import Image from 'next/image'
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
        { page: "Teste 5", link: "teste5" },
      ],
    },
  ];

  return (
    <div className={styles.sideBar}>
      {projects.map((project, projectIndex) => (
        <div key={projectIndex} className={styles.sideBarMenu}>
          <div className={styles.sideBarMenuTitle}>
            <h4>{project.name}</h4>
          </div>
          <div className={styles.sideBarLinksProject}>
            <ul>
              {project.pages.map((page, pageIndex) => (
                <li key={pageIndex}>
                  <a href={page.link}>{page.page}</a>
                  <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className={styles.sideBarLogouf}>
        <a href="#">Logout</a>
      </div>
    </div>
  );
}
