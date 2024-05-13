import { Country, useCountryQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";

export default function ShowCountry({id, code, name, emoji}: Country) {

  const router = useRouter();

  const { data, loading, error } = useCountryQuery({
    variables: {
       code: router.query.code?.toString()
    },
  });
  
  console.log(data);

  // Pas du tout optimisé j'ai pas du tout fini

  return (
    <>
      {/* <Link href={`/country/${name}`} className="flex flex-col flex-nowrap p-4 rounded-md border border-gray-300 space-y-4 font-semibold text-center"> */}
        <p>{data?.country.id}</p>
        <p>{data?.country.name}</p>
        <p>{data?.country.code}</p>
        <p>{data?.country.emoji}</p>
      {/* </Link> */}
      oui
    </>
  );
}