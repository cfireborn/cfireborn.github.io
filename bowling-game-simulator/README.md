# Bowling Game Simulator

A text-based bowling simulation game written in C# that supports multiple players and customizable game modes. This repository serves as a technical test environment for game design candidates.

## Features

- **Multiplayer Support**: 2-6 players can play in the same game
- **Standard Bowling Rules**: Full implementation including strikes, spares, and 10th frame special rules
- **Customizable Game Modes**: Multiple pre-configured game modes with different rules
- **Manual or Random Rolls**: Players can input their rolls or let the computer roll randomly
- **Real-time Scoring**: See scores update after each roll with proper bowling scoring calculations
- **Clean Architecture**: Well-structured code with clear separation of concerns

## Project Structure

```
BowlingGame/
├── Models/
│   ├── Player.cs      # Player class with frames and scoring
│   ├── Frame.cs       # Frame class with roll tracking and status
│   └── GameMode.cs    # Game mode configuration model
├── Services/
│   ├── BowlingGame.cs      # Main game logic and scoring calculations
│   └── GameModeService.cs  # Game mode loading and management
├── Program.cs              # Main console application
├── gamemodes.json         # Game mode configurations
└── BowlingGame.csproj     # Project file
```

## Setup and Running

### Prerequisites
- .NET 8.0 SDK or later

### Running the Game

1. Navigate to the BowlingGame directory:
   ```bash
   cd bowling-game-simulator/BowlingGame
   ```

2. Build the project:
   ```bash
   dotnet build
   ```

3. Run the game:
   ```bash
   dotnet run
   ```

## Game Modes

The game includes several pre-configured game modes in `gamemodes.json`:

1. **Standard**: Traditional 10-frame bowling with standard scoring
2. **Quick Game**: A shorter 5-frame version for quick games
3. **High Stakes**: Double bonus points for strikes and spares
4. **Random Chaos**: Computer rolls for all players - pure luck!
5. **Nine Pin No-Tap**: Knocking down 9 pins counts as a strike with bonus points

### Creating Custom Game Modes

You can create your own game modes by editing `gamemodes.json`. Each game mode has the following properties:

```json
{
  "name": "Your Mode Name",
  "description": "Description of your game mode",
  "totalFrames": 10,           // Number of frames (1-10)
  "maxPinsPerFrame": 10,       // Maximum pins per frame
  "strikeBonus": 10,           // Bonus points for strikes
  "spareBonus": 5,             // Bonus points for spares
  "useRandomRolls": false      // Whether to use computer rolls
}
```

## Code Structure for Technical Interview

The code is structured with clear methods and extensive comments to facilitate discussion during technical interviews:

### Key Components:

1. **Player Management** (`Models/Player.cs`):
   - Tracks player state, frames, and total score
   - Manages frame progression

2. **Frame Logic** (`Models/Frame.cs`):
   - Handles roll tracking and frame completion
   - Determines strikes, spares, and remaining pins
   - Special handling for 10th frame rules

3. **Game Service** (`Services/BowlingGame.cs`):
   - Core game loop and turn management
   - Score calculation with proper strike/spare bonuses
   - Game completion and winner determination

4. **Configuration** (`Services/GameModeService.cs`):
   - Loads game modes from JSON configuration
   - Provides default modes if config file is missing

### Discussion Points for Candidates:

1. **Game Design**: How would you design a new game mode? What parameters would make it interesting?
2. **Scoring System**: How would you modify the scoring system for different gameplay experiences?
3. **Feature Extensions**: What features would you add to make the game more engaging?
4. **Code Architecture**: How would you refactor or extend the current architecture?

## Example Game Flow

1. Select a game mode from the available options
2. Enter the number of players (2-6) and their names
3. Each player takes turns:
   - View current scorecard
   - Enter pins knocked down (or watch computer roll)
   - See immediate feedback (Strike!/Spare!)
   - View updated scores
4. Game ends after all frames are complete
5. Final scores and winner announcement

## Notes for Candidates

- The code includes extensive comments explaining the logic
- Consider how different game modes could create unique experiences
- Think about balance between skill and luck in game design
- The JSON configuration system allows for easy experimentation
- Frame and scoring logic follows official bowling rules