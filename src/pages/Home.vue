<script setup>
import { ref } from 'vue'
import Card from '../components/Card.vue' // Adjust the path according to your project structure

const navigateTo = (url) => {
    window.location.href = url
}

</script>

<template>
    <main class="lg:px-24 lg:py-16 gap-64">
        <!-- Product -->
        <div class="flex flex-col px-4 py-8 lg:px-64 lg:py-24 gap-24">
            <p class="text-xl 2xl:text-5xl font-semibold text-center">
                Our mission is to <i class="text-blue-600 not-italic">organize</i> the world’s
                <i class="text-red-600 not-italic">information</i> and make it
                <i class="not-italic text-green-600">universally accessible</i> and
                <i class="text-amber-600 not-italic">useful</i>.
            </p>
            <div class="gap-4 flex flex-col">
                <img src="https://www.brph.com/wp-content/uploads/2022/03/Harris_HTC_2.jpg" alt="" class="rounded-lg" />
                <p class="lg:text-xl font-bold text-neutral-600">San Francisco, California, USA</p>
            </div>
        </div>
        <div class="flex flex-col px-4 py-8 lg:px-64 lg:py-24 gap-16">
            <p class="text-2xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-bold text-center">
                Make life easier with a little help from our products
            </p>
            <div class="flex flex-col lg:flex-row gap-4 justify-center">
                <button @click="navigateTo('/products')"
                    class="rounded bg-blue-600 text-white outline-none lg:text-xl px-8 py-4 hover:text-gray-100 font-bold">
                    View our products
                </button>
                <button
                    class="rounded bg-gray-200 text-gray-600 outline-none lg:text-xl px-8 py-4 hover:text-black font-bold">
                    Get product support
                </button>
            </div>
            <div class="flex flex-col lg:flex-row gap-8 justify-center">
                <Card class="lg:w-[32em]" type="product" title="Transforming how people work with our office suite"
                    image="https://th.bing.com/th/id/OIP.E9NpkWWV7DHSdYQASeYDyAHaE8?rs=1&pid=ImgDetMain" desc="" />
                <Card class="lg:w-[32em]" type="product"
                    title="Keep your personal or company secrets with our Security Suite" image="/assets/security.jpeg"
                    desc="" />
            </div>
            <div class="flex flex-row gap-8 justify-center">
                <div class="flex flex-col gap-4 lg:px-16">
                    <img src="/assets/p3kd.jpg" class="rounded-lg" alt="P3KD" />
                    <div class="px-8 gap-2 flex flex-col justify-center">
                        <h1 class="text-center font-bold text-xl">
                            Learn how to stay safe online with our P3KD Digital Tips
                        </h1>
                        <a href="#" class="text-center font-bold text-blue-400 hover:text-blue-600 text-xl">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Commitment -->
        <div class="flex flex-col px-4 py-8 lg:px-64 lg:py-24 gap-24">
            <p class="text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-black text-center">
                Committed to significantly improving the lives of as many people as possible
            </p>
            <div class="flex flex-row gap-4 justify-center">
                <button
                    class="rounded bg-blue-600 text-white outline-none lg:text-xl px-8 py-4 hover:text-gray-100 font-bold">
                    View all our commitments
                </button>
            </div>
            <div class="flex flex-col lg:flex-row gap-8 justify-center">
                <Card type="product" title="Accelerating economic growth with the power of the internet"
                    image="https://lh3.googleusercontent.com/pgR8knElzLWH5wkfrVoCVBRBDNc2zsjgTIqa5QKQ9DbJpxA2pm0Ni5wV3IYQ3DIrXNMVRbezPRgFl0hS_kwtjzYRxoEAKwQB-eKbRrhgYY_sx6g8T34v=w1440-l90-sg-rj-c0xffffff"
                    desc="" />
                <Card type="product" title="Easy-to-use privacy and security settings, all in one place"
                    image="https://b2c-contenthub.com/wp-content/uploads/2023/09/Software-Update-Mac-Ventura.jpg?quality=50&strip=all"
                    desc="" />
            </div>
        </div>
        <!-- Stories -->
        <div class="flex flex-col px-4 py-8 lg:px-64 lg:py-24 gap-24">
            <p class="text-2xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-bold text-center">
                People using technology to benefit others
            </p>
            <div class="flex flex-row gap-4 justify-center">
                <button
                    class="rounded bg-blue-600 text-white outline-none text-xl px-8 py-4 hover:text-gray-100 font-bold">
                    Explore our stories
                </button>
            </div>
            <div class="flex flex-col lg:flex-row justify-center gap-12">
                <Card class="lg:w-96" type="story" title="How we find solutions from our own problems"
                    image="/assets/support.webp" desc="" />
                <Card class="lg:w-96" type="story" title="How we keep your personal or company secrets safe"
                    image="/assets/security.jpeg" desc="" />
                <Card class="lg:w-96" type="story" title="How our community works for creating a better world"
                    image="/assets/community.jpeg" desc="" />
            </div>
        </div>
    </main>
</template>
