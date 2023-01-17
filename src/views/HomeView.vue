<script setup>
import appetizer from "@/assets/images/Appetizer.jpg";

import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="relative mx-40 mt-52">
        <div
            class="absolute z-10 -m-4 flex h-full w-full flex-row overflow-hidden rounded-xl shadow-xl"
        >
            <div class="absolute inset-0">
                <img
                    class="h-full w-full object-cover"
                    :src="appetizer"
                    alt="People working on laptops"
                />
            </div>
            <div
                class="relative flex w-1/2 flex-col bg-gradient-to-r from-secondary via-secondary p-8 text-primary"
            >
                <div class="mr-44">
                    <div class="flex flex-row justify-between pr-12">
                        <div class="flex flex-row">
                            <Icon icon="uil:play" width="24" />3.14
                        </div>
                        <div class="flex flex-row">
                            <Icon
                                icon="icon-park-outline:chef-hat"
                                width="24"
                            />14.8k
                        </div>
                        <div class="flex flex-row">
                            <Icon icon="uil:bookmark" width="24" />
                        </div>
                    </div>
                    <h2 class="mt-2 text-3xl font-extrabold">
                        Uramaki (Uramakizushi)
                    </h2>
                    <h4
                        class="mt-2 text-base font-medium font-extrabold leading-tight line-clamp-3"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Provident quo excepturi soluta! Maiores cupiditate
                        quam nostrum illum, odio soluta corporis aut suscipit
                        esse saepe quidem et, eveniet animi eos officia.
                    </h4>
                    <!-- This example requires Tailwind CSS v2.0+ -->
                    <div class="group mt-8 block flex-shrink-0">
                        <div class="flex items-center">
                            <div>
                                <img
                                    class="inline-block h-9 w-9 rounded-full border-2 border-dark"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium">Tom Cook</p>
                                <p class="text-xs font-medium">
                                    November 19, 2022
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <button
                            type="button"
                            class="inline-flex items-center rounded-md bg-action px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-opacity-90"
                        >
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div class="h-44 rounded-xl bg-action shadow-xl" />
            <div class="col-span-2 h-44 rounded-xl bg-dark shadow-xl" />
            <div class="h-44 rounded-xl bg-dark shadow-xl" />
            <div class="col-span-2 h-44 rounded-xl bg-action shadow-xl" />
        </div>
    </div>

    <div class="relative mx-40 mt-12 mb-20">
        <section
            class="absolute z-10 -m-4 flex h-full w-full flex-row overflow-hidden rounded-xl"
        >
            <div
                class="grid w-full grid-cols-1 bg-secondary p-8 text-primary lg:grid-cols-2"
            >
                <div
                    class="bg-gray-50 relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24"
                >
                    <div class="absolute inset-0">
                        <img
                            class="h-full w-full rounded-xl object-cover"
                            src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                            alt="Chef cooking in the kitchen"
                        />
                    </div>
                </div>

                <div
                    class="flex items-center justify-center sm:px-6 sm:py-16 lg:px-8 lg:py-12"
                >
                    <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 class="text-3xl font-extrabold leading-tight">
                            Begin Your Luscious Journey?
                        </h2>
                        <p class="mt-2 text-base font-medium leading-tight">
                            Sign up to here to start your adventure!
                        </p>

                        <form action="#" method="POST" class="mt-8">
                            <div class="space-y-5">
                                <div>
                                    <label
                                        for=""
                                        class="text-gray-900 text-base font-medium"
                                    >
                                        Email address
                                    </label>
                                    <div
                                        class="text-gray-400 relative mt-2.5 focus-within:text-action"
                                    >
                                        <div
                                            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                        >
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                />
                                            </svg>
                                        </div>

                                        <input
                                            type="email"
                                            name=""
                                            id=""
                                            placeholder="Enter email to get started"
                                            class="text-black placeholder-gray-500 border-gray-200 bg-gray-50 focus:border-blue-600 focus:bg-white caret-blue-600 block w-full rounded-md border py-4 pl-10 pr-4 transition-all duration-200 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        for=""
                                        class="text-gray-900 text-base font-medium"
                                    >
                                        Password
                                    </label>
                                    <div
                                        class="text-gray-400 relative mt-2.5 focus-within:text-action"
                                    >
                                        <div
                                            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                        >
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                />
                                            </svg>
                                        </div>

                                        <input
                                            type="password"
                                            name=""
                                            id=""
                                            placeholder="Enter your password"
                                            class="text-black placeholder-gray-500 border-gray-200 bg-gray-50 focus:border-blue-600 focus:bg-white caret-blue-600 block w-full rounded-md border py-4 pl-10 pr-4 transition-all duration-200 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        for=""
                                        class="text-gray-900 text-base font-medium"
                                    >
                                        Confirm Password
                                    </label>
                                    <div
                                        class="text-gray-400 relative mt-2.5 focus-within:text-action"
                                    >
                                        <div
                                            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                        >
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                />
                                            </svg>
                                        </div>

                                        <input
                                            type="password"
                                            name=""
                                            id=""
                                            placeholder="Confirm password"
                                            class="text-black placeholder-gray-500 border-gray-200 bg-gray-50 focus:border-blue-600 focus:bg-white caret-blue-600 block w-full rounded-md border py-4 pl-10 pr-4 transition-all duration-200 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        class="relative inline-flex w-full items-center justify-center rounded-md bg-action px-4 py-4 text-base font-semibold text-primary transition-all duration-200 hover:bg-opacity-90 focus:outline-none"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div class="mt-3 space-y-3">
                            <button
                                type="button"
                                class="relative inline-flex w-full items-center justify-center rounded-md bg-action px-4 py-4 text-base font-semibold text-primary transition-all duration-200 hover:bg-opacity-90 focus:outline-none"
                            >
                                <div class="absolute inset-y-0 left-0 p-4">
                                    <svg
                                        class="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                        ></path>
                                    </svg>
                                </div>
                                Sign up with Google
                            </button>

                            <button
                                type="button"
                                class="relative inline-flex w-full items-center justify-center rounded-md bg-action px-4 py-4 text-base font-semibold text-primary transition-all duration-200 hover:bg-opacity-90 focus:outline-none"
                            >
                                <div class="absolute inset-y-0 left-0 p-4">
                                    <svg
                                        class="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
                                        ></path>
                                    </svg>
                                </div>
                                Sign up with Facebook
                            </button>
                        </div>

                        <p class="text-gray-600 mt-5 text-sm">
                            This site is protected by reCAPTCHA and the Google
                            <a
                                href="#"
                                title=""
                                class="text-action transition-all duration-200 hover:underline"
                                >Privacy Policy</a
                            >
                            &
                            <a
                                href="#"
                                title=""
                                class="text-action transition-all duration-200 hover:underline"
                                >Terms of Service</a
                            >
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <div class="grid grid-cols-3 gap-4">
            <div class="h-[28rem] rounded-xl bg-action shadow-xl" />
            <div class="col-span-2 h-[28rem] rounded-xl bg-dark shadow-xl" />
            <div class="h-[28rem] rounded-xl bg-dark shadow-xl" />
            <div class="col-span-2 h-[28rem] rounded-xl bg-action shadow-xl" />
        </div>
    </div>
</template>
