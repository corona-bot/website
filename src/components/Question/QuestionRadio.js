import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { useTranslation } from "react-i18next";

export default function QuestionRadio({ setValue, setData, content, value }) {
  const { t } = useTranslation();
  const handleChoiceChange = event => {
    const element = content.options.find(o => o.text === event.target.value);
    setValue(element);
    setData({ [content.key]: element.text });
  };

  return (
    <FormControl variant="filled">
      <RadioGroup
        aria-label={t(`question.${content.id}.headline`)}
        name={content.key}
        value={value.text}
        onChange={handleChoiceChange}
      >
        {content.options.map(item => (
          <FormControlLabel
            key={item.text}
            value={item.text}
            control={<Radio />}
            label={t(`question.${content.id}.options.${item.text}`)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
