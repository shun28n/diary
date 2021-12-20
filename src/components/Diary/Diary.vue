<template>
  <v-card class="blue-grey lighten-3 ma-2">
          <v-card-title>
            <v-slot class="text-h6">{{ diary.date }}</v-slot> 
            <v-slot class="text-subtitle2 pl-2">{{ diary.dateTime }}</v-slot>
            <v-slot class="text-subtitle1 pl-4 font-weight-bold">{{ diary.title }}</v-slot>
          </v-card-title>
    <v-card-text>
      <div class="text-body-1">
        {{ diary.article }}
      </div>
    </v-card-text>

    <v-list-item-action v-if="$store.state.sorting">
      <v-btn class="handle" color="primary" icon>
        <v-icon>mdi-drag-horizontal-variant </v-icon>
      </v-btn>
    </v-list-item-action>
  </v-card>
</template>

<script>
// import { format } from 'date-fns'
export default {
  props: ["diary"],
  filters: {
    niceDate(value) {
      return format(new Date(value), "MMM d");
      //=> '02/11/2014'
    },
  },
  components: {},
};
</script>
<style lang="sass">
.sortable-ghost
    opacity: 0
.sortable-drag
    box-shadow: 0 0 4px rgba(0,0,0,3)
</style>