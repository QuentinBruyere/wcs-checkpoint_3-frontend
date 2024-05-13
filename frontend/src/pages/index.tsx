// import { LIST_COUNTRIES } from "@/requests/queries/countries.queries";
// import { BooksQuery, BooksQueryVariables } from "@/types/graphql";

import { CountriesQuery, CountriesQueryVariables, useCountriesQuery } from "@/graphql/generated/schema";
import { useQuery } from "@apollo/client";
import Card from "@/components/Card";
import Form from "@/components/Form";

export default function Home() {

  const { data } = useCountriesQuery();
  console.log({data});

  return (
    <main className="flex flex-col justify-center items-center p-4 space-y-12">
      <Form />
      {/* <div className="grid grid-cols-4 gap-4"> */}
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-4">
        {data?.countries.map((b) => (
          <Card 
            code={b.code}
            name={b.name}
            emoji={b.emoji}
          />
        ))}
      </div>
    </main>
  );
}
