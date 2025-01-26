<!-- File: /src/layouts/VSCodeLayout.vue -->
<template>
  <div class="main-gradient-bg h-screen w-full flex overflow-hidden">
    <!-- We wrap everything in a container that uses 
         the same gradient background as the other views. -->
    
    <!-- Outer split: Left section vs. Right chat panel -->
    <splitpanes 
      class="w-full h-full" 
      :horizontal="false"
      :pushOtherPane="true"
      :minSize="250"
      :snapOffset="0"
      :dividerSize="4"
      v-if="!hideChat"
    >
      <!-- LEFT PANE (code or preview) -->
      <pane :size="80">
        <div class="flex flex-col w-full h-full">
          <!-- The top bar with editor/preview toggles -->
          <div class="flex items-center justify-between p-2 bg-gray-100 border-b border-gray-300">
            <!-- Toggle Buttons -->
            <div class="flex gap-2">
              <button 
                :class="tabButtonClass('editor')" 
                @click="currentTab = 'editor'"
              >
                Editor
              </button>
              <button 
                :class="tabButtonClass('preview')" 
                @click="currentTab = 'preview'"
              >
                Preview
              </button>
            </div>

            <!-- Hide Chat button (only if chat is visible) -->
            <button 
              class="px-3 py-1 text-gray-600 hover:bg-gray-200 rounded"
              @click="hideChat = true"
            >
              Hide Chat
            </button>
          </div>

          <div class="flex-grow flex relative">
            <!-- If "editor" tab is active, show directory tree + code editor + console -->
            <template v-if="currentTab === 'editor'">
              <!-- Split: left half is DirectoryTree, right half is CodeEditor + Console -->
              <splitpanes 
                :horizontal="false"
                :pushOtherPane="true"
                :minSize="100"
                class="w-full"
                :dividerSize="4"
              >
                <pane :size="25">
                  <!-- Directory Tree on the left -->
                  <DirectoryTree class="w-full h-full" />
                </pane>
                
                <pane :size="75">
                  <!-- Another vertical split for Editor (top) and Console (bottom) -->
                  <splitpanes 
                    :horizontal="true"
                    :pushOtherPane="true"
                    :minSize="80"
                    class="w-full h-full"
                    :dividerSize="4"
                  >
                    <pane :size="70">
                      <CodeEditor class="w-full h-full" />
                    </pane>
                    <pane :size="30">
                      <ConsolePanel class="w-full h-full" />
                    </pane>
                  </splitpanes>
                </pane>
              </splitpanes>
            </template>

            <!-- If "preview" tab is active, show PagePreview in full space -->
            <template v-else>
              <PagePreview class="w-full h-full" />
            </template>
          </div>
        </div>
      </pane>

      <!-- RIGHT PANE: Chat Panel -->
      <pane :size="20">
        <!-- 
          Example chat panel that reuses 
          the ChatThread or a simpler ChatPanel. 
          We’ll show ChatPanel, which might itself
          contain ChatThread or a similar chat UI.
        -->
        <ChatPanel />
      </pane>
    </splitpanes>

    <!-- If user hides chat, show only the left portion in full width -->
    <div v-else class="flex flex-col w-full h-full">
      <div class="flex items-center justify-end p-2 bg-gray-100 border-b border-gray-300">
        <button
          class="px-3 py-1 text-gray-600 hover:bg-gray-200 rounded"
          @click="hideChat = false"
        >
          Show Chat
        </button>
      </div>

      <div class="flex-grow">
        <!-- Same toggling logic if user wants Editor vs. Preview,
             but with no split to the right. -->
        <template v-if="currentTab === 'editor'">
          <splitpanes 
            :horizontal="false"
            :pushOtherPane="true"
            :minSize="100"
            class="w-full h-full"
            :dividerSize="4"
          >
            <pane :size="25">
              <DirectoryTree class="w-full h-full" />
            </pane>
            <pane :size="75">
              <splitpanes 
                :horizontal="true"
                :pushOtherPane="true"
                :minSize="80"
                class="w-full h-full"
                :dividerSize="4"
              >
                <pane :size="70">
                  <CodeEditor class="w-full h-full" />
                </pane>
                <pane :size="30">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Import the splitpane library:
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

// Import your placeholder components:
import DirectoryTree from '@/components/vsCodeLayout/DirectoryTree.vue'
import CodeEditor from '@/components/vsCodeLayout/CodeEditor.vue'
import PagePreview from '@/components/vsCodeLayout/PagePreview.vue'
import ConsolePanel from '@/components/vsCodeLayout/ConsolePanel.vue'
import ChatPanel from '@/components/vsCodeLayout/ChatPanel.vue'

const currentTab = ref<'editor' | 'preview'>('editor')
const hideChat = ref(false)

// Utility for button classes to highlight the active tab
function tabButtonClass(tab: 'editor' | 'preview') {
  return [
    'px-4',
    'py-2',
    'rounded',
    'text-gray-700',
    currentTab.value === tab 
      ? 'bg-white border border-gray-300' 
      : 'hover:bg-gray-200',
  ].join(' ')
}
</script>

<style scoped>
/* Tailwind handles most styling; scope any extra classes or adjustments here. */
</style>

