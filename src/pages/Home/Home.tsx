export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>{import.meta.env.VITE_URL}</p>
    </div>
  )
}
