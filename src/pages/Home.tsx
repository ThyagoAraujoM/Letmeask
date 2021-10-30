import { useHistory } from "react-router-dom";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import "../styles/auth.scss";

export function Home() {
  const history = useHistory();
  const { singInWithGoogle, user } = useAuth();
  const [roomCode, setRoomCode] = useState("");

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
    history.push(`/rooms/${roomCode}`);
  }

  return (
    <div id='page-auth'>
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
    </div>
  );
}
