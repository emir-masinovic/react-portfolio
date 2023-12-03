import React, { useEffect, useRef } from "react";
import "../css/clock.css";

const Clock = () => {
  const clockRef = useRef(null);
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const deg = 6;
    const remValue = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const chooseShortWindowSide =
      Math.min(window.innerWidth, window.innerHeight) - remValue;

    clockRef.current.style.height = `${
      chooseShortWindowSide - 2 * remValue - 80
    }px`;
    clockRef.current.style.width = `${
      chooseShortWindowSide - 2 * remValue - 80
    }px`;

    hourRef.current.style.height = `${clockRef.current.offsetWidth / 4}px`;
    hourRef.current.style.width = "8px";
    minuteRef.current.style.height = `${clockRef.current.offsetWidth / 2.5}px`;
    minuteRef.current.style.width = "6px";
    secondRef.current.style.height = `${
      clockRef.current.offsetWidth / 2 - 8
    }px`;
    secondRef.current.style.width = "4px";

    const intervalId = setInterval(() => {
      const date = new Date();
      const hourDate = date.getHours() * 30;
      const minuteDate = date.getMinutes() * deg;
      const secondDate = date.getSeconds() * deg;

      hourRef.current.style.transform = `rotateZ(${
        hourDate + minuteDate / 12
      }deg)`;
      minuteRef.current.style.transform = `rotateZ(${minuteDate}deg)`;
      secondRef.current.style.transform = `rotateZ(${secondDate}deg)`;
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock-container">
      <div className="clock" ref={clockRef}>
        <div className="center" />
        <div className="hour" ref={hourRef} />
        <div className="minute" ref={minuteRef} />
        <div className="second" ref={secondRef} />
        <div className="mark-12 mark" />
        <div className="mark-3 mark" />
        <div className="mark-6 mark" />
        <div className="mark-9 mark" />
      </div>
    </div>
  );
};

export default Clock;
