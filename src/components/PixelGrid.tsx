import { useEffect, useRef, useState, useMemo } from "react";

// Define "HARSHA" in pixel art based on the reference design
// Each letter is defined as [col, row] coordinates within the letter's space
const HARSHA_PATTERN: { [key: string]: number[][] } = {
  H: [
    // Left vertical bar
    [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],
    // Middle horizontal bar
    [1,3],[2,3],
    // Right vertical bar
    [3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6]
  ],
  A: [
    // Left diagonal and vertical
    [0,6],[0,5],[0,4],[0,3],[0,2],[0,1],
    // Top
    [1,0],[2,0],
    // Middle horizontal
    [1,3],[2,3],
    // Right diagonal and vertical
    [3,1],[3,2],[3,3],[3,4],[3,5],[3,6]
  ],
  R: [
    // Left vertical bar
    [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],
    // Top horizontal
    [1,0],[2,0],
    // Top right
    [3,1],[3,2],
    // Middle connection
    [1,3],[2,3],
    // Bottom right diagonal
    [2,4],[3,5],[3,6]
  ],
  S: [
    // Top horizontal
    [1,0],[2,0],[3,0],
    // Top left
    [0,1],
    // Middle left to right
    [0,2],[1,3],[2,3],[3,4],
    // Bottom right
    [3,5],
    // Bottom horizontal
    [0,6],[1,6],[2,6]
  ],
};

export const PixelGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedColor, setSelectedColor] = useState("#0ea5e9");
  const [grid, setGrid] = useState<string[][]>([]);
  const [cols] = useState(50);
  const [rows] = useState(10);
  const [cellSize, setCellSize] = useState(24);

  const colors = useMemo(() => ["#0ea5e9", "#22c55e", "#eab308", "#f97316", "#a855f7", "#ec4899", "#ffffff"], []);

  // Initialize grid and add HARSHA pattern
  useEffect(() => {
    const initialGrid: string[][] = Array(rows).fill(null).map(() => 
      Array(cols).fill("#1a1a1a")
    );

    // Letter spacing and positioning
    const letterWidth = 4; // Each letter is 4 pixels wide
    const letterSpacing = 3; // Gap between letters
    const totalWidth = (letterWidth * 6) + (letterSpacing * 5); // 6 letters (H,A,R,S,H,A)
    const startCol = Math.floor((cols - totalWidth) / 2) - 2;
    const startRow = 1; // Start from row 1 for better vertical centering

    // Place HARSHA with colorful pixels
    const letters = ['H', 'A', 'R', 'S', 'H', 'A'];
    letters.forEach((letter, letterIndex) => {
      const pattern = HARSHA_PATTERN[letter];
      const offsetCol = startCol + (letterIndex * (letterWidth + letterSpacing));
      
      pattern.forEach(([col, row]) => {
        const gridRow = startRow + row;
        const gridCol = offsetCol + col;
        if (gridRow >= 0 && gridRow < rows && gridCol >= 0 && gridCol < cols) {
          // Assign random vibrant colors to each pixel
          initialGrid[gridRow][gridCol] = colors[Math.floor(Math.random() * colors.length)];
        }
      });
    });

    // Add some random decorative colored pixels around the text
    const decorativePixels = 15;
    for (let i = 0; i < decorativePixels; i++) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      // Only add if it's not already part of HARSHA
      if (initialGrid[row][col] === "#1a1a1a") {
        initialGrid[row][col] = colors[Math.floor(Math.random() * colors.length)];
      }
    }

    setGrid(initialGrid);
  }, [cols, rows, colors]);

  // Draw grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || grid.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          ctx.fillStyle = grid[row][col];
          ctx.fillRect(col * cellSize, row * cellSize, cellSize - 1, cellSize - 1);
        }
      }
    };

    drawGrid();
  }, [grid, cellSize, rows, cols]);

  // Handle canvas click
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const col = Math.floor(x / (rect.width / cols));
    const row = Math.floor(y / (rect.height / rows));

    if (row >= 0 && row < rows && col >= 0 && col < cols) {
      const newGrid = grid.map(r => [...r]);
      newGrid[row][col] = selectedColor;
      setGrid(newGrid);
    }
  };

  return (
    <div className="space-y-4">
      <canvas
        ref={canvasRef}
        width={cols * cellSize}
        height={rows * cellSize}
        onClick={handleCanvasClick}
        className="w-full h-auto cursor-pointer"
      />
      
      {/* Color Picker */}
      <div className="flex gap-2 justify-center items-center flex-wrap">
        <span className="text-xs text-muted-foreground mr-2">Pick a color:</span>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`w-8 h-8 rounded-md border-2 transition-all ${
              selectedColor === color ? "border-primary scale-110" : "border-border"
            }`}
            style={{ backgroundColor: color }}
            aria-label={`Select ${color}`}
          />
        ))}
        <button
          onClick={() => setSelectedColor("#1a1a1a")}
          className={`w-8 h-8 rounded-md border-2 transition-all ${
            selectedColor === "#1a1a1a" ? "border-primary scale-110" : "border-border"
          }`}
          style={{ backgroundColor: "#1a1a1a" }}
          aria-label="Eraser"
        >
          <span className="text-xs text-white">✕</span>
        </button>
      </div>
    </div>
  );
};
