<template>
  <div class="flex items-center justify-center w-full bg-gray-50 py-2.5 sm:px-3.5">
    <div class="bg-gray-200 py-1.5 px-2 rounded-md">
      <div id="balanceHolder" class="flex justify-between items-center md:justify-center">
        <div class="flex justify-center items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0047AB" class="size-6">
              <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
              <path
                fill-rule="evenodd"
                d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="flex flex-col mx-5">
            <strong class="font-semibold text-slate-600"> Balance </strong>
            <strong class="text-slate-800">$12343.445</strong>
          </div>
        </div>

        <div class="sm:ml-0 items-center justify-center">
          <a
            href="#"
            class="flex items-center align-middle rounded-md bg-blue-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            <span>
              <PlusIcon class="h-6 align-middle" />
            </span>
            Top Up Balance</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
#balanceHolder{
display:flex;
justify-content: space-between;
}
</style>