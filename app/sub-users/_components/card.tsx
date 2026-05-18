import DetailCard from "./detail-card";
export default function Card(){
    return(
      <div className="p-6 bg-blue-100 rounded-xl">
          <p className="font-bold">Projects</p>
          <div className="flex items-center gap-12">
            <DetailCard
              img="/hourglass.svg"
              title="Ongoing"
              qty={2}
              price={4.8}
            />
            <DetailCard
              img="/globe.svg"
              title="Completed"
              qty={3}
              price={5.3}
            />
          </div>
        </div>
    )
}