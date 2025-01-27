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
        <!-- If chat is visible, show a three-column layout (directory + editor/console + chat). -->
        <splitpanes v-if="!hideChat" class="default-theme w-full h-full">
          <!-- LEFT PANE: Directory Tree OR Preview -->
          <pane :size="currentTab === 'preview' ? 0 : 20" :min-size="currentTab === 'preview' ? 0 : 10">
            <template v-if="currentTab === 'editor'">
              <DirectoryTree class="w-full h-full" />
            </template>
          </pane>
  
          <!-- MIDDLE PANE: Editor + Console OR Preview -->
          <pane :size="currentTab === 'preview' ? 80 : 60" :min-size="currentTab === 'preview' ? 80 : 40">
            <template v-if="currentTab === 'editor'">
              <!-- Editor + Console (vertical split) -->
              <splitpanes class="default-theme w-full h-full" :horizontal="true" :push-other-pane="true" :min-size="80" :divider-size="4">
                <!-- Code editor -->
                <pane :size="70" :min-size="25">
                  <CodeEditor class="w-full h-full" />
                </pane>
                <!-- Console -->
                <pane :size="30" :min-size="10">
                  <ConsolePanel class="w-full h-full" />
                </pane>
              </splitpanes>
            </template>
            <template v-else>
              <!-- Preview -->
              <PagePreview class="w-full h-full" />
            </template>
          </pane>
  
          <!-- RIGHT PANE: Chat Panel -->
          <pane :size="40" :min-size="30">
            <ChatPanel />
          </pane>
        </splitpanes>
  
        <!-- If chat is hidden, show only the directory and editor/console OR preview in two columns. -->
        <splitpanes v-else class="default-theme w-full h-full">
          <!-- LEFT PANE: Directory Tree OR Preview -->
          <pane :size="currentTab === 'preview' ? 0 : 20" :min-size="currentTab === 'preview' ? 0 : 10">
            <template v-if="currentTab === 'editor'">
              <DirectoryTree class="w-full h-full" />
            </template>
          </pane>
  
          <!-- MIDDLE PANE: Editor + Console OR Preview -->
          <pane :size="currentTab === 'preview' ? 100 : 80" :min-size="currentTab === 'preview' ? 100 : 40">
            <template v-if="currentTab === 'editor'">
              <!-- Editor + Console (vertical split) -->
              <splitpanes class="default-theme w-full h-full" :horizontal="true" :push-other-pane="true" :min-size="80" :divider-size="4">
                <!-- Code editor -->
                <pane :size="70" :min-size="25">
                  <CodeEditor class="w-full h-full" />
                </pane>
                <!-- Console -->
                <pane :size="30" :min-size="10">
                  <ConsolePanel class="w-full h-full" />
                </pane>
              </splitpanes>
            </template>
            <template v-else>
              <!-- Preview -->
              <PagePreview class="w-full h-full" />
            </template>
          </pane>
        </splitpanes>
      </main>
    </div>
  </template>
  <script setup lang="ts">
  import { ref } from 'vue'
  import { Splitpanes, Pane } from 'splitpanes'
  import 'splitpanes/dist/splitpanes.css'
  
  import DirectoryTree from '@/components/vsCodeLayout/DirectoryTree.vue'
  import CodeEditor from '@/components/vsCodeLayout/CodeEditor.vue'
  import PagePreview from '@/components/vsCodeLayout/PagePreview.vue'
  import ConsolePanel from '@/components/vsCodeLayout/ConsolePanel.vue'
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
