import  { getDonts } from "@/actions/action";
import Header from "@/components/header";
import dbConnect from "@/lib/db";

export default async function Home() {
  await dbConnect();
  const donts = await getDonts();
  console.log(donts);

  return (
    <main className="pt-24 flex flex-col items-center">
      <Header />
    </main>
  );
}
