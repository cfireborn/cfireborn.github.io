/**
 * Image Randomizer for Heartbreak Healing Stages
 * Selects appropriate images based on healing percentage
 */

// Configuration data (could be loaded from config.json)
const HEALING_STAGES = [
  { name: "denial", minHealing: 0, maxHealing: 15, folder: "stage-1-denial" },
  { name: "anger", minHealing: 15, maxHealing: 30, folder: "stage-2-anger" },
  { name: "bargaining", minHealing: 30, maxHealing: 45, folder: "stage-3-bargaining" },
  { name: "depression", minHealing: 45, maxHealing: 60, folder: "stage-4-depression" },
  { name: "acceptance", minHealing: 60, maxHealing: 75, folder: "stage-5-acceptance" },
  { name: "hope", minHealing: 75, maxHealing: 90, folder: "stage-6-hope" },
  { name: "healing", minHealing: 90, maxHealing: 100, folder: "stage-7-healing" }
];

const ART_STYLES = [
  "cartoon",
  "impressionist", 
  "abstract",
  "realistic-oil-painting",
  "photorealistic"
];

// Track current image state for shuffling
let currentImageState = {
  stageFolder: null,
  artStyle: null,
  imageNumber: 1,
  maxImages: 5
};

/**
 * Get the appropriate stage folder based on healing percentage
 * @param {number} healingPercentage - Percentage of healing (0-100)
 * @returns {string} Stage folder name
 */
function getStageForHealing(healingPercentage) {
  const stage = HEALING_STAGES.find(stage => 
    healingPercentage >= stage.minHealing && healingPercentage < stage.maxHealing
  );
  
  // Handle edge case for 100% healing
  if (healingPercentage === 100) {
    return HEALING_STAGES[HEALING_STAGES.length - 1].folder;
  }
  
  return stage ? stage.folder : HEALING_STAGES[0].folder;
}

/**
 * Get a random art style
 * @returns {string} Art style folder name
 */
function getRandomArtStyle() {
  return ART_STYLES[Math.floor(Math.random() * ART_STYLES.length)];
}

/**
 * Generate image path based on healing percentage
 * @param {number} healingPercentage - Percentage of healing (0-100)
 * @param {string} [forceStyle] - Optional: force a specific art style
 * @param {number} [imageNumber] - Optional: specific image number (1-5+)
 * @returns {string} Image file path
 */
function getRandomImagePath(healingPercentage, forceStyle = null, imageNumber = null) {
  const stageFolder = getStageForHealing(healingPercentage);
  const artStyle = forceStyle || getRandomArtStyle();
  const imgNum = imageNumber || Math.floor(Math.random() * 5) + 1; // Assuming 5 images per style
  
  // Update current state when generating new path
  currentImageState.stageFolder = stageFolder;
  currentImageState.artStyle = artStyle;
  currentImageState.imageNumber = imgNum;
  
  // Extract stage name from folder for filename
  const stageName = stageFolder.split('-').slice(2).join('-'); // Remove "stage-X-" prefix
  
  // Format: images/stage-X-name/style/filename.svg
  return `images/${stageFolder}/${artStyle}/${stageName}_${artStyle}_${imgNum.toString().padStart(2, '0')}.svg`;
}

/**
 * Get next image in the same stage/style bucket for shuffling
 * @param {number} healingPercentage - Percentage of healing (0-100)
 * @returns {string} Next image file path in the same bucket
 */
function getNextImageInBucket(healingPercentage) {
  const stageFolder = getStageForHealing(healingPercentage);
  
  // If stage changed, reset to random style and image 1
  if (currentImageState.stageFolder !== stageFolder) {
    currentImageState.stageFolder = stageFolder;
    currentImageState.artStyle = getRandomArtStyle();
    currentImageState.imageNumber = 1;
  } else {
    // Same stage, cycle to next image in current style
    currentImageState.imageNumber = (currentImageState.imageNumber % currentImageState.maxImages) + 1;
  }
  
  // Extract stage name from folder for filename
  const stageName = stageFolder.split('-').slice(2).join('-'); // Remove "stage-X-" prefix
  
  // Format: images/stage-X-name/style/filename.svg
  return `images/${stageFolder}/${currentImageState.artStyle}/${stageName}_${currentImageState.artStyle}_${currentImageState.imageNumber.toString().padStart(2, '0')}.svg`;
}

/**
 * Get stage information for display
 * @param {number} healingPercentage - Percentage of healing (0-100)
 * @returns {object} Stage information
 */
function getStageInfo(healingPercentage) {
  const stage = HEALING_STAGES.find(stage => 
    healingPercentage >= stage.minHealing && healingPercentage < stage.maxHealing
  );
  
  if (healingPercentage === 100) {
    return HEALING_STAGES[HEALING_STAGES.length - 1];
  }
  
  return stage || HEALING_STAGES[0];
}

/**
 * Load and display random image based on healing percentage
 * @param {number} healingPercentage - Percentage of healing (0-100)
 * @param {string} targetElementId - ID of HTML element to display image
 */
function displayRandomImage(healingPercentage, targetElementId) {
  const imagePath = getRandomImagePath(healingPercentage);
  const stageInfo = getStageInfo(healingPercentage);
  
  const imgElement = document.getElementById(targetElementId);
  if (imgElement) {
    imgElement.src = imagePath;
    imgElement.alt = `${stageInfo.name} stage - ${healingPercentage}% healed`;
    imgElement.title = `Stage: ${stageInfo.name} (${healingPercentage}% healed)`;
  }
  
  console.log(`Displaying: ${imagePath}`);
  console.log(`Stage: ${stageInfo.name} (${healingPercentage}% healed)`);
}

/**
 * Preload images for smoother transitions
 * @param {number} healingPercentage - Current healing percentage
 */
function preloadAdjacentImages(healingPercentage) {
  const currentStage = getStageInfo(healingPercentage);
  const adjacentPercentages = [
    Math.max(0, healingPercentage - 5),
    Math.min(100, healingPercentage + 5)
  ];
  
  adjacentPercentages.forEach(percentage => {
    const imagePath = getRandomImagePath(percentage);
    const img = new Image();
    img.src = imagePath;
  });
}

/**
 * Get all available images for a specific healing percentage
 * @param {number} healingPercentage - Percentage of healing (0-100)
 * @returns {array} Array of all possible image paths for this stage
 */
function getAllImagesForStage(healingPercentage) {
  const stageFolder = getStageForHealing(healingPercentage);
  const stageName = stageFolder.split('-').slice(2).join('-'); // Remove "stage-X-" prefix
  const allImages = [];
  
  ART_STYLES.forEach(style => {
    for (let i = 1; i <= 5; i++) { // Assuming 5 images per style
      allImages.push(`images/${stageFolder}/${style}/${stageName}_${style}_${i.toString().padStart(2, '0')}.svg`);
    }
  });
  
  return allImages;
}

// Example usage:
// displayRandomImage(25, 'heartbreak-image'); // Shows anger stage
// displayRandomImage(80, 'heartbreak-image'); // Shows hope stage
// displayRandomImage(95, 'heartbreak-image'); // Shows healing stage

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getRandomImagePath,
    getNextImageInBucket,
    displayRandomImage,
    getStageInfo,
    getAllImagesForStage,
    preloadAdjacentImages,
    HEALING_STAGES,
    ART_STYLES
  };
}