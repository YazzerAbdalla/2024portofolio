export default {
  name: 'experience',
  title: 'Experience',
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
              name: 'company',
              title: 'Company',
              type: 'string',
            },
            {
              name: 'position',
              title: 'Position',
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
