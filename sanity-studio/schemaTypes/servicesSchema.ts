export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'num',
      title: 'Number',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'href',
      title: 'href',
      type: 'string',
    },
  ],
}
