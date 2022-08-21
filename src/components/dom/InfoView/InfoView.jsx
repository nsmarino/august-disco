import PlayerInventoryModal from "./PlayerInventoryModal";
import PlayerSkillsModal from "./PlayerSkillsModal";
import PlayerStatus from "./PlayerStatus";

export default function InfoView({ }) {

  return (
    <section>
      <PlayerInventoryModal />
      <PlayerSkillsModal />
      <PlayerStatus />
    </section>
  )
}