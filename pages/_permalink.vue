<template>
  <article class="px-6">
    <Post v-slot="{ post, author, error }" :permalink="$route.params.permalink">
      <div v-if="error.code">
        No post found
      </div>
      <div v-else class="mt-8 max-w-4xl w-full mx-auto">
        <h1 class="mt-2 text-4xl font-medium leading-7">{{ post.title }}</h1>
        <div class="mt-2">
          <span class="text-sm font-medium text-gray-700">{{ post.readingTime }}</span>
          <span>|</span>
          <time class="text-sm font-medium text-gray-700" :datetime="post.createdAt">
            {{ post.createdAt ? format(new Date(post.createdAt), 'MMM dd, yyyy') : '' }}
          </time>
        </div>
        <div class="mt-6">
          <nuxt-content :document="post" class="prose sm:prose" />
        </div>
        <div class="flex items-center mt-8 font-sans text-gray-700">
          <AuthorAvatar :author="author" />
          <span class="ml-3 font-medium">{{ author.name }}</span>
        </div>
      </div>
    </Post>
  </article>
</template>

<script>
import format from 'date-fns/format'
import AuthorAvatar from '@/components/author/AuthorAvatar'

export default {
  name: 'ViewPost',

  components: {
    AuthorAvatar,
  },

  methods: {
    format,
  },
}
</script>
