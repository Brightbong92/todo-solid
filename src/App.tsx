
import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="/home"
          rel="noopener noreferrer"
        >
          Go To Todo
        </a>
      </header>
    </div>
  );
}

export default App;
