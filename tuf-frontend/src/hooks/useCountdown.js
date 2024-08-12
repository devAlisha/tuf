// useCountdown.js
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { calculateTimeLeft } from "../utils/timeUtils";
import { selectBannerCountdown } from "../redux/features/banner/selector";

export const useCountdown = () => {
  const targetTime = useSelector(selectBannerCountdown);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return timeLeft;
};
