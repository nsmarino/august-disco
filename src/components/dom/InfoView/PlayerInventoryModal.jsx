import ModalTrigger from "./ModalTrigger";

export default function PlayerInventoryModal({ player }) {

  return (
    <div>
      <ModalTrigger trigger={"Player Inventory"} />
      <div>
        {player.inventory.map(item => 
          <div>
            <h2>{item.name} — {item.slot}</h2>
            <p>{item.description}</p>
            <ul>
             {/* {item.effects.map(effect=> <li>{effect.skill} — {effect.value}</li>)}    */}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}