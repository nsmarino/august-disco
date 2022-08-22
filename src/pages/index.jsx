import dynamic from 'next/dynamic'
import gameState from '@/helpers/gameState'
import { useState } from 'react'

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

// dom components goes here
const Page = ({ gameState }) => {
  return (
    <>
      <DialogueView gameState={gameState} />
      <InfoView player={gameState.player} />
    </>
  )
}

// canvas components goes here
// It will receive SAME PROPS as Page component (from getStaticProps, etc.)
Page.r3f = ({ gameState }) => {

  return (
  <>
    <SceneView
      interactives={gameState.interactives}
    />
  </>
)}

export default Page

export async function getStaticProps() {
  return {
    props: {
      gameState: gameState
    },
  }
}
