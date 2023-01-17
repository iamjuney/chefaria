<script setup>
import { RouterLink, RouterView } from "vue-router";
import DesktopNavigation from "./components/DesktopNavigation.vue";
import logo_icon from "@/assets/icons/Logo.png";
import search_icon from "@/assets/icons/Search Icon.png";

import { Icon } from "@iconify/vue";
</script>

<template>
    <main
        class="relative min-h-screen overflow-hidden bg-primary bg-hero-bg bg-cover bg-blend-luminosity"
    >
        <div class="fixed top-0 left-0 right-0 z-30">
            <!-- social links -->
            <div
                class="absolute top-10 left-14 z-10 flex w-8 flex-col items-center space-y-8"
            >
                <a href="" class="text-xl text-dark"
                    ><Icon icon="uil:facebook" width="24"
                /></a>

                <a href="" class="text-xl text-dark"
                    ><Icon icon="uil:instagram-alt" width="24"
                /></a>

                <a href="" class="text-xl text-dark"
                    ><Icon icon="uil:twitter" width="24"
                /></a>

                <a href="" class="text-xl text-dark"
                    ><Icon icon="uil:youtube" width="24"
                /></a>
            </div>

            <RouterLink to="/"
                ><img
                    :src="logo_icon"
                    class="absolute left-1/2 top-4 z-10 h-[112.2px] w-[100px] -translate-x-1/2"
                    alt=""
            /></RouterLink>
            <RouterLink to="/"
                ><img
                    :src="search_icon"
                    class="absolute left-1/2 top-32 z-10 h-12 w-12 -translate-x-1/2"
                    alt=""
            /></RouterLink>

            <div
                class="relative bg-gradient-to-b from-primary via-primary pt-8 sm:pb-28"
            >
                <div>
                    <!-- desktop navbar -->
                    <div class="mx-auto max-w-7xl px-4 sm:px-6">
                        <DesktopNavigation />
                    </div>

                    <!-- mobile navbar -->
                    <div
                        class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                    >
                        <div
                            class="bg-white ring-black overflow-hidden rounded-lg shadow-md ring-1 ring-opacity-5"
                        >
                            <div
                                class="flex items-center justify-between px-5 pt-4"
                            >
                                <div>
                                    <img
                                        class="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt=""
                                    />
                                </div>
                                <div class="-mr-2">
                                    <button
                                        type="button"
                                        class="bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-indigo-500 inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset"
                                    >
                                        <span class="sr-only">Close menu</span>
                                        <!-- Heroicon name: outline/x -->
                                        <svg
                                            class="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="px-2 pt-2 pb-3">
                                <a
                                    href="#"
                                    class="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium"
                                    >Product</a
                                >

                                <a
                                    href="#"
                                    class="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium"
                                    >Features</a
                                >

                                <a
                                    href="#"
                                    class="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium"
                                    >Marketplace</a
                                >

                                <a
                                    href="#"
                                    class="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium"
                                    >Company</a
                                >
                            </div>
                            <a
                                href="#"
                                class="bg-gray-50 text-indigo-600 hover:bg-gray-100 block w-full px-5 py-3 text-center font-medium"
                            >
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <RouterView />
    </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&display=swap");
</style>
