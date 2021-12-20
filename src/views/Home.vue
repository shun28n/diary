<template>
  <div class="home">
    <v-row>
      <v-col>
        <add-diary />
        <list-diary />
        <dialog />
        <v-dialog v-model="$store.state.dialog" max-width="1200px">
          <v-card>
            <v-card-title> 入力フォーム </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="8">
                  <v-textarea
                    ma-5
                    outlined
                    name="input-7-4"
                    label="Outlined textarea"
                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                  ></v-textarea>
                  <v-btn >
                    完了
                  </v-btn>
                </v-col>
                <v-col cols="4">
                  <draggable handle=".handle">
                    <v-list class="pt-0" flat v-for="format in formats" :key="format.id">
                      <v-textarea disabled name="format.title" label="format.title" max-height="40px">
                      </v-textarea>
                    </v-list>
                  </draggable>
                </v-col>
              </v-row>
            </v-container>
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
              <v-btn color="primary" text @click="dialog2 = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Diary from "@/components/Diary/Diary.vue";
import draggable from "vuedraggable";

export default {
  name: "home",
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      notifications: false,
      sound: true,
      widgets: false,
      formats: [
        {
          id: 1,
          title: "読書メモ",
          done: false,
          dueDate: "2020-10-16",
        },
        {
          id: 2,
          title: "言葉メモ",
          done: false,
          dueDate: "2020-10-17",
        },
        {
          id: 3,
          title: "デザインメモ",
          done: false,
          dueDate: null,
        },
      ],
    };
  },
  components: {
    "list-diary": require("@/components/Diary/ListDiary.vue").default,
    "add-diary": require("@/components/Diary/AddDiary.vue").default,
    dialog: require("@/components/Diary/Dialogs/Dialog.vue").defaul
  },
  methods: {
    displayDialog() {
      this.$store.dispath("displayDialog");
    },
  },
};
</script>
