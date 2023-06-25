import React, { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2023-07-01"); // Replace with your target date
    const currentDate = new Date();

    const totalSeconds = Math.floor((targetDate - currentDate) / 1000);
    if (totalSeconds <= 0) {
      // Countdown has reached 0, do something here
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return { days, hours, minutes, seconds };
  };

  const [countdown, setCountdown] = useState(calculateTimeLeft());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 my-5 font-serif text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-extrabold text-5xl">
          <span style={{ "--value": countdown.days }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-extrabold text-5xl">
          <span style={{ "--value": countdown.hours }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-extrabold text-5xl">
          <span style={{ "--value": countdown.minutes }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-extrabold text-5xl">
          <span style={{ "--value": countdown.seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Countdown;
