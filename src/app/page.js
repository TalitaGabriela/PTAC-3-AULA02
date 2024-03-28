const url = "https://back-end-ifms-two.vercel.app/campi";

export default async function Home() {

  const resposta = await fetch(url,{
    next: {
      revalidate: 1
    },
    method: "GET",
    headers:{'Content-Type':'apliccation/json'}
  });

  const campi = await resposta.json();
 
  return (
    <main>
      <h1>Home</h1>
      {campi.map((campus) =>
        <div>
             <p>{campus.nome_campus}</p>
        </div>
      )}
    </main>
  )
}