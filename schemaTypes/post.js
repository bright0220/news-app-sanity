import {defineField, defineType} from 'sanity'
import {BookIcon} from '@sanity/icons'
import categoryType from './category'

export default defineType({
  name: 'post',
  title: 'Post',
  icon: BookIcon,
  type: 'document',
  initialValue: () => ({
    orderRank: Date.now().toString(),
  }),
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'customSlug',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: categoryType.name},
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'content',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string',
      hidden: true,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      date: 'datetime',
    },
    prepare({title, category}) {
      return {title, subtitle: `${category}`}
    },
  },
})
