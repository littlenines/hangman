/**
 * @jest-environment jsdom
 */
const checkSameInput = require("./main");

jest.mock("./main", () => jest.fn());

beforeEach(() => {
    document.body.innerHTML =
        `<div class="overlay" data-overlay>
            <div class="message" data-message></div>
            <button data-reset class="reset-button">Play Again</button>
            </div>
            <div class="stickman-wrapper">
        <section class="board" data-board>
        <canvas data-stickman>This Text will show if the Browser does NOT support HTML5 Canvas tag</canvas>
        </section>
        <section class="info-wrapper">
        <div class="info-data">
        <p>Right:</p>
        <div data-right class="good-answer"></div>
        </div>
        
        <div class="info-data">
        <p>Guessed:</p>
        <div data-guesses class="all-guesses"></div>
        </div>
            
        <section data-guess>
        <input type="text" maxlength="1" data-character-guess>
        <button data-submit>Submit</button>
            </section>
            </section>
            </div>`;
})


test('check if value is empty', () => {
    const inputValue = document.querySelector('[data-character-guess]');
    let currentValue = inputValue.value = '';
    expect(inputValue.value).toBe('');
});
let typed = ['a','b'];
let guess = 'c';

test('check if value is same', () => {
    expect(checkSameInput(guess)).toBeFalsy();
});
