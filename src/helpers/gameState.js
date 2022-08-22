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
            speaker: "Electrochemistry",
            color: "blue",
            text: "Well, hello. Someone seems to have found himself a bottle of *alcohol*. Here's where the *magic* happens.",
            threshold: 0
          },
          {
            speaker: "You",
            color: "white",
            text: "Look at the bottle.",
            threshold: 0,
          },
          {
            speaker: "Interfacing",
            color: "yellow",
            text: "Look at the bottle.",
            threshold: 1,
          },
        ],
        options: [
          {
            text: "Option Text",
            isSkillCheck: false,
            isEndDialogue: false,
          },
          {
            text: "Option Text",
            isSkillCheck: true,
            isEndDialogue: false,
            skillType: "Suggestion",
            threshold: 12,
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

export default gameState