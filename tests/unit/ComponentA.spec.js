import ComponentA from '@/components/ComponentA.vue'

describe('components/ComponentA.vue', () => {
  it('has data and its a function', () => {
    expect(typeof ComponentA.data).toBe('function')
  })
})
