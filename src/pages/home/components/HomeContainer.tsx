import Button from "@shared/components/button/Button";
import { useAuth } from "@shared/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HomeContainer = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleStart = () => {
    localStorage.setItem("timer", '600');
    navigate("/quiz");
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center gap-5 bg-main-bg bg-cover z-1">
      <TypeAnimation
        sequence={[
          `Hi ${user},welcome!`,
          1000,
          "Good luck working on this!",
          1000,
          "Have fun practicing!",
          1000,
          "Best of luck!",
        ]}
        className="text-6xl font-bold text-white"
      />
      <div className="flex gap-5">
        <Button variant="primary" onClick={() => handleStart()}>
          Start Practicing
        </Button>
        <Button variant="primary" onClick={() => logout()}>
          Logout
        </Button>
      </div>
    </section>
  );
};

export default HomeContainer;
