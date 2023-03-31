<template>
    <div class="componenta">
        <b-card>
            <b-card-body>
                <b-row>
                    <b-col cols="2">
                        <b-form-select v-model="selected" :options="options"></b-form-select>
                    </b-col>
                    <b-col cols="10">
                        <b-button pill variant="secondary" size="sm" style="width: 175px;">Draft</b-button>
                        <hr>
                        <b-row>
                            <b-col cols="8" style="border-right: 1px dotted gainsboro;">Cols 8</b-col>
                            <b-col cols="4">Cols 4</b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </div>
</template>
<script>
export default {
  name: 'ComponentA',
  data () {
    return {
      selected: 1,
      options: [
        { value: 1, text: 'Logistic Instruction' },
        { value: 2, text: 'Transport Instruction' },
        { value: 3, text: 'Admin Instruction' }
      ]
    }
  }
}
</script>
