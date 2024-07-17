import { getDonts } from "@/actions/action";
import Header from "@/components/header";
import Section from "@/components/section";
import dbConnect from "@/lib/db";

export default async function Home() {
  await dbConnect();
  const donts = await getDonts();
  

  return (
    <main className="pt-24 flex flex-col items-center">
      <Header />
      <div className="mt-8 flex flex-col gap-y-8">
        <Section header="Daily Don'ts" listItems={donts.filter((task) => task.frequency === "daily")} frequency="daily" />
        <Section header="Weekly Don'ts" listItems={donts.filter((task) => task.frequency === "weekly")} frequency="weekly" />
        <Section header="Monday" listItems={donts.filter((task) => task.frequency === "monday")} frequency="monday" />
        <Section header="Tuesday" listItems={donts.filter((task) => task.frequency === "tuesday")} frequency="tuesday" />
        <Section header="Wednesday" listItems={donts.filter((task) => task.frequency === "wednesday")} frequency="wednesday" />
        <Section header="Thursday" listItems={donts.filter((task) => task.frequency === "thursday")} frequency="thursday" />
        <Section header="Friday" listItems={donts.filter((task) => task.frequency === "friday")} frequency="friday" />
        <Section header="Saturday" listItems={donts.filter((task) => task.frequency === "saturday")} frequency="saturday" />
        <Section header="Sunday" listItems={donts.filter((task) => task.frequency === "sunday")} frequency="sunday" />
      </div>
    </main>
  );
}
