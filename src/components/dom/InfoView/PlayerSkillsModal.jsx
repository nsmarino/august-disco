import ModalTrigger from "./ModalTrigger";

export default function PlayerSkillsModal({ player }) {

  return (
    <div>
      <ModalTrigger trigger="Skills" />
      <div>
        {/* {player.skills.map(skill=><p>{skill.name} – {skill.baseValue}</p>)} */}
      </div>
      
    </div>
  )
}