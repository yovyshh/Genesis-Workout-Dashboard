const workoutPhases = {
  phase1: [ // Weeks 1-4: Foundation (3 days/week)
    {
      label: "Mon", name: "Full Body Workout", badge: "Month 1", bc: "b-strength",
      sub: "Push · Pull · Legs · Core",
      gear: ["Pull-up bar", "Dumbbells", "Bodyweight"],
      tip: "Your barbell weights go up to 16kg total. For Month 1 dumbbells, use 2kg–3kg for isolation moves (curls, raises) and 5kg for compound moves (rows, press). Focus on form — this month builds the base for everything that follows.",
      sections: [
        { name: "The Workout", ex: [
          { name: "Warm-up", detail: "5–10 min", note: "Jumping jacks, high knees, arm circles", src: "calisthenics" },
          { name: "Push-ups", detail: "3 × 8–12", note: "Keep body straight, core tight", src: "calisthenics", video: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
          { name: "Dumbbell Floor Press", detail: "3 × 10 reps", note: "5kg each hand · 3 sec lowering · replaces bench", src: "dumbbell", video: "https://www.youtube.com/watch?v=uUGDRwge4F8" },
          { name: "Pull-ups", detail: "3 × 5–8", note: "Use band if needed", src: "calisthenics", video: "https://www.youtube.com/watch?v=Y3ntNsIS2Q8" },
          { name: "Inverted Rows", detail: "3 × 5–8", note: "Alternative to pull-ups", src: "calisthenics", video: "https://www.youtube.com/watch?v=GdyhjXlxE-U" },
          { name: "Dumbbell Bent-Over Row", detail: "3 × 10 reps", note: "5kg · hinge at hips · elbows back", src: "dumbbell", video: "https://www.youtube.com/watch?v=6TSP1TRMUzs" },
          { name: "Squats", detail: "3 × 15–20", note: "Knees track over toes", src: "calisthenics", video: "https://www.youtube.com/watch?v=xqvCmoLULNY" },
          { name: "Dumbbell Goblet Squat", detail: "3 × 12 reps", note: "5kg · adds load to squat pattern", src: "dumbbell", video: "https://www.youtube.com/watch?v=MxEiRCDbMaA" },
          { name: "Lunges", detail: "3 × 10–15 per leg", note: "Torso upright", src: "calisthenics", video: "https://www.youtube.com/watch?v=wrwwXE_x-pQ" },
          { name: "Dumbbell Lateral Raise", detail: "3 × 12 reps", note: "2kg · slow and controlled", src: "dumbbell", video: "https://www.youtube.com/watch?v=3VcKaXpzqRo" },
          { name: "Plank", detail: "3 × 30–60 sec", note: "Full core engagement", src: "calisthenics", video: "https://www.youtube.com/watch?v=ASdvN_XEl_c" },
          { name: "Dumbbell Bicep Curl", detail: "3 × 12 reps", note: "3kg · slow squeeze at top", src: "dumbbell", video: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo" },
          { name: "Cool down", detail: "5–10 min", note: "Stretch all worked muscles", src: "calisthenics" },
        ]}
      ]
    },
    { label: "Tue", name: "Rest Day", badge: "Rest", bc: "b-rest", rest: true, tip: "Recovery is when muscle is built. Stay hydrated." },
    {
      label: "Wed", name: "Full Body Workout", badge: "Month 1", bc: "b-strength",
      sub: "Push · Pull · Legs · Core",
      gear: ["Pull-up bar", "Dumbbells", "Bodyweight"],
      tip: "Consistency is key. Focus on perfecting the movements from Monday.",
      sections: [
        { name: "The Workout", ex: [
          { name: "Warm-up", detail: "5–10 min", note: "Jumping jacks, high knees, arm circles", src: "calisthenics" },
          { name: "Push-ups", detail: "3 × 8–12", note: "Keep body straight, core tight", src: "calisthenics", video: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
          { name: "Dumbbell Floor Press", detail: "3 × 10 reps", note: "5kg each hand · 3 sec lowering · replaces bench", src: "dumbbell", video: "https://www.youtube.com/watch?v=uUGDRwge4F8" },
          { name: "Pull-ups", detail: "3 × 5–8", note: "Use band if needed", src: "calisthenics", video: "https://www.youtube.com/watch?v=Y3ntNsIS2Q8" },
          { name: "Inverted Rows", detail: "3 × 5–8", note: "Alternative to pull-ups", src: "calisthenics", video: "https://www.youtube.com/watch?v=GdyhjXlxE-U" },
          { name: "Dumbbell Bent-Over Row", detail: "3 × 10 reps", note: "5kg · hinge at hips · elbows back", src: "dumbbell", video: "https://www.youtube.com/watch?v=6TSP1TRMUzs" },
          { name: "Squats", detail: "3 × 15–20", note: "Knees track over toes", src: "calisthenics", video: "https://www.youtube.com/watch?v=xqvCmoLULNY" },
          { name: "Dumbbell Goblet Squat", detail: "3 × 12 reps", note: "5kg · adds load to squat pattern", src: "dumbbell", video: "https://www.youtube.com/watch?v=MxEiRCDbMaA" },
          { name: "Lunges", detail: "3 × 10–15 per leg", note: "Torso upright", src: "calisthenics", video: "https://www.youtube.com/watch?v=wrwwXE_x-pQ" },
          { name: "Dumbbell Lateral Raise", detail: "3 × 12 reps", note: "2kg · slow and controlled", src: "dumbbell", video: "https://www.youtube.com/watch?v=3VcKaXpzqRo" },
          { name: "Plank", detail: "3 × 30–60 sec", note: "Full core engagement", src: "calisthenics", video: "https://www.youtube.com/watch?v=ASdvN_XEl_c" },
          { name: "Dumbbell Bicep Curl", detail: "3 × 12 reps", note: "3kg · slow squeeze at top", src: "dumbbell", video: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo" },
          { name: "Cool down", detail: "5–10 min", note: "Stretch all worked muscles", src: "calisthenics" },
        ]}
      ]
    },
    { label: "Thu", name: "Rest Day", badge: "Rest", bc: "b-rest", rest: true, tip: "Rest is essential. Focus on mobility if you feel stiff." },
    {
      label: "Fri", name: "Full Body Workout", badge: "Month 1", bc: "b-strength",
      sub: "Push · Pull · Legs · Core",
      gear: ["Pull-up bar", "Dumbbells", "Bodyweight"],
      tip: "End the week strong. Try to add 1-2 extra reps to each set today.",
      sections: [
        { name: "The Workout", ex: [
          { name: "Warm-up", detail: "5–10 min", note: "Jumping jacks, high knees, arm circles", src: "calisthenics" },
          { name: "Push-ups", detail: "3 × 8–12", note: "Keep body straight, core tight", src: "calisthenics", video: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
          { name: "Dumbbell Floor Press", detail: "3 × 10 reps", note: "5kg each hand · 3 sec lowering · replaces bench", src: "dumbbell", video: "https://www.youtube.com/watch?v=uUGDRwge4F8" },
          { name: "Pull-ups", detail: "3 × 5–8", note: "Use band if needed", src: "calisthenics", video: "https://www.youtube.com/watch?v=Y3ntNsIS2Q8" },
          { name: "Inverted Rows", detail: "3 × 5–8", note: "Alternative to pull-ups", src: "calisthenics", video: "https://www.youtube.com/watch?v=GdyhjXlxE-U" },
          { name: "Dumbbell Bent-Over Row", detail: "3 × 10 reps", note: "5kg · hinge at hips · elbows back", src: "dumbbell", video: "https://www.youtube.com/watch?v=6TSP1TRMUzs" },
          { name: "Squats", detail: "3 × 15–20", note: "Knees track over toes", src: "calisthenics", video: "https://www.youtube.com/watch?v=xqvCmoLULNY" },
          { name: "Dumbbell Goblet Squat", detail: "3 × 12 reps", note: "5kg · adds load to squat pattern", src: "dumbbell", video: "https://www.youtube.com/watch?v=MxEiRCDbMaA" },
          { name: "Lunges", detail: "3 × 10–15 per leg", note: "Torso upright", src: "calisthenics", video: "https://www.youtube.com/watch?v=wrwwXE_x-pQ" },
          { name: "Dumbbell Lateral Raise", detail: "3 × 12 reps", note: "2kg · slow and controlled", src: "dumbbell", video: "https://www.youtube.com/watch?v=3VcKaXpzqRo" },
          { name: "Plank", detail: "3 × 30–60 sec", note: "Full core engagement", src: "calisthenics", video: "https://www.youtube.com/watch?v=ASdvN_XEl_c" },
          { name: "Dumbbell Bicep Curl", detail: "3 × 12 reps", note: "3kg · slow squeeze at top", src: "dumbbell", video: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo" },
          { name: "Cool down", detail: "5–10 min", note: "Stretch all worked muscles", src: "calisthenics" },
        ]}
      ]
    },
    { label: "Sat", name: "Active Recovery", badge: "Recovery", bc: "b-rest", rest: true, tip: "A light walk or yoga session today will help recovery." },
    { label: "Sun", name: "Full Rest", badge: "Rest", bc: "b-rest", rest: true, tip: "Prepare for Week 2. Get plenty of sleep." },
  ],
  phase2: [ // Weeks 5-8: Split Routine (4 days/week)
    {
      label: "Mon", name: "Upper Body", badge: "Month 2", bc: "b-strength",
      sub: "Day 1 & 4 · Chest · Back · Shoulders · Arms",
      gear: ["Pull-up bar", "Dumbbells", "Bodyweight"],
      tip: "Increase dumbbell weight slightly this month — move to 5kg for isolation moves and use both 5kg dumbbells (10kg total) for rows and presses. Add 1 rep per set each week on every exercise.",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Warm-up", detail: "5–10 min", note: "Jogging, arm swings, dynamic stretches", src: "calisthenics" },
          { name: "Push-ups", detail: "4 × 10–15", note: "Elbows tucked slightly", src: "calisthenics", video: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
          { name: "Dumbbell Floor Press", detail: "4 × 10 reps", note: "5kg · slow eccentric", src: "dumbbell", video: "https://www.youtube.com/watch?v=uUGDRwge4F8" },
          { name: "Pull-ups", detail: "4 × 6–10", note: "Band assist if needed", src: "calisthenics", video: "https://www.youtube.com/watch?v=Y3ntNsIS2Q8" },
          { name: "Dumbbell Bent-Over Row", detail: "4 × 10 reps", note: "5kg each hand", src: "dumbbell", video: "https://www.youtube.com/watch?v=6TSP1TRMUzs" },
          { name: "Pike Push-ups", detail: "3 × 8–12", note: "Elevate hips for shoulders", src: "calisthenics", video: "https://www.youtube.com/watch?v=x7_I5SUAd00" },
          { name: "Dumbbell Shoulder Press", detail: "3 × 10 reps", note: "3kg or 5kg · seated or standing", src: "dumbbell", video: "https://www.youtube.com/watch?v=qEwKCR5JCog" },
          { name: "Dips", detail: "4 × 10–15", note: "Parallel bars or bench", src: "calisthenics", video: "https://www.youtube.com/watch?v=l41SoWZiowI" },
          { name: "Dumbbell Overhead Tricep Extension", detail: "3 × 12 reps", note: "3kg · elbows close to head", src: "dumbbell", video: "https://www.youtube.com/watch?v=-Vyt2QdsR7I" },
          { name: "Plank to Push-up", detail: "3 × 10–15", note: "Core tight", src: "calisthenics", video: "https://www.youtube.com/watch?v=56vUOad6Irs" },
          { name: "Dumbbell Lateral Raise", detail: "3 × 12 reps", note: "3kg · shoulder width", src: "dumbbell", video: "https://www.youtube.com/watch?v=3VcKaXpzqRo" },
          { name: "Cool down", detail: "5–10 min", note: "Arms, shoulders, chest stretch", src: "calisthenics" },
        ]}
      ]
    },
    {
      label: "Tue", name: "Lower Body & Core", badge: "Month 2", bc: "b-strength",
      sub: "Day 2 & 3 · Quads · Hamstrings · Glutes · Abs",
      gear: ["Dumbbells", "Bodyweight"],
      tip: "Focus on mind-muscle connection. Squeeze the glutes and core.",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Warm-up", detail: "5–10 min", note: "Leg swings, hip circles, light jog", src: "calisthenics" },
          { name: "Squats", detail: "4 × 20–25", note: "Knees over toes", src: "calisthenics", video: "https://www.youtube.com/watch?v=xqvCmoLULNY" },
          { name: "Dumbbell Goblet Squat", detail: "4 × 12 reps", note: "5kg · deeper than bodyweight", src: "dumbbell", video: "https://www.youtube.com/watch?v=MxEiRCDbMaA" },
          { name: "Lunges", detail: "4 × 15–20 per leg", note: "Upright torso", src: "calisthenics", video: "https://www.youtube.com/watch?v=wrwwXE_x-pQ" },
          { name: "Dumbbell Romanian Deadlift", detail: "3 × 10 reps", note: "5kg · feel hamstring stretch", src: "dumbbell", video: "https://www.youtube.com/watch?v=JCXUYuzwNrM" },
          { name: "Glute Bridges", detail: "3 × 20–25", note: "Squeeze at top", src: "calisthenics", video: "https://www.youtube.com/watch?v=wPM8icPu6H8" },
          { name: "Calf Raises", detail: "3 × 20–25", note: "Hold dumbbells for load · 5kg each", src: "dumbbell", video: "https://www.youtube.com/watch?v=gwLzBJYoWlI" },
          { name: "Hanging Leg Raises", detail: "3 × 8–12", note: "Pull-up bar · legs straight", src: "calisthenics", video: "https://www.youtube.com/watch?v=Pr1ieGZ5atk" },
          { name: "Russian Twists", detail: "3 × 20 per side", note: "Hold dumbbell 2kg for extra load", src: "dumbbell", video: "https://www.youtube.com/watch?v=JyUqwkVpsi8" },
          { name: "Cool down", detail: "5–10 min", note: "Hamstrings, glutes, quads", src: "calisthenics" },
        ]}
      ]
    },
    {
      label: "Wed", name: "Skill Training", badge: "Skill", bc: "b-hiit",
      sub: "2–3×/week · Handstand · L-Sit",
      gear: ["Pull-up bar", "Dumbbells", "Bodyweight"],
      tip: "Skills require patience. Be consistent with your practice.",
      sections: [
        { name: "Skill Focus", ex: [
          { name: "Handstand Practice", detail: "3 × 20–30 sec", note: "Wall-assisted", src: "calisthenics", video: "https://www.youtube.com/watch?v=eFmjckKXEoA" },
          { name: "L-Sit Progressions", detail: "3 × 10–15 sec", note: "Floor or parallettes", src: "calisthenics", video: "https://www.youtube.com/watch?v=HxDP7SqggpI" },
          { name: "Dumbbell Wrist Curl", detail: "2 × 15 reps", note: "2kg · builds grip for L-sit and pull-ups", src: "dumbbell", video: "https://www.youtube.com/watch?v=_MaXaFr6sHo" },
        ]}
      ]
    },
    {
      label: "Thu", name: "Upper Body", badge: "Month 2", bc: "b-strength",
      sub: "Day 1 & 4 · Chest · Back · Shoulders · Arms",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Warm-up", detail: "5–10 min", note: "Jogging, arm swings, dynamic stretches", src: "calisthenics" },
          { name: "Push-ups", detail: "4 × 10–15", note: "Elbows tucked slightly", src: "calisthenics", video: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
          { name: "Dumbbell Floor Press", detail: "4 × 10 reps", note: "5kg · slow eccentric", src: "dumbbell", video: "https://www.youtube.com/watch?v=uUGDRwge4F8" },
          { name: "Pull-ups", detail: "4 × 6–10", note: "Band assist if needed", src: "calisthenics", video: "https://www.youtube.com/watch?v=Y3ntNsIS2Q8" },
          { name: "Dumbbell Bent-Over Row", detail: "4 × 10 reps", note: "5kg each hand", src: "dumbbell", video: "https://www.youtube.com/watch?v=6TSP1TRMUzs" },
          { name: "Pike Push-ups", detail: "3 × 8–12", note: "Elevate hips for shoulders", src: "calisthenics", video: "https://www.youtube.com/watch?v=x7_I5SUAd00" },
          { name: "Dumbbell Shoulder Press", detail: "3 × 10 reps", note: "3kg or 5kg · seated or standing", src: "dumbbell", video: "https://www.youtube.com/watch?v=qEwKCR5JCog" },
          { name: "Dips", detail: "4 × 10–15", note: "Parallel bars or bench", src: "calisthenics", video: "https://www.youtube.com/watch?v=l41SoWZiowI" },
          { name: "Dumbbell Overhead Tricep Extension", detail: "3 × 12 reps", note: "3kg · elbows close to head", src: "dumbbell", video: "https://www.youtube.com/watch?v=-Vyt2QdsR7I" },
          { name: "Plank to Push-up", detail: "3 × 10–15", note: "Core tight", src: "calisthenics", video: "https://www.youtube.com/watch?v=56vUOad6Irs" },
          { name: "Dumbbell Lateral Raise", detail: "3 × 12 reps", note: "3kg · shoulder width", src: "dumbbell", video: "https://www.youtube.com/watch?v=3VcKaXpzqRo" },
          { name: "Cool down", detail: "5–10 min", note: "Arms, shoulders, chest stretch", src: "calisthenics" },
        ]}
      ]
    },
    {
      label: "Fri", name: "Lower Body & Core", badge: "Month 2", bc: "b-strength",
      sub: "Day 2 & 3 · Quads · Hams · Glutes · Abs",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Warm-up", detail: "5–10 min", note: "Leg swings, hip circles, light jog", src: "calisthenics" },
          { name: "Squats", detail: "4 × 20–25", note: "Knees over toes", src: "calisthenics", video: "https://www.youtube.com/watch?v=xqvCmoLULNY" },
          { name: "Dumbbell Goblet Squat", detail: "4 × 12 reps", note: "5kg · deeper than bodyweight", src: "dumbbell", video: "https://www.youtube.com/watch?v=MxEiRCDbMaA" },
          { name: "Lunges", detail: "4 × 15–20 per leg", note: "Upright torso", src: "calisthenics", video: "https://www.youtube.com/watch?v=wrwwXE_x-pQ" },
          { name: "Dumbbell Romanian Deadlift", detail: "3 × 10 reps", note: "5kg · feel hamstring stretch", src: "dumbbell", video: "https://www.youtube.com/watch?v=JCXUYuzwNrM" },
          { name: "Glute Bridges", detail: "3 × 20–25", note: "Squeeze at top", src: "calisthenics", video: "https://www.youtube.com/watch?v=wPM8icPu6H8" },
          { name: "Calf Raises", detail: "3 × 20–25", note: "Hold dumbbells for load · 5kg each", src: "dumbbell", video: "https://www.youtube.com/watch?v=gwLzBJYoWlI" },
          { name: "Hanging Leg Raises", detail: "3 × 8–12", note: "Pull-up bar · legs straight", src: "calisthenics", video: "https://www.youtube.com/watch?v=Pr1ieGZ5atk" },
          { name: "Russian Twists", detail: "3 × 20 per side", note: "Hold dumbbell 2kg for extra load", src: "dumbbell", video: "https://www.youtube.com/watch?v=JyUqwkVpsi8" },
          { name: "Cool down", detail: "5–10 min", note: "Hamstrings, glutes, quads", src: "calisthenics" },
        ]}
      ]
    },
    {
      label: "Sat", name: "Skill Training", badge: "Skill", bc: "b-hiit",
      sub: "2–3×/week · Handstand · L-Sit",
      sections: [
        { name: "Skill Focus", ex: [
          { name: "Handstand Practice", detail: "3 × 20–30 sec", note: "Wall-assisted", src: "calisthenics", video: "https://www.youtube.com/watch?v=eFmjckKXEoA" },
          { name: "L-Sit Progressions", detail: "3 × 10–15 sec", note: "Floor or parallettes", src: "calisthenics", video: "https://www.youtube.com/watch?v=HxDP7SqggpI" },
          { name: "Dumbbell Wrist Curl", detail: "2 × 15 reps", note: "2kg · builds grip for L-sit and pull-ups", src: "dumbbell", video: "https://www.youtube.com/watch?v=_MaXaFr6sHo" },
        ]}
      ]
    },
    { label: "Sun", name: "Full Rest", badge: "Rest", bc: "b-rest", rest: true },
  ],
  phase3: [ // Weeks 9-12: Advanced (4-5 days/week)
    {
      label: "Mon", name: "Advanced Upper", badge: "Month 3", bc: "b-strength",
      sub: "Day 1 & 4 · Advanced push & pull",
      gear: ["Pull-up bar", "Dumbbells", "Bodyweight"],
      tip: "By now you should be comfortable with 5kg dumbbells on all exercises. Try moving to 5kg + 3kg (8kg) on rows and RDLs. The advanced calisthenics moves (archer push-up, pistol squat, windshield wiper) are hard — use the tutorials and be patient.",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Warm-up", detail: "5–10 min", note: "Jump rope, dynamic stretches", src: "calisthenics" },
          { name: "Decline Push-ups", detail: "4 × 10–15", note: "Feet elevated on chair or box", src: "calisthenics", video: "https://www.youtube.com/watch?v=SKPab2YC8BE" },
          { name: "Dumbbell Incline Floor Press", detail: "4 × 10 reps", note: "5kg · prop torso on bag/pillow at angle", src: "dumbbell", video: "https://www.youtube.com/watch?v=uUGDRwge4F8" },
          { name: "Pull-ups", detail: "4 × 8–12", note: "Full range of motion", src: "calisthenics", video: "https://www.youtube.com/watch?v=Y3ntNsIS2Q8" },
          { name: "Dumbbell Hammer Curl", detail: "3 × 12 reps", note: "3kg or 5kg · builds arm thickness", src: "dumbbell", video: "https://www.youtube.com/watch?v=zC3nLlEvin4" },
          { name: "Archer Push-ups", detail: "3 × 6–10 per side", note: "Full control · one arm takes most load", src: "calisthenics", video: "https://www.youtube.com/watch?v=MxVbNel13Ek" },
          { name: "Dips", detail: "4 × 10–15", note: "Parallel bars or bench", src: "calisthenics", video: "https://www.youtube.com/watch?v=l41SoWZiowI" },
          { name: "Dumbbell Rear Delt Fly", detail: "3 × 12 reps", note: "2kg · bent forward · replaces face pull", src: "dumbbell", video: "https://www.youtube.com/watch?v=EA7u4Q_8HQ0" },
          { name: "Plank to Push-up", detail: "3 × 15–20", note: "Core tight throughout", src: "calisthenics", video: "https://www.youtube.com/watch?v=56vUOad6Irs" },
          { name: "Dumbbell Lateral Raise", detail: "3 × 12 reps", note: "3kg or 5kg", src: "dumbbell", video: "https://www.youtube.com/watch?v=3VcKaXpzqRo" },
          { name: "Cool down", detail: "5–10 min", note: "Upper body stretches", src: "calisthenics" },
        ]}
      ]
    },
    {
      label: "Tue", name: "Advanced Lower", badge: "Month 3", bc: "b-strength",
      sub: "Day 2 & 3 · Advanced legs and abs",
      tip: "Pistol squats build elite balance and single-leg strength.",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Warm-up", detail: "5–10 min", note: "Leg swings, hip circles", src: "calisthenics" },
          { name: "Pistol Squats (Assisted)", detail: "4 × 6–10 per leg", note: "Hold door frame for balance", src: "calisthenics", video: "https://www.youtube.com/watch?v=tiA23NSUm7A" },
          { name: "Dumbbell Bulgarian Split Squat", detail: "4 × 10–15 per leg", note: "Hold 5kg each · rear foot elevated", src: "dumbbell", video: "https://www.youtube.com/shorts/9p5e2BSvoLs" },
          { name: "Dumbbell Romanian Deadlift", detail: "4 × 10 reps", note: "5kg each · slow and deep", src: "dumbbell", video: "https://www.youtube.com/watch?v=JCXUYuzwNrM" },
          { name: "Single-Leg Glute Bridge", detail: "3 × 15–20 per leg", note: "Squeeze glutes hard at top", src: "calisthenics", video: "https://www.youtube.com/watch?v=3NXv0Nany-Q" },
          { name: "Calf Raises", detail: "3 × 25–30", note: "Hold 5kg dumbbells", src: "dumbbell", video: "https://www.youtube.com/watch?v=c5Kv6-fnTj8" },
          { name: "Hanging Leg Raises", detail: "3 × 10–15", note: "Straight legs · pull-up bar", src: "calisthenics", video: "https://www.youtube.com/watch?v=EYe6dc_i4L0" },
          { name: "Windshield Wipers", detail: "3 × 10–15 per side", note: "Advanced · shoulders pinned down", src: "calisthenics", video: "https://www.youtube.com/watch?v=ygwS-vtkhew" },
          { name: "Russian Twists with Dumbbell", detail: "3 × 20 per side", note: "3kg or 5kg · controlled rotation", src: "dumbbell", video: "https://www.youtube.com/watch?v=JyUqwkVpsi8" },
          { name: "Cool down", detail: "5–10 min", note: "Quads, hamstrings, hip flexors", src: "calisthenics" },
        ]}
      ]
    },
    {
      label: "Wed", name: "Skill Mastery", badge: "Skill", bc: "b-hiit",
      sub: "3–4×/week · Handstand · Muscle-Up Progressions",
      sections: [
        { name: "Skill Focus", ex: [
          { name: "Handstand Practice", detail: "3 × 20–30 sec", note: "Wall to freestanding", src: "calisthenics", video: "https://www.youtube.com/watch?v=X9fRDlIeGTU" },
          { name: "L-Sit Hold", detail: "3 × 10–20 sec", note: "Parallettes or floor", src: "calisthenics", video: "https://www.youtube.com/watch?v=eywCpp0p7lg" },
          { name: "Muscle-Up Progressions", detail: "3 × 3–5 reps", note: "Band-assisted or jumping", src: "calisthenics", video: "https://www.youtube.com/watch?v=6v6IsZcvqCA" },
          { name: "Dumbbell Wrist Curl", detail: "2 × 15 reps", note: "2kg · grip strength for muscle-up", src: "dumbbell", video: "https://www.youtube.com/watch?v=_MaXaFr6sHo" },
        ]}
      ]
    },
    {
      label: "Thu", name: "Advanced Upper", badge: "Month 3", bc: "b-strength",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Warm-up", detail: "5–10 min", note: "Jump rope, dynamic stretches", src: "calisthenics" },
          { name: "Decline Push-ups", detail: "4 × 10–15", note: "Feet elevated on chair or box", src: "calisthenics", video: "https://www.youtube.com/watch?v=SKPab2YC8BE" },
          { name: "Dumbbell Incline Floor Press", detail: "4 × 10 reps", note: "5kg · prop torso on bag/pillow at angle", src: "dumbbell", video: "https://www.youtube.com/watch?v=uUGDRwge4F8" },
          { name: "Pull-ups", detail: "4 × 8–12", note: "Full range of motion", src: "calisthenics", video: "https://www.youtube.com/watch?v=Y3ntNsIS2Q8" },
          { name: "Dumbbell Hammer Curl", detail: "3 × 12 reps", note: "3kg or 5kg · builds arm thickness", src: "dumbbell", video: "https://www.youtube.com/watch?v=zC3nLlEvin4" },
          { name: "Archer Push-ups", detail: "3 × 6–10 per side", note: "Full control · one arm takes most load", src: "calisthenics", video: "https://www.youtube.com/watch?v=MxVbNel13Ek" },
          { name: "Dips", detail: "4 × 10–15", note: "Parallel bars or bench", src: "calisthenics", video: "https://www.youtube.com/watch?v=l41SoWZiowI" },
          { name: "Dumbbell Rear Delt Fly", detail: "3 × 12 reps", note: "2kg · bent forward · replaces face pull", src: "dumbbell", video: "https://www.youtube.com/watch?v=EA7u4Q_8HQ0" },
          { name: "Plank to Push-up", detail: "3 × 15–20", note: "Core tight throughout", src: "calisthenics", video: "https://www.youtube.com/watch?v=56vUOad6Irs" },
          { name: "Dumbbell Lateral Raise", detail: "3 × 12 reps", note: "3kg or 5kg", src: "dumbbell", video: "https://www.youtube.com/watch?v=3VcKaXpzqRo" },
          { name: "Cool down", detail: "5–10 min", note: "Upper body stretches", src: "calisthenics" },
        ]}
      ]
    },
    {
      label: "Fri", name: "Advanced Lower", badge: "Month 3", bc: "b-strength",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Warm-up", detail: "5–10 min", note: "Leg swings, hip circles", src: "calisthenics" },
          { name: "Pistol Squats (Assisted)", detail: "4 × 6–10 per leg", note: "Hold door frame for balance", src: "calisthenics", video: "https://www.youtube.com/watch?v=tiA23NSUm7A" },
          { name: "Dumbbell Bulgarian Split Squat", detail: "4 × 10–15 per leg", note: "Hold 5kg each · rear foot elevated", src: "dumbbell", video: "https://www.youtube.com/shorts/9p5e2BSvoLs" },
          { name: "Dumbbell Romanian Deadlift", detail: "4 × 10 reps", note: "5kg each · slow and deep", src: "dumbbell", video: "https://www.youtube.com/watch?v=JCXUYuzwNrM" },
          { name: "Single-Leg Glute Bridge", detail: "3 × 15–20 per leg", note: "Squeeze glutes hard at top", src: "calisthenics", video: "https://www.youtube.com/watch?v=3NXv0Nany-Q" },
          { name: "Calf Raises", detail: "3 × 25–30", note: "Hold 5kg dumbbells", src: "dumbbell", video: "https://www.youtube.com/watch?v=c5Kv6-fnTj8" },
          { name: "Hanging Leg Raises", detail: "3 × 10–15", note: "Straight legs · pull-up bar", src: "calisthenics", video: "https://www.youtube.com/watch?v=EYe6dc_i4L0" },
          { name: "Windshield Wipers", detail: "3 × 10–15 per side", note: "Advanced · shoulders pinned down", src: "calisthenics", video: "https://www.youtube.com/watch?v=ygwS-vtkhew" },
          { name: "Russian Twists with Dumbbell", detail: "3 × 20 per side", note: "3kg or 5kg · controlled rotation", src: "dumbbell", video: "https://www.youtube.com/watch?v=JyUqwkVpsi8" },
          { name: "Cool down", detail: "5–10 min", note: "Quads, hamstrings, hip flexors", src: "calisthenics" },
        ]}
      ]
    },
    {
      label: "Sat", name: "Skill Mastery", badge: "Skill", bc: "b-hiit",
      sub: "3–4×/week · Handstand · Muscle-Up Progressions",
      sections: [
        { name: "Skill Focus", ex: [
          { name: "Handstand Practice", detail: "3 × 20–30 sec", note: "Wall to freestanding", src: "calisthenics", video: "https://www.youtube.com/watch?v=X9fRDlIeGTU" },
          { name: "L-Sit Hold", detail: "3 × 10–20 sec", note: "Parallettes or floor", src: "calisthenics", video: "https://www.youtube.com/watch?v=eywCpp0p7lg" },
          { name: "Muscle-Up Progressions", detail: "3 × 3–5 reps", note: "Band-assisted or jumping", src: "calisthenics", video: "https://www.youtube.com/watch?v=6v6IsZcvqCA" },
          { name: "Dumbbell Wrist Curl", detail: "2 × 15 reps", note: "2kg · grip strength for muscle-up", src: "dumbbell", video: "https://www.youtube.com/watch?v=_MaXaFr6sHo" },
        ]}
      ]
    },
    { label: "Sun", name: "Full Rest", badge: "Rest", bc: "b-rest", rest: true },
  ]
};

