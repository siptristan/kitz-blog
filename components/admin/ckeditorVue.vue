<template>
    <div>
        <!-- <ckeditor v-model="editorData" :config="editorConfig"></ckeditor> -->
        <client-only>
            <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
        </client-only>
    </div>
</template>

<script>
    export default {
        name: 'ckeditorVue',
        data() {
            return {
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
            };
        },
        methods: {
            getVal() {
                console.log(this.editorData)
            }
        }
    }
</script>
