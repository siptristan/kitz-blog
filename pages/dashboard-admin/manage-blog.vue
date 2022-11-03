<template>
    <div class="w-full h-fit flex flex-col justify-start px-5 py-5">
        <div class="px-2 py-2">
            <p class="text-xl mb-4">Title</p>
            <!-- <client-only>
                <Ckeditor />
            </client-only> -->
        </div>
    </div>
</template>
<script>
// import { Ckeditor } from '../index.js'
// //import { mapMutations } from 'vuex'
// export default {
//     name: "ManageBlog",
//     layout: 'admin',
//     components: {
//         Ckeditor
//     },
//     data() {
//         return {
//             imgData: false,
//         }
//     },
//     mounted(){
//     },
//     methods: {
//         preview(e) {
//             const file = e.target.files[0]
//             var reader = new FileReader();
//             // reader.onloadend = function() {
//             //     console.log('RESULT', reader.result)
//             // }
//             // reader.readAsDataURL(file);

//             reader.onload = function(fileLoadedEvent) {
//                 let srcData = fileLoadedEvent.target.result; // <--- data: base64

//                 let newImage = document.getElementById('preview');
//                 newImage.src = srcData;
//             }
//             reader.readAsDataURL(file);
//             this.imgData = true;
//         },
//     }
// }
</script>