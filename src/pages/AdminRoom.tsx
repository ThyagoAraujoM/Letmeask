import { useRoom } from "../hooks/useRoom";
import { useHistory, useParams } from "react-router";
import logoImg from "../assets/images/logo.svg";
import deleteImg from "../assets/images/delete.svg";
import checkImg from "../assets/images/check.svg";
import answerImg from "../assets/images/answer.svg";
import { Button } from "../components/Button";
import Question from "../components/Question";
import RoomCode from "../components/RoomCode";
import { database } from "../services/firebase";
import { Div } from "../styles/room";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

type RoomParams = {
  id: string;
};

type PropsType = {
  toggleTheme(): void;
};

export default function AdminRoom(props: PropsType) {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);
  const { colors, title: titleTheme } = useContext(ThemeContext);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir esta mensagem ?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <Div>
      <header>
        <div className='content'>
          <div className={"logo-switch"}>
            <Link to={"/"}>
              <img src={logoImg} alt='Letmeask' />
            </Link>
            <ReactSwitch
              onChange={() => {
                props.toggleTheme();
              }}
              checked={titleTheme === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              height={20}
              width={40}
              handleDiameter={20}
              offColor={colors.primary}
              onColor={colors.primary}
            />
          </div>
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar Sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className='room-title'>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className='question-list'>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}>
                {!question.isAnswered && (
                  <>
                    {/* check */}
                    <button
                      type='button'
                      onClick={() =>
                        handleCheckQuestionAsAnswered(question.id)
                      }>
                      <img
                        src={checkImg}
                        alt='Marcar pergunta como respondida'
                      />
                    </button>

                    {/* answer */}
                    <button
                      type='button'
                      onClick={() => handleHighlightQuestion(question.id)}>
                      <img src={answerImg} alt='Dar destaque Pergunta' />
                    </button>
                  </>
                )}

                {/* Remover */}
                <button
                  type='button'
                  onClick={() => handleDeleteQuestion(question.id)}>
                  <img src={deleteImg} alt='Remover Pergunta' />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </Div>
  );
}
