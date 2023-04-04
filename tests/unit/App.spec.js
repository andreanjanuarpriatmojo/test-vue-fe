import AppVue from '@/App.vue'

describe('App.vue', () => {
  it('has data', () => {
    expect(typeof AppVue.data).toBe('function')
  })
})
