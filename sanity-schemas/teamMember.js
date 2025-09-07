export default {
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Player Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'realName',
      title: 'Real Name',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'game',
      title: 'Game',
      type: 'string',
      options: {
        list: [
          {title: 'Valorant', value: 'Valorant'},
          {title: 'Apex Legends', value: 'Apex Legends'},
          {title: 'League of Legends', value: 'League of Legends'},
          {title: 'Counter-Strike 2', value: 'Counter-Strike 2'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 4
    },
    {
      name: 'image',
      title: 'Player Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'stats',
      title: 'Player Statistics',
      type: 'object',
      fields: [
        {name: 'winRate', title: 'Win Rate', type: 'string'},
        {name: 'kd', title: 'K/D Ratio', type: 'string'},
        {name: 'tournaments', title: 'Tournaments', type: 'string'},
        {name: 'damage', title: 'Average Damage', type: 'string'},
        {name: 'kda', title: 'KDA', type: 'string'}
      ]
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
      name: 'featured',
      title: 'Featured Player',
      type: 'boolean',
      initialValue: false
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
      subtitle: 'game',
      media: 'image'
    }
  }
}