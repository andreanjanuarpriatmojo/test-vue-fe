import { shallowMount } from '@vue/test-utils'
import AppButton from '@/components/AppButton.vue'

describe('components/AppButton.vue', () => {
  it('has data and its a function', () => {
    expect(typeof AppButton.data).toBe('function')
  })
})

describe('components/AppButton.vue', () => {
  it('render correct label when passed', () => {
    const label = 'This is Button'
    const wrapper = shallowMount(AppButton, {
      propsData: {
        label: label
      }
    })
    expect(wrapper.text()).toContain(label)
  })
})

describe('components/AppButton.vue', () => {
  it('render correct variant when passed', () => {
    const type = 'primary'
    const wrapper = shallowMount(AppButton, {
      propsData: {
        variant: type
      }
    })
    expect(wrapper.attributes().variant).toContain(type)
  })
})

describe('components/AppButton.vue', () => {
  it('render correct size when passed', () => {
    const type = 'small'
    const wrapper = shallowMount(AppButton, {
      propsData: {
        size: type
      }
    })
    expect(wrapper.attributes().size).toContain(type)
  })
})

describe('components/AppButton.vue', () => {
  it('render correct pill when passed', () => {
    const pill = true
    const wrapper = shallowMount(AppButton, {
      propsData: {
        pill: pill
      }
    })
    expect(wrapper.attributes().pill).toBe('true')
  })
})
