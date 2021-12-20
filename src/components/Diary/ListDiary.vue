<template>
  <v-list
    class="pt-0"
    flat
  >
    <diary 
      v-for="diary in $store.state.diarys"
      :key="diary.id"
      :diary="diary"
    />
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
export default {
  computed: {
    diarys: {
        get() {
            return this.$store.state.diarys
        },
        set(value) {
            this.$store.commit('setTasks', value)
        }
    }
  },
  components: {
    'diary': require('@/components/Diary/Diary.vue').default,
    draggable
  }
}
</script>