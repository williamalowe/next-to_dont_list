import { Waiting_for_the_Sunrise } from "next/font/google"

const waiting_for_the_sunrise = Waiting_for_the_Sunrise({
  subsets: ["latin"],
  weight: "400"
})

export default function Header() {
  return (
    <div className={`${waiting_for_the_sunrise.className} relative`}>
      <h1 className="font-extrabold text-center text-8xl">To <span className="line-through">Do</span> List</h1>
      <h1 className="font-extrabold absolute text-center text-6xl -top-12 left-[25%] rotate-12 underline">Don&apos;t</h1>
    </div>
  )
}
