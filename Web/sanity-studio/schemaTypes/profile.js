import {defineField, defineType} from 'sanity'

export const profile = defineType({
  name: 'profile',
  title: 'Profile / Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status Text',
      type: 'localizedString',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localizedString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
    }),
    defineField({
      name: 'cvButton',
      title: 'CV Button Text',
      type: 'localizedString',
    }),
    defineField({
      name: 'contactButton',
      title: 'Contact Button Text',
      type: 'localizedString',
    }),
    defineField({
      name: 'photoAlt',
      title: 'Photo Alt Text',
      type: 'localizedString',
    }),
    defineField({
      name: 'photo',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'linkedinLabel',
      title: 'LinkedIn Label',
      type: 'string',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'metrics',
      title: 'Hero Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'localizedString',
            }),
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label.en',
            },
          },
        },
      ],
      validation: rule => rule.max(3),
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
    },
    prepare({firstName, lastName}) {
      return {
        title: `${firstName || ''} ${lastName || ''}`.trim() || 'Profile / Hero',
      }
    },
  },
})
