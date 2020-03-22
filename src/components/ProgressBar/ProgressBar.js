import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Label = styled.span`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.875rem;
  line-height: 1.125;
  margin-bottom: 0.3125rem;
`;

const Prog = styled.div`
  display: block;
  width: 100%;
  height: 4px;
  background: rgba(94, 0, 203, 0.1);

  span {
    display: block;
    background: rgba(94, 0, 203, 1);
    width: ${({ value }) => `${value}%`};
    height: 100%;
  }
`;
function ProgressBar({ value }) {
  const { t } = useTranslation();
  return (
    <>
      <Label>{t("progress")}</Label>
      <Prog max="10" value={value}>
        <span />
      </Prog>
    </>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired
};

export default ProgressBar;
