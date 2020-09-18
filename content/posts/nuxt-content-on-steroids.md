---
title: Nuxt content on steroids
description: '@nuxt/content allows you to focus on write your content in different formats (JSON, Markdown, YAML and so on) and it provides a very expressive api 👍'
author: pepe-garcia
---

`@nuxt/content` allows you to focus on write your content in different formats (JSON, Markdown, YAML and so on) and it provides a very expressive api 👍

[Introduction](https://content.nuxtjs.org/)

This is a perfect match made in heaven for creating a blog, *like this one.* So let's dig in!

## Write content

Just create a `content/` directory in your project root and organize your files and folder in the way you like. *Yeah that's it*

## Fetch content

Nuxt content provide a `$content` variable available globally. If you are familiar with backend think about it like a `queryBuilder`

Lets say you have your content structured this way.

```html
- content
	- posts
		- create-a-blog-with-nuxtjs
		- introduction-to-vue-js
```

So get all your posts will be as simple as 👇

```jsx
const articles = await this.$content('posts').fetch()
```

So lets say you want to fetch a specific post, you just need to add a `where` clause

```jsx
const post = await this.$content('posts').where({ permalink: 'create-a-blog-with-nuxtjs'}).fetch()
```

There is way more methods to order, limit, skip and even search across your content, so feel free to check the documentation for more in deep examples!

[Fetching content](https://content.nuxtjs.org/fetching/)

## Display content

Nuxt content gives you a global component to handle this one. Just fetch your content to display and pass it in a prop.

```jsx
<nuxt-content :document="post" />
```

---

Everything look easy right? Well, me and you know that real world scenarios are more complex than this one and because of that we've packed a starter boilerplate so you *and me* can focus on what really matters, and that is write content

## Nuxt content blog

[https://github.com/64robots/nuxt-content-blog](https://github.com/64robots/nuxt-content-blog)

Let me introduce you the nuxt content blog package. You will have categories, authors and posts out of the box as well as cli tools to generate them! It also generate meta tags for twitter and opengraph.

We also made two renderless components ready to make it easier

### PostList

Will provide a `posts` slot with a list of post for a given collection (`posts` by default)

### Post

Will provide a `post` and `author` slots for a given permalink that it's used as your page slug

---

For more detail and documentation and examples just check out the Github repository and feel free to contribute with code, ideas, and whatever you see that could fit! 👋
