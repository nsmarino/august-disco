import dynamic from 'next/dynamic'
import GameDB from '@/helpers/gameDb'
import { startupGameFlowState, advanceGameFlowState, refreshBranches } from "articy-js"
// DOM imports:
import Drawer from '@/components/dom/Drawer'
import SkillScreen from '@/components/dom/SkillScreen'
import InventoryScreen from '@/components/dom/InventoryScreen'
import Footer from '@/components/dom/Footer'

/////////////////////
// CANVAS IMPORTS: //
/////////////////////

// STATIC IMPORT FOR ERROR CHECKING:
// import Shader from '@/components/canvas/Shader/Shader'
const DialogueTrigger = dynamic(() => import('@/components/canvas/DialogueTrigger'), {
  ssr: false,
})

const dialogue={
  test: "Hello world"
}
const skills={}
const itemBonuses={}
const attributes={}
const inventory={}
const health=5
const morale=5

// First, we need to create a configuration to tell the runtime what nodes to 'stop' at. In most simple games, this'll be just DialogueFragment nodes.
const iterationConfig = { 
    stopAtTypes: ["DialogueFragment"]
};

// Use startupGameFlowState to create a new flow state beginning at the given node
const [initialState, initialNode] = startupGameFlowState(GameDB, "0x0100000000000153", iterationConfig);

// Access information about the current state
console.log("Current node", initialState, initialNode);
// Move down the first (0th) branch
const [nextState] = advanceGameFlowState(GameDB, initialState, iterationConfig, 0);
console.log(nextState)
// Refresh the branch set
const stateWithRefreshedBranches = refreshBranches(GameDB, nextState, iterationConfig);
console.log(stateWithRefreshedBranches)
// dom components goes here
const Page = (props) => {

  return (
    <>
      <Drawer
        dialogue={dialogue}
      />
      <SkillScreen 
        skills={skills} 
      />
      <InventoryScreen
        itemBonuses={itemBonuses}
        attributes={attributes}
        inventory={inventory}
      />      
      <Footer 
        health={health}
        morale={morale}
      />
    </>
  )
}

// canvas components goes here
// It will receive SAME PROPS as Page component (from getStaticProps, etc.)
Page.r3f = (props) => (
  <>
    <DialogueTrigger />
  </>
)

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Disco Clone',
    },
  }
}
