<template>
  <div>
    <div class="pt-16 pb-12 max-w-4xl mx-auto px-6">
      <div class="max-w-xl font-chivo">
        <h1 class="text-5xl font-medium flex items-center">
          <img
            class="w-24 h-24 rounded-lg mr-5 shadow"
            src="https://pbs.twimg.com/profile_images/1227003524145348608/wW3tAA0t_400x400.jpg"
          />
          👋 Hey, I'm Pepe!
        </h1>
        <h2 class="text-2xl leading-9 mt-8">
          Software developer at
          <a
            href="https://64robots.com"
            target="_blank"
            class="text-red-600 border-b-4 border-red-600 border-dotted pb-px font-bold"
          >
            64Robots 🤖
          </a>
          , I love to put my hands on
          <span class="text-gray-700 border-b-4 border-dotted border-gray-700 pb-px font-bold">
            side projects
          </span>
          and fun stuff, but not wrap them up.
        </h2>
      </div>
    </div>

    <div class="border-b border-gray-500 max-w-4xl mx-auto flex items-center justify-between pb-4">
      <h2 class="text-4xl px-6">Latest Posts</h2>
    </div>

    <PostList v-slot="{ posts }">
      <div class="bg-gray-500 py-px sm:py-0 grid sm:grid-cols-2 lg:grid-cols-2" style="gap: 1px;">
        <ArticleListItem
          v-for="(post, index) in posts"
          :key="post.path"
          :post="post"
          :total-posts="posts.length"
          :index="index"
        />
      </div>
    </PostList>
  </div>
</template>

<script>
import IcArrow from '@/assets/svg/arrow.svg?inline'

export default {
  name: 'Index',

  components: {
    IcArrow,
  },
}
</script>
