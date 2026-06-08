<template>
  <div class="space-y-6">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Notice Board</h2>
      <button class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-all flex items-center justify-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
        Post Notice
      </button>
    </div>

    <!-- Notices List -->
    <div class="grid grid-cols-1 gap-4">
      
      <!-- Single Notice -->
      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 left-0 w-1 h-full bg-yellow-400"></div>
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">Annual Sports Day 2026</h3>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">All Students</span>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          The Annual Sports Day will be held on Nov 15th. All students are requested to register for their interested events by Nov 10th.
        </p>
        <div class="flex items-center text-xs text-gray-400 dark:text-gray-500">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          Posted on Oct 10, 2026
        </div>
      </div>
      
      <!-- Single Notice -->
      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">Exam Schedule Updated</h3>
          <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Teachers</span>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Please note that the mid-term exam schedule has been updated. Check the portal for the latest duty assignments.
        </p>
        <div class="flex items-center text-xs text-gray-400 dark:text-gray-500">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          Posted on Oct 08, 2026
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// Real API fetching would be placed here
</script>
