import Interactive from "./Interactive";

export default function SceneView({ interactives }) {

  return (
    <>
      {interactives.map(interactive => 
        <Interactive 
          interactive={interactive} 
        />
      )}
    </>
  )
}