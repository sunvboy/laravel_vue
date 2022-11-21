<template>
    <GuestLayout title="Quản trị website">
        <form class="mt-8 space-y-6" method="POST" @submit.prevent="login">
            <div
                v-if="errorMsg"
                class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded"
            >
                {{ errorMsg }}
                <span
                    @click="errorMsg = ''"
                    class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </span>
            </div>
            <div class="-space-y-px rounded-md shadow-sm">
                <div>
                    <label for="email-address" class="sr-only">Email</label>
                    <input
                        v-model="user.email"
                        id="email-address"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required=""
                        class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <label for="password" class="sr-only">Mật khẩu</label>
                    <input
                        v-model="user.password"
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        required=""
                        class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Mật khẩu"
                    />
                </div>
            </div>

            <div class="flex items-center justify-center">
                <router-link
                    :to="{ name: 'requestPassword' }"
                    class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >Quên mật khẩu?</router-link
                >
            </div>
            <div>
                <button
                    :disabled="loading"
                    type="submit"
                    class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    :class="{
                        'cursor-not-allowed': loading,
                        'hover:bg-indigo-500': loading,
                    }"
                >
                    <svg
                        v-if="loading"
                        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                        ></circle>
                        <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    <span
                        class="absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                        <LockClosedIcon
                            class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                            aria-hidden="true"
                        />
                    </span>
                    Đăng nhập
                </button>
            </div>
        </form>
    </GuestLayout>
</template>
<script setup>
import { LockClosedIcon } from "@heroicons/vue/solid";
import { ref } from "vue";
import GuestLayout from "../../components/GuestLayout.vue";
import store from "../../store";
import router from "../../router";
let loading = ref(false);
let errorMsg = ref("");
const user = {
    email: "",
    password: "",
    remember: true,
};
function login() {
    loading.value = true;
    store
        .dispatch("login", user)
        .then(() => {
            loading.value = false;
            router.push({ name: "app.dashboard" });
        })
        .catch(({ response }) => {
            loading.value = false;
            errorMsg.value = response.data.message;
        });
}
</script>
