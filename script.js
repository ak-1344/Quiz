
// Questions and responses
const questions = [
    'How long does it take you to reply to texts? 📱',
    'What’s your most impressive talent? 🎉',
    'If we were in a horror movie, what’s your role? 😱',
    'What’s your idea of flirting? 😏',
    'Your reaction when someone gives you a compliment? 🥰',
    'Pick a superpower! 💪',
    'What’s your strategy in an argument? 🧠',
    'What’s your go-to way of showing affection? 💕',
    'What’s your biggest red flag? 🚩',
    'Finally… what’s your honest opinion about me? 😳'
];
let currentQuestion = 0;
let userName = '';
let userResponses = [];

function showResponse(response) {
    document.getElementById('response').innerText = response;
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion <= questions.length) {
        const questionText = questions[currentQuestion -1];
        document.getElementById('question').innerText = questionText;
        document.getElementById('answers').innerHTML = getOptions(questionText);
        document.getElementById('response').classList.add('hidden');
        document.getElementById('next-btn').classList.add('hidden');
    } else {
        document.getElementById('quiz-container').classList.remove('active');
        document.getElementById('result').classList.add('active');
        document.getElementById('result').innerHTML = `
            <h2 class="text-4xl font-bold mb-4">🎉 So you made it huh?! 🎉</h2>
            <p class="text-2xl">Your answers say a lot about you... and I also have some thoughts! 😏</p>
            <p class="text-2xl mt-4">Thank you for taking out time for this, ${userName}!</p>
            <p class="text-2xl mt-4">I hope you call and give your review on this to me!!</p>
            <p class="text-2xl mt-4">Your responses:</p>
            <div class="bg-white bg-opacity-20 border border-white rounded-xl p-4 mt-4">
                <ul class="text-sm">
                    ${userResponses.map((response, index) => `<li>Q${index + 1}: ${response}</li>`).join('')}
                </ul>
            </div>
        `;
        // saveResponsesToGoogleSheets();
    }
}

