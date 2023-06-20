import EXERCISE_TYPES from "src/constants/EXERCISE_TYPES";
import EXERCISE_ELEMENTS_TYPES from "src/constants/EXERCISE_ELEMENTS_TYPES";

export default {
  // test parameters
  parameters: {},

  // screens
  screens: [
    {
      // screen exercises
      exercises: [
        {
          type: EXERCISE_TYPES.CLOSED_ANSWER,

          // exercise task
          task: [
            {
              type: EXERCISE_ELEMENTS_TYPES.TEXT,
              data: "<h4>First exercise</h4>",
              align: "left",
            },
            {
              type: EXERCISE_ELEMENTS_TYPES.TEXT,
              data: "<h6 class='text-grey text-weight-regular'>Choose an answer</h6>",
              align: "left",
            },
            {
              type: EXERCISE_ELEMENTS_TYPES.YOUTUBE_VIDEO,
              data: "https://www.youtube.com/embed/Bd3GC7mGjeA",
              align: "center",
            },
          ],

          // exercise content
          attributes: {
            answers: [
              {
                label: [
                  {
                    type: EXERCISE_ELEMENTS_TYPES.TEXT,
                    data: "Answer 1",
                    align: "center",
                  },
                ],
                isCorrect: true,
              },
              {
                label: [
                  {
                    type: EXERCISE_ELEMENTS_TYPES.IMAGE,
                    data: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
                    align: "center",
                  },
                  {
                    type: EXERCISE_ELEMENTS_TYPES.TEXT,
                    data: "Answer 2 (image above)",
                    align: "center",
                  },
                ],
                isCorrect: true,
              },
            ],
          },

          // exercise parameters
          parameters: {
            showCorrectAnswers: false,

            isMultipleChoice: true,
            answersLimits: {
              min: null,
              max: null,
            },
          },
        },
      ],
    },

    {
      // screen exercises
      exercises: [
        {
          type: EXERCISE_TYPES.CLOSED_ANSWER,

          // exercise task
          task: [
            { type: EXERCISE_ELEMENTS_TYPES.TEXT, data: "<h4>What's 2+2</h4>" },
          ],

          // exercise content
          attributes: {
            answers: [
              {
                label: [{ type: EXERCISE_ELEMENTS_TYPES.TEXT, data: "1" }],
                isCorrect: false,
              },
              {
                label: [{ type: EXERCISE_ELEMENTS_TYPES.TEXT, data: "2" }],
                isCorrect: false,
              },
              {
                label: [{ type: EXERCISE_ELEMENTS_TYPES.TEXT, data: "3" }],
                isCorrect: false,
              },
              {
                label: [{ type: EXERCISE_ELEMENTS_TYPES.TEXT, data: "4" }],
                isCorrect: true,
              },
            ],
          },

          // exercise parameters
          parameters: {
            showCorrectAnswers: false,

            isMultipleChoice: true,
            answersLimits: {
              min: null,
              max: null,
            },
          },
        },

        {
          type: EXERCISE_TYPES.OPEN_ANSWER,

          // exercise task
          task: [
            {
              type: EXERCISE_ELEMENTS_TYPES.TEXT,
              data: "<h4>How do you feel?</h4>",
            },
          ],

          // exercise content
          attributes: {
            placeholder: "Remember, that you're always happy",
            answers: [
              {
                label: [{ type: EXERCISE_ELEMENTS_TYPES.TEXT, data: "good" }],
                isCorrect: false,
              },
              {
                label: [{ type: EXERCISE_ELEMENTS_TYPES.TEXT, data: "bad" }],
                isCorrect: false,
              },
              {
                label: [{ type: EXERCISE_ELEMENTS_TYPES.TEXT, data: "happy" }],
                isCorrect: true,
              },
            ],
          },

          // exercise parameters
          parameters: {
            showCorrectAnswers: false,
            isTextarea: true,
          },
        },
      ],
    },
  ],
};
