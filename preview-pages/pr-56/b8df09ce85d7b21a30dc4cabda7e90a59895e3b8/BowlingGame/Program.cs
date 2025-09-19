using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace BowlingGame
{
    /// <summary>
    /// Main program entry point for the bowling simulation game.
    /// This serves as a technical test environment for game design candidates
    /// to implement custom game modes and scoring systems.
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== Welcome to Bowling Simulation Game ===");
            Console.WriteLine("This is a technical test environment for game design.");
            Console.WriteLine();

            // Load game configuration from file
            var gameConfig = LoadGameConfiguration();
            var game = new BowlingGameEngine(gameConfig);

            // Get player names
            var players = GetPlayerNames();
            
            // Start the game
            game.StartGame(players);
            
            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }

        /// <summary>
        /// Loads game configuration from the gamemodes.json file.
        /// This allows for easy modification of game rules without code changes.
        /// </summary>
        /// <returns>GameConfiguration object with loaded settings</returns>
        private static GameConfiguration LoadGameConfiguration()
        {
            try
            {
                string configPath = "gamemodes.json";
                if (File.Exists(configPath))
                {
                    string jsonContent = File.ReadAllText(configPath);
                    var config = JsonSerializer.Deserialize<GameConfiguration>(jsonContent);
                    Console.WriteLine($"Loaded game mode: {config.ModeName}");
                    return config;
                }
                else
                {
                    Console.WriteLine("Configuration file not found. Using standard bowling rules.");
                    return GameConfiguration.CreateStandardMode();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error loading configuration: {ex.Message}");
                Console.WriteLine("Using standard bowling rules.");
                return GameConfiguration.CreateStandardMode();
            }
        }

        /// <summary>
        /// Prompts for player names and returns a list of players.
        /// Supports 2-4 players for multiplayer functionality.
        /// </summary>
        /// <returns>List of player names</returns>
        private static List<string> GetPlayerNames()
        {
            var players = new List<string>();
            
            Console.WriteLine("Enter player names (2-4 players):");
            
            for (int i = 1; i <= 4; i++)
            {
                Console.Write($"Player {i} name (or press Enter to finish): ");
                string name = Console.ReadLine()?.Trim();
                
                if (string.IsNullOrEmpty(name))
                {
                    if (i <= 2)
                    {
                        Console.WriteLine("At least 2 players are required!");
                        i--; // Retry this player
                        continue;
                    }
                    break; // Finish adding players
                }
                
                players.Add(name);
            }
            
            return players;
        }
    }
}