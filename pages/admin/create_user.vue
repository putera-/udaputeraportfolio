<template>
<div class="px-10 sm:px-20 lg:px-24 xl:px-44 h-full flex items-center mx-auto">
    <div class="mx-auto before:h-px after:h-px w-full">
        <div class="font-bold text-center text-3xl mb-4">Create Admin User</div>
        <div class="flex flex-col gap-5 md:gap-10">
            <div>
                <div
                    class="join w-full items-center bg-base-100 pr-2 shadow-[0_7px_00px_8px_rgba(0,0,0,1)] focus:shadow-[0_5px_00px_6px_rgba(0,0,0,1)] md:shadow-[0_10px_00px_12px_rgba(0,0,0,1)] md:focus:shadow-[0_9px_00px_10px_rgba(0,0,0,1)] duration-200">
                    <input v-model="formData.name" type="text" placeholder="Name"
                        class="join-item input max-sm:input-sm w-full focus:border-0 focus:outline-0">
                    <LucideUserRoundCheck :size="36" class="join-item" />
                </div>
                <div class="mt-6 text-error" v-if="errors.name">{{ errors.name }}</div>
            </div>
            <div>
                <div
                    class="join w-full items-center bg-base-100 pr-2 shadow-[0_7px_00px_8px_rgba(0,0,0,1)] focus:shadow-[0_5px_00px_6px_rgba(0,0,0,1)] md:shadow-[0_10px_00px_12px_rgba(0,0,0,1)] md:focus:shadow-[0_9px_00px_10px_rgba(0,0,0,1)] duration-200">
                    <input v-model="formData.email" type="text" placeholder="Email"
                        class="join-item input max-sm:input-sm w-full focus:border-0 focus:outline-0">
                    <LucideMailCheck :size="36" class="join-item" />
                </div>
                <div class="mt-6 text-error" v-if="errors.email">{{ errors.email }}</div>
            </div>
            <div>
                <div
                    class="join items-center bg-base-100 pr-2 shadow-[0_7px_00px_8px_rgba(0,0,0,1)] focus:shadow-[0_5px_00px_6px_rgba(0,0,0,1)] md:shadow-[0_10px_00px_12px_rgba(0,0,0,1)] md:focus:shadow-[0_9px_00px_10px_rgba(0,0,0,1)] duration-200">
                    <input v-model="formData.password" type="password" placeholder="Password"
                        class="join-item input max-sm:input-sm w-full focus:border-0 focus:outline-0">
                    <LucideKeySquare :size="36" class="join-item" />
                </div>
                <div class="mt-6 text-error" v-if="errors.password">{{ errors.password }}</div>
            </div>
            <div>
                <div
                    class="join items-center bg-base-100 pr-2 shadow-[0_7px_00px_8px_rgba(0,0,0,1)] focus:shadow-[0_5px_00px_6px_rgba(0,0,0,1)] md:shadow-[0_10px_00px_12px_rgba(0,0,0,1)] md:focus:shadow-[0_9px_00px_10px_rgba(0,0,0,1)] duration-200">
                    <input v-model="formData.password_confirm" type="password" placeholder="Password Confirm"
                        class="join-item input max-sm:input-sm w-full focus:border-0 focus:outline-0">
                    <LucideKeySquare :size="36" class="join-item" />
                </div>
                <div class="mt-6 text-error" v-if="errors.password_confirm">{{ errors.password_confirm }}</div>
            </div>

            <div class="flex justify-end items-center max-sm:mt-2">
                <div class="text-error text-sm mr-4" v-if="responseError">{{ responseError }}</div>
                <button @click="doCreateUser"
                    class="btn max-sm:btn-sm btn-error w-min text-nowrap flex flex-nowrap shadow-[0_5px_00px_6px_rgba(0,0,0,1)] md:shadow-[0_7px_00px_8px_rgba(0,0,0,1)]">
                    CREATE USER
                    <IconsCatLoading v-show="isLoading" class="w-8" />
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'clear',
    middleware: [async () => {
        const AuthStore = useAuthStore();
        const exist = await AuthStore.is_user_exist();

        if (exist) return navigateTo('/admin/login');

    }]
});

const AuthStore = useAuthStore();

const formData = ref<Record<string, any>>({
    name: '',
    email: '',
    password: '',
    password_confirm: ''
});

const errors = ref<Record<string, string>>({});
const responseError = ref<string>("");
const isLoading = ref(false);

const doCreateUser = async () => {
    errors.value = {};
    responseError.value = '';
    try {
        isLoading.value = true;
        const form = validate(createUserValidation, formData.value);


        await AuthStore.create_user(form);
    } catch (error: any) {
        isLoading.value = false;
        if (error.isJoi) {
            errors.value = error.data;
        } else {
            responseError.value = error.data.message;
        }
    }
}

</script>
