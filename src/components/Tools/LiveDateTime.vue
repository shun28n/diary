<template>
  <div class="text-h5 ml-5">
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
            this.date = format(new Date(), 'yyyy/MM/d　H:mm')
            setTimeout(this.getDate, 30000)
        }
    },
    mounted(){
        this.getDate()
    }
};
</script>

<style>
</style>