import { Country } from "@/graphql/generated/schema";
import Link from "next/link";

export default function Card({code, name, emoji}: Partial<Country>) {
  return (
    <Link 
      href={{
        pathname: '/country',
        query: { code },
      }}
      className="flex flex-col flex-nowrap p-4 rounded-md border border-gray-300 space-y-4 font-semibold text-center hover:bg-gray-100"
    >
      <p>{name}</p>
      <p>{emoji}</p>
    </Link>
  );
}
