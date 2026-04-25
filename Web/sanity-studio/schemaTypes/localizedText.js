import {defineField, defineType} from 'sanity'

export const localizedText = defineType({
  name: 'localizedText',
  title: 'Localized Text',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'Indonesia',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 3,
    }),
  ],
})
