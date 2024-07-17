import { addDont } from "@/actions/action";

export default function NewTaskForm({ frequency }: {
  frequency: string
}) {
  return (
    <form action={addDont}>
      <input type="text" name="task" className="border border-black"/>
      <input type="text" name="frequency" value={frequency} readOnly className="hidden"/>
      <button type="submit">Submit</button>
    </form>
  )
}
