import { SessionInput } from "@cuestion/ui";
import { NextSeo } from "next-seo";
import Particles from "react-particles-js";
import styled from "styled-components";

function Home() {
  const handler = id => console.log("event", id);

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
          images: [{ url: "https://cuestion.salmorejotech.com/static/img/cuestion-logo.png" }],
          site_name: "Cuestion - SalmorejoTech"
        }}
        twitter={{
          handle: "@aulasl",
          cardType: "summary_large_image"
        }}
      />
      <Body>
        <Logo src="/static/img/cuestion-logo.svg" />
        <SessionInput length={4} handleOnSubmit={handler} />
      </Body>
      <Background
        params={{
          particles: {
            number: {
              value: 50
            },
            size: {
              value: 3
            },
            color: {
              value: "#cccccc"
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#cccccc",
              opacity: 0.4,
              width: 1
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
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

const Background = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  height: 98vh;
  width: 100%;
`;

export default Home;
