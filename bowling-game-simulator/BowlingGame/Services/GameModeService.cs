using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using BowlingGame.Models;

namespace BowlingGame.Services
{
    /// <summary>
    /// Service for loading and managing game modes
    /// </summary>
    public class GameModeService
    {
        private const string CONFIG_FILE = "gamemodes.json";

        /// <summary>
        /// Loads all available game modes from the configuration file
        /// </summary>
        /// <returns>List of available game modes</returns>
        public List<GameMode> LoadGameModes()
        {
            try
            {
                if (File.Exists(CONFIG_FILE))
                {
                    string json = File.ReadAllText(CONFIG_FILE);
                    var options = new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    };
                    return JsonSerializer.Deserialize<List<GameMode>>(json, options);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error loading game modes: {ex.Message}");
            }

            // Return default game modes if file doesn't exist or error occurs
            return GetDefaultGameModes();
        }

        /// <summary>
        /// Gets the default game modes
        /// </summary>
        /// <returns>List of default game modes</returns>
        private List<GameMode> GetDefaultGameModes()
        {
            return new List<GameMode>
            {
                new GameMode
                {
                    Name = "Standard",
                    Description = "Standard 10-frame bowling with strikes and spares",
                    TotalFrames = 10,
                    MaxPinsPerFrame = 10,
                    StrikeBonus = 10,
                    SpareBonus = 5,
                    UseRandomRolls = false
                },
                new GameMode
                {
                    Name = "Quick Game",
                    Description = "A shorter 5-frame game for quick play",
                    TotalFrames = 5,
                    MaxPinsPerFrame = 10,
                    StrikeBonus = 10,
                    SpareBonus = 5,
                    UseRandomRolls = false
                },
                new GameMode
                {
                    Name = "High Stakes",
                    Description = "Extra points for strikes and spares make every shot count!",
                    TotalFrames = 10,
                    MaxPinsPerFrame = 10,
                    StrikeBonus = 20,
                    SpareBonus = 10,
                    UseRandomRolls = false
                },
                new GameMode
                {
                    Name = "Random Chaos",
                    Description = "Let the computer roll for you - pure luck!",
                    TotalFrames = 10,
                    MaxPinsPerFrame = 10,
                    StrikeBonus = 10,
                    SpareBonus = 5,
                    UseRandomRolls = true
                }
            };
        }

        /// <summary>
        /// Creates the default game modes configuration file
        /// </summary>
        public void CreateDefaultConfigFile()
        {
            try
            {
                var defaultModes = GetDefaultGameModes();
                var options = new JsonSerializerOptions
                {
                    WriteIndented = true,
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                };
                string json = JsonSerializer.Serialize(defaultModes, options);
                File.WriteAllText(CONFIG_FILE, json);
                Console.WriteLine($"Created {CONFIG_FILE} with default game modes.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error creating config file: {ex.Message}");
            }
        }
    }
}