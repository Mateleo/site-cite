import axios from "axios";

export function getPlayersRanking() {
  return axios
    .get("http://localhost:3000/api/ranking/players")
    .then((res) => res.data);
}

export function getTeamsRanking() {
  return axios
    .get("http://localhost:3000/api/ranking/teams")
    .then((res) => res.data);
}

// https://minecraft-api.com/api/uuid/{pseudo}/json
