import {defineField, defineType} from 'sanity'

export const award = defineType({
  name: 'award',
  title: 'Award',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      initialValue: '🏆',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'issuer',
      title: 'Issuer',
      type: 'localizedString',
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'year',
    },
  },
})