function getWorkoutForWeek(weekNum) {
  if (weekNum <= 4) return workoutPhases.phase1;
  if (weekNum <= 8) return workoutPhases.phase2;
  return workoutPhases.phase3;
}

const STORAGE_KEY = 'genesisFitness_v1';
let state = {
    progress: {}, 
    notes: {},    
    theme: 'dark',
    streak: 0,
    settings: {
        userName: '',
        goal: 'strength',
        notifications: true
    },
    bestStreak: 0
};

let activeDashboardMonth = 1;

// Elements
const trackerBody = document.getElementById('tracker-body');
const totalCompletedEl = document.getElementById('total-completed');
const progressPercentEl = document.getElementById('progress-percent');
const progressCircle = document.getElementById('progress-circle');
const streakCountEl = document.getElementById('streak-count');
const currentDateEl = document.getElementById('current-date');
const notesModal = document.getElementById('notes-modal');
const detailsModal = document.getElementById('details-modal');
const dayNotesTextarea = document.getElementById('day-notes');
const saveNotesBtn = document.getElementById('save-notes');
const modalDayInfo = document.getElementById('modal-day-info');
const detailsTitle = document.getElementById('details-title');
const exerciseListContainer = document.getElementById('exercise-list-container');

function init() {
    loadState();
    renderTracker();
    updateUI();
    setupEventListeners();
    updateSettingsUI();
    registerServiceWorker();
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    if (currentDateEl) currentDateEl.innerText = new Date().toLocaleDateString(undefined, options);
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('service-worker.js')
                .then(reg => console.log('Genesis Service Worker registered'))
                .catch(err => console.error('Registration failed', err));
        });
    }
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
    }
    applyTheme();
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function applyTheme() {
    if (state.theme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }
    updateThemeToggleUI();
}

