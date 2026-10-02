// 1. एक्सप्रेस को ऐप में इम्पोर्ट करें
const express = require('express');
const app = express();

// 2. पोर्ट नंबर तय करें (जिस रास्ते पर ऐप चलेगी)
const PORT = 3000;

// 3. जब कोई आपकी वेबसाइट के होमपेज पर आएगा, तो उसे क्या दिखेगा
app.get('/', (req, res) => {
    res.send('<h1>Hello! आपका पहला Express App सफलतापूर्वक चल रहा है! 🎉</h1>');
});

// 4. सर्वर को चालू (Start) करें
app.listen(PORT, () => {
    console.log(`सर्वर चालू हो गया है! इसे देखने के लिए ब्राउज़र में खोलें: http://localhost:${PORT}`);
});
