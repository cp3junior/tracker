import { ReactComponent as IllustrationIcon } from "../assets/icons/illustration.svg";

const HomeIntro = () => {
  return (
    <div className="homeintro">
      <div className="homeintro-illustration">
        <IllustrationIcon />
      </div>
      <div className="homeintro-text">
        <h1>Welcome Andrew!</h1>
      </div>
    </div>
  );
};

export default HomeIntro;
