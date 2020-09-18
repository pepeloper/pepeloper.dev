<template>
  <div class="w-full bg-white pt-6">
    <div class="max-w-4xl mx-auto flex items-center justify-start">
      <nav class="flex space-x-5 px-6 items-center">
        <nuxt-link
          :to="{ name: 'index' }"
          class="text-xl flex items-center font-medium border-b-4 border-gray-200 mr-6 hover:bg-gray-200 p-3 py-1 transition duration-500 hover:text-green-600"
        >
          <IcBlog class="text-black mr-3" />
          Pepe Garcia
        </nuxt-link>
        <a href="https://twitter.com/pepeloper_" target="_blank">
          <IcTwitter class="text-black" />
        </a>
        <a href="https://github.com/pepeloper" target="_blank">
          <IcGithub class="text-black" />
        </a>
        <a href="https://www.linkedin.com/in/pepegarciag/" target="_blank">
          <IcLinkedin class="text-black" />
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import IcBlog from '@/assets/svg/blog.svg?inline'
import IcTwitter from '@/assets/svg/twitter.svg?inline'
import IcGithub from '@/assets/svg/github.svg?inline'
import IcLinkedin from '@/assets/svg/linkedin.svg?inline'

export default {
  name: 'LayoutHeader',

  components: {
    IcBlog,
    IcTwitter,
    IcGithub,
    IcLinkedin,
  },

  computed: {
    isHomePage() {
      return this.$route.name == 'index'
    },
  },
}
</script>
