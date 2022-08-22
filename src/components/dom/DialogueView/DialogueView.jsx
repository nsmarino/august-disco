import Feed from "./Feed";
import PlayerOptions from "./PlayerOptions";

export default function DialogueView({ }) {

  return (
    <section className="p-4 border-black border-2 bg-slate-100">
      <h1 className="font-bold">Dialogue View</h1>
      <Feed />
      <PlayerOptions />
    </section>
  )
}