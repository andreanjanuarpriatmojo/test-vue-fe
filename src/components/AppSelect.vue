<template>
    <b-form-group :label="label">
        <b-form-select :options="options" :value="value" @change="$emit('input', $event)" :required="required"></b-form-select>
    </b-form-group>
</template>
<script>
export default {
  name: 'AppSelect',
  data () {
    return { }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    options: [],
    value: []
  }
}
</script>
