<template>
     <!-- Sidebar -->
     <aside
      class="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 transform transition-transform duration-300"
      :class="{ 'translate-x-0': isSidebarOpen, 'translate-x-full': !isSidebarOpen }"
    >
      <div class="text-2xl font-bold">Merchant Dashboard</div>

      <!-- Sidebar Links -->
      <nav>
        <ul>
          <li>
            <nuxt-link
              class="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
              to="/profile"
            >
              <span class="mr-2">
                <IconsUser/>
            </span> Profile
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
              to="/payment"
            >
              <span class="mr-2"> <IconsPayment/></span> Payment
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </aside>
</template>
  
<script setup>
import { ref } from 'vue';

const isSidebarOpen = ref(true);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<style>
/* Your other styles... */

/* Animation classes */
.translate-x-0 {
  transform: translateX(0);
}

.translate-x-full {
  transform: translateX(-100%);
}
</style>