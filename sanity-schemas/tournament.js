export default {
  name: 'tournament',
  title: 'Tournaments',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tournament Name',
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
      name: 'date',
      title: 'Start Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime'
    },
    {
      name: 'prizePool',
      title: 'Prize Pool',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'format',
      title: 'Tournament Format',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Upcoming', value: 'upcoming'},
          {title: 'Live', value: 'live'},
          {title: 'Completed', value: 'completed'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'participants',
      title: 'Current Participants',
      type: 'number'
    },
    {
      name: 'maxParticipants',
      title: 'Maximum Participants',
      type: 'number'
    },
    {
      name: 'winner',
      title: 'Winner',
      type: 'object',
      fields: [
        {name: 'name', title: 'Team Name', type: 'string'},
        {name: 'logo', title: 'Team Logo', type: 'string'}
      ]
    },
    {
      name: 'runnerUp',
      title: 'Runner Up',
      type: 'object',
      fields: [
        {name: 'name', title: 'Team Name', type: 'string'},
        {name: 'logo', title: 'Team Logo', type: 'string'}
      ]
    },
    {
      name: 'finalScore',
      title: 'Final Score',
      type: 'string'
    },
    {
      name: 'mvp',
      title: 'MVP',
      type: 'string'
    },
    {
      name: 'highlights',
      title: 'Match Highlights',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'viewership',
      title: 'Peak Viewership',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Tournament Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'game',
      media: 'image'
    }
  }
}