<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Assignments</h2>
      <button class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-all">
        + New Assignment
      </button>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
        <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-2">Math Homework Ch. 5</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Complete all exercises from chapter 5 and upload the scanned PDF.</p>
        <div class="flex items-center text-sm text-red-500">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Due in 2 days
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Assignments Page
</script>