function getOptions(question) {
    const options = {
        'How long does it take you to reply to texts? 📱': [
            ['🏎️ Instantly — I live in my chat app', 'Ahhh!! That’s not true! 🫣'],
            ['🐢 Hours later — I swear I just saw this', 'Better late than never, right? 🫠'],
            ['🌕 Days later — I’m basically a werewolf, only show up occasionally', 'Trying to be Mysterious and elusive. Huh?! 👽'],
            ['🧊 Never — I reply in my head and forget', 'At least you’re honest about it. 😂']
        ],
        'What’s your most impressive talent? 🎉': [
            ['🎶 Singing like no one’s listening (because they aren’t)', 'Let me be the one to listen those drafts 😏'],
            ['💃 Dancing like my life depends on it', 'Ohhh, I see. 💃 The dancing queen huh?!'],
            ['📝 Writing essays… in the comment section', 'Ah, the internet philosopher. 🧐'],
            ['🍳 Cooking instant noodles like a chef', 'I also wanna taste! 😋🍜']
        ],
        'If we were in a horror movie, what’s your role? 😱': [
            ['🏃‍♂️ First one to die', 'Gone too soon, but not forgotten. 🪦'],
            ['🧠 The one with the plan', 'Oyeee, it’s my job. 🧠'],
            ['😱 Screaming the loudest', 'We’ll hear you from miles away. 📢'],
            ['🧹 Trying to negotiate with the killer', '10/10 for effort. 🤝']
        ],
        'What’s your idea of flirting? 😏': [
            ['👀 Staring from afar and hoping they notice', 'That’s some Introvert-level stealth. 🕵️‍♂️'],
            ['🧃 Sending memes — the modern love language', 'The ultimate humour with affection. 😂'],
            ['💬 Awkwardly trying to compliment them', 'Effort counts, okay? 🥴'],
            ['🤝 Bullying, but like, in a cute way', 'Classic playground romance. 💔']
        ],
        'Your reaction when someone gives you a compliment? 🥰': [
            ['🙈 Blushing and denying everything', 'Ahh!! That’s like you. 👑'],
            ['🕺 Taking it and running with it', 'Confidence goals. 💪'],
            ['💀 Sarcastically turning it into a joke', 'A defense mechanism, I see. 🛡️'],
            ['🤷‍♀️ Pretending you didn’t hear it', 'Selective hearing, huh? 🙉']
        ],
        'Pick a superpower! 💪': [
            ['🕶️ Invisibility — so I can avoid people', 'The ultimate introvert power. 🕵️‍♀️'],
            ['🐢 Time travel — mostly to fix my own embarrassing moments', 'A chance to rewrite history. ⏳'],
            ['🦸‍♂️ Mind reading — because I need to know if they hate me or not', 'No more guessing games. 🧠'],
            ['💨 Super speed — finally be on time for once', 'Always ahead of the game. 🏃‍♂️']
        ],
        'What’s your strategy in an argument? 🧠': [
            ['💧 Silent treatment — because I’m dramatic', 'A true drama queen. 🎭'],
            ['🧠 Facts and logic — I came prepared', 'The ultimate debater. 📚'],
            ['😂 Making jokes until everyone forgets we were arguing', 'Humor is the best medicine. 🤣'],
            ['🥺 Crying — works every time', 'Emotional dominance, Not bad. 😢']
        ],
        'What’s your go-to way of showing affection? 💕': [
            ['🍽️ Feeding them — food is my love language', 'The way to the heart is through the stomach. 🍲'],
            ['🧢 Roasting them — because being nice is overrated', 'Tough love at its finest. 🔥'],
            ['💌 Random thoughtful texts — when I’m feeling soft', 'A sweet surprise. 💌'],
            ['👋 Slaps — crushing them with love', 'Pain that remind her. 👸🏻']
        ],
        'What’s your biggest red flag? 🚩': [
            ['💬 Ghosting people when I’m overwhelmed', 'The disappearing act. 👻'],
            ['💤 Napping instead of facing responsibilities', 'Procrastination at its best. 🛌'],
            ['🧠 Overthinking every single thing', 'The analysis paralysis. 🤯'],
            ['🎭 Using humor to avoid my emotions', 'The class clown defense. 🤡']
        ],
        'Finally… what’s your honest opinion about me? 😳': [
            ['🥰 You’re the absolute best', 'Aww, you’re too kind! 🥰'],
            ['😏 You’re okay, I guess', 'I’ll take that as a compliment. 😏'],
            ['😂 You’re annoying, but I tolerate you', 'Honesty is the best policy. 😂'],
            ['💕 I kinda… maybe… like you? (Blushes)', 'Message me personally once! 😳']
        ]
    };
    return (options[question] || []).map(([text, response]) => `
            <button class="button w-1/2 bg-white bg-opacity-20 border-none rounded-xl p-3 mb-2 text-white text-xl hover:bg-opacity-40 transition duration-300 ease-in-out transform hover:scale-105" onclick="handleClick(event, '${response}', '${text}')">${text}</button>
        `).join('');
}

function handleClick(event, response, answer) {
    event.preventDefault();
    userResponses.push(answer);
    showResponse(response);
}

function startQuiz(isReady) {
    userName = document.getElementById('name-input').value;
    if (isReady) {
        document.getElementById('home-container').classList.remove('active');
        document.getElementById('quiz-container').classList.add('active');
        document.getElementById('quiz-title').innerText = userName==''? `🔥 😏NoName👺 🔥`:`🔥 The Great ${userName} 🔥`;
        document.getElementById('second-chance').classList.add('hidden');
        document.getElementById('last-chance').classList.add('hidden');
        nextQuestion();
    } else {
        document.getElementById('home-container').classList.remove('active');
        document.getElementById('second-chance').classList.remove('hidden');
    }
}

function showLastChance() {
    document.getElementById('second-chance').classList.add('hidden');
    document.getElementById('last-chance').classList.remove('hidden');
}

// function saveResponsesToGoogleSheets(userName, userResponses) {
//     fetch('https://script.google.com/macros/s/AKfycbyV77Ub1M_ZvDvdKJzdG1jywALk01MpKk_7G12HWYfvshMStVyu5FbT9tC9PetSJLLm/exec', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: userName,
//             responses: userResponses
//         })
//     })
//     .then(response => response.json())
//     .then(data => console.log('Server response:', data))
//     .catch(error => console.error('Error:', error));
// }

