<script setup>
import { addIcons } from 'oh-vue-icons';
import { FaShieldAlt } from 'oh-vue-icons/icons/fa'; // Use Vue-compatible icons
import ProductItem from '../components/ProductItem.vue';
import { ref } from 'vue'

const productAllData = [
    { id: 0, title: 'Xen Mobile', image: '/assets/products/xendroid.png' },
    { id: 1, title: 'Xen Chrome', image: '/assets/products/xenchrome.png' },
    { id: 2, title: 'Xen OS', image: '/assets/products/xenos.png' },
    { id: 3, title: 'Xen Store', image: '/assets/products/xenstore.png' },
    { id: 4, title: 'Xen Photos', image: '/assets/products/xenphotos.png' },
    { id: 5, title: 'Xen Mail', image: '/assets/products/xenmail.png' },
    { id: 6, title: 'Xen Cloud', image: '/assets/products/xencloud.png' }
];

const productBusinessData = [
    { id: 0, title: 'Xen Ads', image: '/assets/products/xenads.png' },
    { id: 1, title: 'Xen Marketplace', image: '/assets/products/xenmarketplace.png' },
    { id: 2, title: 'Xen Analytics', image: '/assets/products/xenlytics.png' }
];

const productDevData = [
    { id: 0, title: 'Xen Terminal', image: '/assets/products/terminal.png' },
    { id: 1, title: 'Xen Wallet', image: '/assets/products/wallet.png' }
];

addIcons(FaShieldAlt);
</script>


<template>
    <main class="lg:px-24 lg:py-16">
        <!-- Hero -->
        <div class="flex flex-col lg:flex-row justify-between gap-8 px-4 py-8 lg:px-8 lg:py-16 2xl:px-64">
            <div class="flex flex-col gap-8 lg:gap-16">
                <h1 class="text-6xl lg:text-2xl xl:text-8xl">Helpful<br />products.</h1>
                <h1 class="text-6xl lg:text-2xl xl:text-8xl">For<br />everyone.</h1>
            </div>
            <img src="/assets/illustration-001.svg"
                class="w-96 bg-slate-500 rounded-tl-3xl rounded-br-3xl rounded-lg px-12" alt="" />
        </div>
        <div class="flex flex-col px-4 py-8 lg:px-48 lg:py-24 gap-16 justify-center items-center">
            <a href="#products" class="px-8 py-4 rounded-lg bg-blue-600 text-white w-fit font-bold">Browse all
                products</a>
        </div>
        <!-- Hero 2 -->
        <div
            class="flex flex-col lg:flex-row justify-between px-4 py-8 lg:px-8 lg:py-24 2xl:px-64 gap-16 bg-gray-300 backdrop-blur-md rounded-lg shadow-lg">
            <div class="flex flex-col gap-4">
                <p class="text-4xl xl:text-5xl text-center lg:text-start font-medium">Transform how people work
                    together with Xenon Workspace</p>
                <p class="font-medium text-gray-600 text-lg lg:text-xl text-center lg:text-start">Get more done with
                    a single, connected experience.</p>
                <a href="#"
                    class="text-2xl lg:text-xl text-blue-700 hover:text-blue-800 transition-colors text-center lg:text-start">Learn
                    more</a>
            </div>
            <img src="/assets/office-working.jpg" alt="" class="rounded-lg lg:w-[32em]" />
        </div>
        <!-- Products -->
        <div class="flex flex-col px-4 py-8 lg:px-48 lg:py-24 gap-16">
            <div class="flex flex-col justify-center gap-12 items-center text-center">
                <v-icon name="fa-shield-alt" class="text-blue-600 size-48"></v-icon>
                <h1 class="text-4xl lg:text-6xl font-semibold">Safer with Xenon</h1>
                <p class="font-medium text-gray-600 text-lg lg:text-2xl 2xl:w-1/2 text-center">It’s our
                    responsibility to protect your privacy and security in every product we make — so that every day
                    you’re safer with Xenon</p>
                <button class="px-8 py-4 rounded-lg bg-blue-600 text-white w-fit font-bold">Visit the Safety
                    Center</button>
            </div>
        </div>
        <!-- Accordion -->
        <div class="flex flex-col px-4 py-8 lg:px-48 lg:py-24 gap-16" id="products">
            <div class="flex flex-col justify-center gap-8 items-center text-center">
                <h1 class="text-4xl lg:text-6xl font-semibold">Xenon Products</h1>
                <div class="collapse collapse-arrow">
                    <input type="checkbox" id="collapse-1" />
                    <h2 class="collapse-title text-start text-xl font-medium border-b-2 border-gray-500 mb-4">For
                        all</h2>
                    <div class="collapse-content grid grid-cols-1 gap-16 xl:grid-cols-4">
                        <ProductItem v-for="product in productAllData" :key="product.id" :image="product.image"
                            :title="product.title" />
                    </div>
                </div>
                <div class="collapse collapse-arrow">
                    <input type="checkbox" id="collapse-2" />
                    <h2 class="collapse-title text-start text-xl font-medium border-b-2 border-gray-500 mb-4">For
                        business</h2>
                    <div class="collapse-content grid grid-cols-1 gap-16 xl:grid-cols-4">
                        <ProductItem v-for="product in productBusinessData" :key="product.id" :image="product.image"
                            :title="product.title" />
                    </div>
                </div>
                <div class="collapse collapse-arrow">
                    <input type="checkbox" id="collapse-3" />
                    <h2 class="collapse-title text-start text-xl font-medium border-b-2 border-gray-500 mb-4">For
                        developers</h2>
                    <div class="collapse-content grid grid-cols-1 gap-16 xl:grid-cols-4">
                        <ProductItem v-for="product in productDevData" :key="product.id" :image="product.image"
                            :title="product.title" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>