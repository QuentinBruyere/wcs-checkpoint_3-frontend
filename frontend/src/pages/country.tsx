import { useCountryQuery } from "@/graphql/generated/schema";
import { useSearchParams } from 'next/navigation'

  export default function ShowCountry() {

  const searchParams = useSearchParams();

  const codeSearch = searchParams.get('code') ?? "error";
  // J'ai pas trouvé solution vraiment adaptée, il me mettait toujours une erreur "peut être null" quoique je fasse comme verif

  const { data } = useCountryQuery({
    variables: {
      code: codeSearch
    },
    fetchPolicy: "no-cache",
  });

  return (
    <main className="flex flex-col justify-center items-center p-4 space-y-4 font-semibold">
        <p className="my-12">{data?.country.emoji}</p>
        <p>Name : {data?.country.name} ({data?.country.code})</p>
        <p>Continent : {data?.country.code}</p>
    </main>
  );
}