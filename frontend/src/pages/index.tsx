import { useCountriesQuery } from "@/graphql/generated/schema";
import Card from "@/components/Card";
import Form from "@/components/Form";

export default function Home() {

  const { data } = useCountriesQuery();
  // console.log({data});

  return (
    <main className="flex flex-col justify-center items-center p-4 space-y-12 xl:text-xl">
      <Form />
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-4">
        {data?.countries.map((b) => (
          <Card 
            key={b.id}
            code={b.code}
            name={b.name}
            emoji={b.emoji}
          />
        ))}
      </div>
    </main>
  );
}
