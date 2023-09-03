import RankNumberHolder from "./RankNumberHolder";

type RankHolderProps = {
  rank: number;
  children: React.ReactNode;
};

type RankColor = {
  background: string;
  border: string;
};

export default function RankHoder({ rank, children }: RankHolderProps) {
  const colorRank: RankColor = getColorByRank();

  function getColorByRank(): RankColor {
    // if (rank === 0)
    //   return {
    //     background: "#f06060",
    //     border: "#f06060",
    //   };
    if (rank === 1)
      return {
        background: "#DCD642",
        border: "#EBAA03",
      };
    if (rank === 2)
      return {
        background: "#DEDEDE",
        border: "#C1BFBD",
      };
    if (rank === 3)
      return {
        background: "#CEB77B",
        border: "#AB8C67",
      };
    return {
      background: "#A4D3FF",
      border: "#5F77C9",
    };
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",

        height: "100px",
        aspectRatio: "6/1",

        alignItems: "center",

        margin: "4px",
        padding: "4px",
      }}
    >
      <div style={{ position: "relative", right: "-7%" }}>
        <RankNumberHolder
          rank={rank}
          backgroundColor={colorRank.background}
          borderColor={colorRank.border}
        />
      </div>
      <div
        style={{
          height: "90%",
          width: "90%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          border: "thick solid",
          borderRadius: "30px",

          borderColor: colorRank.border,
          backgroundColor: colorRank.background,
        }}
      >
        {children}
      </div>
    </div>
  );
}
