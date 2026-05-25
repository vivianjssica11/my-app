import Overview from "./components/overview";
import Analytic from "./components/analytic";
import Dashboard from "./components/dashboard";
import Projects from "./components/projects";
import Groups from "./components/groups";
import Reports from "./components/reports";
import Profile from "./components/profile";
import Setting from "./components/setting";

export default function Users() {
  return (
    <div className="h-screen p-8 flex items-center justify-center">
      <div className="w-75 bg-blue-950 rounded-xl text-white p-8 flex flex-col gap-4">
        <div className="flex items-center justify-between font-bold">
          <h2 className="text-3xl">CodingLab</h2>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col justify-center items-start font-bold">
            <p className="text-lg">Main Menu</p>
          <Dashboard/> 
          </div>
        </div>
        <Overview/>
        <Analytic/>
        <div className="flex gap-4 mt-2">
          <div className="flex flex-col justify-center items-start font-bold">
            <p className="text-lg">General</p>
          </div>
        </div>
        <Projects/>
        <Groups/>
        <Reports/>
        <div className="flex gap-4 mt-2">
          <div className="flex flex-col justify-center items-start font-bold">
            <p className="text-lg">Account</p>
          </div>
        </div>
        <Profile/>
        <Setting/>
      </div>
    </div>
  );
}
