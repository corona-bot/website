import React from "react";
import QuoteBlock from "./QuoteBlock";
import doroImg from '../../img/doro.jpeg';

export default {
  title: "QuoteBlock",
  component: QuoteBlock
};

export const Default = () => (
  <QuoteBlock image={doroImg} person="Dorothee Bär, MdB" quote="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt." />
);