function renderTracker() {
    if (!trackerBody) return;
    trackerBody.innerHTML = '';
    
    // Render all 12 weeks
    for (let w = 1; w <= 12; w++) {
        const weekCard = document.createElement('div');
        weekCard.className = 'week-container';
        weekCard.id = `week-card-${w}`;
        const completedInWeek = Array.from({length: 7}, (_, i) => state.progress[`w${w}d${i+1}`]).filter(Boolean).length;
        
        weekCard.innerHTML = `
            <h2><span>Week ${w}</span><span class="week-progress-mini">${completedInWeek}/7 Done</span></h2>
            <div class="day-list" id="week${w}-days"></div>
        `;
        trackerBody.appendChild(weekCard);

        const container = document.getElementById(`week${w}-days`);
        const weekDays = getWorkoutForWeek(w);
        weekDays.forEach((workout, index) => {
            const id = `w${w}d${index + 1}`;
            const isCompleted = state.progress[id] || false;
            const hasNotes = state.notes[id] && state.notes[id].trim().length > 0;
            
            const row = document.createElement('div');
            row.className = `day-row ${isCompleted ? 'completed' : ''}`;
            row.id = `row-${id}`;
            row.onclick = (event) => showDetails(id, event);
            
            row.innerHTML = `
                <div class="checkbox-custom" onclick="toggleDay('${id}', event)"></div>
                <div class="day-content">
                    <div class="day-header">
                        <span class="day-title">${workout.name}</span>
                        <div class="day-actions">
                            <button class="action-btn ${hasNotes ? 'has-notes' : ''}" onclick="openNotes('${id}', event)">Note</button>
                        </div>
                    </div>
                    <div class="day-focus">${workout.sub || ''}</div>
                </div>
            `;
            container.appendChild(row);
        });
    }
}

