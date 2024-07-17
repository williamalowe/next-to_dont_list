import { getDonts } from "@/actions/action";
import Header from "@/components/header";
import Section from "@/components/section";
import dbConnect from "@/lib/db";

export default async function Home() {
  await dbConnect();
  const donts = await getDonts();
  console.log(donts);

  return (
    <main className="pt-24 flex flex-col items-center">
      <Header />
      <div className="mt-8 flex flex-col gap-y-8">
        <Section header="Daily Don'ts" listItems={donts} />
        <Section header="Weekly Don'ts" listItems={donts} />
        <Section header="Monday" listItems={donts} />
        <Section header="Tuesday" listItems={donts} />
        <Section header="Wednesday" listItems={donts} />
        <Section header="Thursday" listItems={donts} />
        <Section header="Friday" listItems={donts} />
        <Section header="Saturday" listItems={donts} />
        <Section header="Sunday" listItems={donts} />
      </div>
    </main>
  );
}
