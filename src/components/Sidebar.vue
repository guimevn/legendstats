<template>
    <!-- to-do: optmize my code especially in <a> tag using for each -->

    <div class="relative flex max-h-screen">
    <!-- sidebar -->
    <div class="absolute inset-y-0 left-0 px-2 py-6 ml-2 space-y-6 transition duration-200 ease-in-out transform -translate-x-full bg-gray-900 rounded-lg w-60 text-cyan-100 md:relative md:-translate-x-0">
            <a href="" class="flex items-center px-4 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="w-5 h-5 text-white" viewBox="0 0 16 16">
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
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