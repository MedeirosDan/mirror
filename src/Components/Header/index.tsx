import styles from "../components.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerLogo}>
                <h1>Logo</h1>
            </div>
            <div className={styles.headerProject}>
                <ul>
                <li>Teste 1</li>
                <li>Teste 2</li>
                <li>Teste 3</li>
                <li>Teste 4</li>
                <li>Teste 5</li>
                </ul>
            </div>
        </div>
    )
}