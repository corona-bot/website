import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useCookie from "react-use-cookie";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: linear-gradient(134deg, #5e02cb 0%, #027ecb 100%);
  padding: 2rem;

  h2 {
    font-size: 1.375rem;
    line-height: 1.75;
    color: #fff;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 900;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3125;
    color: #fff;
    font-family: "Source Sans Pro", sans-serif;

    &:nth-of-type(1) {
      font-weight: 700;
    }
  }
`;

const Scroller = styled.div`
  overflow: auto;
  height: 75vh;
  padding-right: 1rem;
  flex: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 0 0;
`;

const Decline = styled.span`
  a {
    color: #fff;
    font-family: "Source Sans Pro", sans-serif;
    text-decoration: underline;
    font-size: 0.875rem;
  }
`;

const Accept = styled.span`
  background: #fff;
  font-family: "Source Sans Pro", sans-serif;
  color: #5e00cb;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 0.25rem;
  padding: 1rem 2rem;
`;

function Disclaimer() {
  const { t } = useTranslation();
  const [accepted, setAccepted] = useCookie("accept_disclaimer", "false");

  if (accepted === "true") return null;

  return (
    <Wrapper>
      <h2>{t("disclaimer.headline")}</h2>
      <Scroller>
        <p>{t("disclaimer.important")}</p>
        <p>{t("disclaimer.text")}</p>
      </Scroller>
      <ButtonWrapper>
        <Decline>
          <Link to="/questionaire/declined">{t("disclaimer.decline")}</Link>
        </Decline>
        <Accept onClick={() => setAccepted("true")}>
          {t("disclaimer.accept")}
        </Accept>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Disclaimer;
