<script setup>
import appetizer from "@/assets/images/Appetizer.jpg";
import main_course from "@/assets/images/Main Course.jpeg";
import { Icon } from "@iconify/vue";
</script>

<template>
    <div
        class="relative mx-40 mt-52 rounded-xl border-2 border-dark bg-action/50 backdrop-blur-sm"
    >
        <div class="mx-auto max-w-7xl p-8">
            <div class="sm:flex sm:items-baseline sm:justify-between">
                <h2 class="text-3xl font-extrabold tracking-tight text-dark">
                    Appetizers
                </h2>
                <button
                    type="button"
                    class="inline-flex items-center rounded-md bg-action px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-opacity-90"
                >
                    View All<span aria-hidden="true"> &rarr;</span>
                </button>
            </div>

            <div
                class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8"
            >
                <div
                    class="group relative overflow-hidden rounded-xl bg-gradient-to-tr from-secondary/75 to-action/75 p-4 shadow-xl"
                >
                    <div
                        class="sm:aspect-w-2 sm:aspect-h-3 h-44 w-full overflow-hidden rounded-lg group-hover:opacity-75"
                    >
                        <img
                            :src="appetizer"
                            alt="Model wearing women&#039;s black cotton crewneck tee."
                            class="h-full w-full object-cover object-center"
                        />
                        <!-- <div
                            class="absolute inset-0 bg-gradient-to-b from-dark/50"
                        ></div> -->
                    </div>
                    <div
                        class="mt-4 flex flex-row justify-between text-primary"
                    >
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
                    <h4
                        class="mt-4 text-base font-medium leading-tight text-primary line-clamp-3"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Provident quo excepturi soluta! Maiores cupiditate
                        quam nostrum illum, odio soluta corporis aut suscipit
                        esse saepe quidem et, eveniet animi eos officia.
                    </h4>
                    <div
                        class="mt-4 flex w-full flex-col items-end justify-end text-primary"
                    >
                        <h4 class="text-sm">SHAWN MICHAEL A. DAYUDAY</h4>
                        <h5 class="text-xs">November 19. 2022</h5>
                    </div>
                </div>

                <div
                    class="group relative rounded-xl bg-gradient-to-tr from-secondary/75 to-action/75 p-4 shadow-xl"
                >
                    <div
                        class="sm:aspect-w-2 sm:aspect-h-3 h-44 w-full overflow-hidden rounded-lg group-hover:opacity-75"
                    >
                        <img
                            :src="appetizer"
                            alt="Model wearing women&#039;s black cotton crewneck tee."
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div
                        class="mt-4 flex flex-row justify-between text-primary"
                    >
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
                    <h4
                        class="mt-4 text-base font-medium leading-tight text-primary line-clamp-3"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Provident quo excepturi soluta! Maiores cupiditate
                        quam nostrum illum, odio soluta corporis aut suscipit
                        esse saepe quidem et, eveniet animi eos officia.
                    </h4>
                    <div
                        class="mt-4 flex w-full flex-col items-end justify-end text-primary"
                    >
                        <h4 class="text-sm">SHAWN MICHAEL A. DAYUDAY</h4>
                        <h5 class="text-xs">November 19. 2022</h5>
                    </div>
                </div>
                <div
                    class="group relative rounded-xl bg-gradient-to-tr from-secondary/75 to-action/75 p-4 shadow-xl"
                >
                    <div
                        class="sm:aspect-w-2 sm:aspect-h-3 h-44 w-full overflow-hidden rounded-lg group-hover:opacity-75"
                    >
                        <img
                            :src="appetizer"
                            alt="Model wearing women&#039;s black cotton crewneck tee."
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div
                        class="mt-4 flex flex-row justify-between text-primary"
                    >
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
                    <h4
                        class="mt-4 text-base font-medium leading-tight text-primary line-clamp-3"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Provident quo excepturi soluta! Maiores cupiditate
                        quam nostrum illum, odio soluta corporis aut suscipit
                        esse saepe quidem et, eveniet animi eos officia.
                    </h4>
                    <div
                        class="mt-4 flex w-full flex-col items-end justify-end text-primary"
                    >
                        <h4 class="text-sm">SHAWN MICHAEL A. DAYUDAY</h4>
                        <h5 class="text-xs">November 19. 2022</h5>
                    </div>
                </div>
            </div>

            <!-- <div class="mt-6 sm:hidden">
                <button
                    type="button"
                    class="inline-flex items-center rounded-md bg-action px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-opacity-90"
                >
                    View All<span aria-hidden="true"> &rarr;</span>
                </button>
            </div> -->
        </div>
    </div>

    <div
        class="relative mx-40 my-12 rounded-xl border-2 border-dark bg-action/50 backdrop-blur-sm"
    >
        <div class="mx-auto max-w-7xl p-8">
            <div class="sm:flex sm:items-baseline sm:justify-between">
                <h2 class="text-3xl font-extrabold tracking-tight text-dark">
                    Main Course
                </h2>
                <button
                    type="button"
                    class="inline-flex items-center rounded-md bg-action px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-opacity-90"
                >
                    View All<span aria-hidden="true"> &rarr;</span>
                </button>
            </div>

            <div
                class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8"
            >
                <div
                    class="group relative overflow-hidden rounded-xl bg-gradient-to-tr from-secondary/75 to-action/75 p-4 shadow-xl"
                >
                    <div
                        class="sm:aspect-w-2 sm:aspect-h-3 h-44 w-full overflow-hidden rounded-lg group-hover:opacity-75"
                    >
                        <img
                            :src="main_course"
                            alt="Model wearing women&#039;s black cotton crewneck tee."
                            class="h-full w-full object-cover object-center"
                        />
                        <!-- <div
                            class="absolute inset-0 bg-gradient-to-b from-dark/50"
                        ></div> -->
                    </div>
                    <div
                        class="mt-4 flex flex-row justify-between text-primary"
                    >
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
                    <h4
                        class="mt-4 text-base font-medium leading-tight text-primary line-clamp-3"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Provident quo excepturi soluta! Maiores cupiditate
                        quam nostrum illum, odio soluta corporis aut suscipit
                        esse saepe quidem et, eveniet animi eos officia.
                    </h4>
                    <div
                        class="mt-4 flex w-full flex-col items-end justify-end text-primary"
                    >
                        <h4 class="text-sm">SHAWN MICHAEL A. DAYUDAY</h4>
                        <h5 class="text-xs">November 19. 2022</h5>
                    </div>
                </div>

                <div
                    class="group relative rounded-xl bg-gradient-to-tr from-secondary/75 to-action/75 p-4 shadow-xl"
                >
                    <div
                        class="sm:aspect-w-2 sm:aspect-h-3 h-44 w-full overflow-hidden rounded-lg group-hover:opacity-75"
                    >
                        <img
                            :src="main_course"
                            alt="Model wearing women&#039;s black cotton crewneck tee."
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div
                        class="mt-4 flex flex-row justify-between text-primary"
                    >
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
                    <h4
                        class="mt-4 text-base font-medium leading-tight text-primary line-clamp-3"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Provident quo excepturi soluta! Maiores cupiditate
                        quam nostrum illum, odio soluta corporis aut suscipit
                        esse saepe quidem et, eveniet animi eos officia.
                    </h4>
                    <div
                        class="mt-4 flex w-full flex-col items-end justify-end text-primary"
                    >
                        <h4 class="text-sm">SHAWN MICHAEL A. DAYUDAY</h4>
                        <h5 class="text-xs">November 19. 2022</h5>
                    </div>
                </div>
                <div
                    class="group relative rounded-xl bg-gradient-to-tr from-secondary/75 to-action/75 p-4 shadow-xl"
                >
                    <div
                        class="sm:aspect-w-2 sm:aspect-h-3 h-44 w-full overflow-hidden rounded-lg group-hover:opacity-75"
                    >
                        <img
                            :src="main_course"
                            alt="Model wearing women&#039;s black cotton crewneck tee."
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div
                        class="mt-4 flex flex-row justify-between text-primary"
                    >
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
                    <h4
                        class="mt-4 text-base font-medium leading-tight text-primary line-clamp-3"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Provident quo excepturi soluta! Maiores cupiditate
                        quam nostrum illum, odio soluta corporis aut suscipit
                        esse saepe quidem et, eveniet animi eos officia.
                    </h4>
                    <div
                        class="mt-4 flex w-full flex-col items-end justify-end text-primary"
                    >
                        <h4 class="text-sm">SHAWN MICHAEL A. DAYUDAY</h4>
                        <h5 class="text-xs">November 19. 2022</h5>
                    </div>
                </div>
            </div>

            <!-- <div class="mt-6 sm:hidden">
                <button
                    type="button"
                    class="inline-flex items-center rounded-md bg-action px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-opacity-90"
                >
                    View All<span aria-hidden="true"> &rarr;</span>
                </button>
            </div> -->
        </div>
    </div>
</template>
