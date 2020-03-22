import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledSelect = styled(Select)`
  background-color: rgba(2, 126, 203, 0.2);
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  &:before {
    display: none;
  }

  &.Mui-focused {
    background-color: rgba(2, 126, 203, 0.2);
  }

  > div {
    padding-top: 1rem;

    &:focus {
      background-color: rgba(2, 126, 203, 0.2);
    }
  }
`;

export default function QuestionSelect({ setValue, setData, content, value }) {
  const { t } = useTranslation();
  const handleChoiceChange = event => {
    if (event.target.value.trim() === "") return;

    const element = content.options.find(o => o.text === event.target.value);
    setValue(element);
    setData({ [content.key]: element.text });
  };

  return (
    <FormControl variant="filled">
      <StyledSelect
        labelId={content.key}
        id={content.key}
        value={value.text}
        onChange={handleChoiceChange}
        displayEmpty
      >
        <MenuItem value="">bitte wählen</MenuItem>
        {content.options.map(item => (
          <MenuItem key={item.text} value={item.text}>
            {t(`question.${content.id}.options.${item.text}`)}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
}
