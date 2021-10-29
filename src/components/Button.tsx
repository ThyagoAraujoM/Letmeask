import { ButtonHTMLAttributes } from "react";
import "../styles/button.scss";
// primeiro pegamos todos os tipos/atributos que o botão pode ter do próprio react e depois passamos o elemento de botão dentro de <> que é preciso
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
   // spread operator: {...props} distribuindo todas as propriedades para o button
   return <button className='button' {...props} />;
}
