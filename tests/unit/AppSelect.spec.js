import { shallowMount } from '@vue/test-utils'
import AppSelect from '@/components/AppSelect.vue'

describe('components/AppInput.vue', () => {
  it('has data and its a function', () => {
    expect(typeof AppSelect.data).toBe('function')
  })
})

describe('components/AppInput.vue', () => {
  it('render correct label when passed', () => {
    const label = 'This is Label'
    const wrapper = shallowMount(AppSelect, {
      propsData: {
        label: label
      }
    })
    expect(wrapper.attributes().label).toContain(label)
  })
})

describe('components/AppInput.vue', () => {
  it('render correct name when passed', () => {
    const name = 'name'
    const wrapper = shallowMount(AppSelect, {
      propsData: {
        name: name
      }
    })
    expect(wrapper.props().name).toContain(name)
  })
})

describe('components/AppInput.vue', () => {
  it('render correct index when passed', () => {
    const index = 1
    const wrapper = shallowMount(AppSelect, {
      propsData: {
        index: index
      }
    })
    expect(wrapper.props().index).toEqual(index)
  })
})