function showDetails(id, event) {
    if (event) event.stopPropagation();
    const dayNum = parseInt(id.match(/d(\d+)/)[1]);
    const weekNum = parseInt(id.match(/w(\d+)/)[1]);
    const workout = getWorkoutForWeek(weekNum)[dayNum - 1];
    
    if (detailsTitle) detailsTitle.innerText = `Week ${weekNum}, ${workout.label} - ${workout.name}`;
    if (exerciseListContainer) {
        exerciseListContainer.innerHTML = '';
        
        if (workout.rest) {
            exerciseListContainer.innerHTML = `
                <div class="rest-block">
                    <div style="font-size:48px;margin-bottom:20px;">&#128564;</div>
                    <div style="font-size:18px;font-weight:700;">Complete Rest Day</div>
                    <div style="color:var(--text-secondary);margin-top:10px;">Muscle grows during rest, not during training. Sleep 7–9 hours, eat your protein, and let your body recover.</div>
                </div>
            `;
        } else {
            if (workout.gear && workout.gear.length) {
                const gearDiv = document.createElement('div');
                gearDiv.className = 'gear-row-modal';
                gearDiv.innerHTML = `<span class="section-label">Equipment:</span> ` + 
                    workout.gear.map(g => `<span class="gear-tag">${g}</span>`).join(' ');
                exerciseListContainer.appendChild(gearDiv);
            }

            workout.sections.forEach(s => {
                const sectionHeader = document.createElement('div');
                sectionHeader.className = 'section-label-modal';
                sectionHeader.innerText = s.name;
                exerciseListContainer.appendChild(sectionHeader);

                s.ex.forEach(e => {
                    const exItem = document.createElement('div');
                    exItem.className = 'exercise-item-new';
                    
                    const sourceBadge = e.src === 'dumbbell' 
                        ? `<span style="font-size: 10px; background: #0C447C; color: #B5D4F4; padding: 1px 6px; border-radius: 20px; margin-left: 8px; text-transform: uppercase;">dumbbell</span>`
                        : `<span style="font-size: 10px; background: #085041; color: #9FE1CB; padding: 1px 6px; border-radius: 20px; margin-left: 8px; text-transform: uppercase;">calisthenics</span>`;

                    exItem.innerHTML = `
                        <div class="ex-main-info">
                            <span class="ex-name">${e.name} ${sourceBadge}</span>
                            <span class="ex-detail">${e.detail}</span>
                        </div>
                        ${e.note ? `<div class="ex-note">${e.note}</div>` : ''}
                        ${e.video ? `<a href="${e.video}" target="_blank" class="ex-video-link" onclick="event.stopPropagation();">Watch Tutorial</a>` : ''}
                    `;
                    exerciseListContainer.appendChild(exItem);
                });
            });
        }

        const tipBox = document.createElement('div');
        tipBox.className = 'tip-box-modal';
        tipBox.innerHTML = `<strong>💡 Tip of the Day:</strong><br>${workout.tip || "Focus on consistency and proper form."}`;
        exerciseListContainer.appendChild(tipBox);
    }
    if (detailsModal) detailsModal.style.display = 'block';
}

