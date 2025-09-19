using System.Text.Json.Serialization;

namespace BowlingGame
{
    /// <summary>
    /// Configuration class that defines game mode settings.
    /// This allows for easy customization of bowling rules and scoring.
    /// Game design candidates can modify this to implement alternative game modes.
    /// </summary>
    public class GameConfiguration
    {
        [JsonPropertyName("modeName")]
        public string ModeName { get; set; } = "Standard";
        
        [JsonPropertyName("description")]
        public string Description { get; set; } = "Standard 10-pin bowling rules";
        
        [JsonPropertyName("totalFrames")]
        public int TotalFrames { get; set; } = 10;
        
        [JsonPropertyName("totalPins")]
        public int TotalPins { get; set; } = 10;
        
        [JsonPropertyName("strikeBonus")]
        public int StrikeBonus { get; set; } = 10;
        
        [JsonPropertyName("spareBonus")]
        public int SpareBonus { get; set; } = 10;
        
        [JsonPropertyName("allowExtraBalls")]
        public bool AllowExtraBalls { get; set; } = true;
        
        [JsonPropertyName("customSparePoints")]
        public int CustomSparePoints { get; set; } = 0; // 0 means use standard rules
        
        [JsonPropertyName("enableRandomRolls")]
        public bool EnableRandomRolls { get; set; } = false;

        /// <summary>
        /// Creates the standard bowling game configuration.
        /// This serves as the default fallback when no configuration file is found.
        /// </summary>
        /// <returns>Standard game configuration</returns>
        public static GameConfiguration CreateStandardMode()
        {
            return new GameConfiguration
            {
                ModeName = "Standard",
                Description = "Standard 10-pin bowling rules with strikes, spares, and 10 frames",
                TotalFrames = 10,
                TotalPins = 10,
                StrikeBonus = 10,
                SpareBonus = 10,
                AllowExtraBalls = true,
                CustomSparePoints = 0,
                EnableRandomRolls = false
            };
        }
    }
}