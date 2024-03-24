# ♟ Bishop's Chessboard

This code implements a chessboard hover state using HTML, CSS, React and TypeScript.

<img src="https://github.com/TRomesh/Sentiment-Analysis-in-Sinhala/assets/9572090/78564964-7bc3-46fd-a464-2dc487b58139" alt="drawing" width="300"/>

**Functionality:**

- When the user hovers over any square on the chessboard, the following happens:
  - The hovered square changes color to light blue.
  - The squares that could be attacked by a bishop if placed on the hovered square change color to dark blue. Bishops attack diagonally.

**Implementation**

1.  **CSS:** The CSS code would define the styles for the chessboard and squares. It would also define the hover state styles, which would change the background color of the hovered square and the squares diagonally adjacent to it.
2.  **React:** The React/TypeScript code would be responsible for detecting the hover event on each square and applying the appropriate CSS styles. The provided code snippet (`getMoveableSquares`) seems to be a helper function that calculates the squares that would be under attack by a bishop if placed on a specific square.
