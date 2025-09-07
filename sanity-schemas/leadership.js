export default {
  name: 'leadership',
  title: 'Leadership Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'achievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        {name: 'twitter', title: 'Twitter', type: 'url'},
        {name: 'instagram', title: 'Instagram', type: 'url'},
        {name: 'twitch', title: 'Twitch', type: 'url'}
      ]
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image'
    }
  }
}