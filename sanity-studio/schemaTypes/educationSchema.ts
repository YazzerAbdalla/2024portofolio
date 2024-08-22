export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      initialValue: '/assets/resume/page.svg',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'My experience',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'institution',
              title: 'Institution',
              type: 'string',
            },
            {
              name: 'degree',
              title: 'Degree',
              type: 'string',
            },
            {
              name: 'duration',
              title: 'Duration',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