function toggleDay(id, event) {
    if (event) event.stopPropagation();
    state.progress[id] = !state.progress[id];
    
    const row = document.getElementById(`row-${id}`);
    if (row) {
        if (state.progress[id]) row.classList.add('completed');
        else row.classList.remove('completed');
    }
    
    calculateStreak();
    updateUI();
    saveState();
    
    const weekNum = id.match(/w(\d+)/)[1];
    const weekHeader = document.querySelector(`#row-${id}`).closest('.week-container').querySelector('.week-progress-mini');
    const completedInWeek = Array.from({length: 7}, (_, i) => state.progress[`w${weekNum}d${i+1}`]).filter(Boolean).length;
    if (weekHeader) weekHeader.innerText = `${completedInWeek}/7 Done`;
}

function calculateStreak() {
    let maxStreak = 0, currentStreak = 0;
    for (let w = 1; w <= 12; w++) {
        for (let d = 1; d <= 7; d++) {
            if (state.progress[`w${w}d${d}`]) {
                currentStreak++;
                if (currentStreak > maxStreak) maxStreak = currentStreak;
            } else currentStreak = 0;
        }
    }
    state.bestStreak = maxStreak;
    
    let simpleStreak = 0;
    for (let w = 1; w <= 12; w++) {
        for (let d = 1; d <= 7; d++) {
            if (state.progress[`w${w}d${d}`]) simpleStreak++;
            else { state.streak = simpleStreak; return; }
        }
    }
    state.streak = simpleStreak;
}

