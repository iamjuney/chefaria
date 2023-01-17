<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
    <nav
        class="relative flex items-center justify-between sm:h-10 md:justify-center"
        aria-label="Global"
    >
        <div
            class="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0"
        >
            <div class="flex w-full items-center justify-between md:w-auto">
                <div class="-mr-2 flex items-center md:hidden">
                    <button
                        type="button"
                        class="bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-indigo-500 inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <!-- Heroicon name: outline/menu -->
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
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="hidden w-4/5 tracking-widest md:flex md:justify-between">
            <div
                class="hidden text-xl font-bold text-dark md:flex md:space-x-10"
            >
                <RouterLink
                    :to="{ name: 'home' }"
                    active-class="text-action underline underline-offset-4"
                    class="hover:text-gray-900 hover:text-action hover:underline hover:underline-offset-4"
                    >HOME</RouterLink
                >
                <RouterLink
                    :to="{ name: 'categories' }"
                    active-class="text-action underline underline-offset-4"
                    class="hover:text-gray-900 hover:text-action hover:underline hover:underline-offset-4"
                    >CATEGORIES</RouterLink
                >
                <RouterLink
                    :to="{ name: 'recipes' }"
                    active-class="text-action underline underline-offset-4"
                    class="hover:text-gray-900 hover:text-action hover:underline hover:underline-offset-4"
                    >RECIPES</RouterLink
                >
            </div>
            <div
                class="hidden text-xl font-bold text-dark md:flex md:space-x-10"
            >
                <RouterLink
                    :to="{ name: 'specialty' }"
                    active-class="text-action underline underline-offset-4"
                    class="hover:text-gray-900 hover:text-action hover:underline hover:underline-offset-4"
                    >SPECIALTY</RouterLink
                >
                <RouterLink
                    :to="{ name: 'contact' }"
                    active-class="text-action underline underline-offset-4"
                    class="hover:text-gray-900 hover:text-action hover:underline hover:underline-offset-4"
                    >CONTACT</RouterLink
                >
                <RouterLink
                    :to="{ name: 'about' }"
                    active-class="text-action underline underline-offset-4"
                    class="hover:text-gray-900 hover:text-action hover:underline hover:underline-offset-4"
                    >ABOUT</RouterLink
                >
            </div>
        </div>
        <div
            class="hidden text-xl font-bold text-dark md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end"
        >
            <RouterLink
                :to="{ name: 'login' }"
                active-class="text-action underline underline-offset-4"
                class="hover:text-gray-900 flex flex-row items-center hover:text-action hover:underline hover:underline-offset-4"
                ><Icon icon="uil:user" width="20" /> LOGIN</RouterLink
            >
        </div>
    </nav>
</template>
