export default function Feed({ feed }) {

  return (
    <div className="border-black border-2 p-2">
      {
        feed.map(i => <p><span className="uppercase">{i.speaker}</span> – {i.text}</p>)
      }
    </div>
  )
}