function updateUI() {
    const total = 84;
    const completed = Object.values(state.progress).filter(Boolean).length;
    const percentage = Math.round((completed / total) * 100);
    
    if (totalCompletedEl) totalCompletedEl.innerText = `${completed}/${total}`;
    if (progressPercentEl) progressPercentEl.innerText = `${percentage}%`;
    
    if (progressCircle) {
        const circumference = 163.36;
        progressCircle.style.strokeDashoffset = circumference - (percentage / 100) * circumference;
    }
    
    calculateStreak();
    if (streakCountEl) streakCountEl.innerText = `${state.streak} Day${state.streak === 1 ? '' : 's'}`;
    
    const dashTitle = document.querySelector('.header-left h1');
    if (dashTitle) {
        dashTitle.innerText = state.settings.userName ? `${state.settings.userName}'s Genesis` : `Genesis Dashboard`;
    }
}

window.switchView = function(viewName) {
    document.querySelectorAll('.view-section').forEach(section => section.style.display = 'none');
    const targetSection = document.getElementById(`${viewName}-view`);
    if (targetSection) targetSection.style.display = 'block';
    
    document.querySelectorAll('.nav-item, .nav-settings-btn').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-view') === viewName) item.classList.add('active');
    });

    if (viewName === 'stats') renderStats();
};

