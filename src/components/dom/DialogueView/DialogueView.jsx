import Feed from "./Feed";
import PlayerOptions from "./PlayerOptions";

export default function DialogueView({ gameState }) {

  return (
    <section className="absolute top-24 bottom-24 right-24 w-[300px] p-4 border-black border-2 bg-slate-100">
      <h1 className="font-bold">Dialogue View</h1>
      <Feed feed={gameState.interactives[0].dialogues[0].feed} />
      <PlayerOptions options={gameState.interactives[0].dialogues[0].options} />
    </section>
  )
}