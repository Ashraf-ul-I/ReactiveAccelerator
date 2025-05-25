cd CineRental
git init # (if needed)
git checkout -b cineRental
git add .
git commit -m "Initial commit for CineRental project"
git remote add origin <your-repo-url> # (if needed)
git push -u origin cineRental

git bracnh create and push data system

if i want to merge this
Option 2: Merge cine-rental into main locally, then push
Switch to main locally:
git checkout main
Merge cine-rental into main:
git merge cine-rental
Push main to remote:
git push origin main
