<template>
    <div class="componenta">
        <b-card>
            <b-card-body>
                <b-row>
                    <b-col cols="2">
                        <b-dropdown variant="outline-secondary" style="width: 100%">
                            <template #button-content>
                                <b-icon icon="truck" aria-hidden="true"></b-icon>  Logistic Instruction
                            </template>
                            <b-dropdown-item><b-icon icon="globe2" aria-hidden="true"></b-icon>  Send Instruction</b-dropdown-item>
                            <b-dropdown-item><b-icon icon="gear-wide-connected" aria-hidden="true"></b-icon>  Admin Instruction</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col cols="10">
                        <b-button pill variant="secondary" size="sm" style="width: 175px;">Draft</b-button>
                        <hr>
                        <b-row>
                            <b-col cols="10" style="border-right: 1px dotted gainsboro;">
                                <b-row>
                                    <b-col cols="3">
                                        <b-form-group label="Assigned Vendor">
                                            <b-form-select required></b-form-select>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="3">
                                        <b-form-group label="Attention Of">
                                            <b-form-input required></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="3">
                                        <b-form-group label="Quotation No.">
                                            <b-form-input required></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="3">
                                        <b-form-group label="Invoice To">
                                            <b-form-select required></b-form-select>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="12">
                                        <b-form-group label="Vendor Address">
                                            <b-form-input required></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col cols="2">
                                <b-row>
                                    <b-col cols="12">
                                        <b-form-group label="Customer - Contract">
                                            <b-form-select required></b-form-select>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="12">
                                        <b-form-group label="Customer PO No.">
                                            <b-form-select required></b-form-select>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
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
      selected: 1
    }
  }
}
</script>
