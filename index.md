---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "GymNotes"
  text: "Fitness tracking in your browser"
  tagline: GymNotes is free, works offline and stores your workout data on your device.
  image: 
    src: "gymNotes-mockup-iphone-14-pro.webp"
    alt: "An iPhone with a screenshot of a GymNotes workout"
  actions:
    - text: Documentation
      link: /introduction/what-is-gymnotes
    - theme: alt
      text: Go To Gymnotes ↗
      link: https://app.gymnotes.co.uk

features:
  - title: Works in your browser
    details: Use GymNotes on any smartphone with a supported web browser.
    icon: 💪
  - title: Works offline
    details: Your workout data is stored on your device, so you can use GymNotes offline.
    icon: 📱
  - title: Back up your workout data
    details: Download a backup file or back up directly to a private GymNotes area in your Google Drive. See the Backups & recovery guide for setup and restore instructions.
    link: /pages/backups
    icon: ☁️
  - title: Free to use
    details: GymNotes was created by a gym-goer looking for a free iOS workout tracker. It remains free to use.
    icon: 💰
---


<script setup>
  import TheWorkoutBackupModal from './components/TheWorkoutBackupModal.vue';
</script>

<TheWorkoutBackupModal />
