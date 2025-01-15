import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const [timeleft, setTimeleft] = useState<number>(
    Number(localStorage.getItem("timer"))
  );
  const navigate = useNavigate();

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (timeleft === 0) {
      localStorage.removeItem("timer");
      navigate('/result');
      return;
    }

    const timer = setInterval(() => {
      setTimeleft(timeleft - 1);
      localStorage.setItem("timer", String(timeleft - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeleft]);

  return (
    <div className="absolute top-10 right-3 md:right-10 ring-1 ring-white rounded-xl bg-white text-black px-4 py-2">
      <h1 className="text-md">
        Time Left <span className="font-bold">{formatTime(timeleft)}</span>
      </h1>
    </div>
  );
};

export default Timer;
