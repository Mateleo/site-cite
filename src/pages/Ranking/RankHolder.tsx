type RankHolderProps = {
  rank: number;
  children: React.ReactNode;
};

export default function RankHoder({ rank, children }: RankHolderProps) {
  const backgroundColor: string = getBackgrounColor();

  function getBackgrounColor(): string {
    if (rank === 0) return "#f06060"; //Rank 0 is no points
    if (rank === 1) return "#f4fc03";
    if (rank === 2) return "#bcccc6";
    if (rank === 3) return "#c78336";
    return "#60d8f0";
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "4px",
        padding: "4px",
        gap: "4px",
        backgroundColor: backgroundColor,
      }}
    >
      <h1>{rank}</h1>
      {/* <img
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
      </p> */}
      {children}
    </div>
  );
}
