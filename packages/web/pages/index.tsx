import { ErrorMessage } from "@cuestion/ui";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useDispatch, useSelector } from "react-redux";

import { Background } from "../components/Background";
import BottomMenu from "../components/BottomMenu";
import { State } from "../src/reducer";
import { SessionState } from "../src/session/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      height: "98vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      maxWidth: "100%",
      width: "80%",
      height: "auto",
      marginBottom: "2rem",
    },
  }),
);

const HomePage: NextPage = () => {
  const session = useSelector<State, SessionState>(store => store.session);
  const dispatch = useDispatch();
  const classes = useStyles([]);

  return (
    <>
      <NextSeo
        title="SalmorejoTech 2019"
        description="Question platform for the SalmorejoTech conference. Send your question or vote the ones that you find most interesting and we will make them for you to the speakers."
        openGraph={{
          type: "website",
          locale: "es_ES",
          url: "https://agenda.salmorejotech.com",
          title: "Cuestion",
          description:
            "Question platform for the SalmorejoTech conference. Send your question or vote the ones that you find most interesting and we will make them for you to the speakers.",
          images: [
            {
              url: "https://agenda.salmorejotech.com/static/img/salmorejo.png",
            },
          ],
          site_name: "Cuestion - SalmorejoTech",
        }}
        twitter={{
          handle: "@aulasl",
          cardType: "summary_large_image",
        }}
      />
      <div className={classes.body}>
        <img
          style={{ color: "#ffffff" }}
          className={classes.logo}
          src="/static/img/salmorejotech-logo.svg"
        />
      </div>
      <Background />
      <BottomMenu value={null} />
      <ErrorMessage error={session.error} errorMessage={session.errorMessage} />
    </>
  );
};

export default HomePage;
