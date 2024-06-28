<template>
  <div class="flex justify-center">
    <div
      class="flex justify-center bg-gray-100 hover:bg-slate-300 shadow-xl  rounded-xl  p-2 "
    >
      <div class="flex flex-col">
        <slot name="heading"> </slot>
        <div class="">
          <div class="">
            <slot name="data"></slot>
            </div>
          <slot class="" name="date"></slot>
        </div>
      </div>
      <div class="pl-4 text-gray-900">
        <slot name="analitics"> </slot>
      </div>
    </div>
  </div>
</template>

<script></script>
<style></style>
