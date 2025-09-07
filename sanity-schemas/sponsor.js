export default {
  name: 'sponsor',
  title: 'Sponsors',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Sponsor Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'tier',
      title: 'Sponsorship Tier',
      type: 'string',
      options: {
        list: [
          {title: 'Platinum', value: 'Platinum'},
          {title: 'Gold', value: 'Gold'},
          {title: 'Silver', value: 'Silver'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tier',
      media: 'logo'
    }
  }
}