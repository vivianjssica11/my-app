import ButtonFirst from "./_components/button-1";
import Card from "./_components/card";
import Badge from "./_components/badge";

export default function Users() {
  return (
    <div className="h-screen p-8">
      <div className="w-96 bg-gray-100 rounded-xl text-gray-800 p-8 flex flex-col gap-4">
        <div className="flex items-center justify-between font-bold">
          <h2 className="text-2xl">Client details</h2>
          <button>
            <img src="/x.svg" className="h-6 w-6" />
          </button>
        </div>
        <div className="flex gap-4 mt-4">
          <img
            src={"/img 1.jpg"}
            className="rounded-full w-12 h-12 bg-cover"
          />
          <div className="flex flex-col justify-center items-start font-bold">
            <p className="text-lg">Cornelius Greenfelder</p>
          <Badge/> 
          </div>
        </div>
        <Card />
        <div className="flex justify-between items-center">
          <p className="font-semibold">Location</p>
          <p className="text-gray-500">United States, New York</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">With Us</p>
          <p className="text-gray-500">6 Jan 2024</p>
        </div>
        <div className="flex gap-2">
          <button className="py-4 px-5 bg-white rounded-full">
            <img src={"/dots-vertical.svg"} />
          </button>
          <ButtonFirst />
        </div>
      </div>
    </div>
  );
}
