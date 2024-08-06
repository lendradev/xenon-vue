<script setup>
import { ref, computed } from 'vue'
import { MdMenu } from "oh-vue-icons/icons/md"

const open = ref(false)

const toggleMenu = () => {
  open.value = !open.value
}

const menuClass = computed(() => {
  return open.value ? 'flex flex-col gap-4 open-menu' : 'hidden'
})
</script>

<style scoped>
/* Add any additional styles you need here */
</style>


<template>
  <nav
    class="px-4 py-8 lg:px-16 xl:px-48 lg:py-12 flex flex-col lg:flex-row lg:items-center gap-8 align-middle transition-all">
    <div class="flex flex-row align-middle items-center">
      <button @click="toggleMenu" class="btn btn-ghost text-3xl text-black lg:hidden">
        <v-icon name="md-menu" scale="1.5"></v-icon>
      </button>
      <a href="#" class="font-bold text-3xl text-black">XENON</a>
    </div>
    <menu>
      <ul :class="menuClass"
        class="menu menu-horizontal p-0 lg:flex lg:text-xl shadow bg-gray-100 rounded-lg lg:rounded-none lg:shadow-none lg:bg-transparent px-4 py-4 lg:p-0 text-neutral-700 font-bold">
        <li><router-link to="/" class="hover:text-neutral-800 transition-colors">About</router-link></li>
        <li><router-link to="/products" class="hover:text-neutral-800 transition-colors">Products</router-link></li>
        <li><router-link to="/contacts" class="hover:text-neutral-800 transition-colors">Contacts</router-link></li>
      </ul>
    </menu>
  </nav>
</template>