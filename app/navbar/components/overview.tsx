export default function Overview() {
  return (
     <div className="flex items-center gap-4 rounded transition-all duration-300 hover:bg-white hover:text-black">
          <img src="/report.svg" alt="dashboard" className="w-6 h-6 invert"/>
          <p className="text-xl font-medium">Overview</p>
     </div>
  );
}