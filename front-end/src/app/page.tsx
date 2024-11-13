export default async function Home() {
  const response = await fetch(`https://food-delivery-u1gp.onrender.com`);
  const data = await response.json();
  console.log("res", response);

  return <div> {data.right} </div>;
}
