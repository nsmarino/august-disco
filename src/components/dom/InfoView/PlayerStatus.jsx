export default function PlayerStatus({ status }) {

  return (
    <div>
      <p>Health – {status.health}</p>
      <p>Morale – {status.morale}</p>
      <p>XP – {status.experience}</p>
    </div>
  )
}