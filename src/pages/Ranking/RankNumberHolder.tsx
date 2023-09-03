type RankNumberHolderProps = {
  rank: number;
  backgroundColor: string;
  borderColor: string;
};

export default function RankHoder({
  rank,
  backgroundColor,
  borderColor,
}: RankNumberHolderProps) {
  return (
    <div
      style={{
        height: "100px  ",
        aspectRatio: "1/1",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        border: "thick double",
        borderRadius: "50%",

        borderColor: borderColor,
        backgroundColor: backgroundColor,
      }}
    >
      <h1>{rank}</h1>
    </div>
  );
}
