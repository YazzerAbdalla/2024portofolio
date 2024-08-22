import countExperienceYears from '../../functions/countExperienceYears'
export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      initialValue: 'About me',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'info',
      title: 'Info',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'fieldName',
              title: 'Field name',
              type: 'string',
              valdation: (Rule: any) => Rule.required(),
            },
            {
              name: 'fieldValue',
              title: 'Field value',
              type: 'string',
              valdation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}
