@echo off
setlocal
cd /d "%~dp0"
title Mahesh Rawat Portfolio

where node >nul 2>nul
if errorlevel 1 goto missing_node
where npm >nul 2>nul
if errorlevel 1 goto missing_npm

if not exist "node_modules" (
    echo Dependencies are missing. Installing them now...
    call npm install
    if errorlevel 1 goto failed
)

:menu
echo.
echo Mahesh Rawat Portfolio
echo [1] Local review (development server)
echo [2] Production preview (build and run)
echo [3] Exit
choice /c 123 /n /m "Choose an option: "
if errorlevel 3 goto done
if errorlevel 2 goto production
if errorlevel 1 goto review

:review
echo.
echo Starting local review at http://localhost:3000
call npm run dev
goto menu

:production
echo.
echo Building the production version...
call npm run build
if errorlevel 1 goto failed
echo.
echo Starting production preview at http://localhost:3000
call npm run start
goto menu

:missing_node
echo Node.js is not installed or is not available on PATH.
goto failed

:missing_npm
echo npm is not installed or is not available on PATH.
goto failed

:failed
echo.
echo The command did not complete successfully. Check the message above.
pause
exit /b 1

:done
exit /b 0
