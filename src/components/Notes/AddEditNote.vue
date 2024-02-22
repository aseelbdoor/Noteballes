<template>
    <div :class="`form mb-4 has-background-${bgColor}-dark`">
        <div class="field ">
            <div class="control">
                <textarea v-model="Store.newNote" class="textarea" :placeholder="placeholder" ref="focusArea" v-auto-focus maxlength="100"></textarea>
            </div>
        </div>
        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useNotesStore } from '@/stores/storeNotes';
import { ref } from 'vue';
import { vAutoFocus } from '@/directives/vAutofocas';

const Store = useNotesStore();

/*
  props
*/

const props = defineProps({
    bgColor: {
        type: String,
        default: 'success'
    },
    placeholder: {
        type: String,
        default: 'Type something...'
    },
    label: {
        type: String
    }
})

// const emit =defineEmits(['update:moduleValue']);


const focusArea = ref();
// Emits an event to the parent component when the textarea has been clicked on.

const focusTextarea = () => {
    focusArea.value.focus();
}

defineExpose({
    focusTextarea
})

</script>