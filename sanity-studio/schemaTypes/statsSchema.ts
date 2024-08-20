export default {
  name: 'stats',
  title: 'Stats',
  type: 'document',
  fields: [
    {
      name: 'num',
      title: 'Number',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
