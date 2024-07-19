import { deleteDont } from "@/actions/action";
import { BsTrash } from "react-icons/bs";

export default function DeleteButton({ id }: {
  id: string,
}) {
  return (
    <button onClick={() => deleteDont(id)} className="absolute top-0 right-0 hover:scale-110 transition">
      <BsTrash />
    </button>
  )
}