function renderStats() {
    const total = 84, completed = Object.values(state.progress).filter(Boolean).length;
    const statTotal = document.getElementById('stat-total-workouts');
    const statRate = document.getElementById('stat-completion-rate');
    const statBest = document.getElementById('stat-best-streak');
    
    if (statTotal) statTotal.innerText = completed;
    if (statRate) statRate.innerText = `${Math.round((completed / total) * 100)}%`;
    if (statBest) statBest.innerText = `${state.bestStreak} Days`;

    const chart = document.getElementById('weekly-consistency-chart');
    if (chart) {
        chart.innerHTML = '';
        for (let w = 1; w <= 12; w++) {
            const done = Array.from({length: 7}, (_, i) => state.progress[`w${w}d${i+1}`]).filter(Boolean).length;
            const bar = document.createElement('div');
            bar.className = 'chart-bar-container';
            bar.innerHTML = `<div class="chart-bar ${done > 0 ? 'active' : ''}" style="height: ${(done / 7) * 100}%"></div><span class="chart-label">W${w}</span>`;
            chart.appendChild(bar);
        }
    }
}

function updateSettingsUI() {
    const nameInp = document.getElementById('user-name-input');
    const goalSel = document.getElementById('fitness-goal-select');
    const notifTog = document.getElementById('notif-toggle');
    if (nameInp) nameInp.value = state.settings.userName || '';
    if (goalSel) goalSel.value = state.settings.goal || 'strength';
    if (notifTog) notifTog.checked = state.settings.notifications;
}

