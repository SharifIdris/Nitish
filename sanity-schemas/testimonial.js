export default {
  name: 'testimonial',
  title: 'Testimonials',
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
      title: 'Role/Position',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'company',
      title: 'Company/Organization',
      type: 'string'
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().max(500)
    },
    {
      name: 'rating',
      title: 'Rating (1-5 stars)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5)
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Partnership', value: 'Partnership'},
          {title: 'Community', value: 'Community'},
          {title: 'Player Experience', value: 'Player Experience'},
          {title: 'Event Feedback', value: 'Event Feedback'}
        ]
      }
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required()
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