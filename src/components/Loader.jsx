import Perfect from "../assets/perfect_touch.jpg";
import "./style.css"

export const Loader = () => {
  return (
    <div className="loader-container">
      <img className="loader-image" src={`${Perfect}`} width="50px" height="50px" alt="perfect_touch" />
    </div>
  );
};
