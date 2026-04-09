#!/bin/bash
pages=("LearningPathPage" "CoursePage" "OnboardingPage" "ArenaPage" "LeaderboardPage" "MessagesPage" "ExamResultsPage" "StudentProfilePage")

for p in "${pages[@]}"; do
  new_name=$(echo $p | sed 's/Student/Teacher/g')
  if [[ "$p" != *"Student"* ]]; then
     new_name="Teacher${p}"
  fi
  cp "src/pages/$p.jsx" "src/pages/$new_name.jsx"
  sed -i 's|/student|/teacher|g' "src/pages/$new_name.jsx"
  sed -i "s/$p/$new_name/g" "src/pages/$new_name.jsx"
done

