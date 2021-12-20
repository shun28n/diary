<template>
  <v-card class="ma-2 blue lighten-4">
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-text-field
            v-model="newDiary.title"
            @keyup.enter="addDiary"
            class="pa-3"
            label="日記タイトル"
            hide-details
            clearable
          >
            <template v-slot:append>
              <v-icon @click="addDiary" color="primary"> mdi-plus </v-icon>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="newDiary.date" class="pa-3" label="日付">
            {{ newDiary.date }}
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea v-model="newDiary.article" color="teal">
            <template v-slot:label>
              <div>本文 <small>(optional)</small></div>
            </template>
          </v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { format } from "date-fns";
import getDate from "date-fns/fp/getDate/index.js";
export default {
  data() {
    return {
      newDiary: [
        {
          id: "",
          title: "",
          article: "",
          date: "",
          dateTime: "",
        },
      ],
    };
  },
  computed: {
    //空登録無効
    newDiaryTitleInvalid() {
      return !this.newDiary.title;
    },
  },
  methods: {
    addDiary() {
      if (!this.newDiaryTitleInvalid) {
        this.setDate();
        this.$store.dispatch("addDiary", this.newDiary);
      }
    },
    setDate() {
      this.newDiary.date = format(new Date(), "yyyy/MM/d");
      this.newDiary.dateTime = format(new Date(), "H:mm:ss");
    },
  },
  computed: {
  },
  components: {
    dialog: require("@/components/Diary/Dialogs/Dialog.vue").default,
  },
};
</script>