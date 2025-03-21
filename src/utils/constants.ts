// Network constants
export const APTOS_DEVNET_URL = "https://fullnode.devnet.aptoslabs.com/v1";
export const APTOS_TESTNET_URL = "https://fullnode.testnet.aptoslabs.com/v1";
export const SUI_TESTNET_URL = "https://fullnode.testnet.sui.io";

// Smart contract addresses
export const QUESTFORGE_MODULE_ADDRESS = "0x1"; // This should be replaced with your deployed module address
export const QUEST_COLLECTION_NAME = "QuestForge";
export const QUEST_REWARD_COLLECTION_NAME = "QuestForgeRewards";

// MongoDB connection
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
export const MONGODB_DB_NAME = "questforge";

// IPFS settings
export const IPFS_API_KEY = process.env.IPFS_API_KEY || "";
export const IPFS_GATEWAY = "https://ipfs.io/ipfs/";

// Quest types
export const QUEST_TYPES = {
  TRANSACTION: "transaction",
  STAKE: "stake",
  TRADE: "trade",
  COLLECTION: "collection",
  INTERACTION: "interaction",
  MULTI_CHAIN: "multi_chain",
};

// Quest difficulties
export const QUEST_DIFFICULTIES = {
  BEGINNER: "beginner",
  INTERMEDIATE: "intermediate",
  ADVANCED: "advanced",
  EXPERT: "expert",
};

// Quest statuses
export const QUEST_STATUS = {
  AVAILABLE: "available",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  EXPIRED: "expired",
};

// AI Agent config
export const MOVE_AI_AGENT_CONFIG = {
  maxQuests: 10,
  difficultyWeights: {
    beginner: 0.4,
    intermediate: 0.3,
    advanced: 0.2,
    expert: 0.1,
  },
  updateInterval: 24 * 60 * 60 * 1000, // 24 hours
};

// Leaderboard
export const LEADERBOARD_UPDATE_INTERVAL = 60 * 60 * 1000; // 1 hour
export const LEADERBOARD_SEASON_DURATION = 30 * 24 * 60 * 60 * 1000; // 30 days

// App routes
export const ROUTES = {
  HOME: "/",
  QUESTS: "/quests",
  QUEST_DETAILS: "/quests/[id]",
  LEADERBOARD: "/leaderboard",
  PROFILE: "/profile",
  REWARDS: "/rewards",
};
