<template>
    <b-button @click="$emit('hit-click')" :variant="variant" :size="size" :pill="pill">{{ label }}</b-button>
</template>

<script>

export default {
  name: 'AppButton',
  data () {
    return {}
  },
  props: {
    label: String,
    variant: String,
    size: String,
    pill: {
      type: Boolean,
      default: false
    }
  }
}
</script>
