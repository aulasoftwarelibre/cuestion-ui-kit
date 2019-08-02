import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Session } from "../../domain/session/types";

interface Props {
  code?: string | string[];
}

const SessionPage: NextPage<Props> = ({ code }) => <main>Your code: {code}</main>;

SessionPage.getInitialProps = async ({ query, req }) => {
  const code = typeof query.code === "string" ? query.code : query.code.join("");

  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;

  const sessionContent = await axios.get(
    `${process.env.NEXT_PUBLIC_API_HOST}/sessions/${encodeURIComponent(code)}/code`
  );

  return { code };
};

export default SessionPage;
