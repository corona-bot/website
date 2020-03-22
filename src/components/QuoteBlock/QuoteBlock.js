import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.blockquote`
  font-family: "Source Sans Pro", sans-serif;
  background: linear-gradient(#5e02cb 0%, #027ecb 100%);
  border-radius: 4px;
  padding: 1rem;
  max-width: 30rem;
`;

const Text = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.25;
  margin: 0;
  color: #fff;
`;

const Cite = styled.cite`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.875rem;
  line-height: 1.125;
  font-weight: normal;
  margin: 0;
  font-style: normal;
`;

function QuoteBlock({ image, quote, person }) {
  return (
    <Wrapper>
      <image src={image} width="5rem" height="5rem" />
      <Text>{quote}</Text>
      <Cite>{person}</Cite>
    </Wrapper>
  );
}

QuoteBlock.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired
};

export default QuoteBlock;
