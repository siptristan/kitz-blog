<template>
    <div class="w-full h-fit flex justify-between py-5">
        <div class="w-8/12 bg-white rounded-lg px-5 py-5">
            <div class="w-full flex flex-col">
                <div class="px-2 py-2">
                    <div>
                    <label for="title" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input type="text" v-model="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                    </div>
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
                        <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
                    <client-only>
                    </client-only>
                </div>
                <div class="px-2 py-2 flex">
                    <button class="rounded-md bg-blue-500 w-20 mr-2 w-fit px-2 py-2 text-white" @click="save">save</button>
                    <button v-if="isSaved" class="rounded-md bg-blue-500 w-20 mr-2 w-fit px-2">
                        <nuxt-link to="/dashboard-admin/preview" class="text-white">preview</nuxt-link>
                    </button>
                </div>
            </div>
        </div>
        <div class="w-4/12 relative">
            <div class="w-full h-fit flex flex-col justify-center items-center px-5 sticky">
                <div class="w-10/12 h-48 bg-white rounded-md mb-3">
                    <div class="w-full h-12 px-3 py-3"><p class="text-md">Publish</p></div>
                    <hr>
                    <div class="h-24 px-3 py-3">
                        <div class="flex justify-start items-center mb-3">
                            <p class="mr-2 text-sm">Status :</p>
                            <p class="font-semibold text-sm">{{ drafted == true ? 'Draft' : 'Publish' }}</p>
                        </div>
                        <div class="flex justify-start items-center mb-3">
                            <p class="mr-2 text-sm">Publish schedule :</p>
                            <input type="date" class="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                    <hr>
                    <div class="w-full h-12 bg-slate-200 flex justify-between items-center px-3">
                        <button :class="`${ published == false ? '' : 'hidden '}w-20 h-fit rounded-md bg-blue-500 text-sm py-2 text-white`" @click="publish">Publish</button>
                        <!-- <input type="button" :class="`w-20 h-fit rounded-md bg-blue-500 text-sm py-2 text-white`" value="Draft"> -->
                        <button :class="`${ drafted == false ? '' : 'hidden '}w-20 h-fit rounded-md bg-blue-500 text-sm py-2 text-white`" @click="draft">Draft</button>
                    </div>
                </div>
                <div class="w-10/12 h-48 bg-white rounded-md mb-3">
                    <div class="w-full h-12 px-3 py-3"><p class="text-md">Categories</p></div>
                    <hr>
                    <div class="h-24 px-3 py-3 overflow-auto">
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tips Kesehatan</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Obat-obatan</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Penyakit</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pengobatan Alternatif</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Alat Kesehatan</label>
                        </div>
                    </div>
                    <hr>
                    <div class="w-full h-12 bg-slate-200 flex justify-between items-center px-3">
                        <button class="w-fit h-fit rounded-md bg-blue-500 text-sm px-2 py-2 text-white">Add new categories</button>
                    </div>
                </div>
                <!-- <div class="w-full h-48 bg-white rounded-md mb-3">
                    <div class="w-full h-fit px-3 py-3"><p class="text-sm">Thumbnail</p></div>
                    <hr>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
// import { ckeditorVue } from '../index.js'
//import { mapMutations } from 'vuex'
export default {
    layout: 'admin',
    components: {
        // ckeditorVue
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
            drafted: true,
            published: false,
            title: '',
            imgBase64: '',
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                readOnly: false
            }
        }
    },
    created(){
        // const data = {}
        // this.$store.dispatch('blog/setItemBlog', data)
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
        save() {
            this.isSaved = true
            const data = {
                title: this.title,
                paragraph: this.editorData,
                image: document.getElementById('preview').src
            }
            document.getElementById('preview').src = ''
            this.$store.dispatch('blog/setItemBlog', data)
        },
        publish() {
            this.$swal({
                title: 'are you sure ?',
                text: 'Do you want to continue',
                icon: 'question',
                confirmButtonText: 'Cool'
            }).then(res => {
                if (res.isConfirmed == true) {
                    this.drafted = false
                    this.published = true
                    let title = document.getElementById('title')
                    let thumb = document.getElementById('thumbnail')
                    title.setAttribute('disabled', true)
                    thumb.setAttribute('disabled', true)
                }
            })
        },
        draft() {
            this.$swal({
                title: 'are you sure ?',
                text: 'Do you want to continue',
                icon: 'question',
                confirmButtonText: 'Cool'
            }).then(res => {
                if (res.isConfirmed == true) {
                    this.drafted = true
                    this.published = false
                    let title = document.getElementById('title')
                    let thumb = document.getElementById('thumbnail')
                    title.removeAttribute('disabled')
                    thumb.removeAttribute('disabled')
                }
            })
        }
    }
}
</script>
<style scoped>
/* .option {

} */
</style>