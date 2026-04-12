# Components — uppitai.com

## 1. Three.js Animated Dot Grid (Hero Background)

**THE KEY COMPONENT — user specifically requested this.**

### How It Works

This is a **Three.js WebGL particle system** that creates a grid of dots that undulate like waves. Here is the complete implementation extracted from the source:

### Configuration

```javascript
// Grid parameters
const GRID_SPACING = 150;      // Distance between dots
const ROWS = 40;               // Number of rows
const COLS = 60;               // Number of columns
const TOTAL_DOTS = 2400;       // 40 × 60

// Camera
const CAMERA_FOV = 60;
const CAMERA_NEAR = 1;
const CAMERA_FAR = 10000;
const CAMERA_POSITION = { x: 0, y: 600, z: 1400 };

// Material (PointsMaterial)
const POINT_SIZE = 8;
const POINT_OPACITY = 0.85;
const SIZE_ATTENUATION = true;  // Points shrink with distance
const VERTEX_COLORS = true;    // Per-vertex colors
const TRANSPARENT = true;

// Dot colors (RGB, 0-1 range)
const DOT_COLOR = { r: 0.15, g: 0.45, b: 0.65 };
// Converts to approximately rgb(38, 115, 166) — a muted steel blue

// Fog (creates depth fade effect)
const FOG_COLOR = 0xFFFFFF;    // White fog (matches page bg)
const FOG_NEAR = 2000;
const FOG_FAR = 10000;

// Animation
const WAVE_SPEED = 0.05;       // Per frame increment
const WAVE_AMPLITUDE_X = 50;   // Vertical displacement from row wave
const WAVE_AMPLITUDE_Z = 50;   // Vertical displacement from column wave
const WAVE_FREQUENCY_X = 0.3;  // Row wave frequency
const WAVE_FREQUENCY_Z = 0.5;  // Column wave frequency
```

### Complete Implementation (Deminified)

```javascript
function DotGridBackground({ className, ...props }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const spacing = 150;
    const rows = 40;
    const cols = 60;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xFFFFFF, 2000, 10000);

    // Camera — positioned above and behind, looking down at the grid
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.set(0, 600, 1400);

    // Renderer — transparent background
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(scene.fog.color, 0); // Transparent clear
    containerRef.current.appendChild(renderer.domElement);

    // Build the dot grid
    const positions = [];
    const colors = [];
    const geometry = new THREE.BufferGeometry();

    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        const px = x * spacing - (rows * spacing) / 2;  // Center the grid
        const py = 0;                                     // Y starts flat
        const pz = y * spacing - (cols * spacing) / 2;  // Center the grid
        positions.push(px, py, pz);
        colors.push(0.15, 0.45, 0.65);  // Steel blue color per vertex
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    // Material — small points with depth attenuation
    const material = new THREE.PointsMaterial({
      size: 8,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation loop — sine wave displacement
    let time = 0;
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const posAttr = geometry.attributes.position;
      const posArray = posAttr.array;
      let index = 0;

      for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
          const i = index * 3;
          // Y position = sum of two sine waves (row-based + column-based)
          posArray[i + 1] = Math.sin((x + time) * 0.3) * 50
                          + Math.sin((y + time) * 0.5) * 50;
          index++;
        }
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
      time += 0.05;
    };

    // Resize handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);
    animate();

    // Store refs for cleanup
    sceneRef.current = { scene, camera, renderer, particles: [points], animationId, count: time };

    // Cleanup
    return () => {
      window.removeEventListener('resize', onResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        sceneRef.current.scene.traverse(obj => {
          if (obj instanceof THREE.Points) {
            obj.geometry.dispose();
            if (Array.isArray(obj.material)) {
              obj.material.forEach(m => m.dispose());
            } else {
              obj.material.dispose();
            }
          }
        });
        sceneRef.current.renderer.dispose();
        if (containerRef.current && sceneRef.current.renderer.domElement) {
          containerRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
      }
    };
  }, []);

  return <div ref={containerRef} className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)} {...props} />;
}
```

