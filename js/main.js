$('#clearBtn').hide();

$('#emojiBtn').click(function () {
    $('#copyBtn').show();
    $('#clearBtn').show();
});

$('#yeezyBtn').click(function () {
    $('#copyBtn').show();
    $('#clearBtn').show();

});

$('#clearBtn').click(function () {
    clear();
});
const clipboardBtn = document.getElementById('copyBtn');
const clipboard = new Clipboard(clipboardBtn);
const allEmojis = ["😀", "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😈", "👿", "😉", "😊", "☺️", "😋", "😌", "😍", "😎", "😏", "😐", "😑", "😒", "😓", "😔", "😕", "😖", "😗", "😘", "😙", "😚", "😛", "😜", "😝", "😞", "😟", "😠", "😡", "😢", "😣", "😤", "😥", "😦", "😧", "😨", "😩", "😪", "😫", "😬", "😭", "😮", "😯", "😰", "😱", "😲", "😳", "😴", "😵", "😶", "😷", "😸", "😹", "😺", "😻", "😼", "😽", "😾", "😿", "🙀", "👣", "👤", "👥", "👶", "👶🏻", "👶🏼", "👶🏽", "👶🏾", "👶🏿", "👦", "👦🏻", "👦🏼", "👦🏽", "👦🏾", "👦🏿", "👧", "👧🏻", "👧🏼", "👧🏽", "👧🏾", "👧🏿", "👨", "👨🏻", "👨🏼", "👨🏽", "👨🏾", "👨🏿", "👩", "👩🏻", "👩🏼", "👩🏽", "👩🏾", "👩🏿", "👪", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👫", "👬", "👭", "👯", "👰", "👰🏻", "👰🏼", "👰🏽", "👰🏾", "👰🏿", "👱", "👱🏻", "👱🏼", "👱🏽", "👱🏾", "👱🏿", "👲", "👲🏻", "👲🏼", "👲🏽", "👲🏾", "👲🏿", "👳", "👳🏻", "👳🏼", "👳🏽", "👳🏾", "👳🏿", "👴", "👴🏻", "👴🏼", "👴🏽", "👴🏾", "👴🏿", "👵", "👵🏻", "👵🏼", "👵🏽", "👵🏾", "👵🏿", "👮", "👮🏻", "👮🏼", "👮🏽", "👮🏾", "👮🏿", "👷", "👷🏻", "👷🏼", "👷🏽", "👷🏾", "👷🏿", "👸", "👸🏻", "👸🏼", "👸🏽", "👸🏾", "👸🏿", "💂", "💂🏻", "💂🏼", "💂🏽", "💂🏾", "💂🏿", "👼", "👼🏻", "👼🏼", "👼🏽", "👼🏾", "👼🏿", "🎅", "🎅🏻", "🎅🏼", "🎅🏽", "🎅🏾", "🎅🏿", "👻", "👹", "👺", "💩", "💀", "👽", "👾", "🙇", "🙇🏻", "🙇🏼", "🙇🏽", "🙇🏾", "🙇🏿", "💁", "💁🏻", "💁🏼", "💁🏽", "💁🏾", "💁🏿", "🙅", "🙅🏻", "🙅🏼", "🙅🏽", "🙅🏾", "🙅🏿", "🙆", "🙆🏻", "🙆🏼", "🙆🏽", "🙆🏾", "🙆🏿", "🙋", "🙋🏻", "🙋🏼", "🙋🏽", "🙋🏾", "🙋🏿", "🙎", "🙎🏻", "🙎🏼", "🙎🏽", "🙎🏾", "🙎🏿", "🙍", "🙍🏻", "🙍🏼", "🙍🏽", "🙍🏾", "🙍🏿", "💆", "💆🏻", "💆🏼", "💆🏽", "💆🏾", "💆🏿", "💇", "💇🏻", "💇🏼", "💇🏽", "💇🏾", "💇🏿", "💑", "👩‍❤️‍👩", "👨‍❤️‍👨", "💏", "👩‍❤️‍💋‍👩", "👨‍❤️‍💋‍👨", "🙌", "🙌🏻", "🙌🏼", "🙌🏽", "🙌🏾", "🙌🏿", "👏", "👏🏻", "👏🏼", "👏🏽", "👏🏾", "👏🏿", "👂", "👂🏻", "👂🏼", "👂🏽", "👂🏾", "👂🏿", "👀", "👃", "👃🏻", "👃🏼", "👃🏽", "👃🏾", "👃🏿", "👄", "💋", "👅", "💅", "💅🏻", "💅🏼", "💅🏽", "💅🏾", "💅🏿", "👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿", "👍", "👍🏻", "👍🏼", "👍🏽", "👍🏾", "👍🏿", "👎", "👎🏻", "👎🏼", "👎🏽", "👎🏾", "👎🏿", "☝", "☝🏻", "☝🏼", "☝🏽", "☝🏾", "☝🏿", "👆", "👆🏻", "👆🏼", "👆🏽", "👆🏾", "👆🏿", "👇", "👇🏻", "👇🏼", "👇🏽", "👇🏾", "👇🏿", "👈", "👈🏻", "👈🏼", "👈🏽", "👈🏾", "👈🏿", "👉", "👉🏻", "👉🏼", "👉🏽", "👉🏾", "👉🏿", "👌", "👌🏻", "👌🏼", "👌🏽", "👌🏾", "👌🏿", "✌", "✌🏻", "✌🏼", "✌🏽", "✌🏾", "✌🏿", "👊", "👊🏻", "👊🏼", "👊🏽", "👊🏾", "👊🏿", "✊", "✊🏻", "✊🏼", "✊🏽", "✊🏾", "✊🏿", "✋", "✋🏻", "✋🏼", "✋🏽", "✋🏾", "✋🏿", "💪", "💪🏻", "💪🏼", "💪🏽", "💪🏾", "💪🏿", "👐", "👐🏻", "👐🏼", "👐🏽", "👐🏾", "👐🏿", "🙏", "🙏🏻", "🙏🏼", "🙏🏽", "🙏🏾", "🙏🏿", "🌱", "🌲", "🌳", "🌴", "🌵", "🌷", "🌸", "🌹", "🌺", "🌻", "🌼", "💐", "🌾", "🌿", "🍀", "🍁", "🍂", "🍃", "🍄", "🌰", "🐀", "🐁", "🐭", "🐹", "🐂", "🐃", "🐄", "🐮", "🐅", "🐆", "🐯", "🐇", "🐰", "🐈", "🐱", "🐎", "🐴", "🐏", "🐑", "🐐", "🐓", "🐔", "🐤", "🐣", "🐥", "🐦", "🐧", "🐘", "🐪", "🐫", "🐗", "🐖", "🐷", "🐽", "🐕", "🐩", "🐶", "🐺", "🐻", "🐨", "🐼", "🐵", "🙈", "🙉", "🙊", "🐒", "🐉", "🐲", "🐊", "🐍", "🐢", "🐸", "🐋", "🐳", "🐬", "🐙", "🐟", "🐠", "🐡", "🐚", "🐌", "🐛", "🐜", "🐝", "🐞", "🐾", "⚡️", "🔥", "🌙", "☀️", "⛅️", "☁️", "💧", "💦", "☔️", "💨", "❄️", "🌟", "⭐️", "🌠", "🌄", "🌅", "🌈", "🌊", "🌋", "🌌", "🗻", "🗾", "🌐", "🌍", "🌎", "🌏", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌚", "🌝", "🌛", "🌜", "🌞", "🍅", "🍆", "🌽", "🍠", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🍔", "🍕", "🍖", "🍗", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍞", "🍟", "🍡", "🍢", "🍣", "🍤", "🍥", "🍦", "🍧", "🍨", "🍩", "🍪", "🍫", "🍬", "🍭", "🍮", "🍯", "🍰", "🍱", "🍲", "🍳", "🍴", "🍵", "☕️", "🍶", "🍷", "🍸", "🍹", "🍺", "🍻", "🍼", "🎀", "🎁", "🎂", "🎃", "🎄", "🎋", "🎍", "🎑", "🎆", "🎇", "🎉", "🎊", "🎈", "💫", "✨", "💥", "🎓", "👑", "🎎", "🎏", "🎐", "🎌", "🏮", "💍", "❤️", "💔", "💌", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "💜", "💛", "💚", "💙", "🏃", "🏃🏻", "🏃🏼", "🏃🏽", "🏃🏾", "🏃🏿", "🚶", "🚶🏻", "🚶🏼", "🚶🏽", "🚶🏾", "🚶🏿", "💃", "💃🏻", "💃🏼", "💃🏽", "💃🏾", "💃🏿", "🚣", "🚣🏻", "🚣🏼", "🚣🏽", "🚣🏾", "🚣🏿", "🏊", "🏊🏻", "🏊🏼", "🏊🏽", "🏊🏾", "🏊🏿", "🏄", "🏄🏻", "🏄🏼", "🏄🏽", "🏄🏾", "🏄🏿", "🛀", "🛀🏻", "🛀🏼", "🛀🏽", "🛀🏾", "🛀🏿", "🏂", "🎿", "⛄️", "🚴", "🚴🏻", "🚴🏼", "🚴🏽", "🚴🏾", "🚴🏿", "🚵", "🚵🏻", "🚵🏼", "🚵🏽", "🚵🏾", "🚵🏿", "🏇", "🏇🏻", "🏇🏼", "🏇🏽", "🏇🏾", "🏇🏿", "⛺️", "🎣", "⚽️", "🏀", "🏈", "⚾️", "🎾", "🏉", "⛳️", "🏆", "🎽", "🏁", "🎹", "🎸", "🎻", "🎷", "🎺", "🎵", "🎶", "🎼", "🎧", "🎤", "🎭", "🎫", "🎩", "🎪", "🎬", "🎨", "🎯", "🎱", "🎳", "🎰", "🎲", "🎮", "🎴", "🃏", "🀄️", "🎠", "🎡", "🎢", "🚃", "🚞", "🚂", "🚋", "🚝", "🚄", "🚅", "🚆", "🚇", "🚈", "🚉", "🚊", "🚌", "🚍", "🚎", "🚐", "🚑", "🚒", "🚓", "🚔", "🚨", "🚕", "🚖", "🚗", "🚘", "🚙", "🚚", "🚛", "🚜", "🚲", "🚏", "⛽️", "🚧", "🚦", "🚥", "🚀", "🚁", "✈️", "💺", "⚓️", "🚢", "🚤", "⛵️", "🚡", "🚠", "🚟", "🛂", "🛃", "🛄", "🛅", "💴", "💶", "💷", "💵", "🗽", "🗿", "🌁", "🗼", "⛲️", "🏰", "🏯", "🌇", "🌆", "🌃", "🌉", "🏠", "🏡", "🏢", "🏬", "🏭", "🏣", "🏤", "🏥", "🏦", "🏨", "🏩", "💒", "⛪️", "🏪", "🏫", "⌚️", "📱", "📲", "💻", "⏰", "⏳", "⌛️", "📷", "📹", "🎥", "📺", "📻", "📟", "📞", "☎️", "📠", "💽", "💾", "💿", "📀", "📼", "🔋", "🔌", "💡", "🔦", "📡", "💳", "💸", "💰", "💎", "🌂", "👝", "👛", "👜", "💼", "🎒", "💄", "👓", "👒", "👡", "👠", "👢", "👞", "👟", "👙", "👗", "👘", "👚", "👕", "👔", "👖", "🚪", "🚿", "🛁", "🚽", "💈", "💉", "💊", "🔬", "🔭", "🔮", "🔧", "🔪", "🔩", "🔨", "💣", "🚬", "🔫", "🔖", "📰", "🔑", "✉️", "📩", "📨", "📧", "📥", "📤", "📦", "📯", "📮", "📪", "📫", "📬", "📭", "📄", "📃", "📑", "📈", "📉", "📊", "📅", "📆", "🔅", "🔆", "📜", "📋", "📖", "📓", "📔", "📒", "📕", "📗", "📘", "📙", "📚", "📇", "🔗", "📎", "📌", "✂️", "📐", "📍", "📏", "🚩", "📁", "📂", "✒️", "✏️", "📝", "🔏", "🔐", "🔒", "🔓", "📣", "📢", "🔈", "🔉", "🔊", "🔇", "💤", "🔔", "🔕", "💭", "💬", "🚸", "🔍", "🔎", "🚫", "⛔️", "📛", "🚷", "🚯", "🚳", "🚱", "📵", "🔞", "🉑", "🉐", "💮", "㊙️", "㊗️", "🈴", "🈵", "🈲", "🈶", "🈚️", "🈸", "🈺", "🈷", "🈹", "🈳", "🈂", "🈁", "🈯️", "💹", "❇️", "✳️", "❎", "✅", "✴️", "📳", "📴", "🆚", "🅰", "🅱", "🆎", "🆑", "🅾", "🆘", "🆔", "🅿️", "🚾", "🆒", "🆓", "🆕", "🆖", "🆗", "🆙", "🏧", "♈️", "♉️", "♊️", "♋️", "♌️", "♍️", "♎️", "♏️", "♐️", "♑️", "♒️", "♓️", "🚻", "🚹", "🚺", "🚼", "♿️", "🚰", "🚭", "🚮", "▶️", "◀️", "🔼", "🔽", "⏩", "⏪", "⏫", "⏬", "➡️", "⬅️", "⬆️", "⬇️", "↗️", "↘️", "↙️", "↖️", "🔄", "↪️", "↩️", "⤴️", "⤵️", "🔀", "🔁", "🔂", "#⃣", "0⃣", "1⃣", "2⃣", "3⃣", "4⃣", "5⃣", "6⃣", "7⃣", "8⃣", "9⃣", "🔟", "🔢", "🔤", "🔡", "🔠", "ℹ️", "📶", "🎦", "🔣", "➕", "➖", "〰", "➗", "✖️", "✔️", "🔃", "™", "©", "®", "💱", "💲", "➰", "➿", "〽️", "❗️", "❓", "❕", "❔", "❌", "⭕️", "💯", "🔚", "🔙", "🔛", "🔝", "🔜", "🌀", "Ⓜ️", "⛎", "🔯", "🔰", "🔱", "⚠️", "♨️", "♻️", "💢", "💠", "♠️", "♣️", "♥️", "♦️", "☑️", "⚪️", "⚫️", "🔘", "🔴", "🔵", "🔺", "🔻", "🔸", "🔹", "🔶", "🔷", "▪️", "▫️", "⬛️", "⬜️", "◼️", "◻️", "◾️", "◽️", "🔲", "🔳", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧"];
const yeezy = ["😎", "💯", "🏄🏾", "🐐", "🌊", "🌊", "🐻", "🎓", "❤", "🔁", "🎤", "🐝"];

//Takes the text from the user and injects 0-3 emojis in randomly selected places
function doEmoji(emojiArr) {
    const length = emojiArr.length;
    const textVal = document.getElementById("text").value.split(' ');
    const FinalText = document.getElementById("FinalText");


    //Parsing through the users text
    FinalText.innerHTML = textVal.map((val) => {
        const random = (Math.floor(Math.random() * (length)));
        const random2 = (Math.floor(Math.random() * (2)));
        const random3 = (Math.floor(Math.random() * (3)));
        let text = val;
        //A 1 in 2 chance of placing an emoji
        if (random2 == 1) {
            text = `${val}${emojiArr[random]}`;
        }//A 1 in 3 Chance of having more than one emoji
        if (random3 == 2) {
            const random4 = (Math.floor(Math.random() * (4)));

            //The max number of emojis that can be placed is 3
            text = val + Array(random4).fill().map(e => `${emojiArr[(Math.floor(Math.random() * (length)))]}`).join('')
        }
        return text;
    }).join(' ');
}

function emojify() {
    doEmoji(allEmojis);
}

//Takes the text from the user and injects 0-3 "yeezy-based" emojis in randomly selected places
function yeezyfy() {
    doEmoji(yeezy);
}

//Clears both the text field and the "emojified" result
function clear() {
    var textVal = document.getElementById("text");
    var FinalText = document.getElementById("FinalText");

    textVal.value = null;
    FinalText.innerHTML = "";

    $('#copyBtn').hide();
    $('#clearBtn').hide();
}
