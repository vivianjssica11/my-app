export default function Badge() {
  return (
    <div className="bg-green-200 py-1 px-2 rounded-full flex items-center gap-1">
      <img src={"/award.svg"} className="h-4 w-4" />
      <p className="text-sm">Verified</p>
    </div>
  );
}
