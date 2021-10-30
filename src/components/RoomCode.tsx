import copyImg from "../assets/images/copy.svg";
import "../styles/room-code.scss";

type RoomCodeProps = {
  code: string;
};

export default function RoomCode(props: RoomCodeProps) {
  function copyRoom() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className='room-code'>
      <div>
        <img src={copyImg} alt='Copy room code' onClick={copyRoom} />
      </div>
      <span>#{props.code}</span>
    </button>
  );
}
