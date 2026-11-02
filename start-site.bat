@echo off
rem Double-click this file to install, build and open the Sixpenny Hardware site.
cd /d "%~dp0"
echo Installing...
call npm install || goto :error
echo Building...
call npm run build || goto :error
echo Opening http://localhost:3000  (close this window to stop the site)
start "" http://localhost:3000
call npm start
goto :eof
:error
echo.
echo Something went wrong. Copy the red text above and send it to Claude.
pause
