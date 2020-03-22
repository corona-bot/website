import React from "react";
import styled from "styled-components";

const VideoWrapper = styled.section`
  width: 100%;
  height: 10rem;
  background: linear-gradient(#5e02cb 0%, #027ecb 100%);
  margin-top: 1.875rem;
  margin-bottom: 1.875rem;
`;

function Video() {
  return <VideoWrapper>VIDEO HERE</VideoWrapper>;
}

export default Video;
