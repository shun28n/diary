<template>
  <div class="text-h4 ml-10">
      {{date}}
  </div>
</template>

<script>
import { format } from 'date-fns'
export default {
    data(){
        return {
            date: ''
        }
    },
    methods:{
        getDate(){
            this.date = format(new Date(), 'yyyy/MM/d　H:mm:ss')
            setTimeout(this.getDate, 1000)
        }
    },
    mounted(){
        this.getDate()
    }
};
</script>

<style>
</style>