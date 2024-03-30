// db.js
import Dexie from "dexie";
export const db = new Dexie("gymnotes");

export const workout_sets_schema = "++id,workoutDate,exerciseId,reps,weight,distance,time,updatedAt,createdAt";
export const exercises_schema = "++id,name,muscleGroup,typeId";

db.version(1).stores({
  workout_sets: workout_sets_schema,
  exercises: exercises_schema,
});
