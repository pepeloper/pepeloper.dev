<template>
  <article
    class="bg-white px-6 pt-6 xl:pt-12 pb-12 xl:pb-20 hover:bg-gray-100"
    :class="{ 'col-span-2': isLastPost && isOdd }"
  >
    <h2 class="mb-6 text-3xl font-bold leading-tight">
      <nuxt-link :to="`/${post.permalink}`">
        {{ post.title }}
      </nuxt-link>
    </h2>
    <div class="mb-6 text-gray-800">
      <p class="mb-4">{{ post.description }}</p>
    </div>
    <p>
      <nuxt-link :to="`/${post.permalink}`" class="font-mono text-green-600 font-medium">
        Read more »
      </nuxt-link>
    </p>
  </article>
</template>
<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export default {
  name: 'ArticleListItem',

  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
    totalPosts: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  computed: {
    date() {
      return typeof this.post.createdAt === 'string'
        ? parseISO(this.post.createdAt)
        : this.post.createdAt
    },

    postDate() {
      return format(this.date, 'MMM dd, yyyy')
    },

    dateTag() {
      return format(this.date, 'yyyy-MM-dd')
    },

    isLastPost() {
      return this.totalPosts - 1 === this.index
    },

    isOdd() {
      return this.totalPosts % 2 !== 0
    },
  },
}
</script>
