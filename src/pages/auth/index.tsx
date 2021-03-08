import Head from "next/head";
import { FormEvent, useState } from "react";
import styles from "../../styles/pages/Auth.module.css";
import axios from "axios";

export default function AuthPage() {
  const [username, setUsername] = useState('');

  function handleSignUp(event: FormEvent) {
    event.preventDefault();

    axios.post('/api/subscribe', { username });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Autenticação | Move.It</title>
      </Head>

      <body>
        <div id={styles.pilars}>
          <img src="/icons/pilars.svg" alt="Move.It Pilar" />
        </div>

        <div id={styles.moveLogo}>
          <img src="/icons/movelogo.svg" alt="Mote.It Logo" />
        </div>

        <div id={styles.userRegular}>
          <img src="/icons/user-regular.svg" alt="Usuário"/>
        </div>

        <div>
          <h1 id={styles.welcome}>Bem-vindo</h1>
          <p id={styles.inputUsername}>Digite um nome de usuário para começar</p>
        </div>

        <form 
          method="post" 
          action="/"
          onSubmit={handleSignUp}
          >
          <input 
            type="text" 
            placeholder="Digite seu username" 
            id={styles.formName}
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <button id={styles.formButton}>
            <img src="/icons/arrow.svg" alt="Continuar" />
          </button>
        </form>
      </body>
    </div>
  );
}
