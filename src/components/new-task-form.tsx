import { addDont } from "@/actions/action";

export default function NewTaskForm({ frequency, closeDrawer }: {
  frequency: string,
  closeDrawer: () => void,
}) {
  return (
    <form action={addDont} onSubmit={closeDrawer} className="flex items-center gap-x-2">
      <input type="text" name="task" required className="border border-black text-xl"/>
      <input type="text" name="frequency" value={frequency} readOnly className="hidden"/>
      <button type="submit" className="text-xl hover:font-bold">Submit</button>
    </form>
  )
}
