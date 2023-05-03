<template>
	<div>
	  <Navbar />
	  <div class="relative mt-1">
		<Sidebar />
	  </div>
	</div>
</template>
  


<script>
	import Navbar from "./components/Navbar.vue";
	import Sidebar from "./components/Sidebar.vue";

	export default {
		name: "App",
		components: {
			Navbar,
			Sidebar,
		},
	};
</script>