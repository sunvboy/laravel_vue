<template>
    <div class="w-[200px] transition-all bg-indigo-700 py-4 px-2">
        <div class="overflow-y-auto">
            <ul class="space-y-2">
                <li>
                    <router-link
                        :to="{ name: 'app.dashboard' }"
                        class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-indigo-300 dark:hover:bg-gray-700"
                    >
                        <HomeIcon class="w-6 h-6" />
                        <span class="ml-3">Dashboard</span>
                    </router-link>
                </li>
                <li>
                    <router-link
                        :to="{ name: 'app.dashboard' }"
                        class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-indigo-300 dark:hover:bg-gray-700"
                    >
                        <UserIcon class="w-6 h-6" />
                        <span class="ml-3">Thành viên</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { HomeIcon, UserIcon } from "@heroicons/vue/solid";
</script>
