<template>
    <client-only placeholder="loading..." @keyup.delete="deleteImg">
        <ckeditor-nuxt v-model="contentHolder" :config="editorConfig"  />
    </client-only>
</template>
<script>
export default {
    components: {
        'ckeditor-nuxt': () => { return import('@blowstack/ckeditor-nuxt') },
    },
    data() {
        return {
           editorConfig: {
                simpleUpload: {
                    uploadUrl: 'https://localhost:5002/api/user/uploadimg',
                    // headers: {
                    //     'Authorization': 'optional_token'
                    // }
                },
                image: {
                    resize: true,
                    resizeOptions: [
                        {
                            name: 'resizeImage:original',
                            value: null,
                            icon: 'original'
                        },
                        {
                            name: 'resizeImage:50',
                            value: '50',
                            icon: 'medium'
                        },
                        {
                            name: 'resizeImage:75',
                            value: '75',
                            icon: 'large'
                        }
                    ],
                    toolbar: [
                        // ...,
                        'resizeImage:50',
                        'resizeImage:75',
                        'resizeImage:original',
                    ]
                },
                contentHolder: "",
                title: ""
            }
        }
    },
    methods: {
        deleteImg() {
            document.getElementsByClassName('ck-widget').style.display = 'none'
        }
    }
}
</script>