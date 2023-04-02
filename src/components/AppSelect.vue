<template>
    <b-form-group :label="label">
        <b-form-select :index="index" :name="name" :options="options" :value="value" @change="getValue('input', $event)" :required="required"></b-form-select>
    </b-form-group>
</template>
<script>
export default {
  name: 'AppSelect',
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
    required: {
      type: Boolean,
      default: false
    },
    options: [],
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
