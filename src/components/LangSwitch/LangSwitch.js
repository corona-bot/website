import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../config";

const LangList = styled.ul`
  display: inline;
  list-style: none;
  position: absolute;
  right: 2rem;
  top: 1rem;
`;

const LangItem = styled.li`
  display: inline;
  cursor: pointer;

  &:after {
    content: "|";
    display: inline-block;
    margin: 0 0.25rem;
  }

  &:last-child:after {
    display: none;
  }
`;

const LangItemActive = styled(LangItem)`
  font-weight: bold;
  text-decoration: underline;
`;

function LangSwitch() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <LangList>
        {Object.keys(LANGUAGES).map(lang => {
          const Component = lang === i18n.language ? LangItemActive : LangItem;

          return (
            <Component key={lang} onClick={() => changeLanguage(lang)}>
              {t(`languages.${lang}`)}
            </Component>
          );
        })}
      </LangList>
    </div>
  );
}

export default LangSwitch;
