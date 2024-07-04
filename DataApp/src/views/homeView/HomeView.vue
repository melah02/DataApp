<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium'
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            type="button"
            class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium'
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>

  <div class="bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-800 h-[50vh]">
    <p class=" flex mx-6 py-8"><strong>Hi Melah,<br />Welcome to Marsh Data.</strong></p>
    <BalanceBar></BalanceBar>
  </div>
  <Card class="-my-16">
    <template #heading>
      <h1 class="text-2xl text-blue-500"><strong>Stable Link</strong></h1>
    </template>

    <template #data> <div class="text-green-500 rounded-full">Active</div></template>
    <template #date>
      <div class="text-2xl text-blue-500">{{ day }} - {{ month }} - {{ date }}th</div>
    </template>

    <template #analitics> <WifiIcon class="h-16 w-16 text-blue-500"></WifiIcon> </template>
  </Card>
  <div class="mt-24 bg-white">
    <div>
      <h1 class="text-gray-900 text-3xl mb-6"><strong>Products</strong></h1>
    </div>
    <div class="flex justify-center items-center ">
      <!-- Airtime -->
      <Card class=" p-2">
        <template #heading>
          <h1 class="text-blue-500"><strong>Airtime</strong></h1>
        </template>

        <template #data> <div class="text-green-500 rounded-full">...</div></template>
        <template #date>
          <div class="text-blue-500"></div>
        </template>

        <template #analitics> <PhoneIcon class="h-3 w-3 text-blue-500"></PhoneIcon> </template>
      </Card>
      <!-- Data -->
      <Card class="p-2">
        <template #heading>
          <h1 class="text-blue-500"><strong>Data</strong></h1>
        </template>

        <template #data> <div class="text-green-500 rounded-full">...</div></template>
        <template #date>
          <div class="text-blue-500"></div>
        </template>

        <template #analitics> <WifiIcon class="h-3 w-3 text-blue-500"></WifiIcon> </template>
      </Card>
      <!-- Electricity -->
      <Card class="p-2">
        <template #heading>
          <h1 class="text-blue-500"><strong>Electricity</strong></h1>
        </template>

        <template #data> <div class="text-green-500 rounded-full">...</div></template>
        <template #date>
          <div class="text-blue-500"></div>
        </template>

        <template #analitics> <BoltIcon class="h-3 w-3 text-blue-500"></BoltIcon> </template>
      </Card>
    </div>
    <div class="flex justify-center items-center mb-16">
      <!-- Data pin -->
      <Card class="p-2">
        <template #heading>
          <h1 class="text-blue-500"><strong>Data pin</strong></h1>
        </template>

        <template #data> <div class="text-green-500 rounded-full">...</div></template>
        <template #date>
          <div class="text-blue-500"></div>
        </template>

        <template #analitics> <LockOpenIcon class="h-3 w-3 text-blue-500"></LockOpenIcon> </template>
      </Card>
      <!-- Exam Pin -->
      <Card class="p-2">
        <template #heading>
          <h1 class="text-blue-500"><strong>Exam Pin</strong></h1>
        </template>

        <template #data> <div class="text-green-500 rounded-full">...</div></template>
        <template #date>
          <div class="text-blue-500"></div>
        </template>

        <template #analitics> <ComputerDesktopIcon class="h-3 w-3 text-blue-500"></ComputerDesktopIcon> </template>
      </Card>
      <!-- Airtime swap -->
      <Card class="p-2">
        <template #heading>
          <h1 class="text-blue-500"><strong>Airtime Swap</strong></h1>
        </template>

        <template #data> <div class="text-green-500 rounded-full">...</div></template>
        <template #date>
          <div class="text-blue-500"></div>
        </template>

        <template #analitics> <ArrowPathRoundedSquareIcon class="h-3 w-3 text-blue-500"></ArrowPathRoundedSquareIcon> </template>
        </Card>
      <ButtomNav/>
    </div>

  </div>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { WifiIcon, PhoneIcon,BoltIcon,ComputerDesktopIcon, ArrowPathRoundedSquareIcon,LockOpenIcon } from '@heroicons/vue/16/solid'
import ButtomNav from "../../components/ButtomNav.vue"
import BalanceBar from '../../components/BalanceBar.vue'
import Card from '../../components/Card.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Homeview',
  components: {
    LockOpenIcon,
    ArrowPathRoundedSquareIcon,
    ComputerDesktopIcon,
    ButtomNav,
    BoltIcon,
    PhoneIcon,
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    BalanceBar,
    Card,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    WifiIcon
  },
  data() {
    return {
      date: 0,
      day: null,
      month: null,
      navigation: [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false }
      ]
    }
  },

  methods: {
    getDate() {
      const date = new Date()
      const stringDate = date + ' '
      const splitDate = stringDate.split(' ', 3)
      this.date = splitDate[2]
      this.day = splitDate[0]
      this.month = splitDate[1]
    }
  },
  mounted() {
    this.getDate()
  }
})
</script>
