<template>
  <div class="gap-6 flex justify-center">
    <div
      class="flex justify-center bg-gray-100  shadow-xl  rounded-xl p-5 "
    >
      <div class="flex flex-col">
        <slot name="heading"> </slot>
        <div class="">
          <div class=" ">
            <slot name="data"></slot>
            <slot name="date"></slot>
          </div>
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
