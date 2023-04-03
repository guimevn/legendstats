<template>

    <!-- TO-DO: revise the code, taking off unnecessary shits -->
    <!-- TO-DO: study what's been done -->

    <div class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">

        <div class="flex items-center">
            <span class="mr-1 text-xl text-green-500">
                <i class="bi bi-graph-up-arrow"></i>
            </span>

            <h1 class="text-xl">LegendStats</h1>
        </div>

        <span @click="menuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
            <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
        </span>

        <form class="flex items-center flex-grow">
            <!-- for screen reader -->
            <label for="simple-search" class="sr-only">Search</label>

            <div class="relative w-3/5 ml-6">
                <!-- search icon -->
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-200 dark:text-gray-300" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                
                <input type="text" id="simple-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-1.5  dark:bg-gray-200 dark:placeholder-gray-400  dark:focus:ring-green-700 dark:focus:border-green-700"
                    placeholder="Search for teams or leagues" required>
            </div>
        </form>


        <ul class="absolute w-full px-3 pb-10 duration-700 ease-in bg-gray-900 md:flex md:items-center md:px-0 md:pb-0 md:static md:w-auto top-14"
            :class="[open ? 'left-0' : 'left-[-100%]']">
            <li class="my-6 md:mx-4 md:my-0" v-for="(link, index) in links" :key="index">
                <i :data-tooltip-target="'tooltip-bottom-' + index" data-tooltip-placement="bottom"
                    :class="'bi ' + links[index].icon + ' text-2xl ml-3 hover:text-green-500'"></i>
                <div :id="'tooltip-bottom-' + index" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    <span>{{ link.name }}</span>
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </li>
        </ul>

    </div>

</template>

<script>
    import Button from './Button.vue';
    import {
        ref
    } from 'vue';

    export default {
        components: {
            Button,
        },

        setup() {
            let open = ref(false)

            let links = [{
                    name: "Leagues",
                    icon: "bi-trophy-fill",
                    link: "#"
                },
                {
                    name: "User",
                    icon: "bi-person-circle",
                    link: "#"
                },
                {
                    name: "Settings",
                    icon: "bi-list",
                    link: "#"
                },
            ]

            function menuOpen() {
                open.value = !open.value
            }

            return {
                links,
                open,
                menuOpen
            }
        }

    }
</script>

<style>
</style>