import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import QuestionSelect from "./QuestionSelect";
import QuestionRadio from "./QuestionRadio";
import QuestionButtons from "./QuestionButtons";

const H3 = styled.h3`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Inner = styled.div`
  flex: 1;
`;

const Actions = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
`;

const ButtonBack = styled.button`
  background-color: #ffffff;
  border: 1px solid rgba(94, 0, 203, 1);
  border-radius: 0.25rem;
  padding: 1rem 2rem;
  color: rgba(94, 0, 203, 1);
  font-size: 1rem;
  font-family: "Source Sans Pro", sans-serif;
`;

const ButtonNext = styled(ButtonBack)`
  background-color: rgba(94, 0, 203, 1);
  color: #ffffff;
`;

function Question({ predefinedValue, content, goTo, setData, goBack }) {
  const { t } = useTranslation();
  const [value, setValue] = useState({ text: "" });

  useEffect(() => {
    if (content && predefinedValue) {
      const preValue = content.options.find(el => el.text === predefinedValue);
      setValue(preValue);
    } else {
      setValue({ text: "" });
    }
  }, [content, predefinedValue]);

  const handleNext = () => {
    goTo(value.next);
  };

  if (!content) return null;

  return (
    <Wrapper>
      <H3>{t(`question.${content.id}.headline`)}</H3>
      <Inner>
        {content.type === "CHOICE" && content.options.length >= 6 && (
          <QuestionButtons
            content={content}
            setData={setData}
            setValue={setValue}
            value={value}
          />
        )}
        {content.type === "CHOICE" &&
          content.options.length > 2 &&
          content.options.length < 6 && (
            <QuestionSelect
              content={content}
              setData={setData}
              setValue={setValue}
              value={value}
            />
          )}
        {content.type === "CHOICE" && content.options.length === 2 && (
          <QuestionRadio
            content={content}
            setData={setData}
            setValue={setValue}
            value={value}
          />
        )}
      </Inner>
      <Actions>
        <ButtonBack onClick={goBack}>zurück</ButtonBack>
        <ButtonNext onClick={handleNext}>weiter</ButtonNext>
      </Actions>
    </Wrapper>
  );
}

Question.propTypes = {};

export default Question;
