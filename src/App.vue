<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col>
          <div>
            <b-card title="3rd Party Instruction">
              <b-row>
                <b-col>
                  <ComponentA style="margin-top: 75px"/>
                  <ComponentB />
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'

export default {
  name: 'App',
  components: {
    ComponentA,
    ComponentB
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  padding-top: 2rem;
}
</style>
