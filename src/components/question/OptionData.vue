<template>
        <div @click="onClick1" class="w-50 text-center bg-purple border-radius p-1 mb-1">
            {{ value }}
        </div>
</template>
<script>
export default {
    name:'OptionData',
    props:['value'],
    methods:{
        onClick1(){
            console.log("")
            this.$emit("selfClick",this.value)
        }
    }
}
</script>
<style lang="scss" scoped>
@import "@/scss/variable.scss";

    div{
        
        &:hover{
            cursor: pointer;
            background-color: rgba($color: $purple, $alpha: .5);
        }
        .active{
            background-color:$purple;
            box-shadow: 0 0 0 2pt $border-pink;
        }
        
    }
</style>