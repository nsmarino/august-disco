import Feed from "./Feed";
import PlayerOptions from "./PlayerOptions";

export default function DialogueView({ }) {

  return (
    <section class="p-4 border-black border-2 bg-slate-100">
      <h1 class="font-bold">Dialogue View</h1>
      <Feed />
      <PlayerOptions />
    </section>
  )
}