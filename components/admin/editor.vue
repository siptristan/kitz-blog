<template>
<div class="border-2 border-slate-400" v-if="editor != null">
  <div class="px-2 py-2 flex" v-if="isHeading == true">
    <button @click="editor.chain().focus().toggleBold().run()">
      <img src="../../assets/icons/bold.svg" alt="">
    </button>
    <p class="mx-2">|</p>
    <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
      <img src="../../assets/icons/italic.svg" alt="">
    </button>
    <p class="mx-2">|</p>
    <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="flex items-center" type="button">Heading <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
    <!-- Dropdown menu -->
    <div id="dropdown" class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
        <div class="flex flex-col py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefdivt">
          <div class="my-1 mx-1 w-full-h-fit">
            <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }" class="flex justify-center items-center text-lg w-full h-fit w-full h-fit">
              H1
            </button>
          </div>
          <div class="my-1 mx-1 w-full-h-fit">
            <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }" class="flex justify-center items-center text-lg w-full h-fit">
              H2
            </button>
          </div>
          <div class="my-1 mx-1 w-full-h-fit">
            <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }" class="flex justify-center items-center text-lg w-full h-fit">
              H3
            </button>
          </div>
        </div>
    </div>
    <p class="mx-2">|</p>
    <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
      undo
    </button>
    <p class="mx-2">|</p>
    <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
      redo
    </button>
  </div>
  <div class="px-2 py-2 flex" v-else>
    <button @click="editor.chain().focus().toggleBold().run()">
      <img src="../../assets/icons/bold.svg" alt="">
    </button>
    <p class="mx-2">|</p>
    <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
      <img src="../../assets/icons/italic.svg" alt="">
    </button>
    <p class="mx-2">|</p>
    <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="flex items-center" type="button">Heading <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
    <!-- Dropdown menu -->
    <div id="dropdown" class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
        <div class="flex flex-col py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefdivt">
          <div class="my-1 mx-1 w-full-h-fit">
            <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }" class="flex justify-center items-center text-lg w-full h-fit w-full h-fit">
              H1
            </button>
          </div>
          <div class="my-1 mx-1 w-full-h-fit">
            <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }" class="flex justify-center items-center text-lg w-full h-fit">
              H2
            </button>
          </div>
          <div class="my-1 mx-1 w-full-h-fit">
            <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }" class="flex justify-center items-center text-lg w-full h-fit">
              H3
            </button>
          </div>
        </div>
    </div>
    <p class="mx-2">|</p>
    <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
      Paragraph
    </button>
    <p class="mx-2">|</p>
    <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
      <img src="../../assets/icons/list.svg" alt="">
    </button>
    <p class="mx-2">|</p>
    <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
      <img src="../../assets/icons/list.png" width="20px" height="20px" alt="">
    </button>
    <p class="mx-2">|</p>
    <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
      undo
    </button>
    <p class="mx-2">|</p>
    <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
      redo
    </button>
  </div>
  <hr>
  <div class="px-3 py-3">
    <editor-content :editor="editor"></editor-content>
  </div>
</div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import BulletList from '@tiptap/extension-bullet-list'
import Heading from '@tiptap/extension-heading'
import Text from '@tiptap/extension-text'
import ListItem from '@tiptap/extension-list-item'

export default {
  name: 'Editor',
  props: {
    isHeading: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: '',
    },
  },
  watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value

      // JSON
      //const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return
      }

      this.editor.commands.setContent(value, false)
    },
  },
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: null,
      title: 'tes',
      paragraph: 'tost',
    }
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        BulletList,
        ListItem,
        Text,
        Heading.configure({
          levels: [1, 2, 3],
        }),
      ],
      onUpdate: () => {
        // HTML
        this.$emit('send-preview', this.editor.getHTML())

        // JSON
        //this.$emit('send-preview', this.editor.getJSON())
      },
      content: `${this.value}`,
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
