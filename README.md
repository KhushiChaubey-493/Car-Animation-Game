# Car Animation Game

A browser-based **interactive car animation** built using **HTML, CSS, and JavaScript**. The project creates a dynamic driving scene with an animated car, rotating wheels, a moving road, driving sound effects, and keyboard controls for changing the car's animation speed.

## Features

* Animated car driving on a continuously moving road.
* Rotating car wheels using CSS animations.
* Dynamic car movement and subtle body movement.
* Moving road/track background.
* Car driving sound effect.
* Keyboard controls for changing animation speed.
* **Arrow Up** increases the animation speed.
* **Arrow Down** decreases the animation speed.
* Responsive viewport setup for browser-based execution.
* Built using vanilla HTML, CSS, and JavaScript.

## Technologies Used

* **HTML5** — Page structure and application elements
* **CSS3** — Animations, positioning, transformations, and visual design
* **JavaScript (ES6)** — Keyboard controls, audio handling, and animation speed management

## Project Structure

```text
Car-Animation-Game/
│
├── audios/
│   └── Car Drive Sound.mp3
│
├── images/
│   ├── background.jpg
│   ├── car.png
│   ├── left-wheel.png
│   ├── right-wheel.png
│   └── track.jpg
│
├── index.html
├── script.js
├── style.css
└── README.md
```

## How It Works

The project combines CSS animations with JavaScript controls to create an interactive driving animation.

### Car Animation

The car is positioned in the center of the scene using CSS. A subtle vertical movement is applied to create a natural driving effect.

### Wheel Rotation

The wheels continuously rotate using a CSS `@keyframes` animation:

```css
@keyframes wheelRotation {
    100% {
        transform: rotate(360deg);
    }
}
```

### Moving Track

The road is wider than the viewport and continuously moves horizontally to create the appearance that the car is driving forward.

```css
@keyframes carMove {
    100% {
        transform: translateX(-50%);
    }
}
```

### Speed Control

JavaScript controls the animation speed through the `animationDuration` property.

The default speed is:

```javascript
let speed = 5;
```

Pressing **Arrow Up** decreases the animation duration, making the animation faster.

Pressing **Arrow Down** increases the animation duration, making the animation slower.

```text
Arrow Up    → Increase speed
Arrow Down  → Decrease speed
```

### Driving Sound

The project creates an audio element through JavaScript and loads the car driving sound:

```javascript
let audio = document.createElement("audio");
audio.src = "audios/Car Drive Sound.mp3";
audio.loop = true;
```

The audio starts after the user's first click on the page.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/KhushiChaubey-493/Car-Animation-Game.git
```

### 2. Navigate to the Project

```bash
cd Car-Animation-Game
```

### 3. Run the Project

Open:

```text
index.html
```

in a modern web browser.

No backend server, database, package manager, or external JavaScript framework is required.

## Controls

| Key             | Action                   |
| --------------- | ------------------------ |
| **Arrow Up**    | Increase animation speed |
| **Arrow Down**  | Decrease animation speed |
| **Mouse Click** | Starts the driving sound |

## Key Concepts Practiced

This project helped practice several important frontend development concepts:

* HTML5 structure
* CSS positioning
* CSS `@keyframes`
* CSS transformations
* CSS animation timing
* DOM manipulation
* JavaScript event listeners
* Keyboard event handling
* JavaScript audio handling
* Dynamic modification of CSS properties
* Working with local image and audio assets

## Browser Compatibility

The project is designed to run in modern browsers that support:

* HTML5
* CSS3 animations
* JavaScript DOM APIs
* HTML5 audio

## Future Improvements

The project can be extended into a more complete browser game by adding:

* Player-controlled car movement.
* Obstacles and collision detection.
* Score tracking.
* Increasing difficulty.
* Multiple levels.
* Game start and pause controls.
* Game-over and restart functionality.
* Mobile/touch controls.
* Background music and additional sound effects.
* High-score tracking.

## Learning Outcome

This project demonstrates how **HTML, CSS, and JavaScript can work together to create an interactive browser experience**.

It particularly focuses on CSS animations and JavaScript event handling, showing how JavaScript can dynamically control CSS animation properties based on user input.

## Author

**Khushi Chaubey**

GitHub: https://github.com/KhushiChaubey-493

## License

This project was created for learning and educational purposes.
