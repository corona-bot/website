import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  font-size: 1.75rem;
  align-self: center;
  margin-bottom: 9px;
`;

const Text = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: normal;
  font-size: 1rem;
  align-self: center;
  text-align: center;
  line-height: 1.5;
  margin: 0;
`;

function Introduction() {
  const { t } = useTranslation();

  return (
    <Section>
      <H1>{t("introduction.headline")}</H1>
      <Text>{t("introduction.text")}</Text>
    </Section>
  );
}

export default Introduction;
