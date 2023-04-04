import { shallowMount } from '@vue/test-utils'
import AppInput from '@/components/AppInput.vue'

describe('components/AppInput.vue', () => {
  it('has data and its a function', () => {
    expect(typeof AppInput.data).toBe('function')
  })
})

describe('components/AppInput.vue', () => {
  it('render correct label when passed', () => {
    const label = 'This is Label'
    const wrapper = shallowMount(AppInput, {
      propsData: {
        label: label
      }
    })
    expect(wrapper.attributes().label).toContain(label)
  })
})

// describe('components/AppInput.vue', () => {
//   it('render correct type when passed', () => {
//     const type = 'number'
//     const wrapper = shallowMount(AppInput, {
//       propsData: {
//         type: type
//       }
//     })
//     expect(wrapper.attributes().type).toContain(type)
//   })
// })

// describe('components/AppInput.vue', () => {
//   it('render correct placeholder when passed', () => {
//     const placeholder = 'placeholder'
//     const wrapper = shallowMount(AppInput, {
//       propsData: {
//         placeholder: placeholder
//       }
//     })
//     expect(wrapper.attributes().placeholder).toContain(placeholder)
//   })
// })

// describe('components/AppInput.vue', () => {
//   it('render correct name when passed', () => {
//     const name = 'name'
//     const wrapper = shallowMount(AppInput, {
//       propsData: {
//         name: name
//       }
//     })
//     expect(wrapper.attributes().name).toContain(name)
//   })
// })

// describe('components/AppInput.vue', () => {
//   it('render correct index when passed', () => {
//     const index = 1
//     const wrapper = shallowMount(AppInput, {
//       propsData: {
//         index: index
//       }
//     })
//     expect(wrapper.attributes().index).toContain(index)
//   })
// })
