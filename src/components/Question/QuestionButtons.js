import React from "react";
import FormControl from "@material-ui/core/FormControl";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const WrapControl = styled(FormControl)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Button = styled.button`
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.875rem;
  font-weight: normal;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  box-shadow: none;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

const ActiveButton = styled(Button)`
  background-color: rgba(2, 126, 203, 0.2);
  border-color: rgba(2, 126, 203, 0.2);
`;

export default function QuestionButtons({ setValue, setData, content, value }) {
  const { t } = useTranslation();
  const handleChangeButton = val => {
    setValue(val);
    setData({ [content.key]: val.text });
  };

  return (
    <WrapControl variant="filled">
      {content.options.length > 0 &&
        content.options.map(item => {
          const Component = value.text === item.text ? ActiveButton : Button;
          return (
            <Component
              id={content.key}
              key={`${content.key}-${item.text}`}
              onClick={() => handleChangeButton(item)}
            >
              {t(`question.${content.id}.options.${item.text}`)}
            </Component>
          );
        })}
    </WrapControl>
  );
}
