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
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <!-- <ComponentB /> -->
  </div>
</template>

<script>
// import ComponentB from './components/ComponentB.vue'
import ComponentA from './components/ComponentA.vue'

export default {
  name: 'App',
  components: {
    // ComponentB
    ComponentA
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  padding-top: 2rem;
}
</style>
