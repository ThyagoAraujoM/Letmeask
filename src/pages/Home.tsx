import { useHistory } from "react-router-dom";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import "../styles/auth.scss";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

export function Home() {
   const history = useHistory();
   const { singInWithGoogle, user } = useAuth();
   async function handleCreateRoom() {
      if (!user) {
         await singInWithGoogle();
      }
      history.push("/rooms/new");
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
               <form>
                  <input type='text' placeholder='Digite o código da sala' />
                  <Button type='submit'>Entrar na sala</Button>
               </form>
            </div>
         </main>
      </div>
   );
}
