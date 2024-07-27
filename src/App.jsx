import { useEffect, useState, useRef } from "react";
import DiceGameplay from "./components/DiceGameplay";
import DiceStartingGame from "./components/DiceStartingGame";

function App() {
  const [startGame, setStartGame] = useState(true);
  const numbers = [1, 2, 3, 4, 5, 6];
  const [selectNumber, setSelectedNumber] = useState(null);
  const [diceNumber, setDiceNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const [showRule, setShowRule] = useState(false);

  const hasMounted = useRef(false);

  const handlePlayBtn = () => {
    setStartGame((prev) => !prev);
  };

  const handleNumber = (e) => {
    setSelectedNumber(e.target.innerText);
    setError(false);
  };

  const handleDice = ({ Max, Min }) => {
    if (selectNumber == null) {
      setError(true);
      return;
    }
    setDiceNumber(Math.floor(Math.random() * (Max - Min) + Min));
  };

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const handleScore = () => {
      if (selectNumber == diceNumber) {
        setScore((prev) => Number(prev) + Number(selectNumber));
      } else {
        setScore((prev) => Number(prev) - 2);
      }
      setSelectedNumber(null);
    };

    handleScore();
  }, [diceNumber]);

  const handleResetScore = () => {
    setScore(0);
    setSelectedNumber(null);
    setError(false);
  };

  const handleRuleBtn = () => {
    setShowRule((prev) => !prev);
  };

  return (
    <>
      {startGame ? (
        <DiceGameplay
          numbers={numbers}
          handleNumber={handleNumber}
          selectNumber={selectNumber}
          handleDice={handleDice}
          diceNumber={diceNumber}
          score={score}
          handleResetScore={handleResetScore}
          error={error}
          showRule={showRule}
          handleRuleBtn={handleRuleBtn}
        />
      ) : (
        <DiceStartingGame handlePlayBtn={handlePlayBtn} />
      )}
    </>
  );
}

export default App;
