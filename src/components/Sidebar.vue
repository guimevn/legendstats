<template>
    <!-- to-do: optimize my code especially in <a> tag using for each -->

    <!-- sidebar -->
    <!-- teste -->
    <div class="relative flex max-h-screen">
        <div class="absolute inset-y-0 left-0 px-2 py-6 mt-4 ml-2 space-y-6 transition duration-200 ease-in-out transform -translate-x-full bg-gray-900 rounded-lg w-60 text-cyan-100 md:relative md:-translate-x-0">

            <!-- title -->
            <a href="" class="flex items-center px-4 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-white a-title" viewBox="0 0 16 16">
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
                    <span class="text-xl font-bold text-white a-title poppins">Tournaments</span>
                </svg>
            </a>

            <!-- items -->
            <nav>
                <a href="#" class="flex items-center px-4 py-3 space-x-2 rounded hover:bg-green-500 hover:text-cyan-300">
                    <img style="filter: invert(100%);" src="../assets/cblol.png" alt="icon" width="16" height="16">
                    <span class="text-white poppins">CBLOL</span>
                </a>
                <a href="#" class="flex items-center px-4 py-3 space-x-2 rounded hover:bg-green-500 hover:text-cyan-300">
                    <img src="../assets/lcs.png" alt="icon" width="16" height="16">
                    <span class="text-white poppins">LCS</span>
                </a>
                <a href="#" class="flex items-center px-4 py-3 space-x-2 rounded hover:bg-green-500 hover:text-cyan-300">
                    <img style="filter: invert(100%);" src="../assets/lec.png" alt="icon" width="16" height="16">
                    <span class="text-white poppins">LEC</span>
                </a>
                <a href="#" class="flex items-center px-4 py-3 space-x-2 rounded hover:bg-green-500 hover:text-cyan-300">
                    <img src="../assets/ljl.png" alt="icon" width="16" height="16">
                    <span class="text-white poppins">LJL</span>
                </a>
            </nav>
            
        </div>
    </div>


    <!-- sidebar -->
    <div class="relative flex max-h-screen">
        <div class="absolute inset-y-0 left-0 px-2 py-6 mt-4 ml-2 space-y-6 transition duration-200 ease-in-out transform -translate-x-full bg-gray-900 rounded-lg w-60 text-cyan-100 md:relative md:-translate-x-0">

            <!-- title -->
            <a href="" class="flex items-center px-4 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-white a-title" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                    <span class="text-xl font-bold text-white a-title poppins">Countries</span>
                </svg>
            </a>

            <!-- items -->
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

    a:hover .a-title {
        color: rgb(34 197 94 / var(--tw-bg-opacity));
    }
</style>