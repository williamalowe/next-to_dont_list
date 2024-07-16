export default function Header() {
  return (
    <div className="text-center flex gap-x-24 text-4xl">
      <h1>To</h1>
      <div className="relative">
        <h1 className="absolute line-through">Do</h1>
        <h1 className="absolute ">Don&apos;t</h1>
      </div>
      <h1>List</h1>
    </div>
  )
}
