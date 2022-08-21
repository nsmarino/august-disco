import dynamic from 'next/dynamic'
import GameDB from '@/helpers/gameDb'
import { startupGameFlowState, advanceGameFlowState, refreshBranches } from "articy-js"

// DOM imports:
import DialogueView from '@/components/dom/DialogueView/DialogueView'
import InfoView from '@/components/dom/InfoView/InfoView'

// Canvas imports:
const SceneView = dynamic(() => import('@/components/canvas/SceneView/SceneView'), {
  ssr: false,
})
// Example Static Import:
// import Shader from '@/components/canvas/Shader/Shader'
// Example Dynamic Import
// const DialogueTrigger = dynamic(() => import('@/components/canvas/DialogueTrigger'), {
//   ssr: false,
// })

// TEST DATA
const gameState = {
  interactives: [
    {
      scene: {
        model: {},
        tooltips: [
          {
            text: "Tooltip",
            skill: "Logic",
            threshold: 1
          },
        ]
      },
      dialogue: {
        feed: [
          {
            speaker: "Speaker",
            text: "Text"
          },
        ],
        options: [
          {
            text: "Option Text"
          },
        ]
      }
    }
  ],
  player: {
    status: {
      health: 5,
      morale: 5,
      experience: 0,
    },
    skills: [
      {
        name: "Logic",
        attribute: "Intellect",
        baseValue: 2,
        bonusesFromItems: 0
      },
      {
        name: "Volition",
        attribute: "Psyche",
        baseValue: 2,
        bonusesFromItems: 0
      },
      {
        name: "Endurance",
        attribute: "Physique",
        baseValue: 2,
        bonusesFromItems: 0
      },
      {
        name: "Hand/Eye Coordination",
        attribute: "Motorics",
        baseValue: 2,
        bonusesFromItems: 0
      },
    ],
    inventory: [
      {
        name: "Hat",
        description: "Hat worn on the head",
        slot: "Head",
        effects: [
          {
            skill: "Logic",
            value: 2,
          },
          {
            skill: "Endurance",
            value: -2,
          },
        ],
        equipped: true,
      },
      {
        name: "Helmet",
        description: "Hat worn on the head",
        slot: "Head",
        effects: [
          {
            skill: "Volition",
            value: 2,
          }
        ],
        equipped: false,
      },
    ],
  }
}


// ARTICY CONNECTION
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
      <DialogueView />
      <InfoView />
    </>
  )
}

// canvas components goes here
// It will receive SAME PROPS as Page component (from getStaticProps, etc.)
Page.r3f = (props) => (
  <>
    <SceneView />
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
