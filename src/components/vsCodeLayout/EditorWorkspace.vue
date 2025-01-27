<!-- File: /src/components/vsCodeLayout/EditorWorkspace.vue -->
<template>
    <splitpanes class="default-theme h-full">
      <!-- Left Pane - Directory Tree -->
      <pane :size="25" :min-size="10">
        <DirectoryTree class="w-full h-full" />
      </pane>
  
      <!-- Right Pane - Editor + Console -->
      <pane :size="75" :min-size="60">
        <splitpanes horizontal>
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
  
  <script setup lang="ts">
  import { Splitpanes, Pane } from 'splitpanes'
  import DirectoryTree from '@/components/vsCodeLayout/DirectoryTree.vue'
  import CodeEditor from '@/components/vsCodeLayout/CodeEditor.vue'
  import ConsolePanel from '@/components/vsCodeLayout/ConsolePanel.vue'
  </script>