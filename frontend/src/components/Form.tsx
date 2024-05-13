import Link from "next/link";

export default function Form() {
  return (
    <form className="flex flex-col flex-nowrap p-4 rounded-md border border-gray-300 space-y-4 w-4/5 font-semibold">
      {/* <div className="col-span-full">
        <label className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
        <div className="mt-2">
          <input type="text" name="street-address" id="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </input>
        </div>
      </div> */}
      <div>
        <label className="block">Name</label>
        <input type="text" name="name" id="name" required className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300"/>
      </div>
      <div>
        <label className="block">Emoji</label>
        <input type="text" name="name" id="name" required className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300"/>
      </div>
      <div>
        <label className="block">Code</label>
        <input type="text" name="name" id="name" required className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300"/>
      </div>
      <button type="submit" className="rounded-md bg-pink-600 p-3 text-white hover:bg-pink-500">Add</button>
    </form>
  );
}
