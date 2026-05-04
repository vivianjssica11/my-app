export default function Users() {
  return (
    <section className="h-screen bg-gray-200 flex gap-4 pt-40 justify-center">
    <div className="bg-white p-8 h-120 w-90 rounded-4xl flex-col justify-between text-black">
      <div className="flex gap-30 pb-5">
        <p className="font-bold">Client Details</p>
        <img src="/x.svg" alt="Client"/>
      </div>


      <div className="flex gap-4 justify-between">
        <img src="profil.jpg" alt="Profil" className="profile-img" style={{ width: '30px', height: '30px', borderRadius: '50%' }}/>
         <h2 className="text-2xl font-bold pb-1">Cornelius Greenfelder</h2> 
      </div>
      <div className="gap-2 justify-between">
            <img src="medal-2.svg" alt="medal" className="bg-green-300 rounded-4xl"/>
            <p className="font-bold bg-green-300 rounded-4xl">Verified</p>
      </div>

       <div className="bg-blue-200 rounded-3xl flex-col p-5 gap-8 pt-5">
        <h2 className="font-bold">Projects</h2>
            <div className="flex gap-2">
                <img src="hourglass.svg" alt="hourglass" />
                <p className="font-light">Ongoing</p>
            </div>
            <div className="flex gap-2">
                <p className="font-bold">2</p>
                <p className="font-light">($3.8K)</p>
            </div>
      </div>

      <div className="flex justify-between pt-5">
            <p className="font-bold">Location</p>
            <p>United States, New York</p>
      </div>
      <div className="flex justify-between pt-3">
            <p className="font-bold">With Us</p>
            <p>6 Jan 2024</p>
      </div>

      <div className="flex pt-7">
        <img src="dots-vertical.svg" alt="" />
      </div>

      <div className="flexgap-4 justify-between">
         <img src="mail.svg" alt="" />
         <p>Message</p>
      </div>
    </div>
  </section>
  );
}