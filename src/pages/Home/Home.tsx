import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>{import.meta.env.VITE_URL}</p>
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=GOE0Ke-niXs&ab_channel=Chtwin"
          controls={false}
          width="800px"
          height="450px"
        />
      </div>
    </div>
  );
}
