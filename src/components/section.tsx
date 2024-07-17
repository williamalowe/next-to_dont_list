export default function Section({ header, listItems }: {
  header: string,
  listItems: any
}) {
  return (
    <section className="w-full flex flex-col items-left">
      <h3 className="text-6xl font-bold">{header}</h3>
      <ul className="mt-4 flex flex-col gap-y-2">
        {listItems.map((dont) => 
        <li key={dont._id} className="ml-6 list-disc">
          <p className="text-4xl p-2 bg-orange-300 rounded-full">{dont.dont} <span className={`${dont.score < 0 ? 'text-red-600' : dont.score > 0 ? 'text-green-600' : 'text-black/50'} font-bold ml-auto`}>{dont.score}</span></p>
        </li>
      )}
      </ul>

    </section>
  )
}
