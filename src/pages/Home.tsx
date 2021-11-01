import { useHistory } from "react-router-dom";
import { FormEvent, useContext, useState } from "react";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import { Div } from "../styles/auth";

import { ThemeContext } from "styled-components";
import Switch from "react-switch";

type PropsType = {
  toggleTheme(): void;
};

export function Home(props: PropsType) {
  const history = useHistory();
  const { singInWithGoogle, user } = useAuth();
  const [roomCode, setRoomCode] = useState("");
  const { colors, title } = useContext(ThemeContext);

  // faz com que o usuário logue no google para poder criar uma sala e depois passa para a página de criação de sala.
  async function handleCreateRoom() {
    if (!user) {
      await singInWithGoogle();
    }
    history.push("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exists");
      return;
    }

    if (roomRef.val().endedAt) {
      alert("Room already closed");
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <Div id='page-auth'>
      <aside>
        <img
          src={illustrationImg}
          alt='Ilustração simbolizando perguntas e respostas'
        />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className='main-theme'>
          <img src={logoImg} alt='Letmeask' />
          <Switch
            onChange={() => {
              props.toggleTheme();
            }}
            checked={title === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
            handleDiameter={20}
            offColor={colors.primary}
            onColor={colors.primary}
          />
          <button onClick={handleCreateRoom} className='create-room'>
            <img src={googleIconImg} alt='Logo do Google' />
            Crie sua sala com o Google
          </button>
          <div className='separator'>ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type='text'
              onChange={(event) => {
                setRoomCode(event.target.value);
              }}
              value={roomCode}
              placeholder='Digite o código da sala'
            />
            <Button type='submit'>Entrar na sala</Button>
          </form>
        </div>
      </main>
    </Div>
  );
}
