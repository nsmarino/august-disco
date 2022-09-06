import Feed from "./Feed";
import PlayerOptions from "./PlayerOptions";
import useStore from '@/helpers/store'

export default function DialogueView({ gameState }) {
  const togglePan = useStore((state) => state.togglePan)
  const pan = useStore((state) => state.pan)

  const entity = useStore((state)=> state.entity)
  console.log(entity)

  const handleClick = () => {
    togglePan()
  }
  return (
    <>
    {pan ||
    <section className="z-20 absolute top-24 bottom-24 right-24 w-[300px] p-4 border-black border-2 bg-slate-100">
      <h1 className="font-bold">{entity.Properties.DisplayName}</h1>
      <button class="border-2 p-4 font-bold" onClick={handleClick}>Click to close drawer</button>
      
      {/* <Feed feed={gameState.interactives[0].dialogues[0].feed} />
      <PlayerOptions options={gameState.interactives[0].dialogues[0].options} /> */}
    </section>    
    }
    </>
  )
}