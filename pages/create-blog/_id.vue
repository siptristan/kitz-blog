<template>
    <div class="w-full h-fit flex lg:flex-row flex-col justify-between py-5 px-5">
        <div class="lg:w-8/12 w-full mb-3 bg-white rounded-lg px-5 py-5">
            <div class="w-full flex flex-col">
                <div class="px-2 py-2">
                    <div>
                    <label for="title" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input type="text" v-model="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                    </div>
                </div>
                <div class="px-2 py-2">
                    <p class="text-xl mb-4">Body (content)</p>
                        <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
                    <client-only>
                    </client-only>
                </div>
                <div class="px-2 py-2 flex">
                    <button class="rounded-md bg-blue-500 mr-2 w-fit px-2 py-2 text-white" @click="draft">save as draft</button>
                    <button v-if="isSaved" class="rounded-md bg-blue-500 w-20 mr-2 w-fit px-2">
                        <nuxt-link to="/dashboard-admin/preview" class="text-white">preview</nuxt-link>
                    </button>
                </div>
            </div>
        </div>
        <div class="lg:w-4/12 w-full relative">
            <div class="w-full h-fit lg:flex-col md:justify-between justify-center items-center lg:px-5 lg:sticky">
                <div class="md:w-full lg:w-10/12 sm:w-full h-48 bg-white rounded-md mb-3">
                    <div class="w-full h-12 px-3 py-3"><p class="text-md">Categories</p></div>
                    <hr>
                    <div class="h-24 px-3 py-3 overflow-auto">
                        <div v-for="(item, i) in categoryItem" :key="i" class="flex items-center mb-4">
                            <input id="category-1" type="checkbox" :value="item.CategoryID" class="category-opt rounded w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="category-1" class="category-opt-label ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ item.CategoryName }}</label>
                        </div>
                    </div>
                    <hr>
                    <div class="w-full h-12 bg-slate-200 flex justify-between items-center px-3">
                        <button @click="openModalCategory" class="w-fit h-fit rounded-md bg-blue-500 text-sm px-2 py-2 text-white">Add new categories</button>
                    </div>
                </div>
                <div class="md:w-full lg:w-10/12 sm:w-full h-48 bg-white rounded-md mb-3">
                    <div class="w-full h-1/4 px-3 py-3"><p class="text-md">Thumbnail</p></div>
                    <hr>
                    <div class="h-3/4 px-2 py-2 flex justify-center items-center">
                        <button @click="openModalThumb" :class="`${imgName == '' ? '' : 'bg-transparent'}w-fit h-fit rounded-md bg-blue-500 text-sm px-2 py-2 text-white`" type="button">{{ imgName == '' ? 'Add Thumbnail Image' : imgName }}</button>
                    </div>
                </div>
                <div class="md:w-full lg:w-10/12 sm:w-full h-48 bg-white rounded-md mb-3">
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
                        <button class="w-20 h-fit rounded-md bg-blue-500 text-sm py-2 text-white" @click="publish">Publish</button>
                        <!-- <input type="button" :class="`w-20 h-fit rounded-md bg-blue-500 text-sm py-2 text-white`" value="Draft"> -->
                    </div>
                </div>
            </div>
            <!-- Thumbnail modal -->
            <div id="thumbModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div class="absolute w-full h-full bg-slate-500 opacity-25"></div>
                <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Choose Image
                            </h3>
                            <button @click="closeModalThumb" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!-- Modal body -->
                        <div class="p-6 space-y-6">
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
                        <!-- Modal footer -->
                        <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button @click="closeModalThumb" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                            <button @click="closeModalThumb" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Category modal -->
            <div id="categoryModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div class="absolute w-full h-full bg-slate-500 opacity-25"></div>
                <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Add New Category
                            </h3>
                            <button @click="closeModalCategory" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!-- Modal body -->
                        <div class="p-6 space-y-6">
                            <div class="">
                                <div>
                                    <label for="category" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Name</label>
                                    <input type="text" v-model="category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                                </div>
                            </div>
                        </div>
                        <!-- Modal footer -->
                        <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button @click="closeModalCategory" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                            <button @click="closeModalCategory" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgData: false,
            isSaved: false,
            drafted: true,
            published: false,
            IDBlog: null,
            imgName: '',
            title: '',
            imgBase64: '',
            category: '',
            categoryID: 0,
            physicianID: 0,
            editorData: '',
            editorConfig: {
                readOnly: false,
                image2_maxSize: {
                    height: 300,
                    width: 250
                }
            }
        }
    },
    computed: {
        categoryItem() {
            return this.$store.state.blog.category
        }
    },
    created(){
        this.$store.dispatch("blog/getCategory")
    },
    methods: {
        preview(e) {
            const file = e.target.files[0]
            var reader = new FileReader()

            let rawImg
            reader.onloadend = function() {
                rawImg = reader.result
                let newImage = document.getElementById('preview')
                newImage.src = rawImg
            }
            reader.readAsDataURL(file)
            this.imgName = file.name
            this.imgData = true
        },
        publish() {
            this.$swal({
                title: 'are you sure ?',
                text: 'Do you want to continue',
                icon: 'question',
                confirmButtonText: 'Yes, proceed'
            }).then(res => {
                if (res.isConfirmed == true) {
                    let categoryOpt = document.getElementsByClassName('category-opt')
                    let temp = [];
                    for (let i = 0; i < categoryOpt.length; i++) {
                        if(categoryOpt[i].checked) {
                            temp.push(categoryOpt[i].value)
                        }
                    }
                    this.categoryID = temp.concat().toString()

                    let base64 = [];
                    if(this.imgData == true) {
                        let img = document.getElementById('preview').src
                        base64 = img.split(",")
                    }
                    let data = {
                        Title: this.title,
                        Content: this.editorData,
                        GCBlogStatus: 'KT009^003',
                        Category: this.categoryID,
                        MainPicture: base64[1],
                        PhysicianID: this.$store.state.login.userData.ParamedicID
                    }

                    document.getElementById('preview').src = ''
                    this.$store.dispatch('blog/publish', data)
                }
            })
        },
        draft() {
            let categoryOpt = document.getElementsByClassName('category-opt')
            for (let i = 0; i < categoryOpt.length; i++) {
                if(categoryOpt[i].checked) {
                    temp.push(categoryOpt[i].value)
                }
            }
            this.categoryID = temp.concat()
            let data = {}
            let base64 = [];
            if(this.imgData == true) {
                let img = document.getElementById('preview').src
                let base64 = img.split(",")
            }
            data = {
                Title: this.title,
                Content: this.editorData,
                GCBlogStatus: 'KT009^001',
                MainPicture: base64[1],
                CategoryID: this.categoryID,
                PhysicianID: this.$store.state.login.userData.ParamedicID
            }

            document.getElementById('preview').src = ''
            this.$store.dispatch('blog/saveDraft', data)
        },
        openModalThumb() {
            const modal = document.getElementById('thumbModal')
            modal.classList.remove('hidden')
            modal.classList.add('justify-center')
            modal.classList.add('items-center')
            modal.classList.add('flex')
            modal.removeAttribute('aria-hidden')
            modal.setAttribute('aria-modal', true)
            modal.setAttribute('role', 'dialog')
        },
        closeModalThumb() {
            const modal = document.getElementById('thumbModal')
            modal.classList.add('hidden')
            modal.classList.remove('justify-center')
            modal.classList.remove('items-center')
            modal.classList.remove('flex')
            modal.setAttribute('aria-hidden', true)
            modal.removeAttribute('aria-modal')
            modal.removeAttribute('role')
        },
        openModalCategory() {
            const modal = document.getElementById('categoryModal')
            modal.classList.remove('hidden')
            modal.classList.add('justify-center')
            modal.classList.add('items-center')
            modal.classList.add('flex')
            modal.removeAttribute('aria-hidden')
            modal.setAttribute('aria-modal', true)
            modal.setAttribute('role', 'dialog')
        },
        closeModalCategory() {
            const modal = document.getElementById('categoryModal')
            modal.classList.add('hidden')
            modal.classList.remove('justify-center')
            modal.classList.remove('items-center')
            modal.classList.remove('flex')
            modal.setAttribute('aria-hidden', true)
            modal.removeAttribute('aria-modal')
            modal.removeAttribute('role')
        }
    }
}
</script>
<style scoped>
/* .option {

} */
</style>