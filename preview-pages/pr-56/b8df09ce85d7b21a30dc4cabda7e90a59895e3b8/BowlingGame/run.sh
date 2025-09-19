#!/bin/bash

# Simple script to run the Bowling Game
# Make sure you have .NET 6.0 or later installed

echo "=== Bowling Game Runner ==="
echo "Checking for .NET..."

if command -v dotnet &> /dev/null; then
    echo "✓ .NET found"
    echo "Building project..."
    dotnet build
    
    if [ $? -eq 0 ]; then
        echo "✓ Build successful"
        echo "Starting game..."
        echo ""
        dotnet run
    else
        echo "✗ Build failed"
        exit 1
    fi
else
    echo "✗ .NET not found"
    echo ""
    echo "Please install .NET 6.0 or later:"
    echo "https://dotnet.microsoft.com/download"
    echo ""
    echo "Then run this script again or use:"
    echo "  dotnet run"
    exit 1
fi