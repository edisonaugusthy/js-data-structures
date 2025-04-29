# Game of Knights

The game is played by multiple knights forming a "circle" where each knight knows its immediate successor, and the first knight being last knight's successor. For example, for three knights `k1`, `k2`, and `k3` playing a game, `k2` is `k1's` successor, `k3` is `k2's` successor, and `k1` is `k3` successor. Each knight has a number of hit points and a name. Each knight has the same amount of hit points, which is defined before the game is started.

When the game starts, each knight makes a turn by attacking it's successor. To determine the amount of damage a knight deals to its successor when attacking, a knight rolls a die, the number on the die will be a number subtracted from the amount of hit points the knight's successor has. If a knight has no hit points left (amount of hit points is less than or equal to 0), the knight dies and leaves the circle without making a turn. When it's time for the predecessor of the knight who died to make the next move, he will attack the successor of the dead knight. For example, for three knights `k1`, `k2`, and `k3` playing a game, when `k2` dies, the next time k1 makes a move and attacks, he will attack `k3`.

The game continues until there is only one alive knight left. Knights don't battle in silence. When a knight deals some damage to its enemy he claims "Knight X deals Y damage to knight Z", where X is name of the attacking knight, Y is amount of damage dealt, and Z is the name of the knight taking the damage. When a knight dies, he exhales "Knight X has died..." with his last breath. Once there is only one knight left in the game, he roars with triumph "Knight X stands victorious!"

The visualization of the example game of 3 knights is provided below. Game is played by three knight (`k1`, `k2`, and `k3`), each of them having 5 HP. `k1` starts the game and makes a turn by rolling a die. A six is rolled, so `k1` deals 6 damage to `k2`. `k2` dies and leaves the game. `k3` makes the second turn by rolling a four and dealing 4 damage to `k1`. `k1` rolls a five and deals 5 damage to `k3` killing him. `k1` wins the game with 1 hit point left.

### Initial Setup

```
   [k1]
    HP: 5
   /   \
  V     \
[k3]---->[k2]
 HP: 5    HP: 5

```

### Phase 1: k1 Attacks k2

```
   [k1]
    HP: 5
   /   \
  V     X
[k3]    [k2]
 HP: 5   HP: 0 (dies)

```

#### Upon k1's attack:

> "Knight k1 deals 6 damage to knight k2"
>
> "Knight k2 has died..."

## Phase 2: k3 Attacks k1

```
   [k1]
    HP: 1
   ^
   |
  [k3]
   HP: 5

```

#### Upon k3's attack:

> "Knight k3 deals 4 damage to knight k1"

### Phase 3: k1 Attacks k3

```
   [k1]
    HP: 1
   \
    V
  [k3]
   HP: 0 (dies)

```

#### Upon k1's attack:

> "Knight k1 deals 5 damage to knight k3"
>
> "Knight k3 has died..."

### Result

```
   [k1]
    HP: 1
   \
    \
     >

```

#### Final announcement:

> "Knight k1 has won!"
