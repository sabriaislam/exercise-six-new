import Link from "next/link";
import styles from "../../styles/Headers.module.css";

export default function Header({ isLoggedIn , logoutUserFunction}) {
  return (
    <header className={styles.headerWrapper}>
      <div>
        <h1>Users & Auth</h1>
      </div>
      <nav>
        <ul>
          {isLoggedIn && (
          <>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a onClick={logoutUserFunction}>Log Out</a>
            </li>
          </>
          )}
          {!isLoggedIn && (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/create">Create User</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}


