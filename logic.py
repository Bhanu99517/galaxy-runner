import sys
import json
import random

def generate_level(difficulty=1):
    """
    Generates a segment of the level with obstacles and lane data.
    """
    lanes = 3
    length = 50
    obstacles = []
    
    # Generate random obstacles based on difficulty
    obstacle_density = 0.1 + (difficulty * 0.05)
    
    for z in range(10, length, 5):
        if random.random() < obstacle_density:
            lane = random.randint(0, lanes - 1)
            obstacles.append({
                "id": f"obs-{z}-{lane}",
                "lane": lane - 1, # Center is 0, lanes are -1, 0, 1
                "z": -z,
                "type": random.choice(["barrier", "hazard", "speedBoost"])
            })
            
    return {
        "obstacles": obstacles,
        "laneCount": lanes,
        "segmentLength": length
    }

def process_stats(score, distance):
    """
    Processes player stats.
    """
    # Simple logic to determine rank
    rank = "B"
    if score > 1000: rank = "A"
    if score > 5000: rank = "S"
    
    return {
        "rank": rank,
        "bonusMultiplier": 1.0 + (distance / 1000),
        "status": "synchronized"
    }

if __name__ == "__main__":
    # Simple CLI interface for Node to call
    try:
        command = sys.argv[1]
        if command == "level":
            diff = int(sys.argv[2]) if len(sys.argv) > 2 else 1
            print(json.dumps(generate_level(diff)))
        elif command == "stats":
            score = int(sys.argv[2])
            dist = int(sys.argv[3])
            print(json.dumps(process_stats(score, dist)))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
