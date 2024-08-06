<script setup>
// Add any necessary script here if needed
</script>

<style scoped>
/* Add any specific styles here if needed */
</style>

<template>
    <main class="lg:px-24 lg:py-16">
        <div class="flex flex-col justify-between gap-8 px-4 py-8 lg:px-8 lg:py-16 2xl:px-64">
            <h1 class="text-5xl lg:text-7xl font-semibold">Hi, how can we help?</h1>
            <div class="flex flex-col gap-32">
                <div class="flex flex-col gap-8">
                    <h2 class="text-3xl font-medium">Help & Support</h2>
                    <p class="text-gray-600 lg:w-1/2 text-2xl font-semibold">
                        Have questions or need to report an issue with a Google product or service? We&apos;ve got you
                        covered.
                    </p>
                    <a href="#"
                        class="text-lg w-fit rounded-lg px-8 py-4 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">
                        Get support
                    </a>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                    <!-- Location -->
                    <div class="flex flex-col gap-4">
                        <h3 class="text-medium text-2xl lg:text-3xl">Xenon HQ</h3>
                        <p class="text-gray-500 text-xl">
                            1600 Amphitheatre Parkway
                            Mountain View, CA 94043, USA
                        </p>
                        <a href="#" class="text-blue-500 font-bold underline text-lg">+1 (123) 456-7890</a>
                        <a href="#"
                            class="px-8 py-4 mt-4 border border-gray-300 text-blue-600 font-semibold hover:border-blue-600 w-fit rounded">
                            See all locations
                        </a>
                    </div>
                    <!-- Jobs -->
                    <div class="flex flex-col gap-4">
                        <h3 class="text-medium text-2xl lg:text-3xl">Careers at Xenon</h3>
                        <p class="text-gray-500 text-xl">Learn more about our teams and job openings.</p>
                        <a href="#"
                            class="px-8 py-4 mt-4 border border-gray-300 text-blue-600 font-semibold hover:border-blue-600 w-fit rounded">
                            Explore jobs
                        </a>
                    </div>
                    <!-- Press -->
                    <div class="flex flex-col gap-4">
                        <h3 class="text-medium text-2xl lg:text-3xl">Press</h3>
                        <p class="text-gray-500 text-xl">If you are a member of the press, email us at</p>
                        <a href="#" class="text-blue-500 font-bold underline text-lg">press@xenon.com</a>
                        <a href="#"
                            class="px-8 py-4 mt-4 border border-gray-300 text-blue-600 font-semibold hover:border-blue-600 w-fit rounded">
                            Visit our blog
                        </a>
                    </div>
                    <!-- Business & Organization -->
                    <div class="flex flex-col gap-4">
                        <h3 class="text-medium text-2xl lg:text-3xl">Business & Organization</h3>
                        <ul
                            class="list-disc list-inside flex flex-col lg:gap-2 px-2 text-sm lg:px-4 lg:text-lg text-gray-600">
                            <li>
                                Grow your business with <a href="#"
                                    class="text-blue-500 underline hover:text-blue-600">Xenon Ads</a>
                            </li>
                            <li>
                                Solve business challenges with <a href="#"
                                    class="text-blue-500 underline hover:text-blue-600">Xenon Cloud</a>
                            </li>
                            <li>
                                Work together with <a href="#" class="text-blue-500 underline hover:text-blue-600">Xenon
                                    Workspaces</a>
                            </li>
                            <li>
                                Engage supporters and fundraise with <a href="#"
                                    class="text-blue-500 underline hover:text-blue-600">Xenon for Nonprofits</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
