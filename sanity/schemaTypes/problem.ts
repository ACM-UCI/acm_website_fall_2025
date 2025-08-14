import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'problem',
  type: 'document',
  title: 'Problems',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Problem URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'difficulty',
      type: 'string',
      title: 'Difficulty',
      options: {
        list: [
          { title: 'Easy', value: 'easy' },
          { title: 'Medium', value: 'medium' },
          { title: 'Hard', value: 'hard' },
          { title: 'Contest', value: 'contest' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solution',
      type: 'file',
      title: 'Solution',
    }),
    defineField({
      name: 'percentagePassed',
      type: 'number',
      title: 'Percentage Passed on LeetCode',
      validation: (Rule) => Rule
        .min(0)
        .max(100)
        .precision(1)
        .required(),
    }),
    defineField({
      name: 'problemNumber',
      type: 'number',
      title: 'Problem Number'
    }),
  ],
})
