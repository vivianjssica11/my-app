export default function Profile() {
  return (
     <div className="flex items-center gap-4 rounded transition-all duration-300 hover:bg-white hover:text-black">
          <img src="/profile.svg" alt="dashboard" className="w-6 h-6 invert"/>
          <p className="text-xl font-medium">Profile</p>
     </div>
  );
}