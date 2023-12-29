import { useQuery } from "@tanstack/react-query";
import { getQuests } from "../../services/quests.service";
import { Quest } from "../../data/interfaces/database.interface";

export default function Quests() {
  const questsQuery = useQuery({
    queryKey: ["quests"],
    queryFn: () => getQuests(),
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: "60px",
        paddingRight: "60px",
      }}
    >
        {questsQuery.isLoading ? (
            <div>Loading ...</div>
        ) : questsQuery.isError ? (
        <div>{JSON.stringify(questsQuery.error)}</div>
      ) : (
        <div className="mt-5" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <table className="table table-striped">
            <thead className="thead-dark">
            <tr>
                <th scope="col">NPC</th>
                <th scope="col">Nom</th>
                <th scope="col">Objectif</th>
                <th scope="col">Condition</th>
                <th scope="col">Répétable</th>
                <th scope="col">Ville</th>
                <th scope="col">Récompense</th>
            </tr>
            </thead>
              <tbody>
              {questsQuery.data.map((quest: Quest) => (
                  <tr>
                      <th scope="row">{quest.quest_npc}</th>
                      <td>{quest.quest_name}</td>
                      <td>{quest.description}</td>
                      <td>???</td>
                      <td>{quest.repeatable}</td>
                      <td>{quest.city}</td>
                      <td>{quest.reward}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
