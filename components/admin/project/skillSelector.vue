
import type { emits } from 'v-calendar/dist/types/src/use/datePicker.js';
<template>
<input type="checkbox" v-model="_show" class="modal-toggle" />
<div class="modal" role="dialog">
    <div class="modal-box overflow-visible">
        <form method="dialog">
            <button @click="$emit('close')" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-bold text-lg mb-2">Skills</h3>
        <div>
            <div v-for="category in SkillStore.categories">
                <label class="label-text font-semibold flex items-center gap-4 mt-2 mb-px">{{ category.title }}</label>
                <div class="flex flex-wrap gap-2">
                    <Skill :skill="skill" v-for="skill of category.skills"
                        class="bg-slate-500 cursor-pointer hover:scale-105" @click="$emit('select', skill, category)"
                        :class="{ '!bg-base-100': selected.findIndex(f => f.id == skill.id) < 0 }" />
                </div>
            </div>
        </div>

        <div class="modal-action flex justify-end items-center">
            <button @click="$emit('close')" class="btn">Close!</button>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
defineEmits(['close', 'select']);
const props = defineProps<{
    show: Boolean
    selected: Skill[]
}>();

const _show = ref<Boolean>(props.show);

watchEffect((): void => {
    _show.value = props.show;
});

const SkillStore = useSkillStore();
</script>
