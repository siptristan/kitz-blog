<template>
    <div class="w-full h-fit flex flex-col justify-start px-5 py-5">
        <div class="px-2 py-2">
            <p class="text-xl mb-4">Title</p>
            <client-only>
                <Editor :isHeading="true" />
            </client-only>
        </div>
        <div class="px-2 py-2">
            <p class="text-xl mb-4">thumbnail</p>
            <div class="flex justify-start">
                <input type="file" class="mr-4" id="thumbnail" @change="preview">
                <img src="" id="preview" class="w-fit h-fit border-2 rounded-lg" />
            </div>
        </div>
    </div>
</template>
<script>
import { Editor } from '../index.js'
export default {
    layout: 'admin',
    components: {
        Editor,
    },
    methods: {
        preview(e) {
            const file = e.target.files[0]
            var reader = new FileReader();
            // reader.onloadend = function() {
            //     console.log('RESULT', reader.result)
            // }
            // reader.readAsDataURL(file);

            reader.onload = function(fileLoadedEvent) {
                var srcData = fileLoadedEvent.target.result; // <--- data: base64

                var newImage = document.getElementById('preview');
                newImage.src = srcData;
            }
            reader.readAsDataURL(file);
            
        }
    }
}
</script>