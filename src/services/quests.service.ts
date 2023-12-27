import axios from "axios";

export function getQuests() {
  return axios
    .get("http://localhost:3000/api/quests/list")
    .then((res) => res.data);
}
