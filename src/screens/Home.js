import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Introduction from "../components/Introduction/Introduction";
import Video from "../components/Video/Video";
import ListContent from "../components/ListContent/ListContent";
import PartnerSlides from "../components/Partners/PartnerSlides";
import { Link } from "react-router-dom";

const CTA = styled(Button)`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;
  align-self: center;
  justify-self: center;
  padding: 1rem 2rem 1rem 3rem;
  text-transform: none;
  box-shadow: none;

  &:before {
    content: "\f303";
    font-family: FontAwesome;
    width: 3rem;
    margin-left: -2rem;
  }
`;

const Left = styled.div`
  align-items: flex-start;
`;

function Home() {
  return (
    <Layout>
      <Introduction />
      <Video />
      <Link to="/questionaire">
        <CTA variant="contained" color="secondary">
          Loslegen und unterstützen
        </CTA>
      </Link>
      <ListContent
        headline="Warum brauchen wir deine Hilfe?"
        items={[
          "<strong>Die Covid-19 ist eine Pandemie,</strong> die sich weltweit rasch ausbreitet",
          "Das Virus verbreitet sich über <strong>soziale Kontakte</strong>",
          "Das macht <strong>jeden verantwortlich</strong> für sich und für andere"
        ]}
      />
      <ListContent
        headline="Wie kannst du helfen?"
        items={[
          "<strong>Bleib zu Hause</strong> und bekämpfe dadurch das Coronavirus",
          "<strong>Fülle den Fragebogen aus</strong> &ndash; das Ergebnis empfiehlt die die nötigen Schritte",
          "<strong>Teile diese Seite</strong> und zeige, dass du ein Kämpfer bist"
        ]}
      />
      <Left>
        <Link to="/questionaire">
          <CTA variant="contained" color="secondary">
            Zum Fragebogen
          </CTA>
        </Link>
      </Left>
      <PartnerSlides />
    </Layout>
  );
}

export default Home;
