using System;

namespace BowlingGame.Models
{
    /// <summary>
    /// Represents a game mode configuration
    /// </summary>
    public class GameMode
    {
        /// <summary>
        /// Name of the game mode
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Description of the game mode
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Total number of frames in the game
        /// </summary>
        public int TotalFrames { get; set; }

        /// <summary>
        /// Maximum number of pins per frame
        /// </summary>
        public int MaxPinsPerFrame { get; set; }

        /// <summary>
        /// Bonus points added for a strike (in addition to standard scoring)
        /// </summary>
        public int StrikeBonus { get; set; }

        /// <summary>
        /// Bonus points added for a spare (in addition to standard scoring)
        /// </summary>
        public int SpareBonus { get; set; }

        /// <summary>
        /// Whether to use random rolls instead of player input
        /// </summary>
        public bool UseRandomRolls { get; set; }

        /// <summary>
        /// Constructor with default values for standard bowling
        /// </summary>
        public GameMode()
        {
            Name = "Standard";
            Description = "Standard 10-frame bowling with strikes and spares";
            TotalFrames = 10;
            MaxPinsPerFrame = 10;
            StrikeBonus = 10;
            SpareBonus = 5;
            UseRandomRolls = false;
        }
    }
}