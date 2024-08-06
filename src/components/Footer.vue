<script setup>
import { ref } from "vue";
import { addIcons } from "oh-vue-icons";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaGithub } from "oh-vue-icons/icons/fa";

addIcons(FaInstagram, FaFacebook, FaTwitter, FaYoutube);
</script>

<template>
    <footer class="px-4 lg:px-48 lg:py-16 gap-6 flex flex-col bg-gray-100">
      <div class="flex flex-row align-middle gap-4 items-center border-b-2 pb-4 border-neutral-700 justify-center lg:justify-start border-t-2 lg:border-t-0 pt-4">
        <p class="hidden lg:block font-bold text-xl">Follow us</p>
        <div class="flex flex-row gap-2">
          <a href="#" class="text-3xl hover:text-neutral-400 transition-colors">
            <v-icon name="fa-instagram" scale="2"></v-icon>
          </a>
          <a href="#" class="text-3xl hover:text-neutral-400 transition-colors">
            <v-icon name="fa-facebook" scale="2"></v-icon>
          </a>
          <a href="#" class="text-3xl hover:text-neutral-400 transition-colors">
            <v-icon name="fa-twitter" scale="2"></v-icon>
          </a>
          <a href="#" class="text-3xl hover:text-neutral-400 transition-colors">
            <v-icon name="fa-youtube" scale="2"></v-icon>
          </a>
          <a href="#" class="text-3xl hover:text-neutral-400 transition-colors">
            <v-icon name="fa-linkedin" scale="2"></v-icon>
          </a>
          <a href="#" class="text-3xl hover:text-neutral-400 transition-colors"></a>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-48">
        <div class="flex flex-col">
          <ul class="flex flex-col p-0 gap-4">
            <li><p class="font-bold text-xl">More about us</p></li>
            <ul class="flex flex-col gap-2">
              <li><a href="/contacts" class="font-semibold text-neutral-700 hover:text-neutral-800 transition-colors">Contact us</a></li>
              <li><a href="#" class="font-semibold text-neutral-700 hover:text-neutral-800 transition-colors">Investor relation</a></li>
              <li><a href="#" class="font-semibold text-neutral-700 hover:text-neutral-800 transition-colors">Careers</a></li>
              <li><a href="#" class="font-semibold text-neutral-700 hover:text-neutral-800 transition-colors">Location</a></li>
            </ul>
          </ul>
        </div>
        <div class="flex flex-col">
          <ul class="flex flex-col p-0 gap-4">
            <li><p class="font-bold text-xl">Policy</p></li>
            <ul class="flex flex-col gap-2">
              <li><a href="#" class="font-semibold text-neutral-700 hover:text-neutral-800 transition-colors">Application Security</a></li>
              <li><a href="#" class="font-semibold text-neutral-700 hover:text-neutral-800 transition-colors">Software Principles</a></li>
              <li><a href="#" class="font-semibold text-neutral-700 hover:text-neutral-800 transition-colors">Community Guidelines</a></li>
              <li><a href="#" class="font-semibold text-neutral-700 hover:text-neutral-800 transition-colors">How our business works</a></li>
            </ul>
          </ul>
        </div>
        <div class="flex flex-col">
          <ul class="flex flex-col p-0 gap-4">
            <li><p class="font-bold text-xl">Guides</p></li>
            <ul class="flex flex-col gap-2">
              <li><a href="#" class="font-semibold text-neutral-700 hover:text-neutral-800 transition-colors">FAQ</a></li>
              <li><a href="#" class="font-semibold text-neutral-700 hover:text-neutral-800 transition-colors">Pricing</a></li>
              <li><a href="#" class="font-semibold text-neutral-700 hover:text-neutral-800 transition-colors">API</a></li>
            </ul>
          </ul>
        </div>
        <div class="flex flex-col">
          <ul class="flex flex-col p-0 gap-4">
            <li><p class="font-bold text-xl">Legal</p></li>
            <ul class="flex flex-col gap-2">
              <li><a href="#" class="font-semibold text-neutral-700 hover:text-neutral-800 transition-colors">Terms of Service</a></li>
              <li><a href="#" class="font-semibold text-neutral-700 hover:text-neutral-800 transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="font-semibold text-neutral-700 hover:text-neutral-800 transition-colors">Cookie Policy</a></li>
              <li><a href="#" class="font-semibold text-neutral-700 hover:text-neutral-800 transition-colors">Privacy</a></li>
            </ul>
          </ul>
        </div>
      </div>
    </footer>
  </template>