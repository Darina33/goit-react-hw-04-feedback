import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./SectionTitle";
import Notification from "./Notification";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral; 
  };


  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (neutral + bad + good)) || 0
  };

    return (<div>
      <Section title="Please leave feedback">
      <FeedbackOptions options={['good', 'bad', 'neutral']}
        addFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">{countTotalFeedback() ?
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} percentage={countPositiveFeedbackPercentage()} /> : <Notification message="There is no feedback" />}
      </Section>
    </div>)
}
  
// ldesd
