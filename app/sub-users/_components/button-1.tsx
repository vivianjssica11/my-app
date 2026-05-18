export default function ButtonFirst() {
  return (
    <button className="py-4 px-8 flex gap-2 bg-purple-600 text-white rounded-full w-full items-center justify-center font-bold">
      <div className="w-6 h-6 bg-white mask mask-[url('/mail.svg')] mask-no-repeat mask-center mask-contain"></div>
      <p>Message</p>
    </button>
  );
}