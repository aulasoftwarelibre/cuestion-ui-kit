import { ErrorMessage, SessionInput } from "@cuestion/ui";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useDispatch, useSelector } from "react-redux";
import { Background } from "../components/Background";
import { State } from "../src/reducer";
import * as actions from "../src/session/actions";
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
              url:
                "https://cuestion.salmorejotech.com/static/img/cuestion-logo.png",
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
        <img className={classes.logo} src="/static/img/cuestion-logo.svg" />
        <SessionInput
          length={4}
          handleOnSubmit={(value: string) =>
            dispatch(actions.openSessionRequest({ value }))
          }
        />
      </div>
      <Background />
      <ErrorMessage error={session.error} errorMessage={session.errorMessage} />
    </>
  );
};

export default HomePage;
