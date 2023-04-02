<template>
    <b-form-group :label="label">
        <b-form-input :required="required"></b-form-input>
    </b-form-group>
</template>

<script>
export default {
  name: 'AppInput',
  data () {
    return {}
  },
  props: {
    label: String,
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>
