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
        <Section header="Daily Don'ts" frequency="daily" />
        <Section header="Weekly Don'ts" frequency="weekly" />
        <Section header="Monday" frequency="monday" />
        <Section header="Tuesday" frequency="tuesday" />
        <Section header="Wednesday" frequency="wednesday" />
        <Section header="Thursday" frequency="thursday" />
        <Section header="Friday" frequency="friday" />
        <Section header="Saturday" frequency="saturday" />
        <Section header="Sunday" frequency="sunday" />
      </div>
    </main>
  );
}
