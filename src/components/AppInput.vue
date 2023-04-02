<template>
    <b-form-group :label="label">
        <b-form-input :type="type" :placeholder="placeholder" :required="required" :value="value" @input="$emit('input', $event)"></b-form-input>
    </b-form-group>
</template>

<script>
export default {
  name: 'AppInput',
  data () {
    return { }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    value: []
  }
}
</script>
