import  { getDonts } from "@/actions/action";
import dbConnect from "@/lib/db";

export default async function Home() {
  await dbConnect();
  const donts = await getDonts();
  console.log(donts);

  return (
    <main className="">
      <h1>Hello World</h1>
    </main>
  );
}
