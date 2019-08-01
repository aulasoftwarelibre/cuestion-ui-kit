import axios from "axios";

const SEARCH_BY_CODE = (code: string): string => `${process.env.NEXT_PUBLIC_API_HOST}/sessions/${encodeURI(code)}/code`;

export const searchByCode = (code: string) => axios.get(SEARCH_BY_CODE(code));
