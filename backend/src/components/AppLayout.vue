<template>
    <div class="flex h-screen">
        <!--START: Sidebar -->
        <Sidebar :class="{ '-ml-[200px]': !sidebarOpened }" />
        <!--END: Sidebar -->
        <div class="flex-1 space-y-8">
            <TopHeader @toggle-sidebar="toggleSidebar" />
            <div class="p-4 rounded bg-white">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import store from "../store";
import Sidebar from "./Sidebar.vue";
import TopHeader from "./TopHeader.vue";
const sidebarOpened = ref(true);

function toggleSidebar() {
    sidebarOpened.value = !sidebarOpened.value;
}
function updateSidebarState() {
    sidebarOpened.value = window.outerWidth > 768;
}
onMounted(() => {
    store.dispatch("getCurrentUser");
    updateSidebarState();
    window.addEventListener("resize", updateSidebarState);
});
onUnmounted(() => {
    window.removeEventListener("resize", updateSidebarState);
});
</script>
