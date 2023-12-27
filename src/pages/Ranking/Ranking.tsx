import { useQuery } from "@tanstack/react-query";
import {
  getPlayersRanking,
  getTeamsRanking,
} from "../../services/ranking.service";
import PlayerRankHoder from "./PlayerRankHoder";
import RankHoder from "./RankHolder";
import { PlayerRank, TeamRank } from "../../data/interfaces/database.interface";
import TeamRankHolder from "./TeamRankHolder";

export default function Ranking() {
  const playerRankingQuery = useQuery({
    queryKey: ["ranking", "players"],
    queryFn: () => getPlayersRanking(),
  });

  const teamRankingQuery = useQuery({
    queryKey: ["ranking", "teams"],
    queryFn: () => getTeamsRanking(),
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Team Ranking</h1>
          {/* {teamRankingQuery.isLoading ? (
            <div>Loading ...</div>
          ) : teamRankingQuery.isError ? (
            <div>{JSON.stringify(teamRankingQuery.error)}</div>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {teamRankingQuery.data.map((team: TeamRank) => (
                <RankHoder rank={team.rank} key={team.id}>
                  <TeamRankHolder {...team} />
                </RankHoder>
              ))}
            </div>
          )} */}
          <p>Pas disponible actuellement</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Player Ranking</h1>
          {/* {playerRankingQuery.isLoading ? (
            <div>Loading ...</div>
          ) : playerRankingQuery.isError ? (
            <div>{JSON.stringify(playerRankingQuery.error)}</div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {playerRankingQuery.data.map((player: PlayerRank) => (
                <RankHoder rank={player.rank} key={player.uuid}>
                  <PlayerRankHoder {...player} />
                </RankHoder>
              ))}
            </div>
          )} */}
          <p>Pas disponible actuellement</p>
        </div>
      </div>
    </div>
  );
}
