<template>
<div class="px-10 sm:px-20 lg:px-24 xl:px-44 h-full flex items-center mx-auto">
    <div class="mx-auto before:h-px after:h-px w-full">
        <div class="font-bold text-center text-3xl mb-4">Uda Putera</div>
        <div class="flex flex-col gap-5 md:gap-10">
            <div>
                <div
                    class="join w-full items-center bg-base-100 pr-2 shadow-[0_7px_00px_8px_rgba(0,0,0,1)] focus:shadow-[0_5px_00px_6px_rgba(0,0,0,1)] md:shadow-[0_10px_00px_12px_rgba(0,0,0,1)] md:focus:shadow-[0_9px_00px_10px_rgba(0,0,0,1)] duration-200">
                    <input v-model="formData.email" type="text" placeholder="email"
                        class="join-item input max-sm:input-sm w-full focus:border-0 focus:outline-0">
                    <LucideMailCheck :size="36" class="join-item" />
                </div>
                <div class="mt-6 text-error" v-if="errors.email">{{ errors.email }}</div>
            </div>
            <div>
                <div
                    class="join items-center bg-base-100 pr-2 shadow-[0_7px_00px_8px_rgba(0,0,0,1)] focus:shadow-[0_5px_00px_6px_rgba(0,0,0,1)] md:shadow-[0_10px_00px_12px_rgba(0,0,0,1)] md:focus:shadow-[0_9px_00px_10px_rgba(0,0,0,1)] duration-200">
                    <input v-model="formData.password" type="password" placeholder="password"
                        class="join-item input max-sm:input-sm w-full focus:border-0 focus:outline-0">
                    <LucideKeySquare :size="36" class="join-item" />
                </div>
                <div class="mt-6 text-error" v-if="errors.password">{{ errors.password }}</div>
            </div>

            <div class="text-right max-sm:mt-2">
                <button @click="doLogin"
                    class="btn max-sm:btn-sm btn-base-100 w-min shadow-[0_5px_00px_6px_rgba(0,0,0,1)] md:shadow-[0_7px_00px_8px_rgba(0,0,0,1)]">LOGIN</button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'clear',
    middleware: ['auth']
});

const AuthStore = useAuthStore();

const formData = ref<{ email: string, password: string }>({
    email: '',
    password: ''
});
const errors = ref<Record<string, string>>({})

const doLogin = async () => {
    try {
        const form = validate(authValidation, formData.value);

        await AuthStore.login(form);
    } catch (error: any) {
        if (error.isJoi) {
            errors.value = error.data;
        }
    }
}

</script>
