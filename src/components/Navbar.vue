<template>

    <!-- TO-DO: revise the code, taking off unnecessary shits -->
    <!-- TO-DO: increase the size of the buttons in the navbar -->

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

        <ul class="absolute w-full px-3 pb-10 duration-700 ease-in bg-gray-900 md:flex md:items-center md:px-0 md:pb-0 md:static md:w-auto top-14"
            :class="[open ? 'left-0' : 'left-[-100%]']">
            <li class="my-6 md:mx-4 md:my-0" v-for="(link, index) in links" :key="index">
                <i :data-tooltip-target="'tooltip-bottom-' + index" data-tooltip-placement="bottom"
                    :class="'bi ' + links[index].icon + ' text-hl hover:text-green-500'"></i>
                <div :id="'tooltip-bottom-' + index" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    <span>{{ link.name }}</span>
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </li>




            <!-- <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip botto1m</button>
            <div id="tooltip-bottom" role="tooltip" class="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Tooltip on bottom2
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div> -->

            <!--  <Button>
                Get started
            </Button> -->

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