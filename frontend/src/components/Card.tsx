import { Country } from "@/graphql/generated/schema";
import Link from "next/link";

export default function Card({code, name, emoji}: Partial<Country>) {
  return (
    <Link href={`/country/${code}`} className="flex flex-col flex-nowrap p-4 rounded-md border border-gray-300 space-y-4 font-semibold text-center">
      <p>{name}</p>
      <p>{emoji}</p>
    </Link>
  );
}
