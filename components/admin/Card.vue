<template>
    <div class="card mr-4 w-40 h-40 px-5 py-5 relative bg-white rounded-xl">
        <div class="bg-red-400 w-fit h-fit px-2 py-2 absolute -top-4 left-4 rounded-lg">
            <img :src="require(`../../assets/icons/${source}`)" alt="">
        </div>
        <p class="text-sm mt-3 font-medium">{{ desc }}</p>
        <div style="top: 60% !important" class="absolute flex">
            <h1 class="font-bold text-3xl text-md mr-3">{{ value }}</h1>
            <p class="text-xs text-green-400 mt-3">+ {{ percent }}% </p>
        </div>
        
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
        },
        percent: {
            type: Number,
            required: false,
            default: 1.5
        }
    }
}
</script>