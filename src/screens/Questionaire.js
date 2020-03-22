import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import firebase from "../firebase";
import Layout from "../components/Layout/Layout";
import Disclaimer from "../components/Disclaimer/Disclaimer";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import questions from "../resources/questions.json";
import Question from "../components/Question/Question";
import ListContent from "../components/ListContent/ListContent";

const CTA = styled(Button)`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;
  align-self: center;
  justify-self: center;
  padding: 1rem 2rem 1rem 3rem;
  text-transform: none;
  box-shadow: none;

  &:before {
    content: "\f1d8";
    font-family: FontAwesome;
    width: 3rem;
    margin-left: -2rem;
  }
`;

const Left = styled.div`
  align-items: flex-start;
`;
function Questionaire() {
  const history = useHistory();
  const [stack, setStack] = useState({});
  const [isSend, setIsSend] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    if (!isEnded && questions && questions.length > 0) {
      setCurrentQuestion(questions[0]);
    }
  }, [isEnded]);

  const handleGoTo = goToID => {
    if (!goToID) return;

    const goToEl = questions.find(el => el.id === goToID);
    if (goToEl) {
      setCurrentQuestion(goToEl);
    } else {
      setCurrentQuestion(null);
      setIsEnded(true);
    }
  };

  const handleGoBack = () => {
    const goBackID = questions.find(el => el.id === currentQuestion.id - 1);
    if (!goBackID) history.goBack();

    setCurrentQuestion(goBackID);
  };

  const handleData = data => {
    setStack({
      ...stack,
      ...data
    });
  };

  const handleSend = () => {
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
    const date = new Date();
    db.collection("questionaire").add({
      ...stack,
      userid: user.uid,
      created: date
    });
    db.collection("anonymousattributes")
      .where("userid", "==", user.uid)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.update({
            updated: date
          });
        });

        if (querySnapshot.empty === true) {
          db.collection("anonymousattributes").add({
            userid: user.uid,
            updated: date
          });
        }
      });

    user.updateProfile({
      lastUpdate: date
    });
    setIsSend(true);
    window.dispatchEvent(new CustomEvent("fightcovid.diary.activate"));
  };

  const progress =
    currentQuestion !== null && typeof currentQuestion !== "undefined"
      ? Math.floor((currentQuestion.id / questions.length) * 100)
      : 0;

  return (
    <Layout>
      <Disclaimer />
      {!isEnded && <ProgressBar value={isEnded ? 100 : progress} />}
      {currentQuestion && (
        <Question
          content={currentQuestion}
          goTo={handleGoTo}
          goBack={handleGoBack}
          setData={handleData}
          predefinedValue={stack[currentQuestion.key]}
        />
      )}
      {isEnded && !isSend && (
        <>
          <ListContent
            big
            headline="Fast geschafft"
            content="Ergebnis Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea."
          />
          <Left>
            <CTA variant="contained" color="secondary" onClick={handleSend}>
              Symptome senden
            </CTA>
          </Left>
        </>
      )}
      {isEnded && isSend && (
        <>
          <ListContent
            big
            headline="Danke für deine Unterstützung!"
            content="Doch damit ist der Kampf gegen den Virus leider noch nicht vorbei."
          />
          <ListContent content="Damit wir mehr über den Krankheits-verlauf lernen und eine Heilung finden können, brauchen wir deine Hilfe." />
          <ListContent
            headline="Du hast das Symptom-Tagebuch freigeschaltet."
            icon="book"
            content="Wenn du uns sagst, wie sich deine Symptome verändern, hilfst du uns, das Virus besser zu verstehen und Gegenmaßnahmen zu entwickeln."
          />
        </>
      )}
    </Layout>
  );
}

export default Questionaire;
