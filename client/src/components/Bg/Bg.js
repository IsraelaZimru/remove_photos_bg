/* eslint-disable jsx-a11y/alt-text */
import "./Bg.css";
import close_x from "../../assets/close.png";

function Bg() {
  return (
    <div className="bg-general">
      <img src={close_x} className="close_img" />
      <div className="title">העלאת תמונה כדי להסיר את הרקע</div>
    </div>
  );
}

export default Bg;
