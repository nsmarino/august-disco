import PlayerInventoryModal from "./PlayerInventoryModal";
import PlayerSkillsModal from "./PlayerSkillsModal";
import PlayerStatus from "./PlayerStatus";

export default function InfoView({ player }) {

  return (
    <section
      className='flex gap-12 absolute bottom-24 left-24 p-4 border-black border-2 right-[30%] z-10 bg-slate-100'
    >
      <PlayerInventoryModal player={player} />
      <PlayerSkillsModal player={player} />
      <PlayerStatus status={player.status} />
    </section>
  )
}