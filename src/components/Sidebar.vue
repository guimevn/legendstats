<template>
    <!-- to-do: optmize my code especially in <a> tag using for each -->

    <div class="relative flex max-h-screen">
        <!-- sidebar -->
        <div class="absolute inset-y-0 left-0 px-2 py-6 mt-4 ml-2 space-y-6 transition duration-200 ease-in-out transform -translate-x-full bg-gray-900 rounded-lg w-60 text-cyan-100 md:relative md:-translate-x-0">
            <a href="" class="flex items-center px-4 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="w-5 h-5 text-white" viewBox="0 0 16 16">
                    <path
                        d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
                    <span class="text-xl font-bold text-white poppins">Tournaments</span>
                </svg>
            </a>
            <nav>
                <a href="/" class="flex items-center px-4 py-3 space-x-2 rounded hover:bg-cyan-700 hover:text-cyan-300">
                    <img style="filter: invert(100%);" src="../assets/cblol.png" alt="icon" width="16" height="16">
                    <span class="text-white poppins">CBLOL</span>
                </a>
                <a href="/" class="flex items-center px-4 py-3 space-x-2 rounded hover:bg-cyan-700 hover:text-cyan-300">
                    <img src="../assets/lcs.png" alt="icon" width="16" height="16">
                    <span class="text-white poppins">LCS</span>
                </a>
                <a href="/" class="flex items-center px-4 py-3 space-x-2 rounded hover:bg-cyan-700 hover:text-cyan-300">
                    <img style="filter: invert(100%);" src="../assets/lec.png" alt="icon" width="16" height="16">
                    <span class="text-white poppins">LEC</span>
                </a>

                <a href="/" class="flex items-center px-4 py-3 space-x-2 rounded hover:bg-cyan-700 hover:text-cyan-300">
                    <img src="../assets/ljl.png" alt="icon" width="16" height="16">
                    <span class="text-white poppins">LJL</span>
                </a>
            </nav>
        </div>
    </div>


    <!-- sidebar -->
    <div class="relative flex max-h-screen">
        <div class="absolute inset-y-0 left-0 px-2 py-6 mt-4 ml-2 space-y-6 transition duration-200 ease-in-out transform -translate-x-full bg-gray-900 rounded-lg w-60 text-cyan-100 md:relative md:-translate-x-0">
            <a href="" class="flex items-center px-4 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="w-5 h-5 text-white" viewBox="0 0 16 16">


  <!-- <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
 -->
 <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                    
                    <span class="text-xl font-bold text-white poppins">Countries</span>
                </svg>
            </a>
            <nav>
                <a href="/" class="flex items-center px-4 py-3 space-x-2 rounded hover:bg-cyan-700 hover:text-cyan-300">
                    <img src="../assets/br_flag.png" alt="icon" width="16" height="16">
                    <span class="text-white poppins">Brazil</span>
                </a>
                <a href="/" class="flex items-center px-4 py-3 space-x-2 rounded hover:bg-cyan-700 hover:text-cyan-300">
                    <img src="../assets/us_flag.png" alt="icon" width="16" height="16">
                    <span class="text-white poppins">USA</span>
                </a>
                <a href="/" class="flex items-center px-4 py-3 space-x-2 rounded hover:bg-cyan-700 hover:text-cyan-300">
                    <img src="../assets/de_flag.png" alt="icon" width="16" height="16">
                    <span class="text-white poppins">Germany</span>
                </a>

                <a href="/" class="flex items-center px-4 py-3 space-x-2 rounded hover:bg-cyan-700 hover:text-cyan-300">
                    <img src="../assets/jp_flag.png" alt="icon" width="16" height="16">
                    <span class="text-white poppins">Japan</span>
                </a>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style>
    .poppins {
        font-family: 'Poppins', sans-serif;
    }

    .montserrat {
        font-family: 'Montserrat', sans-serif;
    }
</style>