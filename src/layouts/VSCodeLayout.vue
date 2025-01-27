<template>
    <!-- Full-height flex layout with no scrollbars -->
    <div class="main-gradient-bg h-screen w-full flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="flex items-center justify-between p-3 bg-white/80 border-b border-gray-300 shadow-sm backdrop-blur-md shrink-0">
        <!-- Left side: Editor/Preview buttons -->
        <div class="flex items-center gap-3">
          <button :class="tabButtonClass('editor')" @click="currentTab = 'editor'">Editor</button>
          <button :class="tabButtonClass('preview')" @click="currentTab = 'preview'">Preview</button>
        </div>
        <!-- Right side: Toggle for chat -->
        <button class="px-4 py-2 rounded text-gray-700 hover:bg-gray-200 border border-transparent active:scale-[0.97] transition-transform flex items-center gap-2" @click="toggleChat">
          <span v-if="hideChat">Show Chat</span>
          <span v-else>Hide Chat</span>
          <span v-if="hideChat">«</span>
          <span v-else>»</span>
        </button>
      </header>


    <!-- Main content area -->
    <main class="flex-1 min-h-0 overflow-hidden">
      <splitpanes v-if="!hideChat" class="default-theme w-full h-full">
        <!-- Main Content Area -->
        <pane :size="currentTab === 'preview' ? 60 : 60" :min-size="currentTab === 'preview' ? 40 : 40">
          <component 
            :is="currentTab === 'editor' ? EditorWorkspace : PagePreview" 
            class="w-full h-full"
          />
        </pane>
        
        <!-- Chat Panel -->
        <pane :size="40" :min-size="20">
          <ChatPanel />
        </pane>
      </splitpanes>

      <splitpanes v-else class="default-theme w-full h-full">
        <pane :size="100">
          <component 
            :is="currentTab === 'editor' ? EditorWorkspace : PagePreview" 
            class="w-full h-full"
          />
        </pane>
      </splitpanes>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

import EditorWorkspace from '@/components/vsCodeLayout/EditorWorkspace.vue'
import PagePreview from '@/components/vsCodeLayout/PagePreview.vue'
import ChatPanel from '@/components/vsCodeLayout/ChatPanel.vue'

const currentTab = ref<'editor' | 'preview'>('editor')
const hideChat = ref(false)

function toggleChat() {
  hideChat.value = !hideChat.value
}

function tabButtonClass(tab: 'editor' | 'preview') {
  const base = 'px-4 py-2 rounded text-gray-700 border border-transparent hover:bg-gray-200 active:scale-[0.97] transition-transform'
  return currentTab.value === tab ? `${base} bg-gray-200` : base
}
</script>