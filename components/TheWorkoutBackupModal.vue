<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { Vue3TailwindModal } from "vue3-tailwind-modal";
import { db } from "../db";
import CustomButton from "./CustomButton.vue";

defineProps<{
  btnText?: string;
}>();

const showModal = ref(false);

const backupLocal = ref({
  isLoading: false,
  errorMsg: "",
  success: true,
});

const canShare = computed(() => !!navigator.share);

onMounted(() => {
  handleInit();
});

async function handleInit() {
  const workoutLogsCount = await db["workout_sets"].count();
  if (workoutLogsCount) {
    showModal.value = true; // Pop up the modal if workout logs exist
  }
}

async function backupToLocal(type: "share" | "download") {
  backupLocal.value.isLoading = true;
  try {
    const workoutLogs = await db["workout_sets"].toArray();
    const exercises = await db["exercises"].toArray();
    const userBackup = getUserBackupData();

    if (!workoutLogs.length) {
      throw new Error("No data detected to download");
    }

    const backupData = {
      backup: {
        workoutLogs,
        exercises,
        userBackup,
        updatedAt: new Date().toISOString(),
      },
    };

    const blob = new Blob([JSON.stringify(backupData)], { type: "text/plain;charset=utf-8" });
    const date = new Date().toISOString().split("T")[0];
    const fileName = `gymNotes-backup-${date}.txt`;

    if (type === "share") {
      await navigator.share({
        files: [new File([blob], fileName, { type: "text/plain" })],
      });
    } else if (type === "download") {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(link.href);
    }
  } catch (error) {
    backupLocal.value.success = false;
    backupLocal.value.errorMsg = error.message ?? "Something went wrong";
  } finally {
    backupLocal.value.isLoading = false;
  }
}

function getUserBackupData() {
  const backup = {};
  const keyBlocklist = new Set(["backup", "user"]);
  for (const key of Object.keys(window.localStorage)) {
    if (!keyBlocklist.has(key)) {
      backup[key] = window.localStorage.getItem(key);
    }
  }

  return backup;
}
</script>

<template>
  <div>
    <CustomButton @click="showModal = true"> Have old Workout Data on this site? </CustomButton>
    <Teleport to="body">
      <Vue3TailwindModal :showModal="showModal" @close="showModal = false" class="z-50">
        <template #header><h5 class="text-xl">Workouts Detected!</h5></template>
        <div>
          <p class="mb-2">
            We've detected that you have previously used this website to log your workouts. Please download your backup
            below, and restore it on the new website,
            <a href="https://app.gymnotes.co.uk" class="underline italic">https://app.gymnotes.co.uk</a>.
          </p>
          <p class="mb-2">
            For a step-by-step guide,
            <a href="/support/migrating-from-old-website.html" class="underline italic">click here</a>.
          </p>
          <div>
            <div class="flex gap-1">
              <CustomButton
                v-if="canShare"
                class="mb-2 flex gap-2 w-full items-center py-2 h-full"
                @click="() => backupToLocal('share')"
                :disabled="backupLocal.isLoading"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>

                <p>Share</p>
              </CustomButton>
              <CustomButton
                class="flex gap-2 w-full items-center py-2 h-full"
                @click="() => backupToLocal('download')"
                :disabled="backupLocal.isLoading"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  />
                </svg>

                <p>Download</p>
              </CustomButton>
            </div>
            <small v-if="backupLocal.errorMsg" class="text-red-500 dark:text-red-400 block">
              {{ backupLocal.errorMsg }}
            </small>
          </div>
        </div>
        <template #footer>&nbsp;</template>
      </Vue3TailwindModal>
    </Teleport>
  </div>
</template>
