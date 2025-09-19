@echo off

REM Simple script to run the Bowling Game on Windows
REM Make sure you have .NET 6.0 or later installed

echo === Bowling Game Runner ===
echo Checking for .NET...

dotnet --version >nul 2>&1
if %errorlevel% == 0 (
    echo ✓ .NET found
    echo Building project...
    dotnet build
    
    if %errorlevel% == 0 (
        echo ✓ Build successful
        echo Starting game...
        echo.
        dotnet run
    ) else (
        echo ✗ Build failed
        pause
        exit /b 1
    )
) else (
    echo ✗ .NET not found
    echo.
    echo Please install .NET 6.0 or later:
    echo https://dotnet.microsoft.com/download
    echo.
    echo Then run this script again or use:
    echo   dotnet run
    pause
    exit /b 1
)