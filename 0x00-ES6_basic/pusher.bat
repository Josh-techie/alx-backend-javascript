@echo off

REM Check if a commit message is provided
if "%~1"=="" (
    echo Usage: %0 ^<commit_message^>
    exit /b 1
)

REM Add all changes
git add .

REM Commit with the provided message
git commit -m "%~1"

REM Push to GitHub
git push
