import { addDont } from "@/actions/action";

export default function NewTaskForm({ frequency, closeDrawer }: {
  frequency: string,
  closeDrawer: () => void,
}) {
  return (
    <form action={addDont} onSubmit={closeDrawer} className="w-full flex items-center justify-center gap-x-2">
      <input type="text" name="task" required className="flex-1 border border-black text-xl rounded-full px-2"/>
      <input type="text" name="frequency" value={frequency} readOnly className="hidden"/>
      <button type="submit" className="text-xl hover:font-bold">Submit</button>
    </form>
  )
}
