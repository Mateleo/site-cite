import { Quest } from "../../data/interfaces/database.interface";

export default function QuestHolder({
  id,
  quest_name,
  quest_npc,
  description,
  city,
  reward,
}: Quest) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "10px",
        width: "95%",
        gap: "4px",
      }}
    >
      {/* <img
        src={`https://crafatar.com/renders/head/${uuid}?size=500&default=MHF_Steve&overlay`}
        style={{
          height: "5rem",
          width: "5rem",
          backgroundImage: backgroundHead,
        }}
      /> */}
      <p>
        <strong>Npc : </strong>
        {quest_npc}
      </p>
      <p>
        <strong>Nom : </strong>
        {quest_name}
      </p>
      <p>
        <strong>Objectif : </strong>
        {description}
      </p>
      <p>
        <strong>Ville : </strong>
        {city}
      </p>
      <p>
        <strong>Récompense : </strong>
        {reward}
      </p>
    </div>
  );
}
