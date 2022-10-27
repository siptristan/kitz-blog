<template>
    <div class="card mr-4 w-36 h-36 px-5 py-5 relative bg-white rounded-xl">
        <div class="bg-red-400 w-fit h-fit px-2 py-2 absolute -top-4 left-4 rounded-lg">
            <img :src="require(`../../assets/icons/${source}`)" alt="">
        </div>
        <p class="text-xs mt-2 font-medium">{{ desc }}</p>
        <div style="top: 60% !important" class="absolute"><h1 class="font-bold text-3xl text-md">{{ value }}</h1></div>
        
    </div>
</template>
<script>
export default {
    name: 'Card',
    props: {
        source: {
            type: String,
            required: true,
            default: 'home.svg'
        },
        desc: {
            type: String,
            required: true,
            default: 'Data Not Found'
        },
        value: {
            type: Number,
            required: true,
            default: 404
        }
    }
}
</script>