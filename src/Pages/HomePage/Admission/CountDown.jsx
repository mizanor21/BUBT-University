import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 40,
    hours: 5,
    minutes: 56,
    seconds: 30,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        // Calculate the new countdown values
        let newCountdown = { ...prevCountdown };

        if (newCountdown.seconds > 0) {
          newCountdown.seconds--;
        } else {
          newCountdown.seconds = 59;

          if (newCountdown.minutes > 0) {
            newCountdown.minutes--;
          } else {
            newCountdown.minutes = 59;

            if (newCountdown.hours > 0) {
              newCountdown.hours--;
            } else {
              newCountdown.hours = 23;

              if (newCountdown.days > 0) {
                newCountdown.days--;
              } else {
                // Countdown has reached 0, do something here
                clearInterval(countdownInterval);
              }
            }
          }
        }

        return newCountdown;
      });
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 my-5 font-serif text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": countdown.days }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": countdown.hours }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": countdown.minutes }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": countdown.seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Countdown;
