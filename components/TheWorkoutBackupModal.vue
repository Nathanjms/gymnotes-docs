<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { db } from "../db";
import CustomButton from "./CustomButton.vue";

defineProps<{
  btnText?: string;
}>();

const showBackupTools = ref(false);

const backupLocal = ref({
  isLoading: false,
  errorMsg: "",
  success: false,
});

const canShare = computed(() => {
  if (typeof navigator === "undefined" || !navigator.share || !navigator.canShare) return false;

  try {
    const testFile = new File(["test"], "test.txt", { type: "text/plain" });
    return navigator.canShare({ files: [testFile] });
  } catch {
    return false;
  }
});

onMounted(() => {
  handleInit();
});

async function handleInit() {
  const workoutLogsCount = await db["workout_sets"].count();
  if (workoutLogsCount) {
    showBackupTools.value = true;
  }
}

async function backupToLocal(type: "share" | "download") {
  backupLocal.value.isLoading = true;
  backupLocal.value.errorMsg = "";
  backupLocal.value.success = false;
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
    backupLocal.value.success = true;
  } catch (error) {
    backupLocal.value.success = false;
    backupLocal.value.errorMsg = error instanceof Error ? error.message : "Something went wrong";
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
    <hr />
    <CustomButton
      :aria-controls="'old-workout-backup-tools'"
      :aria-expanded="showBackupTools"
      @click="showBackupTools = !showBackupTools"
      class="p-2 mt-4 w-full bg-amber-600 text-white"
      :defaultBackground="false"
    >
      {{ showBackupTools ? "Hide old workout backup" : "Old workout data on this site?" }}
    </CustomButton>
    <Transition name="backup-disclosure">
      <div
        v-if="showBackupTools"
        id="old-workout-backup-tools"
        class="backup-disclosure overflow-hidden"
      >
        <section
          class="backup-disclosure__content mt-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-950 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-50"
          aria-labelledby="old-workout-backup-heading"
        >
          <h2
            id="old-workout-backup-heading"
            class="mb-2 mt-0 border-0 pt-0 text-xl font-semibold"
          >
            Workouts detected
          </h2>
          <p class="mb-2">
            We've detected that you previously used this website to log workouts. Download a
            backup below, then restore it on
            <a href="https://app.gymnotes.co.uk" class="underline underline-offset-2"
              >the new GymNotes app</a
            >.
          </p>
          <p class="mb-2">
            Follow the
            <a
              href="/support/migrating-from-old-website.html"
              class="underline underline-offset-2"
              >step-by-step migration guide</a
            >
            if you need help.
          </p>
          <div class="mt-3">
            <div class="flex flex-col gap-2 sm:flex-row">
              <CustomButton
                v-if="canShare"
                class="flex h-full w-full items-center justify-center gap-2 py-2"
                @click="() => backupToLocal('share')"
                :disabled="backupLocal.isLoading"
                :isLoading="backupLocal.isLoading"
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
                class="flex h-full w-full items-center justify-center gap-2 py-2"
                @click="() => backupToLocal('download')"
                :disabled="backupLocal.isLoading"
                :isLoading="backupLocal.isLoading"
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
            <small
              v-else-if="backupLocal.success"
              class="mt-2 block text-green-700 dark:text-green-300"
              role="status"
            >
              Backup ready. Keep it somewhere safe until you've restored it in the new app.
            </small>
          </div>
        </section>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.backup-disclosure-enter-active,
.backup-disclosure-leave-active {
  display: grid;
  transition:
    grid-template-rows 220ms cubic-bezier(0.16, 1, 0.3, 1),
    opacity 180ms ease-out;
}

.backup-disclosure-enter-from,
.backup-disclosure-leave-to {
  grid-template-rows: 0fr;
  opacity: 0;
}

.backup-disclosure-enter-to,
.backup-disclosure-leave-from {
  grid-template-rows: 1fr;
  opacity: 1;
}

.backup-disclosure__content {
  min-height: 0;
}

@media (prefers-reduced-motion: reduce) {
  .backup-disclosure-enter-active,
  .backup-disclosure-leave-active {
    transition: none;
  }
}
</style>
