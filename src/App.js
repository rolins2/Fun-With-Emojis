import "./styles.css";
import React from "react";
import { useState } from "react";
var col = "red";

var emojiDictionar = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

var emwk = Object.keys(emojiDictionar);
const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "🫠": "Melting Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "☺️": "Smiling Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "🥲": "Smiling Face with Tear",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Smiling Face with Open Hands",
  "🤭": "Face with Hand Over Mouth",
  "🫢": "Face with Open Eyes and Hand Over Mouth",
  "🫣": "Face with Peeking Eye",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🫡": "Saluting Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "🫥": "Dotted Line Face",
  "‍🌫️": "Face in Clouds",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "😮‍💨": "Face Exhaling",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Face with Crossed-Out Eyes",
  "😵‍💫": "Face with Spiral Eyes",
  "🤯": "Exploding Head",
  "🥳": "Partying Face",
  "😠": "Angry Face",
  "🤬": "Face with Symbols on Mouth",
  "😈": "Smiling Face with Horns",
  "👿": "Angry Face with Horns",

  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "🖐️": "Hand with Fingers Splayed",
  "✋": "Raised Hand",

  "👌": "OK Hand",
  "🤌": "Pinched Fingers",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",

  "👶": "Baby",
  "🧒": "Child",
  "👦": "Boy",
  "🎅": "Santa Claus",
  "🤶": "Mrs. Claus",
  "🧑‍🎄": "Mx Claus",

  "👪": "Family",

  "👩‍👦‍👦": "Family: Woman, Boy, Boy",
  "👩‍👧": "Family: Woman, Girl",
  "👩‍‍👦": "Family: Woman, Girl, Boy",

  "🎩": "Top Hat",
  "🎓": "Graduation Cap",
  "🧢": "Billed Cap",
  "🪖": " Military Helmet",
  "⛑️": "Rescue Worker’s Helmet",
  "💄": "Lipstick",
  "💍": "Ring",
  "💼": "Briefcase",
  "🩸": "Drop of Blood"
};

export default function App() {
  function emClickHandler(emoji) {
    var meaning = emojiDictionar[emoji];
    setMeaning(meaning);
  }
  const [meaning, setMeaning] = useState("");

  function inputEmojiHandler(event) {
    var userInput = event.target.value;
    console.log(event.target.value);

    var meaning = emojiDictionary[userInput];
    console.log(meaning);

    if (meaning === undefined) {
      meaning = "We dont have this in our database";
    }

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: col }}>Fun With Emojis</h1>

      <div>
        <h2>Want to know the meaning of a Emoji ?</h2>
      </div>

      <div>Enter it below</div>

      <input
        style={{ padding: "1.5rem", marginBottom: "3rem" }}
        onChange={inputEmojiHandler}
      />

      <div style={{ marginTop: "3rem" }}> {meaning}</div>

      <div style={{ marginTop: "3rem" }}>
        Emojis We Know
        {emwk.map(function (Emojis) {
          return (
            <span
              onClick={() => emClickHandler(Emojis)}
              style={{
                fontSize: "2rem",
                padding: "0.5rem",
                cursor: "pointer",
                marginBottom: "3rem"
              }}
              key={Emojis}
            >
              {" "}
              {Emojis}{" "}
            </span>
          );
        })}
      </div>

      <div className="footer">
        <p>Welcome To Fun With Emojis</p>
        <small>
          In this app you can enter a emoji of which you do not know the meaning
          of and the app will check its database and give you the meaning{" "}
        </small>
      </div>
    </div>
  );
}
