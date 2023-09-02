import backgroundHead from "../../assets/background_head.png";
import { PlayerRank } from "../../data/interfaces/database.interface";

export default function PlayerRankHoder({
  uuid,
  pseudo,
  rank,
  points,
  team,
  quests,
}: PlayerRank) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "4px",
        padding: "4px",
        gap: "4px",
      }}
    >
      <img
        src={`https://crafatar.com/renders/head/${uuid}?size=500&default=MHF_Steve&overlay`}
        style={{
          height: "5rem",
          width: "5rem",
          backgroundImage: backgroundHead,
        }}
      />
      <p>
        <strong>Pseudo : </strong>
        {pseudo}
      </p>
      <p>
        <strong>Points : </strong>
        {points}
      </p>
      <p>
        <strong>Rank : </strong>
        {rank}
      </p>
      <p>
        <strong>Team Name : </strong>
        {team}
      </p>
      <p>
        <strong>Nbre Quêtes : </strong>
        {quests}
      </p>
    </div>
  );
}
