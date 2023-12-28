import axios from "axios";

export function getQuests() {
  return axios
    .get("https://apilacitedelapave.4esport.fr/api/quests/list")
    .then((res) => res.data);
}
