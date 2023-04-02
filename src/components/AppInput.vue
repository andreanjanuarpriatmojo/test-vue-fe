<template>
    <b-form-group :label="label">
        <b-form-input :index="index" :name="name" :type="type" :placeholder="placeholder" :required="required" :value="value" @input="getValue('input', $event)"></b-form-input>
    </b-form-group>
</template>

<script>
export default {
  name: 'AppInput',
  data () {
    return {
      prop: this.name,
      count: this.index
    }
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
    value: [],
    name: String,
    index: {
      type: Number,
      default: null
    }
  },
  methods: {
    getValue (type, e) {
      this.$emit(type, e)
      if (this.count == null) {
        this.$store.commit('setForm', { key: this.prop, value: e })
      } else {
        this.$store.commit('setCost', { index: this.count, key: this.prop, value: e })
      }
    }
  }
}
</script>
