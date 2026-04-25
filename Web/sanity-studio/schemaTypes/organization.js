import {defineField, defineType} from 'sanity'

export const organization = defineType({
  name: 'organization',
  title: 'Organization',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'localizedString',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'localizedString',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'localizedString',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'unit',
      title: 'Unit',
      type: 'localizedString',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'badgeStyle',
      title: 'Badge Style',
      type: 'string',
      description: 'Optional CSS, for example: background:var(--accent2)',
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
      title: 'role.en',
      subtitle: 'date.en',
    },
  },
})
