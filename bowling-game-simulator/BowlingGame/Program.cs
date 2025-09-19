using System;
using System.Collections.Generic;
using System.Linq;
using BowlingGame.Models;
using BowlingGame.Services;

namespace BowlingGame
{
    class Program
    {
        static BowlingGameService gameService;
        static GameModeService gameModeService;
        static Random random = new Random();

        static void Main(string[] args)
        {
            Console.WriteLine("=================================");
            Console.WriteLine("  Welcome to Bowling Simulator!  ");
            Console.WriteLine("=================================");
            Console.WriteLine();

            // Initialize services
            gameService = new BowlingGameService();
            gameModeService = new GameModeService();

            // Create default config file if it doesn't exist
            gameModeService.CreateDefaultConfigFile();

            // Select game mode
            SelectGameMode();

            // Get players
            GetPlayers();

            // Play the game
            PlayGame();

            // Display final results
            DisplayFinalResults();

            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }

        /// <summary>
        /// Allows users to select a game mode
        /// </summary>
        static void SelectGameMode()
        {
            var gameModes = gameModeService.LoadGameModes();
            
            Console.WriteLine("Available Game Modes:");
            Console.WriteLine("---------------------");
            
            for (int i = 0; i < gameModes.Count; i++)
            {
                Console.WriteLine($"{i + 1}. {gameModes[i].Name} - {gameModes[i].Description}");
            }
            
            Console.Write("\nSelect a game mode (1-{0}): ", gameModes.Count);
            
            int selection;
            while (!int.TryParse(Console.ReadLine(), out selection) || selection < 1 || selection > gameModes.Count)
            {
                Console.Write("Invalid selection. Please enter a number between 1 and {0}: ", gameModes.Count);
            }
            
            gameService.CurrentGameMode = gameModes[selection - 1];
            Console.WriteLine($"\nSelected: {gameService.CurrentGameMode.Name}");
            Console.WriteLine();
        }

        /// <summary>
        /// Gets player names and adds them to the game
        /// </summary>
        static void GetPlayers()
        {
            Console.Write("How many players? (2-6): ");
            
            int playerCount;
            while (!int.TryParse(Console.ReadLine(), out playerCount) || playerCount < 2 || playerCount > 6)
            {
                Console.Write("Invalid number. Please enter a number between 2 and 6: ");
            }
            
            Console.WriteLine();
            
            for (int i = 1; i <= playerCount; i++)
            {
                Console.Write($"Enter name for Player {i}: ");
                string name = Console.ReadLine();
                
                if (string.IsNullOrWhiteSpace(name))
                {
                    name = $"Player {i}";
                }
                
                gameService.AddPlayer(name);
            }
            
            Console.WriteLine();
        }

        /// <summary>
        /// Main game loop
        /// </summary>
        static void PlayGame()
        {
            while (!gameService.IsGameComplete())
            {
                foreach (var player in gameService.Players)
                {
                    if (gameService.IsGameComplete())
                        break;
                    
                    PlayTurn(player);
                }
            }
        }

        /// <summary>
        /// Handles a single player's turn
        /// </summary>
        static void PlayTurn(Player player)
        {
            Frame currentFrame = player.Frames.FirstOrDefault(f => !f.IsComplete);
            
            // Check if player has any frames left
            if (currentFrame == null && player.Frames.Count >= gameService.CurrentGameMode.TotalFrames)
                return;
            
            Console.WriteLine("=================================");
            Console.WriteLine($"{player.Name}'s Turn - Frame {player.GetCurrentFrameNumber()}");
            Console.WriteLine("=================================");
            
            // Display current score
            DisplayScorecard(player);
            
            // Get or create current frame
            if (currentFrame == null)
            {
                currentFrame = new Frame(player.GetCurrentFrameNumber());
                player.Frames.Add(currentFrame);
            }
            
            // Continue rolling until frame is complete
            while (!currentFrame.IsComplete)
            {
                int rollNumber = currentFrame.Rolls.Count + 1;
                int remainingPins = currentFrame.GetRemainingPins();
                
                Console.WriteLine($"\nRoll {rollNumber} - {remainingPins} pins remaining");
                
                int pinsKnocked;
                if (gameService.CurrentGameMode.UseRandomRolls)
                {
                    // Random roll
                    pinsKnocked = random.Next(0, remainingPins + 1);
                    Console.WriteLine($"Computer rolls... {pinsKnocked} pins knocked down!");
                }
                else
                {
                    // Player input
                    Console.Write($"How many pins to knock down (0-{remainingPins})? ");
                    
                    while (!int.TryParse(Console.ReadLine(), out pinsKnocked) || pinsKnocked < 0 || pinsKnocked > remainingPins)
                    {
                        Console.Write($"Invalid input. Please enter a number between 0 and {remainingPins}: ");
                    }
                }
                
                // Process the roll
                gameService.ProcessRoll(player, pinsKnocked);
                
                // Display result
                if (currentFrame.IsStrike && rollNumber == 1)
                {
                    Console.WriteLine("*** STRIKE! ***");
                }
                else if (currentFrame.IsSpare && rollNumber == 2)
                {
                    Console.WriteLine("*** SPARE! ***");
                }
            }
            
            Console.WriteLine($"\nFrame Score: {currentFrame.Score}");
            Console.WriteLine($"Total Score: {player.TotalScore}");
            Console.WriteLine("\nPress any key to continue...");
            Console.ReadKey();
            Console.Clear();
        }

