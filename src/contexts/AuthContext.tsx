import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, googleAuthProvider } from "../services/firebase";
// todas as informações passadas na ContextApi

// TYPES
type User = {
   id: string;
   name: string;
   avatar: string;
};
type AuthContextType = {
   user: User | undefined;
   // recebe uma função async com nenhum parametro "()" que devolve "=>" uma "Promise" que retorna nada "<void>"
   singInWithGoogle: () => Promise<void>;
};
type AuthContextProviderProps = {
   children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
   const [user, setUser] = useState<User>();

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
         // função do firebase que vai vigiar se o usuário que acessar a página já fez um login anteriormente, se sim ele
         // vai preencher os dados do user com essa conta já conectada
         // assim mesmo se o usuário sair da aplicação e voltar, ele não vai precisar logar novamente
         if (user) {
            const { displayName, photoURL, uid } = user;

            // Não deixa logar se o usuário não tiver um nome ou uma foto o login não vai passar
            if (!displayName || !photoURL) {
               throw new Error("Missing information from Google Account.");
            }

            setUser({
               id: uid,
               name: displayName,
               avatar: photoURL,
            });
         }
      });
      return () => {
         // retorna dessa forma para não deixar o listiner ativo o tempo todo podendo dar erro por estar fora de contexto
         unsubscribe();
      };
   }, []);

   async function singInWithGoogle() {
      // autenticação com o google utilizando o firebase
      // retorna os dados do google do usuário
      const result = await auth.signInWithPopup(googleAuthProvider);

      if (result.user) {
         const { displayName, photoURL, uid } = result.user;

         // Não deixa logar se o usuário não tiver um nome ou uma foto o login não vai passar
         if (!displayName || !photoURL) {
            throw new Error("Missing information from Google Account.");
         }
         console.log(result.user);
         setUser({
            id: uid,
            name: displayName,
            avatar: photoURL,
         });
      }
   }

   return (
      <AuthContext.Provider value={{ user, singInWithGoogle }}>
         {props.children}
      </AuthContext.Provider>
   );
}
