import {defineField, defineType} from 'sanity'

export const education = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'localizedString',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'localizedString',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'school',
      title: 'School',
      type: 'localizedString',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'period',
      title: 'Period',
      type: 'localizedString',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'accent',
      title: 'Use Accent Color',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'bullets',
      title: 'Bullet Points',
      type: 'array',
      of: [{type: 'localizedText'}],
    }),
  ],
  preview: {
    select: {
      title: 'degree.en',
      subtitle: 'school.en',
    },
  },
})