        /// <summary>
        /// Displays a player's scorecard
        /// </summary>
        static void DisplayScorecard(Player player)
        {
            Console.WriteLine("\nScorecard:");
            Console.WriteLine("Frame:  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 |");
            Console.WriteLine("--------|----|----|----|----|----|----|----|----|----|----|");
            
            // Display rolls
            Console.Write("Rolls:  ");
            for (int i = 1; i <= gameService.CurrentGameMode.TotalFrames; i++)
            {
                var frame = player.Frames.FirstOrDefault(f => f.FrameNumber == i);
                if (frame != null)
                {
                    string rollDisplay = GetFrameRollDisplay(frame);
                    Console.Write($"| {rollDisplay,-3}");
                }
                else
                {
                    Console.Write("|    ");
                }
            }
            Console.WriteLine("|");
            
            // Display scores
            Console.Write("Score:  ");
            int runningTotal = 0;
            for (int i = 1; i <= gameService.CurrentGameMode.TotalFrames; i++)
            {
                var frame = player.Frames.FirstOrDefault(f => f.FrameNumber == i);
                if (frame != null && frame.Score > 0)
                {
                    runningTotal += frame.Score;
                    Console.Write($"| {runningTotal,3}");
                }
                else
                {
                    Console.Write("|    ");
                }
            }
            Console.WriteLine("|");
        }

        /// <summary>
        /// Gets the display string for a frame's rolls
        /// </summary>
        static string GetFrameRollDisplay(Frame frame)
        {
            if (frame.FrameNumber == 10)
            {
                // 10th frame special display
                string display = "";
                for (int i = 0; i < frame.Rolls.Count; i++)
                {
                    if (frame.Rolls[i] == 10)
                        display += "X";
                    else if (i > 0 && frame.Rolls[i-1] + frame.Rolls[i] == 10)
                        display += "/";
                    else
                        display += frame.Rolls[i].ToString();
                }
                return display;
            }
            else
            {
                // Regular frames
                if (frame.IsStrike)
                    return "X";
                else if (frame.IsSpare)
                    return $"{frame.Rolls[0]}/";
                else if (frame.Rolls.Count == 2)
                    return $"{frame.Rolls[0]}{frame.Rolls[1]}";
                else if (frame.Rolls.Count == 1)
                    return frame.Rolls[0].ToString();
                else
                    return "";
            }
        }

        /// <summary>
        /// Displays the final game results
        /// </summary>
        static void DisplayFinalResults()
        {
            Console.Clear();
            Console.WriteLine("=================================");
            Console.WriteLine("         GAME COMPLETE!          ");
            Console.WriteLine("=================================");
            Console.WriteLine();
            
            // Display all players' final scores
            Console.WriteLine("Final Scores:");
            Console.WriteLine("-------------");
            
            var sortedPlayers = gameService.Players.OrderByDescending(p => p.TotalScore).ToList();
            
            for (int i = 0; i < sortedPlayers.Count; i++)
            {
                var player = sortedPlayers[i];
                Console.WriteLine($"{i + 1}. {player.Name}: {player.TotalScore} points");
                
                // Display final scorecard
                DisplayScorecard(player);
                Console.WriteLine();
            }
            
            // Announce winner(s)
            var winners = gameService.GetWinners();
            if (winners.Count == 1)
            {
                Console.WriteLine($"\n🏆 {winners[0].Name} wins with {winners[0].TotalScore} points! 🏆");
            }
            else
            {
                Console.WriteLine($"\n🏆 It's a tie! Winners: {string.Join(", ", winners.Select(w => w.Name))} with {winners[0].TotalScore} points! 🏆");
            }
        }
    }
}