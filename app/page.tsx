import Image from "next/image";
 
interface Item {
  name: string;
  address: string;
}
 
export default async function Home() {
const response = await fetch('http://localhost:3000/api/client');
  
const json = await response.json()
 
console.log(json)
 
 
return(
  <main>
      {
        json.map((item: Item) => {
          return (
            <>
              <div className="border bg-gray-300 my-3 p-2 flex justify-center">
                <div className="uppercase flex-1">{item.name}</div>
                <div className="flex-1 italic">{item.address}</div>
              </div>
            </>
          )
        })
      }
  </main>
  );
}