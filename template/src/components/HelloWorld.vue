<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to DynApp Web Components
        </h1>
        <p class="subheading font-weight-regular">
          Built with Vue and Vuetify
        </p>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-layout justify-center>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-layout justify-center>
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      ecosystem: [
        {
          text: 'Vue Github',
          href: 'https://github.com/vuejs/vue'
        },
        {
          text: 'Vuetify Github',
          href: 'https://github.com/vuetifyjs/vuetify'
        },
        {
          text: 'Awesome Vue',
          href: 'https://github.com/vuejs/awesome-vue'
        },
        {
          text: 'Awesome Vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify'
        }
      ],
      importantLinks: [
        {
          text: 'Vue Documentation',
          href: 'https://vuejs.org/'
        },
        {
          text: 'Vuetify Documentation',
          href: 'https://vuetifyjs.com'
        },
        {
          text: 'Chat about Vue',
          href: 'https://chat.vuejs.org'
        },
        {
          text: 'Chat about Vuetify',
          href: 'https://community.vuetifyjs.com'
        }
      ],
      whatsNext: [
        {
          text: 'Read the Vue guide',
          href: 'https://vuejs.org/v2/guide/'
        },
        {
          text: 'Explore Vuetify components',
          href: 'https://vuetifyjs.com/components/api-explorer'
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined',
        },
        {
          text: 'Frequently Asked Vuetify Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
        }
      ]
    })
  }
</script>

<style>

</style>
