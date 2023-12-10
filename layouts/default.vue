<template>
    <div class="flex h-screen bg-gray-100">
        <SideMenu />

        <!-- Content -->
        <main class="flex-1 overflow-x-hidden overflow-y-auto p-10">
            <!-- Page content will be loaded here -->
            <slot />
        </main>
    </div>
</template>
  