using System;
using System.Collections.Generic;
using System.Linq;

namespace BowlingGame
{
    /// <summary>
    /// Main game engine that orchestrates the bowling simulation.
    /// Handles turn management, scoring calculations, and game flow.
    /// This is the core class that candidates will likely need to understand and modify.
    /// </summary>
    public class BowlingGameEngine
    {
        private GameConfiguration _config;
        private List<Player> _players;
        private Random _random;

        public BowlingGameEngine(GameConfiguration config)
        {
            _config = config;
            _players = new List<Player>();
            _random = new Random();
        }

        /// <summary>
        /// Starts a new game with the specified players.
        /// Manages the main game loop and turn rotation.
        /// </summary>
        /// <param name="playerNames">List of player names</param>
        public void StartGame(List<string> playerNames)
        {
            // Initialize players
            _players = playerNames.Select(name => new Player(name)).ToList();
            
            Console.WriteLine($"\n=== Starting {_config.ModeName} Game ===");
            Console.WriteLine(_config.Description);
            Console.WriteLine($"Players: {string.Join(", ", playerNames)}");
            Console.WriteLine();

            // Play all frames
            for (int frameNumber = 1; frameNumber <= _config.TotalFrames; frameNumber++)
            {
                Console.WriteLine($"\n--- Frame {frameNumber} ---");
                
                // Each player takes their turn for this frame
                foreach (var player in _players)
                {
                    PlayPlayerFrame(player, frameNumber);
                }
                
                // Show scores after each frame
                DisplayScoreboard();
            }

            // Game complete - show final results
            DisplayFinalResults();
        }

        /// <summary>
        /// Handles a single player's turn for one frame.
        /// Manages roll input, pin calculation, and frame completion.
        /// </summary>
        /// <param name="player">The player taking their turn</param>
        /// <param name="frameNumber">Current frame number (1-based)</param>
        private void PlayPlayerFrame(Player player, int frameNumber)
        {
            Console.WriteLine($"\n{player.Name}'s turn - Frame {frameNumber}");
            
            var frame = new Frame(frameNumber);
            int remainingPins = _config.TotalPins;

            // Continue rolling until frame is complete
            while (!frame.IsComplete())
            {
                int rollNumber = frame.Rolls.Count + 1;
                remainingPins = frame.GetRemainingPins(_config.TotalPins);
                
                Console.WriteLine($"Pins remaining: {remainingPins}");
                
                int pinsKnocked;
                if (_config.EnableRandomRolls)
                {
                    // Simulate random rolls for testing
                    pinsKnocked = _random.Next(0, remainingPins + 1);
                    Console.WriteLine($"Roll {rollNumber}: {pinsKnocked} pins knocked down (random)");
                }
                else
                {
                    // Get player input
                    pinsKnocked = GetPlayerRoll(rollNumber, remainingPins);
                }
                
                frame.AddRoll(pinsKnocked);
                
                // Display roll result
                if (frame.IsStrike && rollNumber == 1 && frameNumber < 10)
                {
                    Console.WriteLine("STRIKE! 🎳");
                }
                else if (frame.IsSpare && frame.Rolls.Count == 2)
                {
                    Console.WriteLine("SPARE! 🎯");
                }
            }

            // Add completed frame to player
            player.AddFrame(frame);
            
            // Calculate and update player's total score
            CalculatePlayerScore(player);
        }

        /// <summary>
        /// Gets a valid roll input from the player.
        /// Validates that the input is within acceptable range.
        /// </summary>
        /// <param name="rollNumber">Current roll number in the frame</param>
        /// <param name="maxPins">Maximum pins that can be knocked down</param>
        /// <returns>Number of pins to knock down</returns>
        private int GetPlayerRoll(int rollNumber, int maxPins)
        {
            while (true)
            {
                Console.Write($"Roll {rollNumber} - Enter pins to knock down (0-{maxPins}): ");
                string input = Console.ReadLine();
                
                if (int.TryParse(input, out int pins))
                {
                    if (pins >= 0 && pins <= maxPins)
                    {
                        return pins;
                    }
                    else
                    {
                        Console.WriteLine($"Invalid input. Please enter a number between 0 and {maxPins}.");
                    }
                }
                else
                {
                    Console.WriteLine("Invalid input. Please enter a number.");
                }
            }
        }

