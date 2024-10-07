import {defineField, defineType} from 'sanity'
import {FolderIcon} from '@sanity/icons'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: FolderIcon,
  initialValue: () => ({
    orderRank: Date.now().toString(),
  }),
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'customSlug',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string',
      hidden: true,
    }),
  ],
})