### Key Visual Effects

1. **Wave motion:** Two overlapping sine waves create organic, ocean-like movement
2. **Depth fog:** White fog fades distant dots, creating a natural depth gradient
3. **Size attenuation:** Closer dots appear larger, far dots smaller (perspective)
4. **Steel blue color:** Muted `rgb(38, 115, 166)` that's visible but not distracting
5. **Transparent canvas:** Blends seamlessly with the white page background

### How to Replicate

- Install `three` npm package
- The component is a React functional component using `useRef` + `useEffect`
- Canvas is wrapped in a `pointer-events-none absolute inset-0 -z-10` div
- The key to the effect is the dual-sine-wave Y displacement in the animation loop
- Fog is critical — without it, the grid edges would be harsh

---

## 2. Navigation Bar

- **Description:** Ultra-minimal fixed header — logo only, no nav links
- **Style:** `fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50`
- **Logo:** SVG icon + "Uppit AI" text
- **Note:** Hamburger menu icon present on mobile

## 3. Gradient Text ("AI Automation")

- **Description:** Hero headline with blue gradient
- **CSS:** `background: linear-gradient(135deg, #0DA2E7 0%, #0080FF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`
- **Responsive:** `text-3xl sm:text-5xl md:text-6xl lg:text-7xl`
- **Weight:** 800 (extrabold)

## 4. Stats Row

- **Description:** "20M+ Global Views" | "Founded by Nate Herk" with a vertical divider
- **Divider:** `w-px h-10 sm:h-12 bg-border`
- **Layout:** Flex row, centered

## 5. CTA Button ("Get in Touch")

- **Description:** Outlined button with arrow icon
- **Style:** `bg-white border border-foreground/20 rounded-lg px-8 text-foreground font-medium`
- **Icon:** Right arrow SVG
- **Links to:** `/contact`
- **Hover:** `transition-all duration-300`

## 6. Process Step Card

- **Description:** Card with icon badge, step number, title, subtitle, and bullet points
- **Card:** `bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/30 transition-colors`
- **Icon badge:** `w-12 h-12 rounded-full bg-primary/10 border-2 border-primary` with SVG icon inside
- **Step number:** `absolute -top-2 -right-2 text-xs font-bold text-primary bg-background px-2 py-0.5 rounded-full border border-primary/30`
- **Subtitle:** `text-primary` (blue)
- **Bullet dots:** `w-1.5 h-1.5 rounded-full bg-primary/60`
- **Timeline connector:** Horizontal line on desktop, vertical on mobile

## 7. Section Header Pattern

- **Structure:** Label → H2 → Subtitle
- **Label:** Uppercase, `text-primary text-sm font-medium tracking-wider` (e.g., "HOW WE WORK", "TESTIMONIALS", "ABOUT")
- **H2:** `text-4xl sm:text-5xl font-bold`
- **Subtitle:** `text-muted-foreground text-lg`

## 8. Testimonial Card

- **Description:** Quote card with SVG quote mark, blockquote text, divider, and author info
- **Card:** `bg-card border border-border rounded-2xl p-6`
- **Quote icon:** Large `99` SVG in `text-primary/40`
- **Quote text:** Blockquote, `text-muted-foreground italic`
- **Divider:** `h-px bg-border` between quote and author
- **Author name:** `font-semibold text-foreground`
- **Author title:** `text-sm text-muted-foreground`
- **Special accent:** Some titles in `text-primary` (e.g., "WSJ Bestselling Author")

## 9. Founder Bio Section

- **Photo:** `w-54 h-54` (216px), circular with gradient border ring (primary color)
- **Layout:** Photo left, bio text right (responsive stack)
- **CTA:** `bg-primary text-white rounded-lg px-6 py-3` — filled blue button
- **External link:** → nateherk.com

## 10. Background Blob

- **Description:** Large blurred circle behind hero content
- **Style:** `w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px]`
- **Position:** Absolute, centered