        /// <summary>
        /// Calculates the total score for a player using standard bowling rules.
        /// Handles strike and spare bonuses according to the game configuration.
        /// This is a key method for candidates to understand and potentially modify.
        /// </summary>
        /// <param name="player">Player whose score to calculate</param>
        private void CalculatePlayerScore(Player player)
        {
            int totalScore = 0;

            for (int i = 0; i < player.Frames.Count; i++)
            {
                var frame = player.Frames[i];
                int frameScore = frame.BaseScore; // Start with base pins knocked down

                // Apply strike bonus (next two rolls)
                if (frame.IsStrike && i < 9) // Strikes in frames 1-9 get bonus
                {
                    frameScore += _config.StrikeBonus;
                    
                    // Add next two rolls as bonus
                    var nextTwoRolls = GetNextTwoRolls(player, i);
                    frameScore += nextTwoRolls.Sum();
                }
                // Apply spare bonus (next one roll)
                else if (frame.IsSpare && i < 9) // Spares in frames 1-9 get bonus
                {
                    int bonusPoints = _config.CustomSparePoints > 0 ? _config.CustomSparePoints : _config.SpareBonus;
                    frameScore += bonusPoints;
                    
                    // Add next roll as bonus (unless using custom spare points)
                    if (_config.CustomSparePoints == 0)
                    {
                        var nextRoll = GetNextRoll(player, i);
                        if (nextRoll.HasValue)
                            frameScore += nextRoll.Value;
                    }
                }

                // Update frame's bonus score for display
                frame.BonusScore = frameScore - frame.BaseScore;
                totalScore += frameScore;
            }

            player.TotalScore = totalScore;
        }

        /// <summary>
        /// Gets the next two rolls after the specified frame for strike bonus calculation.
        /// Handles the complexity of 10th frame extra rolls.
        /// </summary>
        /// <param name="player">Player whose rolls to examine</param>
        /// <param name="frameIndex">Index of the frame to look after</param>
        /// <returns>List of next two roll values</returns>
        private List<int> GetNextTwoRolls(Player player, int frameIndex)
        {
            var rolls = new List<int>();
            
            if (frameIndex + 1 < player.Frames.Count)
            {
                var nextFrame = player.Frames[frameIndex + 1];
                
                // Add rolls from next frame
                rolls.AddRange(nextFrame.Rolls.Take(2));
                
                // If we need one more roll and there's another frame
                if (rolls.Count == 1 && frameIndex + 2 < player.Frames.Count)
                {
                    var frameAfterNext = player.Frames[frameIndex + 2];
                    if (frameAfterNext.Rolls.Count > 0)
                        rolls.Add(frameAfterNext.Rolls[0]);
                }
            }
            
            return rolls;
        }

        /// <summary>
        /// Gets the next single roll after the specified frame for spare bonus calculation.
        /// </summary>
        /// <param name="player">Player whose rolls to examine</param>
        /// <param name="frameIndex">Index of the frame to look after</param>
        /// <returns>Next roll value, or null if not available</returns>
        private int? GetNextRoll(Player player, int frameIndex)
        {
            if (frameIndex + 1 < player.Frames.Count)
            {
                var nextFrame = player.Frames[frameIndex + 1];
                if (nextFrame.Rolls.Count > 0)
                    return nextFrame.Rolls[0];
            }
            return null;
        }

        /// <summary>
        /// Displays the current scoreboard showing all players' progress.
        /// Shows frame-by-frame breakdown and running totals.
        /// </summary>
        private void DisplayScoreboard()
        {
            Console.WriteLine("\n=== SCOREBOARD ===");
            
            foreach (var player in _players)
            {
                Console.WriteLine($"\n{player.Name}:");
                Console.Write("Frames: ");
                
                for (int i = 0; i < player.Frames.Count; i++)
                {
                    var frame = player.Frames[i];
                    string frameDisplay = "";
                    
                    if (frame.IsStrike)
                        frameDisplay = "X";
                    else if (frame.IsSpare)
                        frameDisplay = $"{frame.Rolls[0]}/";
                    else if (frame.Rolls.Count == 2)
                        frameDisplay = $"{frame.Rolls[0]},{frame.Rolls[1]}";
                    else if (frame.Rolls.Count == 1)
                        frameDisplay = $"{frame.Rolls[0]}";
                    
                    // Special display for 10th frame
                    if (frame.FrameNumber == 10 && frame.Rolls.Count > 2)
                    {
                        frameDisplay = string.Join(",", frame.Rolls);
                    }
                    
                    Console.Write($"[{frameDisplay}] ");
                }
                
                Console.WriteLine($"\nTotal Score: {player.TotalScore}");
            }
        }

        /// <summary>
        /// Displays final game results with winner announcement.
        /// Sorts players by score and declares the winner.
        /// </summary>
        private void DisplayFinalResults()
        {
            Console.WriteLine("\n\n=== FINAL RESULTS ===");
            
            var sortedPlayers = _players.OrderByDescending(p => p.TotalScore).ToList();
            
            for (int i = 0; i < sortedPlayers.Count; i++)
            {
                var player = sortedPlayers[i];
                string position = i == 0 ? "🏆 WINNER" : $"#{i + 1}";
                Console.WriteLine($"{position}: {player.Name} - {player.TotalScore} points");
            }
            
            Console.WriteLine($"\nGame mode: {_config.ModeName}");
            Console.WriteLine("Thank you for playing!");
        }
    }
}