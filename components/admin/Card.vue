<template>
    <div class="card w-40 h-fit px-2 py-2">
        <img :src="require(`../../assets/icons/${source}`)" class="mb-4" alt="">
        <h1 class="font-semibold text-md">{{ value }}</h1>
        <p class="text-sm">{{ desc }}</p>
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