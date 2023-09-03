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
          height: "4rem",
          width: "4rem",
          backgroundImage: backgroundHead,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0px",
          gap: "4px",
        }}
      >
        <p style={{ margin: "0px" }}>
          <strong>{pseudo} </strong>
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "4px",
          }}
        >
          <p style={{ margin: "0px" }}>
            <strong>Points : </strong>
            {points}
          </p>
          <p style={{ margin: "0px" }}>
            <strong>Team Name : </strong>
            {team}
          </p>
          <p style={{ margin: "0px" }}>
            <strong>Nbre Quêtes : </strong>
            {quests}
          </p>
        </div>
      </div>
    </div>
  );
}
