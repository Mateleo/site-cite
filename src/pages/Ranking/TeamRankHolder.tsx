import backgroundHead from "../../assets/background_head.png";
import { TeamRank } from "../../data/interfaces/database.interface";

export default function PlayerRankHoder({
  id,
  name,
  rank,
  points,
  bonus,
  item,
  players,
}: TeamRank) {
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
      {/* <img
        src={`https://crafatar.com/renders/head/${uuid}?size=500&default=MHF_Steve&overlay`}
        style={{
          height: "5rem",
          width: "5rem",
          backgroundImage: backgroundHead,
        }}
      /> */}
      <p>
        <strong>Name : </strong>
        {name}
      </p>
      <p>
        <strong>Rank : </strong>
        {rank}
      </p>
      <p>
        <strong>Réputation : </strong>
        {points}
      </p>
      <p>
        <strong>Bonus : </strong>
        {bonus}
      </p>
    </div>
  );
}
