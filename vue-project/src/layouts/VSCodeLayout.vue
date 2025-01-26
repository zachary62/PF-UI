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

// Here is your global divider size:
const defaultDividerSize = 12

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

<template>
  <div class="main-gradient-bg h-screen w-full flex overflow-hidden">

    <!-- Example usage, reusing the same :dividerSize -->
    <splitpanes
      class="w-full h-full"
      :horizontal="false"
      :pushOtherPane="true"
      :minSize="250"
      :snapOffset="0"
      :dividerSize="defaultDividerSize"
      v-if="!hideChat"
    >
      <!-- ... LEFT pane ... -->
      <pane :size="80">
        <!-- Another nested splitpanes (editor/preview) -->
        <splitpanes
          :horizontal="false"
          :pushOtherPane="true"
          :minSize="100"
          class="w-full"
          :dividerSize="defaultDividerSize"
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
              :dividerSize="defaultDividerSize"
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
      </pane>

      <!-- RIGHT Pane -->
      <pane :size="20">
        <ChatPanel />
      </pane>
    </splitpanes>

    <!-- If user hides chat, show only the left portion -->
    <div v-else class="flex flex-col w-full h-full">
      <!-- (Same idea, re-use :dividerSize in your splitpanes) -->
      <!-- ... -->
    </div>
  </div>
</template>
