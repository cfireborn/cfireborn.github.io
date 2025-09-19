# Bowling Simulation Game - Technical Test Environment

This is a C# console application that simulates a multiplayer text-based bowling game. It has been designed as a technical test environment for game design candidates to implement custom game modes and alternative scoring systems.

## Features

- **Multiplayer Support**: 2-4 players can take turns
- **Standard Bowling Rules**: Implements strikes, spares, and 10-frame scoring
- **Configurable Game Modes**: JSON-based configuration system for custom rules
- **Interactive Console Interface**: Players input their desired pin counts
- **Comprehensive Scoring**: Handles all bowling scoring complexities including 10th frame

## Quick Start

### Prerequisites
- .NET 6.0 or later

### Running the Game
```bash
cd BowlingGame
dotnet run
```

### Alternative: Compile and Run
```bash
cd BowlingGame
dotnet build
dotnet run --project BowlingGame.csproj
```

## Game Modes

The game loads configuration from `gamemodes.json`. If this file doesn't exist, it defaults to standard bowling rules.

### Current Active Mode
The `gamemodes.json` file contains the currently active game mode. Example configurations are provided in `gamemodes-examples.json`.

### Available Example Modes

1. **Standard Mode**: Traditional 10-pin bowling (10 frames)
2. **Power Spare Mode**: 5 frames with bonus points for spares (15 points instead of standard bonus)
3. **Speed Bowling**: Quick 3-frame game with enhanced bonuses
4. **Nine Pin Classic**: Traditional 9-pin bowling variant
5. **Random Test Mode**: Automated mode with random rolls for testing

### Creating Custom Game Modes

Modify the `gamemodes.json` file with these parameters:

```json
{
  "modeName": "Your Custom Mode",
  "description": "Description of your game mode",
  "totalFrames": 10,           // Number of frames (1-10)
  "totalPins": 10,             // Pins per frame (1-10)
  "strikeBonus": 10,           // Bonus points for strikes
  "spareBonus": 10,            // Bonus points for spares
  "allowExtraBalls": true,     // Allow extra balls in 10th frame
  "customSparePoints": 0,      // Custom spare points (0 = use standard rules)
  "enableRandomRolls": false   // Auto-generate random rolls for testing
}
```

## Architecture Overview

### Core Classes

1. **Program.cs**: Entry point and main game orchestration
2. **BowlingGameEngine.cs**: Core game logic and flow management
3. **Player.cs**: Player data and state management
4. **Frame.cs**: Individual frame logic and scoring
5. **GameConfiguration.cs**: Configuration management and game mode definitions

### Key Design Decisions

- **Separation of Concerns**: Game logic, player management, and configuration are separated
- **Extensible Configuration**: JSON-based system allows easy rule modifications
- **Standard Compliance**: Implements full bowling rules including complex 10th frame logic
- **Interview-Friendly**: Extensive comments and clear method structure for discussion

## Technical Test Scenarios

This codebase is designed for candidates to demonstrate their ability to:

### 1. Understanding Existing Code
- Trace through the scoring algorithm
- Explain the 10th frame special rules
- Identify how strikes and spares are handled

### 2. Implementing New Features
- Add new game modes via JSON configuration
- Implement alternative scoring systems
- Add new player statistics or game mechanics

### 3. Code Quality and Design
- Discuss SOLID principles in the current design
- Propose improvements or refactoring opportunities
- Handle edge cases and error conditions

### 4. Problem-Solving Examples

**Easy**: Create a "Short Game" mode with only 5 frames
```json
{
  "modeName": "Short Game",
  "totalFrames": 5,
  "totalPins": 10,
  "strikeBonus": 10,
  "spareBonus": 10
}
```

**Medium**: Implement "Lucky 7s" where hitting exactly 7 pins gives bonus points
- Requires modifying the scoring logic in `BowlingGameEngine.cs`
- Add new configuration parameters
- Update the `CalculatePlayerScore` method

**Hard**: Add "Team Mode" where players are grouped into teams
- Requires new classes for team management
- Modify scoring to track team totals
- Update display logic for team standings

## Discussion Points for Interviews

1. **Bowling Rules Complexity**: How does the code handle the 10th frame's special rules?
2. **Configuration System**: What are the pros/cons of the JSON configuration approach?
3. **Extensibility**: How would you add new types of bonuses or penalties?
4. **Error Handling**: What edge cases should be considered?
5. **Performance**: Are there any performance considerations for larger games?
6. **Testing**: How would you structure unit tests for this codebase?

## File Structure
```
BowlingGame/
├── Program.cs                    # Main entry point
├── BowlingGameEngine.cs         # Core game logic
├── Player.cs                    # Player management
├── Frame.cs                     # Frame logic and scoring
├── GameConfiguration.cs         # Configuration classes
├── BowlingGame.csproj          # Project file
├── gamemodes.json              # Active game mode configuration
├── gamemodes-examples.json     # Example configurations
└── README.md                   # This documentation
```

## Next Steps for Candidates

1. Run the application and play a complete game
2. Experiment with different game modes from the examples
3. Create your own custom game mode
4. Identify and implement one improvement or new feature
5. Be prepared to discuss your changes and the reasoning behind them

This codebase provides a solid foundation for technical discussions about game design, software architecture, and C# development practices.