# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Amaar Mohamed

Time spent: 12 hours spent in total

Link to project: 
Live Site: https://boatneck-lumpy-argument.glitch.me
Code: https://glitch.com/edit/#!/boatneck-lumpy-argument

## Required Functionality

The following **required** functionality is complete:

* [Yes] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [Yes] "Start" button toggles between "Start" and "Stop" when clicked. 
* [Yes] Game buttons each light up and play a sound when clicked. 
* [Yes] Computer plays back sequence of clues including sound and visual cue for each button
* [Yes] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [Yes] User wins the game after guessing a complete pattern
* [Yes] User loses the game after an incorrect guess

The following **optional** features are implemented:
* [Yes] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [No] Buttons use a pitch (frequency) other than the ones in the tutorial
* [Yes] More than 4 functional game buttons
* [No] Playback speeds up on each turn
* [Yes] Computer picks a different pattern each time the game is played
* [Yes] Player only loses after 3 mistakes (instead of on the first mistake)
* [No] Game button appearance change goes beyond color (e.g. add an image)
* [No] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [No] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:
- Background displays an imported image.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![undefined - Imgur (1)](https://user-images.githubusercontent.com/67353708/157558638-f2e2f64b-45cf-4d41-89ed-15f8e1627fdc.gif)
![undefined - Imgur (2)](https://user-images.githubusercontent.com/67353708/157558645-54838fda-3422-4a43-b446-e89f7d6b4147.gif)
![undefined - Imgur (3)](https://user-images.githubusercontent.com/67353708/157558652-6d63c6e6-77b3-4845-8899-c7eb6abed195.gif)
![undefined - Imgur (4)](https://user-images.githubusercontent.com/67353708/157558661-11c1a371-3453-4dfc-bdb4-ea7b60ef831c.gif)





## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- W3Schools was the main resource I used. They helped me understand syntax I was unfamiliar with and some ways to style a background image. I also used Unsplash to get a background image for the game. Some other websites I visited to help me were StackOverflow, MDN Web Docs and HTML Color Codes. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
- One problem I encountered was when I was testing the game, after a game was lost and I tried to start the game again, it would play clue sequences from the previous game. I could also see in the console that it was printing the previous game clues along with the new game. I didn't know if it was a problem with how I implemented the random pattern feature or if it was a problem with the logic. I tried switching things around in my code, but the problem persisted. One thing I noticed however was that if I refreshed the page, it wouldn't play back the sequence from the previous game. This is why I came to the decision to just reload the webpage after a lost game, and that fixed the problem.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
- My only question at the moment would be about security. Are there conventions and things not to do to make the website as secure as can be? Also is security something I should keep in mind when building a website? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
- I would spend the few hours making the game as polished as it can be. One idea I can think of to make it more polished is lessening the time between clue sequences, so the user doesn't have to wait longer to get the new clue in the later rounds. Another thing I would try to add is a display to keep track of how many times you won in one session total. Some other Ideas I could try to implement are game modes that put a twist to this classic game, for example only showing one new clue each turn, but having the user try to guess the whole sequence from the beginning. 




## Interview Recording URL Link

https://www.loom.com/share/04510a3befc245bcb4ab24bad3287d4f


## License

    Copyright [Amaar Mohamed]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
