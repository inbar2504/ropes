import { Typewriter } from "react-simple-typewriter";

const TypingAnimation = ({ text, durationInSeconds }) => {
  const totalCharacters = text.length;
  const totalDurationInMs = durationInSeconds * 1000; // Convert seconds to milliseconds
  const typeSpeed = totalDurationInMs / totalCharacters; // Calculate typing speed in ms/char

  return (
    <div style={{ direction: "rtl" }}>
      <Typewriter
        words={[text]}
        loop={1}
        cursor
        typeSpeed={typeSpeed} // Set calculated typing speed
      />
    </div>
  );
};

export default TypingAnimation;