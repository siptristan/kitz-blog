<template>
    <div class="w-full h-fit flex flex-col justify-start px-5 py-5">
        <div class="px-2 py-2">
            <p class="text-xl mb-4">Title</p>
            <client-only>
                <Editor :isHeading="true" @send-preview="getTitle" :value="items.title" />
            </client-only>
        </div>
        <div class="px-2 py-2">
            <p class="text-xl mb-4">thumbnail</p>
            <div class="flex justify-start">
                <input type="file" class="mr-4" id="thumbnail" @change="preview">
                <div :class="imgData == false ? 'hidden' : 'w-fit h-fit'">
                    <img src="" id="preview" class="w-96 h-96 border-2 rounded-lg" />
                </div>
                <div :class="imgData == true ? 'hidden' : 'border-2 rounded-lg w-96 h-96 flex justify-center items-center'">
                    <p>Choose Image</p>
                </div>
            </div>
        </div>
        <div class="px-2 py-2">
            <p class="text-xl mb-4">Body (content)</p>
            <client-only>
                <Editor :isHeading="false" @send-preview="getParagraph" :value="items.paragraph" />
            </client-only>
        </div>
        <div class="px-2 py-2 flex">
            <button class="border-4 border-sky-500 rounded-xl mr-2 w-fit px-2" @click="blogPreview">save</button>
            <button v-if="isSaved" class="border-4 border-sky-500 rounded-xl mr-2 w-fit px-2">
                <nuxt-link to="/dashboard-admin/preview">preview</nuxt-link>
            </button>
        </div>
    </div>
</template>
<script>
import { Editor } from '../index.js'
//import { mapMutations } from 'vuex'
export default {
    layout: 'admin',
    components: {
        Editor,
    },
    computed: {
        items () {
            return this.$store.state.blog.items
        }
    },
    data() {
        return {
            imgData: false,
            isSaved: false,
            title: '',
            paragraph: '',
            imgBase64: '',
        }
    },
    mounted(){
        let newImage = document.getElementById('preview');
        if(this.$store.state.blog.items.image != '') {
            this.imgData = true
            newImage.src = this.$store.state.blog.items.image
        }
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
                let srcData = fileLoadedEvent.target.result; // <--- data: base64

                let newImage = document.getElementById('preview');
                newImage.src = srcData;
            }
            reader.readAsDataURL(file);
            this.imgData = true;
        },
        getTitle(data) {
            this.title = `${data}`
        },
        getParagraph(data) {
            this.paragraph = `${data}`
        },
        blogPreview() {
            this.isSaved = true
            const data = {
                title: this.title,
                paragraph: this.paragraph,
                image: document.getElementById('preview').src
            }
            this.$store.dispatch('blog/setItemBlog', data)
        },
    }
}
</script>