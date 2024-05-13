import { NewCountryInput, useAddCountryMutation } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function Form() {
  const router = useRouter();

  const [addCountryMutation, { data, loading, error }] = useAddCountryMutation({
    onCompleted() {
      router.push("/")
    }
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as unknown as NewCountryInput;
    if (data.name) {
      addCountryMutation({
        variables: {
          data: { 
            name: data.name,
            emoji: data.emoji,
            code: data.code
          }
        }
      });
    }
  }


  return (
    <form onSubmit={onSubmit} className="flex flex-col flex-nowrap p-4 rounded-md border border-gray-300 space-y-4 w-4/5 font-semibold md:w-1/2 xl:w-1/3">
      <div>
        <label className="block">Name</label>
        <input type="text" name="name" id="name" minLength={2} maxLength={50} autoComplete="off" required className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300"/>
      </div>
      <div>
        <label className="block">Emoji</label>
        <input type="text" name="emoji" id="emoji" maxLength={4} autoComplete="off" required className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300"/>
      </div>
      <div>
        <label className="block">Code</label>
        <input type="text" name="code" id="code" minLength={2} maxLength={3} autoComplete="off" required onChange={(e) => e.target.value = ("" + e.target.value).toUpperCase()} className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300"/>
      </div>
      <button type="submit" className="rounded-md bg-pink-600 p-3 text-white hover:bg-pink-500">Add</button>
    </form>
  );
}
