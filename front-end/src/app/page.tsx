export default async function Home() {
  const response = await fetch(`${process.env.BACKEND_POINT}`);
  const data = await response.json();
  console.log("res", response);

  return <div> {data.right} </div>;
}