function scrollToMonth(month) {
    activeDashboardMonth = month;
    const startWeek = (month - 1) * 4 + 1;
    const element = document.getElementById(`week-card-${startWeek}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Update active tab UI
    document.querySelectorAll('.month-tab').forEach(tab => {
        tab.classList.remove('active');
        if (parseInt(tab.getAttribute('data-month')) === month) {
            tab.classList.add('active');
        }
    });
}

function setupEventListeners() {
    document.addEventListener('click', (e) => {
        const navTarget = e.target.closest('[data-view]');
        if (navTarget && (navTarget.classList.contains('nav-item') || navTarget.classList.contains('nav-settings-btn'))) {
            e.preventDefault();
            window.switchView(navTarget.getAttribute('data-view'));
        }

        const monthTarget = e.target.closest('.month-tab');
        if (monthTarget) {
            const month = parseInt(monthTarget.getAttribute('data-month'));
            scrollToMonth(month);
        }
    });

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
            applyTheme();
            saveState();
        });
    }

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            if (notesModal) notesModal.style.display = 'none';
            if (detailsModal) detailsModal.style.display = 'none';
        });
    });

    const saveNotes = document.getElementById('save-notes');
    if (saveNotes) {
        saveNotes.addEventListener('click', () => {
            if (activeNoteId && dayNotesTextarea) {
                state.notes[activeNoteId] = dayNotesTextarea.value;
                saveState();
                if (notesModal) notesModal.style.display = 'none';
                renderTracker(); 
            }
        });
    }

    const resetBtn = document.getElementById('reset-all');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm("Reset everything?")) {
                state.progress = {}; state.notes = {}; state.streak = 0; state.bestStreak = 0;
                saveState(); location.reload();
            }
        });
    }

    const exportBtn = document.getElementById('export-csv');
    if (exportBtn) exportBtn.addEventListener('click', exportToCSV);

    const testNotif = document.getElementById('test-notif');
    if (testNotif) {
        testNotif.addEventListener('click', () => {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then(reg => {
                    reg.showNotification("Genesis Fitness", { body: "Test successful.", vibrate: [200, 100, 200] });
                });
            }
        });
    }

    const saveSet = document.getElementById('save-settings');
    if (saveSet) {
        saveSet.addEventListener('click', () => {
            const nameInp = document.getElementById('user-name-input');
            const goalSel = document.getElementById('fitness-goal-select');
            const notifTog = document.getElementById('notif-toggle');
            state.settings.userName = nameInp ? nameInp.value : '';
            state.settings.goal = goalSel ? goalSel.value : 'strength';
            state.settings.notifications = notifTog ? notifTog.checked : true;
            saveState(); updateUI(); alert('Settings saved!');
        });
    }

    window.onclick = (event) => {
        if (event.target == notesModal) notesModal.style.display = 'none';
        if (event.target == detailsModal) detailsModal.style.display = 'none';
    };
}

function updateThemeToggleUI() {
    const icon = document.querySelector('#theme-toggle .toggle-icon');
    if (icon) icon.innerText = state.theme === 'dark' ? 'Dark Mode' : 'Light Mode';
}

let activeNoteId = null;
function openNotes(id, event) {
    if (event) event.stopPropagation();
    activeNoteId = id;
    const day = parseInt(id.match(/d(\d+)/)[1]);
    const weekNum = parseInt(id.match(/w(\d+)/)[1]);
    const workout = getWorkoutForWeek(weekNum)[day-1];
    if (modalDayInfo) modalDayInfo.innerText = `Week ${weekNum}, Day ${day} - ${workout.name}`;
    if (dayNotesTextarea) {
        dayNotesTextarea.value = state.notes[id] || '';
        if (notesModal) notesModal.style.display = 'block';
        dayNotesTextarea.focus();
    }
}

init();
