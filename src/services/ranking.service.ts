import axios from "axios";

export function getPlayersRanking() {
  return axios
    .get("https://apilacitedelapave.4esport.fr/api/ranking/players")
    .then((res) => res.data);
}

export function getTeamsRanking() {
  return axios
    .get("https://apilacitedelapave.4esport.fr/api/ranking/teams")
    .then((res) => res.data);
}

// https://minecraft-api.com/api/uuid/{pseudo}/json
