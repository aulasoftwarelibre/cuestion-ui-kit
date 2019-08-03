import { ErrorMessage, SessionInput } from "@cuestion/ui";
import { NextSeo } from "next-seo";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Background } from "../components/Background";
import { State } from "../src/reducer";
import * as actions from "../src/session/actions";
import { SessionState } from "../src/session/types";

function Home() {
  const session = useSelector<State, SessionState>(store => store.session);
  const dispatch = useDispatch();

  return (
    <>
      <NextSeo
        title="Cuestion"
        description="Question platform for the SalmorejoTech conference. Send your question or vote the ones that you find most interesting and we will make them for you to the speakers."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://cuestion.salmorejotech.com",
          title: "Cuestion",
          description:
            "Question platform for the SalmorejoTech conference. Send your question or vote the ones that you find most interesting and we will make them for you to the speakers.",
          images: [
            {
              url: "https://cuestion.salmorejotech.com/static/img/cuestion-logo.png"
            }
          ],
          site_name: "Cuestion - SalmorejoTech"
        }}
        twitter={{
          handle: "@aulasl",
          cardType: "summary_large_image"
        }}
      />
      <Body>
        <Logo src="/static/img/cuestion-logo.svg" />
        <SessionInput length={4} handleOnSubmit={(value: string) => dispatch(actions.openSessionRequest({ value }))} />
      </Body>
      <Background />
      <ErrorMessage error={session.error} errorMessage={session.errorMessage} />
    </>
  );
}

const Body = styled.div`
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 2rem;
`;

export default Home;
