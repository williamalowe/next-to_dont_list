"use client"
import { useEffect, useState } from "react"
import NewTaskDrawer from "./new-task-drawer"
import ScoreUpdate from "./score-update"
import DeleteButton from "./delete-button"

type Dont = {
  _id: string,
  task: string,
  frequency: string,
  score: number,
}

export default function Section({ header, frequency }: {
  header: string,
  frequency: string
}) {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api')
    .then((res) => res.json())
    .then((data) => {
      setData(data.filter((task: Dont) => task.frequency === frequency))
      setIsLoading(false)
    });
  }, [data])
    
  return (
    <section className="w-full flex flex-col items-left pl-12 pr-4">
      <h3 className="text-4xl sm:text-6xl font-bold">{header}</h3>
      <ul className="mt-4 flex flex-col gap-y-2">
        {data.map((dont: Dont) => 
        <li key={dont._id} className="ml-6 list-disc">
          <div className="relative flex items-center gap-x-4">
            <p className="text-xl sm:text-4xl px-4 bg-orange-300 rounded-full">{dont.task} <span className={`${dont.score < 0 ? 'text-red-600' : dont.score > 0 ? 'text-green-600' : 'text-black/50'} font-bold ml-auto`}>{dont.score}</span></p>
            <ScoreUpdate id={dont._id} score={dont.score}/>
            <DeleteButton id={dont._id}/>
          </div>
        </li>
      )}
      </ul>
      <NewTaskDrawer 
        frequency={frequency}
      />
    </section>
  )
}
