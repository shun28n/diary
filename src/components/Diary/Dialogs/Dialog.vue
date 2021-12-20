<template>
  <v-dialog v-model="$store.state.dialog" max-width="500px">
    <v-card>
      <v-card-title> Dialog_component </v-card-title>
      <v-card-text>
        <v-btn color="primary" dark @click="dialog3 = !dialog3">
          Open Dialog 3
        </v-btn>
        <v-select
          :items="select"
          label="A Select List"
          item-value="text"
        ></v-select>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="dialog2 = false"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
    }
  }
};
</script>

<style>
</style>