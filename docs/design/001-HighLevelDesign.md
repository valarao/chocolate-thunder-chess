# High Level Design

## Project Overview

For <b>intermediate and advanced Chess players</b>, a large part of improving in the game of Chess is understanding and practicing games at specific [opening positions](https://en.wikipedia.org/wiki/Chess_opening). 

Currently, practicing specific niche openings is a hassle; (1) your opponent often has to make a specific set of moves to begin with to "enter" the opening you want to practice and (2) solo analysis requires careful progammatic-like inputting of [chess notation](https://en.wikipedia.org/wiki/Algebraic_notation_(chess))). 

Our project would primarily <b>allow players to retrieve common opening positions</b> for players to practice, as the application's database would store <b>100+ notation sets of the most common opening positions</b>.

By retrieving these opening positions, players can <b>input the notation into other Chess websites for analysis</b>, or even potentially play games (against themselves or an [AI engine](https://en.wikipedia.org/wiki/Stockfish_(chess))) starting at the positions requested. 

Given <b>time constraints</b>, we can allow players to create their own user accounts to track the openings they've requested/analyzed, allow players to play against their friends, or setup their own custom positions.

## Algebraic Notation Overview

Chess notation is used to record either the moves made in a game of chess, as well as the position of pieces on a chessboard. 

### FEN

[Forsyth–Edwards Notation (FEN)](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation) is a standard notation for describing a particular board position of a chess game that was popularized in the 19th century.

**Sample Output**
```
rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
```

### PGN

[Portable Game Notation (PGN)](https://en.wikipedia.org/wiki/Portable_Game_Notation) is a standard plain text format for recording chess games (both the moves and related data), which can be read by humans and is also supported by most chess software.

**Sample Output**
```
[Event "F/S Return Match"]
[Site "Belgrade, Serbia JUG"]
[Date "1992.11.04"]
[Round "29"]
[White "Fischer, Robert J."]
[Black "Spassky, Boris V."]
[Result "1/2-1/2"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 {This opening is called the Ruy Lopez.}
4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7
11. c4 c6 12. cxb5 axb5 13. Nc3 Bb7 14. Bg5 b4 15. Nb1 h6 16. Bh4 c5 17. dxe5
Nxe4 18. Bxe7 Qxe7 19. exd6 Qf6 20. Nbd2 Nxd6 21. Nc4 Nxc4 22. Bxc4 Nb6
23. Ne5 Rae8 24. Bxf7+ Rxf7 25. Nxf7 Rxe1+ 26. Qxe1 Kxf7 27. Qe3 Qg5 28. Qxg5
hxg5 29. b3 Ke6 30. a3 Kd6 31. axb4 cxb4 32. Ra5 Nd5 33. f3 Bc8 34. Kf2 Bf5
35. Ra7 g6 36. Ra6+ Kc5 37. Ke1 Nf4 38. g3 Nxh3 39. Kd2 Kb5 40. Rd6 Kc5 41. Ra6
Nf2 42. g4 Bd3 43. Re6 1/2-1/2
```

## Application Assumptions

We have made a number of assumptions about positions stored, as well as users who would interact with our application.

**Positions**
- **Quantity of Positions**: No more than [1,327 openings](https://en.wikipedia.org/wiki/Chess_opening) will be stored in the database
- **Length of Moves**: If move counts are kept, the average number of moves per chess game will be [40](https://www.chessgames.com/chessstats.html).

**Users**
- **Game Understanding**: Users know how to play Chess, with most understanding [standard algebraic notation (SAN)](https://en.wikipedia.org/wiki/Algebraic_notation_(chess))
- **Common Activity**: Users already play on other sites ([chess.com](https://www.chess.com/), [lichess](https://lichess.org/))
- **Scalability**: No more than 1,000 users will be interacting with our application at any given time

## Development Constraints

- **Cost**: The MVP should incur no financial costs for hosting and database use
- **Time**: Each development member is able to put in an average of 10 hours of work into the project every week

## Alternatives Analysis

Given our constraints, we contemplated 3 alternate approaches to figure out what notation we should support for the MVP.

### Alternative 1: Only Support FEN Notation

**Pros**

- **Compactness**: FEN files are generally smaller than PGN files representing the same games 
- **Less Computation Required**: Since FEN can represent a position "as is", it requires less computation to set up a board

**Cons**

- **Data Loss**: FEN only keeps information to be represented at a given position, but loses information about past moves and other metadata
- **Readability**: FEN notation is more difficult for people to visualize boards relative to PGN notation

### Alternative 2: Only Support PGN Notation

**Pros**

- **Ease of Understanding**: PGN allows for representation in official [FIDE](https://en.wikipedia.org/wiki/FIDE) notation, which most chess players are familiar with 
- **Extensibility**: Allows portability of chess metadata into other platforms, as well as past moves made

**Cons**

- **Data Bloat**: PGN files are relatively clunkier to store compared to FEN

### Alternative 3: Support Both FEN Notation and PGN Notation

**Pros**

- **Completeness**: Supporting both allows players to choose which file type to plug into their favorite chess platform

**Cons**

- **Complexity**: Attempting to support off the bat will eat into developer time and may imply a higher chance of bugs
- **Limited Value-Add**: Most sites support both FEN and PGN, so supporting both could be redundant from a user perspective

### Alternatives Evaluation

Based on our **development contraints**, we quickly ruled out supporting both notations (**Alternative 3**). Supporting both would take an extra week or two, and we felt that there were other requirements that we would rather focus on compare to supporting 2 notations.

To decide between FEN notation and PGN notation, we thought more about our **application assumptions**. While PGN generally takes more space to store than FEN, we don't see the number of accepted openings (1,327) changing any time soon. We also felt that users may want increased confidence that the position retrieved is the correct one - implying a desire for readability.  

In the end, we decided against only supporting FEN notation (**Alternative 1**), and instead decided to only support PGN notation (**Alternative 2**).

## Development Stages

We have outlined 3 sequential development stages in which we plan to build out the MVP application. We aim to complete all tasks by July 31st, with room to prepare for the Final Showcase (August 9 - 13).

### Stage 0: Notation Generator (2 weeks)

Stage 1 will be focused on completing the **minimum requirements**, with the user's primary use case to be able to generate notations.

- Dashboard display with most common opening positions
- Search functionality to retrieve openings based on key terms
- Notation provider that copies an opening position to clipboard

### Stage 1: Individual Trainer (4 weeks)

Stage 2 will be focused on extending the core application with **standard requirements** to include the ability to study and practice positions individually.

- Chess board interface on separate page
- Self-study functionality of a game starting at a specific position
- Connection to chess engine to practice against starting at a specific position

### Stage 2: Two-Person Trainer (3 weeks)

Once the standard requirements are complete, we expect to focus our efforts on the **stretch requirements** of supporting two-person training.

- Configuring a TCP connection for two people to play against each other starting at a specific position
- Link sending functionality for people to connect
- User accounts to keep track of wins/losses against friends

### Stage 3: Lobby-Matching Game Platform

Past the project timeline, we see **future extensibility** of the project as the blue-sky scenario application allowing lobby-based matching at specific positions.

- Lobbies for users to enter to play against others who wish to practice the same opening
- Advanced filtering on newly added metadata, such as opening complexity, [Master Game frequency](https://www.chess.com/games), etc.

## Technology Stack

We plan to use the MERN stack to complete the MVP, in addition to a few other notable technologies.

### Frontend

- **React**: Core libraries for component development and state management 
- **Material UI**: Component library for faster development 

### Backend

- **Node**: Runtime environment for Javascript on the backend
- **Express**: Web framework for API request handling and route management
- **Stockfish**: Open-source chess engine to simulate games against an AI

### Database & Deployment

- **MongoDB**: NoSQL database with JSON-like documents and optional schemas
- **Heroku**: Cloud platform that allows for easy deployment
  - Staging: https://opening-trainer-staging.herokuapp.com/
  - Production: https://opening-trainer.herokuapp.com/
