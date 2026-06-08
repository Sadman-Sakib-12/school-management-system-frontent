<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
    <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-gray-700 p-8 transform transition-all hover:scale-[1.01]">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-2">School Portal</h1>
        <p class="text-gray-500 dark:text-gray-400">Sign in to access your account</p>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Auth Layout for Login/Register
</script>
