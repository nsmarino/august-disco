export default function Drawer({ dialogue }) {
  return (
    <div>
      <div>Portrait</div>
      <div>
        <p>Skill Check Card</p>
        <p>Name of Skill: Skill Value</p>
        <p>Relative Difficulty</p>
        <p>Probability</p>
        <p>White or Red</p>
        <div>Roll that always loses</div>
        <div>Roll that always wins</div>
      </div>
      <div>
        {/* Contents of dialogue drawer */}
        <p>Non-Player Statement</p>
        <p>Player Statement</p>
        <p>Announcement</p>
        <button>Continue</button>

        <div>
          <p>Player Option List</p>
        <ol>
          <li>Option</li>
          <li>Skill Check</li>
          <li>Terminal Option</li>
        </ol>            
        </div>


        
      </div>
    </div>
  )
}