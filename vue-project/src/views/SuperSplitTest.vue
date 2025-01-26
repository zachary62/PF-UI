<template>
    <splitpanes class="default-theme">
      <pane min-size="20" size="30">
        Left Pane
      </pane>
      <pane min-size="20" size="70">
        Right Pane
      </pane>
    </splitpanes>
  </template>
  
  <script>
  import { Splitpanes, Pane } from 'splitpanes'
  import 'splitpanes/dist/splitpanes.css'
  
  export default {
    components: {
      Splitpanes,
      Pane
    }
  }
  </script>
  
  <style>
  .default-theme {
    height: 100vh; /* Full viewport height */
    width: 100vw;  /* Full viewport width */
  }
  
  .splitpanes__pane {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
  }
  </style>