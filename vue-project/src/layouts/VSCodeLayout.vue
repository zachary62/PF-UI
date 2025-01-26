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
        <!-- If chat is visible, show a two-pane layout (left + chat). -->
        <splitpanes v-if="!hideChat" class="default-theme w-full h-full">
          <!-- LEFT PANE: Editor or Preview -->
          <pane :size="70" :min-size="50">
            <div class="w-full h-full flex flex-col">
              <template v-if="currentTab === 'editor'">
                <!-- Vertical split for Directory vs. Editor+Console -->
                <splitpanes class="default-theme w-full h-full" :horizontal="false" :push-other-pane="true" :min-size="100" :divider-size="4">
                  <!-- Directory Tree -->
                  <pane :size="25" :min-size="10">
                    <DirectoryTree class="w-full h-full" />
                  </pane>
                  <!-- Editor + Console (horizontal split) -->
                  <pane :size="75" :min-size="50">
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
                  </pane>
                </splitpanes>
              </template>
              <!-- If user selected "preview" -->
              <template v-else>
                <PagePreview class="w-full h-full" />
              </template>
            </div>
          </pane>
          <!-- RIGHT PANE: Chat Panel -->
          <pane :size="30" :min-size="20">
            <ChatPanel />
          </pane>
        </splitpanes>
  
        <!-- If chat is hidden, we only show the left side in full width. -->
        <div v-else class="w-full h-full">
          <!-- Editor vs Preview layout -->
          <template v-if="currentTab === 'editor'">
            <!-- Directory + Editor/Console in a vertical split -->
            <splitpanes class="default-theme w-full h-full" :horizontal="false" :push-other-pane="true" :min-size="100" :divider-size="4">
              <!-- Directory Tree -->
              <pane :size="25" :min-size="10">
                <DirectoryTree class="w-full h-full" />
              </pane>
              <!-- Editor + Console horizontally -->
              <pane :size="75" :min-size="50">
                <splitpanes class="default-theme w-full h-full" :horizontal="true" :push-other-pane="true" :min-size="80" :divider-size="4">
                  <pane :size="70" :min-size="25">
                    <CodeEditor class="w-full h-full" />
                  </pane>
                  <pane :size="30" :min-size="10">
                    <ConsolePanel class="w-full h-full" />
                  </pane>
                </splitpanes>
              </pane>
            </splitpanes>
          </template>
          <template v-else>
            <PagePreview class="w-full h-full" />
          </template>
        </div>
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
  
  // Which tab is active: "editor" or "preview".
  const currentTab = ref<'editor' | 'preview'>('editor')
  
  // Whether to hide (collapse) the chat panel on the right.
  const hideChat = ref(false)
  
  // Toggle the chat display.
  function toggleChat() {
    hideChat.value = !hideChat.value
  }
  
  // Utility for toggling Editor/Preview button classes.
  function tabButtonClass(tab: 'editor' | 'preview') {
    const base =
      'px-4 py-2 rounded text-gray-700 border border-transparent ' +
      'hover:bg-gray-200 active:scale-[0.97] transition-transform'
    return currentTab.value === tab
      ? `${base} bg-gray-200`
      : base
  }
  </script>
  
  <style scoped>
  .default-theme {
    /* Baseline styling for the Splitpanes theme. */
  }
  </style>
  