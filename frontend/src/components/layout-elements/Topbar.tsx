import Link from "next/link";

function Topbar() {
  return (
    <div className="bg-pink-600 text-center text-white py-5 space-y-4">
      <Link href="/">
        <h1 className="text-2xl font-bold hover:text-pink-500 xl:text-4xl">Checkpoint : frontend</h1>
      </Link>
      <h2 className="text-xl xl:text-2xl">Countries</h2>
    </div>
  );
}

export default Topbar;
