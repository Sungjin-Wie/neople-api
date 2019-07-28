import fetch from "node-fetch";
const qs = require('querystring');

const API_URL =`https://api.neople.co.kr/df/servers/cain/characters?wordType=full&apikey=7KyujUEOMpBOTIELdNlMypTX0d0D6wdb&characterName=`;

export const getCharacters = async ( name ) => {
  let URL = API_URL;
  URL += `${qs.escape(name)}`;
  const res = await fetch(URL);
  const json = await res.json();
  return json.rows;
};

const INFO_URL = `https://api.neople.co.kr/df/servers/cain/characters/`;

export const getInfo = async ( id ) => {
  let URL = `${INFO_URL}${id}/status?apikey=7KyujUEOMpBOTIELdNlMypTX0d0D6wdb`;
  const res = await fetch(URL);
  const json = await res.json();
  return json.status;
};
