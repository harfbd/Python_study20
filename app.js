const units = [
  { title: "字串", range: "第 1–4 題" },
  { title: "變數", range: "第 5–8 題" },
  { title: "資料型態", range: "第 9–12 題" },
  { title: "for 迴圈", range: "第 13–16 題" },
  { title: "while 與整合", range: "第 17–20 題" },
];

const questions = [
  {
    unit: 0,
    difficulty: "暖身",
    teaching: "字串是被成對引號包住的文字。print() 可以把資料顯示在畫面上。",
    icon: "“ ”",
    title: "建立問候文字",
    prompt: "依序放入一張字串卡和一張輸出功能卡。",
    codeWithTwoBlanks: "message = {{1}}\n{{2}}(message)",
    spokenCode: "第一行：message 等於空格一。第二行：空格二，左括號 message 右括號。",
    blankLabels: ["要存入 message 的字串", "用來顯示資料的函式"],
    options: ["\"你好\"", "print", "你好", "input", "str"],
    optionSpoken: ["雙引號你好雙引號", "print 函式", "沒有引號的你好", "input 函式", "str 函式"],
    answer: [0, 1],
    hint: "先找出開頭和結尾都有引號的卡，再找出顯示資料的函式。",
    coach: "先認引號，再找功能。一次只處理一個空格就好。",
    wrong: "第一格需要字串，第二格需要能顯示資料的函式。再比對一次兩格的用途。",
    success: "完成！message 保存字串「你好」，print 會把它顯示出來。",
    explanation: "第一格使用 \"你好\"；第二格使用 print。完整程式會顯示「你好」。",
  },
  {
    unit: 0,
    difficulty: "暖身",
    teaching: "加號放在兩個字串中間時，會把文字首尾連接。引號中沒有空格，結果也不會自動出現空格。",
    icon: "+",
    title: "拼出 Python",
    prompt: "完成字串串接，再把結果顯示出來。",
    codeWithTwoBlanks: "first = \"Py\"\nsecond = \"thon\"\nword = first {{1}} second\n{{2}}(word)",
    spokenCode: "第一行：first 等於雙引號 P y 雙引號。第二行：second 等於雙引號 t h o n 雙引號。第三行：word 等於 first，空格一，second。第四行：空格二，左括號 word 右括號。",
    blankLabels: ["連接兩個字串的運算符號", "顯示 word 的函式"],
    options: ["+", "print", "-", "*", "input"],
    optionSpoken: ["加號", "print 函式", "減號", "乘號", "input 函式"],
    answer: [0, 1],
    hint: "字串使用加號連接；顯示資料使用 print。",
    coach: "先找「連接」，再找「顯示」；兩個動作各對應一張卡。",
    wrong: "第一格要連接文字，第二格要顯示結果。留意 + 和 print 的不同工作。",
    success: "答對了！兩段文字接起來就是 Python。",
    explanation: "first + second 得到字串 Python，再由 print(word) 顯示結果。",
  },
  {
    unit: 0,
    difficulty: "引導",
    teaching: "f-string 會用 f 放在開頭，並把大括號中的變數值放進文字。",
    icon: "f",
    title: "製作個人化歡迎訊息",
    prompt: "完成 f-string，再顯示組合完成的訊息。",
    codeWithTwoBlanks: "name = \"小安\"\nmessage = {{1}}\"你好，{name}！\"\n{{2}}(message)",
    spokenCode: "第一行：name 等於雙引號小安雙引號。第二行：message 等於空格一，雙引號你好逗號，左大括號 name 右大括號，驚嘆號，雙引號。第三行：空格二，左括號 message 右括號。",
    blankLabels: ["啟用格式化字串的字母", "顯示訊息的函式"],
    options: ["f", "print", "str", "input", "\"f\""],
    optionSpoken: ["字母 f，格式化字串前綴", "print 函式", "str 函式", "input 函式", "雙引號 f 雙引號"],
    answer: [0, 1],
    hint: "第一格只需要沒有引號的小寫 f。",
    coach: "f 是語法標記，不會被印出；print 才負責顯示。",
    wrong: "第一格是沒有引號的小寫 f；第二格是輸出函式。",
    success: "完成！畫面會顯示「你好，小安！」。",
    explanation: "f 讓 {name} 被替換成變數值「小安」；print(message) 顯示組合後的文字。",
  },
  {
    unit: 0,
    difficulty: "小挑戰",
    teaching: "len() 可以計算字串中有幾個字元。",
    icon: "len",
    title: "計算單字長度",
    prompt: "建立 Python 字串，再計算它的字元數。",
    codeWithTwoBlanks: "word = {{1}}\nletters = {{2}}(word)\nprint(letters)",
    spokenCode: "第一行：word 等於空格一。第二行：letters 等於空格二，左括號 word 右括號。第三行：print 左括號 letters 右括號。",
    blankLabels: ["存入 word 的字串", "計算長度的函式"],
    options: ["\"Python\"", "len", "Python", "str", "\"len\""],
    optionSpoken: ["雙引號 Python 雙引號", "len 函式", "沒有引號的 Python", "str 函式", "雙引號 len 雙引號"],
    answer: [0, 1],
    hint: "文字需要引號；計算長度的函式名稱是 len。",
    coach: "看外觀：值要有引號；功能名稱後面會接括號。",
    wrong: "第一格要放有引號的文字，第二格要放計算字元數的函式。",
    success: "正確！Python 有 6 個字元。",
    explanation: "\"Python\" 是字串，len(word) 會得到整數 6。",
  },
  {
    unit: 1,
    difficulty: "暖身",
    teaching: "變數就像有名稱的置物盒。文字通常用字串保存，數量可以用整數保存。",
    icon: "=",
    title: "保存學生資料",
    prompt: "讓 student 保存名字，score 保存整數分數。",
    codeWithTwoBlanks: "student = {{1}}\nscore = {{2}}\nprint(student, score)",
    spokenCode: "第一行：student 等於空格一。第二行：score 等於空格二。第三行：print 左括號 student 逗號 score 右括號。",
    blankLabels: ["學生名字的字串", "學生分數的整數"],
    options: ["\"小晴\"", "90", "小晴", "\"90\"", "score"],
    optionSpoken: ["雙引號小晴雙引號", "整數九十", "沒有引號的小晴", "雙引號九十雙引號", "變數名稱 score"],
    answer: [0, 1],
    hint: "名字是文字，需要引號；分數要能計算，所以使用沒有引號的數字。",
    coach: "同樣是資料，文字與數字的寫法不同。",
    wrong: "名字需要引號；可計算的分數不要加引號。",
    success: "完成！名字是字串，分數是整數。",
    explanation: "student 保存 \"小晴\"；score 保存整數 90，而不是字串 \"90\"。",
  },
  {
    unit: 1,
    difficulty: "追蹤變化",
    teaching: "等號右邊會先計算，再把新結果存回左邊的變數。",
    icon: "+−",
    title: "追蹤金幣數量",
    prompt: "先增加 3 枚金幣，再使用 2 枚。",
    codeWithTwoBlanks: "coins = 5\ncoins = coins {{1}} 3\ncoins = coins {{2}} 2\nprint(coins)",
    spokenCode: "第一行：coins 等於五。第二行：coins 等於 coins，空格一，三。第三行：coins 等於 coins，空格二，二。第四行：print 左括號 coins 右括號。",
    blankLabels: ["增加金幣的運算符號", "使用金幣的運算符號"],
    options: ["+", "-", "*", "/"],
    optionSpoken: ["加號", "減號", "乘號", "除號"],
    answer: [0, 1],
    hint: "「增加」使用加號；「使用掉」表示數量要減少。",
    coach: "把變化畫成一條線：5 → 8 → 6。",
    wrong: "增加要使用加號，使用掉則要讓數量減少。",
    success: "答對了！金幣數量依序是 5、8、6。",
    explanation: "先計算 5 + 3 得到 8，再計算 8 - 2，最後 coins 是 6。",
  },
  {
    unit: 1,
    difficulty: "小挑戰",
    teaching: "交換兩個變數時，可以先用第三個變數暫時保存其中一個值。",
    icon: "⇄",
    title: "交換左右兩種顏色",
    prompt: "完成交換步驟，讓 left 變成藍色、right 變成紅色。",
    codeWithTwoBlanks: "left = \"紅\"\nright = \"藍\"\ntemp = {{1}}\nleft = {{2}}\nright = temp",
    spokenCode: "第一行：left 等於雙引號紅雙引號。第二行：right 等於雙引號藍雙引號。第三行：temp 等於空格一。第四行：left 等於空格二。第五行：right 等於 temp。",
    blankLabels: ["先暫存在 temp 的變數", "要放進 left 的變數"],
    options: ["left", "right", "temp", "\"左\"", "left + right"],
    optionSpoken: ["變數 left", "變數 right", "變數 temp", "雙引號左雙引號", "left 加 right"],
    answer: [0, 1],
    hint: "先保存原本的 left，再把 right 的值交給 left。",
    coach: "temp 像暫存盒，避免原來的值被覆蓋後找不回來。",
    wrong: "先把 left 暫存在 temp，再讓 left 取得 right 的值。",
    success: "交換成功！left 是藍色，right 是紅色。",
    explanation: "temp 保存原本的「紅」，left 取得「藍」，最後 right 從 temp 取回「紅」。",
  },
  {
    unit: 1,
    difficulty: "應用",
    teaching: "變數可以放進運算式。總價等於每件價格乘以數量，Python 的乘法符號是星號。",
    icon: "×",
    title: "計算購物總價",
    prompt: "建立 total 變數，並計算四件商品的價格。",
    codeWithTwoBlanks: "price = 25\namount = 4\n{{1}} = price {{2}} amount\nprint(total)",
    spokenCode: "第一行：price 等於二十五。第二行：amount 等於四。第三行：空格一，等於 price，空格二，amount。第四行：print 左括號 total 右括號。",
    blankLabels: ["保存總價的變數名稱", "計算總價的運算符號"],
    options: ["total", "*", "price", "+", "\"total\""],
    optionSpoken: ["變數名稱 total", "乘號，星號", "變數名稱 price", "加號", "雙引號 total 雙引號"],
    answer: [0, 1],
    hint: "最後一行要顯示 total，因此第一格要建立它；總價使用乘法。",
    coach: "先看結果要存在哪裡，再選計算方式。",
    wrong: "第一格需要建立 total；第二格需要 Python 的乘法星號。",
    success: "正確！total 會保存 100。",
    explanation: "total = price * amount 會計算 25 乘以 4，得到整數 100。",
  },
  {
    unit: 2,
    difficulty: "轉換",
    teaching: "引號中的數字仍是字串。int() 可以把合適的數字字串轉成整數。",
    icon: "int",
    title: "計算明年的年齡",
    prompt: "先把文字年齡轉成整數，再加上 1。",
    codeWithTwoBlanks: "age_text = \"12\"\nage = {{1}}(age_text)\nnext_age = age {{2}} 1\nprint(next_age)",
    spokenCode: "第一行：age underscore text 等於雙引號十二雙引號。第二行：age 等於空格一，左括號 age underscore text 右括號。第三行：next underscore age 等於 age，空格二，一。第四行：print 左括號 next underscore age 右括號。",
    blankLabels: ["轉成整數的函式", "計算明年年齡的運算符號"],
    options: ["int", "+", "str", "\"1\"", "float"],
    optionSpoken: ["int 函式", "加號", "str 函式", "雙引號一雙引號", "float 函式"],
    answer: [0, 1],
    hint: "第一格先把 \"12\" 變成數字，第二格再增加 1。",
    coach: "先轉型，再計算；把兩個動作分開看。",
    wrong: "第一格要把字串轉成整數，第二格要讓年齡增加。",
    success: "完成！next_age 是整數 13。",
    explanation: "int(age_text) 得到整數 12，接著 12 + 1 得到整數 13。",
  },
  {
    unit: 2,
    difficulty: "分類",
    teaching: "有小數點的數值通常是 float。除號 / 可以計算平均或速度。",
    icon: "1.5",
    title: "計算平均速度",
    prompt: "建立小數距離，再用距離除以時間。",
    codeWithTwoBlanks: "distance = {{1}}\ntime = 2\nspeed = distance {{2}} time\nprint(speed)",
    spokenCode: "第一行：distance 等於空格一。第二行：time 等於二。第三行：speed 等於 distance，空格二，time。第四行：print 左括號 speed 右括號。",
    blankLabels: ["小數型態的距離", "計算速度的運算符號"],
    options: ["7.5", "/", "\"7.5\"", "*", "int"],
    optionSpoken: ["小數七點五", "除號", "雙引號七點五雙引號", "乘號", "int 函式"],
    answer: [0, 1],
    hint: "小數不要加引號；速度等於距離除以時間。",
    coach: "觀察小數點與引號，再回想速度公式。",
    wrong: "第一格需要沒有引號的小數，第二格需要除號。",
    success: "答對了！speed 會是 3.75。",
    explanation: "7.5 是 float，7.5 / 2 得到浮點數 3.75。",
  },
  {
    unit: 2,
    difficulty: "邏輯",
    teaching: "比較運算會得到 True 或 False。>= 表示大於或等於。",
    icon: "≥",
    title: "判斷是否及格",
    prompt: "完成比較式，再顯示布林值 passed。",
    codeWithTwoBlanks: "score = 75\npassed = score {{1}} 60\nprint({{2}})",
    spokenCode: "第一行：score 等於七十五。第二行：passed 等於 score，空格一，六十。第三行：print 左括號空格二右括號。",
    blankLabels: ["大於或等於的比較符號", "要顯示的布林變數"],
    options: [">=", "passed", "<=", "\"passed\"", "="],
    optionSpoken: ["大於或等於", "變數 passed", "小於或等於", "雙引號 passed 雙引號", "單一等號"],
    answer: [0, 1],
    hint: "及格條件是分數大於或等於 60；結果已保存於 passed。",
    coach: "先把比較式讀成是非題，再找保存答案的變數。",
    wrong: "第一格需要「大於或等於」；第二格要顯示變數 passed，而不是文字。",
    success: "正確！75 大於或等於 60，因此 passed 是 True。",
    explanation: "score >= 60 會得到布林值 True；print(passed) 顯示這個結果。",
  },
  {
    unit: 2,
    difficulty: "觀察",
    teaching: "type() 可以查看資料的型態。變數名稱不加引號時，代表取出變數中的值。",
    icon: "type",
    title: "查看兩個變數的型態",
    prompt: "依序查看 nickname 和 count 保存的資料型態。",
    codeWithTwoBlanks: "nickname = \"小光\"\ncount = 3\nprint(type({{1}}))\nprint(type({{2}}))",
    spokenCode: "第一行：nickname 等於雙引號小光雙引號。第二行：count 等於三。第三行：print 左括號 type 左括號空格一右括號右括號。第四行：print 左括號 type 左括號空格二右括號右括號。",
    blankLabels: ["要查看字串型態的變數", "要查看整數型態的變數"],
    options: ["nickname", "count", "\"nickname\"", "3.0", "str"],
    optionSpoken: ["變數 nickname", "變數 count", "雙引號 nickname 雙引號", "小數三點零", "str 函式"],
    answer: [0, 1],
    hint: "照程式上方的順序，先放名字變數，再放數量變數。",
    coach: "區分「變數名稱」和「加上引號的普通文字」。",
    wrong: "先查看保存字串的 nickname，再查看保存整數的 count。",
    success: "完成！結果依序是 str 和 int。",
    explanation: "nickname 保存字串，所以 type(nickname) 是 str；count 保存整數，所以 type(count) 是 int。",
  },
  {
    unit: 3,
    difficulty: "暖身",
    teaching: "range(開始值, 結束值) 會包含開始值，但不包含結束值。",
    icon: "↻",
    title: "依序顯示 1、2、3",
    prompt: "補上 range 的開始值與停止值。",
    codeWithTwoBlanks: "for number in range({{1}}, {{2}}):\n    print(number)",
    spokenCode: "第一行：for number in range 左括號，空格一，逗號，空格二，右括號，冒號。第二行縮排四格：print 左括號 number 右括號。",
    blankLabels: ["range 的開始值", "range 不包含的結束值"],
    options: ["1", "4", "0", "3", "5"],
    optionSpoken: ["整數一", "整數四", "整數零", "整數三", "整數五"],
    answer: [0, 1],
    hint: "從 1 開始；要印到 3，結束值必須設為下一個數字。",
    coach: "range 的結束值像終點線：到線前停下。",
    wrong: "開始值要是 1；要包含 3，結束值要放下一個數字 4。",
    success: "正確！迴圈會依序顯示 1、2、3。",
    explanation: "range(1, 4) 產生 1、2、3，因為結束值 4 不會被包含。",
  },
  {
    unit: 3,
    difficulty: "引導",
    teaching: "for 可以逐一讀取字串。每一輪，letter 會保存目前取得的一個字元。",
    icon: "abc",
    title: "逐字顯示 CAT",
    prompt: "選擇要逐一讀取的資料，再選擇顯示功能。",
    codeWithTwoBlanks: "word = \"CAT\"\nfor letter in {{1}}:\n    {{2}}(letter)",
    spokenCode: "第一行：word 等於雙引號 C A T 雙引號。第二行：for letter in 空格一，冒號。第三行縮排四格：空格二，左括號 letter 右括號。",
    blankLabels: ["要逐一讀取的字串變數", "每一輪顯示字元的函式"],
    options: ["word", "print", "letter", "\"word\"", "range(3)"],
    optionSpoken: ["變數 word", "print 函式", "變數 letter", "雙引號 word 雙引號", "range 左括號三右括號"],
    answer: [0, 1],
    hint: "完整單字保存在 word；顯示每一個 letter 使用 print。",
    coach: "分清楚完整集合 word，和每輪拿到的單一字元 letter。",
    wrong: "第一格要提供完整字串 word；第二格要用 print 顯示每一個 letter。",
    success: "完成！三輪會依序顯示 C、A、T。",
    explanation: "for letter in word 逐字讀取 CAT，print(letter) 每輪顯示目前字元。",
  },
  {
    unit: 3,
    difficulty: "累加",
    teaching: "累加器會保留前一輪的結果，再加入目前的數字。它通常從 0 開始。",
    icon: "Σ",
    title: "算出 1 到 4 的總和",
    prompt: "選擇 total 的起始值與累加符號。",
    codeWithTwoBlanks: "total = {{1}}\nfor number in range(1, 5):\n    total = total {{2}} number\nprint(total)",
    spokenCode: "第一行：total 等於空格一。第二行：for number in range 左括號一逗號五右括號，冒號。第三行縮排四格：total 等於 total，空格二，number。第四行：print 左括號 total 右括號。",
    blankLabels: ["累加器的起始值", "把目前數字加入 total 的符號"],
    options: ["0", "+", "1", "-", "*"],
    optionSpoken: ["整數零", "加號", "整數一", "減號", "乘號"],
    answer: [0, 1],
    hint: "總和還沒開始時是 0；每一輪都要把 number 加進去。",
    coach: "total 像記分板：保留舊分數，再加上新分數。",
    wrong: "累加器從 0 開始，並在每一輪用加號加入 number。",
    success: "答對了！total 最後是 10。",
    explanation: "total 從 0 開始，依序變成 1、3、6、10。",
  },
  {
    unit: 3,
    difficulty: "整合",
    teaching: "字串不能直接與整數相加。str() 可以先把數字轉成字串。",
    icon: "str",
    title: "顯示第 1、第 2、第 3",
    prompt: "補上固定文字和型態轉換函式。",
    codeWithTwoBlanks: "for number in range(1, 4):\n    print({{1}} + {{2}}(number))",
    spokenCode: "第一行：for number in range 左括號一逗號四右括號，冒號。第二行縮排四格：print 左括號，空格一，加號，空格二，左括號 number 右括號，右括號。",
    blankLabels: ["每行開頭的字串", "把 number 轉成字串的函式"],
    options: ["\"第\"", "str", "\"number\"", "int", "number"],
    optionSpoken: ["雙引號第雙引號", "str 函式", "雙引號 number 雙引號", "int 函式", "變數 number"],
    answer: [0, 1],
    hint: "第一格需要有引號的文字；第二格要讓整數變成可以串接的字串。",
    coach: "兩邊型態相同，才能順利用加號串接。",
    wrong: "第一格需要字串 \"第\"；第二格使用 str 把整數轉成字串。",
    success: "完成！程式會顯示「第1」、「第2」、「第3」。",
    explanation: "str(number) 將每輪的整數轉成字串，才能和 \"第\" 使用加號串接。",
  },
  {
    unit: 4,
    difficulty: "暖身",
    teaching: "while 會在條件成立時持續執行。倒數時，控制變數每輪都要減少。",
    icon: "3…",
    title: "完成 3、2、1 倒數",
    prompt: "選擇倒數的起始值與更新符號。",
    codeWithTwoBlanks: "steps = {{1}}\nwhile steps > 0:\n    print(steps)\n    steps = steps {{2}} 1",
    spokenCode: "第一行：steps 等於空格一。第二行：while steps 大於零，冒號。第三行縮排四格：print 左括號 steps 右括號。第四行縮排四格：steps 等於 steps，空格二，一。",
    blankLabels: ["倒數的起始值", "讓 steps 每輪少 1 的符號"],
    options: ["3", "-", "0", "+", "1"],
    optionSpoken: ["整數三", "減號", "整數零", "加號", "整數一"],
    answer: [0, 1],
    hint: "倒數從 3 開始，而且數值要越來越小。",
    coach: "確認起點、條件與更新方向，三個線索要互相配合。",
    wrong: "倒數從 3 開始，每輪要用減號讓 steps 變小。",
    success: "正確！程式會顯示 3、2、1，然後停止。",
    explanation: "steps 從 3 開始，每輪減 1；變成 0 時，steps > 0 不再成立。",
  },
  {
    unit: 4,
    difficulty: "追蹤變化",
    teaching: "while 的三個重要部分是起始值、繼續條件與每輪更新。",
    icon: "while",
    title: "從 1 數到 3",
    prompt: "選擇 count 的起始值與每輪更新方式。",
    codeWithTwoBlanks: "count = {{1}}\nwhile count <= 3:\n    print(count)\n    count = count {{2}} 1",
    spokenCode: "第一行：count 等於空格一。第二行：while count 小於或等於三，冒號。第三行縮排四格：print 左括號 count 右括號。第四行縮排四格：count 等於 count，空格二，一。",
    blankLabels: ["計數的起始值", "讓 count 每輪增加的符號"],
    options: ["1", "+", "0", "-", "3"],
    optionSpoken: ["整數一", "加號", "整數零", "減號", "整數三"],
    answer: [0, 1],
    hint: "題目要從 1 開始；要往 3 前進，數值必須增加。",
    coach: "把每輪寫成 1 → 2 → 3 → 4，再看何時停止。",
    wrong: "起點是 1，更新時要用加號向 3 前進。",
    success: "完成！count 依序是 1、2、3。",
    explanation: "count 從 1 開始，每輪加 1；變成 4 時，count <= 3 不成立。",
  },
  {
    unit: 4,
    difficulty: "除錯",
    teaching: "while 條件要配合更新方向，才能在適當時候變成 False，避免無限迴圈。",
    icon: "⚙",
    title: "限制為三次嘗試",
    prompt: "讓迴圈在 attempts 為 0、1、2 時執行，共三次。",
    codeWithTwoBlanks: "attempts = 0\nwhile attempts {{1}} 3:\n    print(\"再試一次\")\n    attempts = attempts {{2}} 1",
    spokenCode: "第一行：attempts 等於零。第二行：while attempts，空格一，三，冒號。第三行縮排四格：print 左括號雙引號再試一次雙引號右括號。第四行縮排四格：attempts 等於 attempts，空格二，一。",
    blankLabels: ["只在 attempts 小於 3 時成立的比較符號", "每輪增加 attempts 的符號"],
    options: ["<", "+", "<=", "-", "="],
    optionSpoken: ["小於", "加號", "小於或等於", "減號", "單一等號"],
    answer: [0, 1],
    hint: "0、1、2 都小於 3；每輪完成後要把 attempts 增加 1。",
    coach: "條件決定何時繼續，更新決定能不能走到停止點。",
    wrong: "條件要用小於 3；每輪要加 1，才能剛好執行三次。",
    success: "答對了！訊息剛好會顯示三次。",
    explanation: "attempts < 3 在 0、1、2 時成立；每輪加 1，變成 3 時停止。",
  },
  {
    unit: 4,
    difficulty: "總挑戰",
    teaching: "字串變數也能在迴圈中反覆更新。空字串適合當作串接文字的起點。",
    icon: "★",
    title: "組合出 GoGoGo",
    prompt: "選擇 result 的起始內容，並讓 times 每輪減少。",
    codeWithTwoBlanks: "word = \"Go\"\ntimes = 3\nresult = {{1}}\nwhile times > 0:\n    result = result + word\n    times = times {{2}} 1\nprint(result)",
    spokenCode: "第一行：word 等於雙引號 Go 雙引號。第二行：times 等於三。第三行：result 等於空格一。第四行：while times 大於零，冒號。第五行縮排四格：result 等於 result 加 word。第六行縮排四格：times 等於 times，空格二，一。第七行：print 左括號 result 右括號。",
    blankLabels: ["不含任何字元的空字串", "讓 times 每輪減少的符號"],
    options: ["\"\"", "-", "\" \"", "+", "0"],
    optionSpoken: ["兩個引號形成的空字串", "減號", "含有一個空格的字串", "加號", "整數零"],
    answer: [0, 1],
    hint: "result 一開始不要有文字或空格；times 必須越來越小。",
    coach: "分開追蹤兩條變化線：result 變長，times 變小。",
    wrong: "result 要從真正的空字串開始；times 每輪要用減號變小。",
    success: "全部完成！result 最後會是 GoGoGo。",
    explanation: "result 從空字串開始，三輪變成 Go、GoGo、GoGoGo；times 減到 0 後停止。",
  },
];

const conceptGuides = [
  ["字串要放在成對引號中，否則 Python 會把它當成名稱。", "變數先保存資料，print() 再把資料顯示在畫面上。"],
  ["字串之間的 + 是串接，不是數字加法。", "字串中沒有空格時，串接結果也不會自動補空格。"],
  ["f 放在引號前，告訴 Python 這是格式化字串。", "大括號中的 name 會替換成變數目前的值。"],
  ["len() 會回傳字串的字元數，結果是整數。", "函式名稱後接括號，括號裡放要處理的資料。"],
  ["變數名稱在等號左邊；要保存的值在右邊。", "文字用引號；可計算的整數通常不加引號。"],
  ["右邊先用舊值計算，算完才存回左邊。", "coins 每重新指定一次，舊值就被新值取代。"],
  ["若直接覆蓋 left，原值會消失，因此先放進 temp。", "交換完成後，left 與 right 會各自取得對方原本的值。"],
  ["price 和 amount 是已知資料，total 用來保存結果。", "Python 用 * 表示乘法。"],
  ["\"12\" 是文字，不能直接當成整數加法使用。", "int() 先轉成整數，之後才能與 1 相加。"],
  ["7.5 有小數點，所以是 float。", "/ 進行除法，結果仍可保存到變數。"],
  ["比較式不是指定值；它會產生 True 或 False。", ">= 同時包含大於與等於兩種情況。"],
  ["type() 接收一個值，回傳它所屬的資料型態。", "不加引號的 nickname 與 count 會取出變數內容。"],
  ["range(1, 4) 從 1 開始，但在 4 之前停止。", "for 每一輪會把下一個數字放進 number。"],
  ["字串也是可逐一走訪的序列。", "每一輪 letter 只保存 CAT 中目前的一個字元。"],
  ["total 是累加器，開始前總和是 0。", "每輪把 number 加回 total，前一輪結果會保留下來。"],
  ["整數不能直接與字串使用 + 串接。", "str(number) 先把 1、2、3 轉成文字。"],
  ["while 先檢查條件，再決定是否執行本輪。", "steps 每輪減 1，才會走到不再大於 0 的停止點。"],
  ["起始值決定從哪裡開始，條件決定何時停止。", "count 每輪加 1，依序從 1 走到 3。"],
  ["< 3 只讓 0、1、2 通過，所以正好三輪。", "若沒有增加 attempts，條件會一直成立。"],
  ["空字串 \"\" 沒有任何字元，適合當串接起點。", "每輪 result 變長、times 變小；兩個變數同時推動迴圈。"],
];

const executionResults = [
  { outputLines: ["你好"] },
  { outputLines: ["Python"] },
  { outputLines: ["你好，小安！"] },
  { outputLines: ["6"] },
  { outputLines: ["小晴 90"] },
  { outputLines: ["6"] },
  {
    outputLines: [],
    noOutputReason: "這段程式沒有呼叫 print()，所以終端機不會顯示文字。",
    finalState: "執行後：left = \"藍\"，right = \"紅\"，temp = \"紅\"。",
  },
  { outputLines: ["100"] },
  { outputLines: ["13"] },
  { outputLines: ["3.75"] },
  { outputLines: ["True"] },
  { outputLines: ["<class 'str'>", "<class 'int'>"] },
  { outputLines: ["1", "2", "3"] },
  { outputLines: ["C", "A", "T"] },
  { outputLines: ["10"] },
  { outputLines: ["第1", "第2", "第3"] },
  { outputLines: ["3", "2", "1"] },
  { outputLines: ["1", "2", "3"] },
  { outputLines: ["再試一次", "再試一次", "再試一次"] },
  { outputLines: ["GoGoGo"] },
];

let currentIndex = 0;
let answeredCorrectly = false;
let selectedCardIndex = null;
let slotAnswers = [null, null];
let slotInvalid = [false, false];
let autoVoiceEnabled = false;
let answerSoundEnabled = true;
let feedbackAudioContext = null;
let activeUtterance = null;
let activeSpeechButton = null;
let speechStartTimer = null;
let speechRequestId = 0;
let pointerDrag = null;
let nativeDragCardIndex = null;
const speechSupported = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
const FeedbackAudioContext = window.AudioContext || window.webkitAudioContext;
const feedbackSoundSupported = Boolean(FeedbackAudioContext);

const els = {
  app: document.querySelector("#app"),
  completion: document.querySelector("#completion"),
  title: document.querySelector("#lesson-title"),
  prompt: document.querySelector("#question-prompt"),
  count: document.querySelector("#question-count"),
  unitBadge: document.querySelector("#unit-badge"),
  difficulty: document.querySelector("#difficulty-label"),
  teaching: document.querySelector("#teaching-copy"),
  conceptTitle: document.querySelector("#concept-title"),
  conceptStepOne: document.querySelector("#concept-step-one"),
  conceptStepTwo: document.querySelector("#concept-step-two"),
  conceptIcon: document.querySelector(".concept-icon"),
  codeBox: document.querySelector("#code-example"),
  code: document.querySelector("#code-text"),
  codeSpoken: document.querySelector("#code-spoken"),
  options: document.querySelector("#answer-options"),
  fieldset: document.querySelector("#answer-fieldset"),
  slots: document.querySelector("#answer-slots"),
  slotProgress: document.querySelector("#slot-progress"),
  selectionStatus: document.querySelector("#selection-status"),
  clearAll: document.querySelector("#clear-all-answers"),
  hint: document.querySelector("#hint-box"),
  hintCopy: document.querySelector("#hint-copy"),
  speakHint: document.querySelector("#speak-hint"),
  feedback: document.querySelector("#feedback"),
  feedbackSymbol: document.querySelector("#feedback-symbol"),
  feedbackTitle: document.querySelector("#feedback-title"),
  feedbackCopy: document.querySelector("#feedback-copy"),
  executionResult: document.querySelector("#execution-result"),
  executionSummary: document.querySelector("#execution-summary"),
  solvedCode: document.querySelector("#solved-code"),
  programOutput: document.querySelector("#program-output"),
  runtimeState: document.querySelector("#runtime-state"),
  check: document.querySelector("#check-answer"),
  next: document.querySelector("#next-question"),
  speak: document.querySelector("#read-question"),
  speechStatus: document.querySelector("#speech-status"),
  voiceToggle: document.querySelector("#voice-toggle"),
  answerSoundToggle: document.querySelector("#answer-sound-toggle"),
  progressLabel: document.querySelector("#progress-label"),
  progressPercent: document.querySelector("#progress-percent"),
  progressBar: document.querySelector(".progress-track"),
  progressFill: document.querySelector("#progress-fill"),
  unitList: document.querySelector("#unit-list"),
  coach: document.querySelector("#coach-copy"),
  announcer: document.querySelector("#sr-announcer"),
  skip: document.querySelector("#skip-link"),
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");
}

function getOptionSpoken(index) {
  const q = questions[currentIndex];
  return q.optionSpoken[index] || q.options[index];
}

function getQuestionCode(q) {
  return q.codeWithTwoBlanks
    .replaceAll("{{1}}", "[空格 1]")
    .replaceAll("{{2}}", "[空格 2]");
}

function getSolvedCode(q) {
  return q.codeWithTwoBlanks
    .replaceAll("{{1}}", q.options[q.answer[0]])
    .replaceAll("{{2}}", q.options[q.answer[1]]);
}

function getExecutionResult() {
  return executionResults[currentIndex];
}

function getExecutionOutputText(result) {
  return result.outputLines.length ? result.outputLines.join("\n") : "（沒有終端機輸出）";
}

function renderExecutionResult(q) {
  const result = getExecutionResult();
  els.solvedCode.textContent = getSolvedCode(q);
  els.programOutput.textContent = getExecutionOutputText(result);
  els.executionSummary.textContent = q.explanation;
  els.runtimeState.hidden = !result.finalState && !result.noOutputReason;
  els.runtimeState.textContent = [result.noOutputReason, result.finalState].filter(Boolean).join(" ");
  els.executionResult.hidden = false;
}

function clearVisibleFeedback() {
  els.feedback.hidden = true;
  els.feedback.className = "feedback";
  els.feedbackTitle.textContent = "";
  els.feedbackCopy.textContent = "";
}

function clearAnswerErrors() {
  slotInvalid = [false, false];
  clearVisibleFeedback();
}

function announce(message) {
  els.announcer.textContent = "";
  window.setTimeout(function () {
    els.announcer.textContent = message;
  }, 20);
}

function scheduleFeedbackNote(context, frequency, startOffset, duration, peakGain) {
  const start = context.currentTime + 0.01 + startOffset;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const volume = typeof peakGain === "number" ? peakGain : 0.045;
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain).connect(context.destination);
  oscillator.addEventListener("ended", function () {
    oscillator.disconnect();
    gain.disconnect();
  });
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

function playPlacementSound() {
  if (!answerSoundEnabled || !feedbackSoundSupported || document.hidden) return;
  try {
    if (!feedbackAudioContext || feedbackAudioContext.state === "closed") {
      feedbackAudioContext = new FeedbackAudioContext();
    }
    const play = function () {
      scheduleFeedbackNote(feedbackAudioContext, 440, 0, 0.065, 0.028);
    };
    if (feedbackAudioContext.state === "running") play();
    else feedbackAudioContext.resume().then(play).catch(function () {});
  } catch (error) {
    // The placement sound supplements the existing visual and spoken confirmation.
  }
}

function playAnswerSound(correct) {
  if (!answerSoundEnabled || !feedbackSoundSupported || document.hidden) return;
  try {
    if (!feedbackAudioContext || feedbackAudioContext.state === "closed") {
      feedbackAudioContext = new FeedbackAudioContext();
    }
    const play = function () {
      const notes = correct
        ? [[523.25, 0, 0.09], [659.25, 0.1, 0.13]]
        : [[330, 0, 0.08], [247, 0.09, 0.12]];
      notes.forEach(function (note) {
        scheduleFeedbackNote(feedbackAudioContext, note[0], note[1], note[2]);
      });
    };
    if (feedbackAudioContext.state === "running") play();
    else feedbackAudioContext.resume().then(play).catch(function () {});
  } catch (error) {
    // Sound is supplementary; visual and screen-reader feedback remain available.
  }
}

function updateAnswerSoundSetting() {
  if (!feedbackSoundSupported) {
    els.answerSoundToggle.disabled = true;
    els.answerSoundToggle.setAttribute("aria-pressed", "false");
    els.answerSoundToggle.textContent = "答題音效：不支援";
    return;
  }
  els.answerSoundToggle.setAttribute("aria-pressed", String(answerSoundEnabled));
  els.answerSoundToggle.textContent = answerSoundEnabled ? "答題音效：開啟" : "答題音效：關閉";
}

function setupAnswerSound() {
  if (feedbackSoundSupported) {
    try {
      answerSoundEnabled = window.localStorage.getItem("python-lab-answer-sound") !== "off";
    } catch (error) {
      answerSoundEnabled = true;
    }
  }
  updateAnswerSoundSetting();
  els.answerSoundToggle.addEventListener("click", function () {
    if (!feedbackSoundSupported) return;
    answerSoundEnabled = !answerSoundEnabled;
    try {
      window.localStorage.setItem("python-lab-answer-sound", answerSoundEnabled ? "on" : "off");
    } catch (error) {
      // The in-memory preference still works when browser storage is unavailable.
    }
    updateAnswerSoundSetting();
    announce(answerSoundEnabled ? "已開啟答題音效。" : "已關閉答題音效。");
  });
}

function renderUnits() {
  const currentUnit = questions[currentIndex] ? questions[currentIndex].unit : units.length;
  els.unitList.innerHTML = units.map(function (unit, index) {
    const state = index < currentUnit ? "complete" : index === currentUnit ? "active" : "locked";
    const stateText = state === "complete" ? "已完成" : state === "active" ? "目前小節" : "尚未開始";
    const nodeText = state === "complete" ? "✓" : index + 1;
    const current = state === "active" ? " aria-current=\"step\"" : "";
    return "<li class=\"unit-item " + state + "\"" + current + ">" +
      "<span class=\"unit-node\" aria-hidden=\"true\">" + nodeText + "</span>" +
      "<span class=\"unit-copy\"><strong>" + escapeHtml(unit.title) + "</strong>" +
      "<span>" + escapeHtml(unit.range) + " · " + stateText + "</span></span></li>";
  }).join("");
}

function updateProgress() {
  const complete = answeredCorrectly ? currentIndex + 1 : currentIndex;
  const visibleNumber = Math.min(currentIndex + 1, questions.length);
  els.progressLabel.textContent = "第 " + visibleNumber + " 題，共 " + questions.length + " 題";
  els.progressBar.setAttribute("aria-valuenow", String(complete));
  els.progressBar.setAttribute("aria-valuemax", String(questions.length));
  els.progressBar.setAttribute("aria-valuetext", "已完成 " + complete + " 題，共 " + questions.length + " 題；目前第 " + visibleNumber + " 題");
  els.progressFill.style.width = (complete / questions.length * 100) + "%";
  els.progressPercent.textContent = Math.round(complete / questions.length * 100) + "%";
}

function renderCardStates() {
  const q = questions[currentIndex];
  els.options.querySelectorAll(".answer-card").forEach(function (card) {
    const index = Number(card.dataset.answerIndex);
    const usedSlot = slotAnswers.indexOf(index);
    const isSelected = selectedCardIndex === index;
    card.classList.toggle("is-selected", isSelected);
    card.classList.toggle("is-used", usedSlot !== -1);
    card.setAttribute("aria-pressed", String(isSelected));
    card.draggable = !answeredCorrectly;
    card.disabled = answeredCorrectly;
    let state = "。按一下選取，再選擇空格";
    if (usedSlot !== -1) state = "。目前在空格 " + (usedSlot + 1) + "，可選取後移到另一格";
    if (isSelected) state = "。已選取，請選擇空格 1 或空格 2";
    card.setAttribute("aria-label", "答案卡 " + (index + 1) + "：" + getOptionSpoken(index) + state);
  });
}

function renderSlotStates() {
  const q = questions[currentIndex];
  els.slots.querySelectorAll(".answer-slot").forEach(function (slot) {
    const slotIndex = Number(slot.dataset.slotIndex);
    const answerIndex = slotAnswers[slotIndex];
    const filled = Number.isInteger(answerIndex);
    const value = slot.querySelector(".slot-value");
    const action = slot.querySelector(".slot-action");
    slot.classList.toggle("has-answer", filled);
    slot.classList.toggle("slot-invalid", slotInvalid[slotIndex]);
    slot.setAttribute("aria-invalid", String(slotInvalid[slotIndex]));
    slot.setAttribute("aria-describedby", slotInvalid[slotIndex] ? "drop-instructions feedback-copy" : "drop-instructions");
    slot.disabled = answeredCorrectly;
    value.textContent = filled ? q.options[answerIndex] : "把答案拖到這裡";
    action.textContent = filled ? "按一下移除" : "等待答案卡";
    const state = filled ? "已放入 " + getOptionSpoken(answerIndex) : "目前空白";
    const instruction = answeredCorrectly ? "" : filled ? "。未選卡片時按一下可移除" : "。先選答案卡，再按這裡放入";
    slot.setAttribute("aria-label", "空格 " + (slotIndex + 1) + "：" + q.blankLabels[slotIndex] + "，" + state + instruction);
  });

  const filledCount = slotAnswers.filter(Number.isInteger).length;
  els.slotProgress.textContent = "已填 " + filledCount + "／2";
  els.clearAll.hidden = filledCount === 0 || answeredCorrectly;

  if (Number.isInteger(selectedCardIndex)) {
    els.selectionStatus.textContent = "已選取：「" + q.options[selectedCardIndex] + "」。請按空格 1 或空格 2。";
    els.selectionStatus.classList.add("has-selection");
  } else {
    els.selectionStatus.textContent = filledCount === 2
      ? "兩個空格都已填入；可檢查答案，或按空格移除後重選。"
      : "尚未選取卡片；可直接拖曳，或先選卡片再選空格。";
    els.selectionStatus.classList.remove("has-selection");
  }
}

function renderAnswerState() {
  renderCardStates();
  renderSlotStates();
}

function renderQuestion(options) {
  const settings = options || {};
  const q = questions[currentIndex];
  stopSpeech();
  answeredCorrectly = false;
  selectedCardIndex = null;
  slotAnswers = [null, null];
  slotInvalid = [false, false];

  const unitQuestions = questions.filter(function (question) { return question.unit === q.unit; });
  const unitPosition = unitQuestions.indexOf(q) + 1;
  els.count.textContent = "練習 " + (currentIndex + 1) + "／" + questions.length;
  els.unitBadge.textContent = units[q.unit].title + " · " + unitPosition + "／" + unitQuestions.length;
  els.difficulty.textContent = q.difficulty;
  els.teaching.textContent = q.teaching;
  const conceptGuide = conceptGuides[currentIndex];
  els.conceptTitle.textContent = units[q.unit].title + "｜" + q.title;
  els.conceptStepOne.textContent = conceptGuide[0];
  els.conceptStepTwo.textContent = conceptGuide[1];
  els.conceptIcon.textContent = q.icon;
  els.title.textContent = q.title;
  els.title.setAttribute("aria-label", "第 " + (currentIndex + 1) + " 題，共 " + questions.length + " 題：" + q.title);
  els.prompt.textContent = q.prompt;
  els.hint.open = false;
  els.hintCopy.textContent = q.hint;
  els.coach.textContent = q.coach;
  clearVisibleFeedback();
  els.executionResult.hidden = true;
  els.executionSummary.textContent = "";
  els.solvedCode.textContent = "";
  els.programOutput.textContent = "";
  els.runtimeState.hidden = true;
  els.runtimeState.textContent = "";
  els.check.hidden = false;
  els.check.textContent = "檢查兩個答案";
  els.next.hidden = true;
  els.next.textContent = currentIndex === questions.length - 1 ? "查看學習成果" : "下一題";

  els.codeBox.hidden = false;
  els.code.textContent = getQuestionCode(q);
  els.codeSpoken.textContent = q.spokenCode;

  els.options.innerHTML = q.options.map(function (option, index) {
    return "<button class=\"answer-card\" type=\"button\" draggable=\"true\" data-answer-index=\"" + index + "\" aria-pressed=\"false\">" +
      "<span class=\"drag-handle\" aria-hidden=\"true\">⠿</span>" +
      "<span class=\"answer-text\" aria-hidden=\"true\">" + escapeHtml(option) + "</span>" +
      "</button>";
  }).join("");

  els.slots.innerHTML = q.blankLabels.map(function (label, index) {
    return "<button class=\"answer-slot\" type=\"button\" data-slot-index=\"" + index + "\" aria-describedby=\"drop-instructions\">" +
      "<span class=\"slot-number\">空格 " + (index + 1) + "</span>" +
      "<span class=\"slot-label\">" + escapeHtml(label) + "</span>" +
      "<span class=\"slot-value\">把答案拖到這裡</span>" +
      "<span class=\"slot-action\">等待答案卡</span>" +
      "</button>";
  }).join("");

  renderAnswerState();
  updateProgress();
  renderUnits();
  if (settings.focus) els.title.focus();
  if (autoVoiceEnabled) speakCurrentQuestion();
}

function selectCard(index) {
  if (answeredCorrectly || !Number.isInteger(index)) return;
  if (selectedCardIndex === index) {
    selectedCardIndex = null;
    renderAnswerState();
    announce("已取消選取答案卡。");
    return;
  }
  selectedCardIndex = index;
  clearAnswerErrors();
  renderAnswerState();
  announce("已選取「" + getOptionSpoken(index) + "」。請選擇空格 1 或空格 2。");
}

function placeCardInSlot(cardIndex, slotIndex, options) {
  const settings = options || {};
  const q = questions[currentIndex];
  if (answeredCorrectly || !Number.isInteger(cardIndex) || !Number.isInteger(slotIndex)) return false;
  if (cardIndex < 0 || cardIndex >= q.options.length || slotIndex < 0 || slotIndex > 1) return false;

  const previousSlot = slotAnswers.indexOf(cardIndex);
  if (previousSlot === slotIndex) {
    selectedCardIndex = null;
    renderAnswerState();
    announce("「" + getOptionSpoken(cardIndex) + "」已經在空格 " + (slotIndex + 1) + "。");
    return true;
  }

  const displacedIndex = slotAnswers[slotIndex];
  if (previousSlot !== -1) slotAnswers[previousSlot] = null;
  slotAnswers[slotIndex] = cardIndex;
  selectedCardIndex = null;
  clearAnswerErrors();
  renderAnswerState();
  if (settings.playPlacementSound === true) playPlacementSound();

  const remaining = slotAnswers.findIndex(function (value) { return !Number.isInteger(value); });
  let message = "已把「" + getOptionSpoken(cardIndex) + "」放入空格 " + (slotIndex + 1) + "。";
  if (Number.isInteger(displacedIndex) && displacedIndex !== cardIndex) {
    message += " 原本的「" + getOptionSpoken(displacedIndex) + "」已移回答案卡區。";
  }
  message += remaining === -1 ? "兩個空格都已完成，可以檢查答案。" : "空格 " + (remaining + 1) + " 尚未完成。";
  if (settings.announceChange !== false) announce(message);

  if (settings.focus) {
    const target = els.slots.querySelector("[data-slot-index=\"" + slotIndex + "\"]");
    if (target) target.focus({ preventScroll: true });
  }
  return true;
}

function removeCardFromSlot(slotIndex) {
  if (answeredCorrectly || !Number.isInteger(slotAnswers[slotIndex])) return false;
  const removed = slotAnswers[slotIndex];
  slotAnswers[slotIndex] = null;
  selectedCardIndex = null;
  clearAnswerErrors();
  renderAnswerState();
  announce("已從空格 " + (slotIndex + 1) + " 移除「" + getOptionSpoken(removed) + "」。");
  return true;
}

function clearAllAnswers() {
  if (answeredCorrectly || slotAnswers.every(function (value) { return !Number.isInteger(value); })) return;
  slotAnswers = [null, null];
  selectedCardIndex = null;
  clearAnswerErrors();
  renderAnswerState();
  const firstCard = els.options.querySelector(".answer-card");
  if (firstCard) firstCard.focus({ preventScroll: true });
  announce("已清除兩個空格，可以重新選擇答案卡。");
}

function clearDropHighlights() {
  els.slots.querySelectorAll(".answer-slot").forEach(function (slot) {
    slot.classList.remove("drop-active");
  });
}

function findSlotAtPoint(x, y) {
  return Array.from(els.slots.querySelectorAll(".answer-slot")).find(function (slot) {
    const rect = slot.getBoundingClientRect();
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  }) || null;
}

function highlightSlotAtPoint(x, y) {
  const target = findSlotAtPoint(x, y);
  els.slots.querySelectorAll(".answer-slot").forEach(function (slot) {
    slot.classList.toggle("drop-active", slot === target);
  });
  return target;
}

function resetPointerDrag(options) {
  const settings = options || {};
  if (!pointerDrag) return;
  const drag = pointerDrag;
  drag.card.classList.remove("pointer-dragging");
  drag.card.style.transform = "";
  clearDropHighlights();
  try {
    if (drag.handle.hasPointerCapture(drag.pointerId)) drag.handle.releasePointerCapture(drag.pointerId);
  } catch (_) {
    // Pointer capture may already have ended.
  }
  pointerDrag = null;
  if (settings.announceCancel && drag.dragging) announce("已取消拖曳，兩個空格都沒有改變。");
}

function setupAnswerInteractions() {
  els.options.addEventListener("click", function (event) {
    const card = event.target.closest(".answer-card");
    if (!card || !els.options.contains(card)) return;
    const suppressUntil = Number(card.dataset.suppressClickUntil || 0);
    if (Date.now() < suppressUntil) {
      event.preventDefault();
      return;
    }
    selectCard(Number(card.dataset.answerIndex));
  });

  els.options.addEventListener("dragstart", function (event) {
    const card = event.target.closest(".answer-card");
    if (!card || answeredCorrectly) {
      event.preventDefault();
      return;
    }
    nativeDragCardIndex = Number(card.dataset.answerIndex);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", String(nativeDragCardIndex));
    card.classList.add("is-dragging");
    announce("正在拖曳「" + getOptionSpoken(nativeDragCardIndex) + "」。請放到空格 1 或空格 2。");
  });

  els.options.addEventListener("dragend", function (event) {
    const card = event.target.closest(".answer-card");
    if (card) {
      card.classList.remove("is-dragging");
      card.dataset.suppressClickUntil = String(Date.now() + 350);
    }
    nativeDragCardIndex = null;
    clearDropHighlights();
  });

  els.options.addEventListener("pointerdown", function (event) {
    const handle = event.target.closest(".drag-handle");
    const card = event.target.closest(".answer-card");
    if (!handle || !card || event.pointerType === "mouse" || answeredCorrectly) return;
    if (pointerDrag && pointerDrag.pointerId !== event.pointerId) {
      resetPointerDrag({ announceCancel: true });
      return;
    }
    pointerDrag = {
      card: card,
      handle: handle,
      cardIndex: Number(card.dataset.answerIndex),
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      dragging: false,
    };
    handle.setPointerCapture(event.pointerId);
  });

  els.options.addEventListener("pointermove", function (event) {
    if (!pointerDrag || pointerDrag.pointerId !== event.pointerId) return;
    const dx = event.clientX - pointerDrag.startX;
    const dy = event.clientY - pointerDrag.startY;
    if (!pointerDrag.dragging && Math.hypot(dx, dy) > 9) {
      pointerDrag.dragging = true;
      pointerDrag.card.classList.add("pointer-dragging");
    }
    if (!pointerDrag.dragging) return;
    event.preventDefault();
    pointerDrag.card.style.transform = "translate(" + dx + "px, " + dy + "px)";
    highlightSlotAtPoint(event.clientX, event.clientY);
  });

  els.options.addEventListener("pointerup", function (event) {
    if (!pointerDrag || pointerDrag.pointerId !== event.pointerId) return;
    const drag = pointerDrag;
    const target = drag.dragging ? findSlotAtPoint(event.clientX, event.clientY) : null;
    if (drag.dragging) {
      event.preventDefault();
      drag.card.dataset.suppressClickUntil = String(Date.now() + 350);
    }
    resetPointerDrag();
    if (target) {
      placeCardInSlot(drag.cardIndex, Number(target.dataset.slotIndex), {
        focus: true,
        playPlacementSound: true,
      });
    } else if (drag.dragging) {
      announce("沒有放進空格，答案未改變。也可以先點答案卡，再點空格。");
    }
  });

  els.options.addEventListener("pointercancel", function () {
    resetPointerDrag({ announceCancel: true });
  });

  els.slots.addEventListener("click", function (event) {
    const slot = event.target.closest(".answer-slot");
    if (!slot || answeredCorrectly) return;
    const slotIndex = Number(slot.dataset.slotIndex);
    if (Number.isInteger(selectedCardIndex)) {
      placeCardInSlot(selectedCardIndex, slotIndex);
    } else if (Number.isInteger(slotAnswers[slotIndex])) {
      removeCardFromSlot(slotIndex);
    } else {
      announce("空格 " + (slotIndex + 1) + " 目前是空的。請先選一張答案卡，或直接拖曳過來。");
    }
  });

  els.slots.addEventListener("dragenter", function (event) {
    const slot = event.target.closest(".answer-slot");
    if (!slot || !Number.isInteger(nativeDragCardIndex) || answeredCorrectly) return;
    event.preventDefault();
    clearDropHighlights();
    slot.classList.add("drop-active");
  });

  els.slots.addEventListener("dragover", function (event) {
    const slot = event.target.closest(".answer-slot");
    if (!slot || !Number.isInteger(nativeDragCardIndex) || answeredCorrectly) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });

  els.slots.addEventListener("dragleave", function (event) {
    const slot = event.target.closest(".answer-slot");
    if (slot && !slot.contains(event.relatedTarget)) slot.classList.remove("drop-active");
  });

  els.slots.addEventListener("drop", function (event) {
    const slot = event.target.closest(".answer-slot");
    event.preventDefault();
    clearDropHighlights();
    if (!slot || !Number.isInteger(nativeDragCardIndex) || answeredCorrectly) return;
    placeCardInSlot(nativeDragCardIndex, Number(slot.dataset.slotIndex), {
      focus: true,
      playPlacementSound: true,
    });
  });

  els.clearAll.addEventListener("click", clearAllAnswers);

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    if (pointerDrag && pointerDrag.dragging) {
      resetPointerDrag({ announceCancel: true });
    } else if (Number.isInteger(selectedCardIndex)) {
      selectedCardIndex = null;
      renderAnswerState();
      announce("已取消選取答案卡。");
    }
  });
}

function preferredChineseVoice() {
  if (!speechSupported) return null;
  const voices = window.speechSynthesis.getVoices();
  return voices.find(function (voice) { return /^zh[-_](TW|Hant)/i.test(voice.lang); })
    || voices.find(function (voice) { return /^zh/i.test(voice.lang); })
    || null;
}

function setSpeechButtonState(button, active) {
  if (!button) return;
  const segment = button.dataset.speechSegment || "內容";
  const labelNode = button.querySelector(".read-label");
  const playIcon = button.querySelector(".speech-play-icon");
  const stopIcon = button.querySelector(".speech-stop-icon");
  const visibleLabel = active ? "停止朗讀" : "朗讀" + segment;
  const accessibleLabel = active ? "停止朗讀" + segment : "朗讀" + segment;
  if (labelNode) labelNode.textContent = visibleLabel;
  if (playIcon) playIcon.hidden = active;
  if (stopIcon) stopIcon.hidden = !active;
  button.setAttribute("aria-pressed", String(active));
  button.setAttribute("aria-label", accessibleLabel);
  button.title = accessibleLabel;
}

function resetSpeechControls() {
  if (speechStartTimer) {
    window.clearTimeout(speechStartTimer);
    speechStartTimer = null;
  }
  if (activeSpeechButton) {
    setSpeechButtonState(activeSpeechButton, false);
  }
  activeSpeechButton = null;
  activeUtterance = null;
}

function stopSpeech(options) {
  const settings = options || {};
  speechRequestId += 1;
  if (speechSupported && (activeUtterance || window.speechSynthesis.speaking || window.speechSynthesis.pending)) {
    window.speechSynthesis.cancel();
  }
  resetSpeechControls();
  if (settings.announceStop) {
    els.speechStatus.textContent = "已停止朗讀。";
    announce("已停止語音朗讀。");
  } else if (settings.keepStatus !== true) {
    els.speechStatus.textContent = "";
  }
}

function speakText(text, options) {
  const settings = options || {};
  if (!speechSupported) {
    announce("這個瀏覽器目前不支援語音朗讀，仍可閱讀畫面上的完整文字提示。");
    return false;
  }

  const replaceActiveSpeech = Boolean(activeUtterance || window.speechSynthesis.speaking || window.speechSynthesis.pending);
  stopSpeech({ keepStatus: true });
  const requestId = ++speechRequestId;
  if (settings.button) {
    activeSpeechButton = settings.button;
    setSpeechButtonState(activeSpeechButton, true);
  }
  els.speechStatus.textContent = "正在準備語音…";

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-TW";
  utterance.rate = 0.9;
  utterance.pitch = 1;
  const voice = preferredChineseVoice();
  if (voice) utterance.voice = voice;

  const finish = function () {
    if (activeUtterance === utterance) {
      resetSpeechControls();
      els.speechStatus.textContent = "朗讀完成。";
    }
  };
  utterance.addEventListener("start", function () {
    if (activeUtterance !== utterance) return;
    els.speechStatus.textContent = "正在朗讀；再按一次即可停止。";
  });
  utterance.addEventListener("end", finish);
  utterance.addEventListener("error", function (event) {
    const shouldAnnounce = activeUtterance === utterance && event.error !== "interrupted" && event.error !== "canceled";
    if (activeUtterance === utterance) resetSpeechControls();
    if (shouldAnnounce) {
      els.speechStatus.textContent = "無法播放語音，請再試一次或檢查裝置的語音設定。";
      announce("語音播放失敗，請檢查瀏覽器或裝置的語音設定。");
    }
  });
  activeUtterance = utterance;
  const beginSpeech = function () {
    if (requestId !== speechRequestId || activeUtterance !== utterance) return;
    try {
      window.speechSynthesis.resume();
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      resetSpeechControls();
      els.speechStatus.textContent = "無法播放語音，請再試一次或檢查裝置的語音設定。";
      announce("語音播放失敗，請檢查瀏覽器或裝置的語音設定。");
    }
  };
  if (replaceActiveSpeech) {
    speechStartTimer = window.setTimeout(function () {
      speechStartTimer = null;
      beginSpeech();
    }, 90);
  } else {
    beginSpeech();
  }
  return true;
}

function currentQuestionSpeech() {
  const q = questions[currentIndex];
  return "第 " + (currentIndex + 1) + " 題。" + q.title + "。" + q.prompt;
}

function speakCurrentQuestion(options) {
  return speakText(currentQuestionSpeech(), options);
}

function disableSpeechControl(button) {
  if (!button) return;
  const segment = button.dataset.speechSegment || "內容";
  const labelNode = button.querySelector(".read-label");
  button.disabled = true;
  button.setAttribute("aria-pressed", "false");
  button.setAttribute("aria-label", segment + "語音不支援");
  button.title = segment + "語音不支援";
  if (labelNode) labelNode.textContent = "語音不支援";
}

function setupSpeech() {
  if (!speechSupported) {
    disableSpeechControl(els.speak);
    disableSpeechControl(els.speakHint);
    els.voiceToggle.disabled = true;
    els.voiceToggle.textContent = "自動朗讀：不支援";
    els.speechStatus.textContent = "此瀏覽器不支援語音朗讀，畫面文字仍可完整閱讀。";
    return;
  }

  els.speak.addEventListener("click", function () {
    if (activeSpeechButton === els.speak) {
      stopSpeech({ announceStop: true });
    } else {
      speakCurrentQuestion({ button: els.speak });
    }
  });

  els.speakHint.addEventListener("click", function () {
    if (activeSpeechButton === els.speakHint) {
      stopSpeech({ announceStop: true });
    } else {
      speakText("提示：" + questions[currentIndex].hint, { button: els.speakHint });
    }
  });

  els.voiceToggle.addEventListener("click", function () {
    autoVoiceEnabled = !autoVoiceEnabled;
    els.voiceToggle.setAttribute("aria-pressed", String(autoVoiceEnabled));
    els.voiceToggle.textContent = autoVoiceEnabled ? "自動朗讀：開啟" : "自動朗讀題目與提示";
    if (autoVoiceEnabled) {
      announce("已開啟自動朗讀。換題時會朗讀題目，展開提示時會朗讀提示。");
      speakCurrentQuestion();
    } else {
      stopSpeech();
      announce("已關閉自動朗讀。");
    }
  });

  els.hint.addEventListener("toggle", function () {
    if (els.hint.open && autoVoiceEnabled) speakText("提示：" + questions[currentIndex].hint);
  });

  window.addEventListener("pagehide", function () { stopSpeech(); });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stopSpeech();
  });
}

function showFeedback(correct, message) {
  els.feedback.hidden = false;
  els.feedback.className = "feedback " + (correct ? "correct" : "incorrect");
  els.feedbackSymbol.textContent = correct ? "✓" : "!";
  els.feedbackTitle.textContent = correct ? "答對了" : "再觀察一下";
  els.feedbackCopy.textContent = message;
  announce(els.feedbackTitle.textContent + "。" + message);
}

document.querySelector("#answer-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const q = questions[currentIndex];

  if (answeredCorrectly) {
    showFeedback(true, q.success + " " + q.explanation);
    return;
  }

  const firstMissing = slotAnswers.findIndex(function (value) { return !Number.isInteger(value); });
  if (firstMissing !== -1) {
    slotInvalid = slotAnswers.map(function (value) { return !Number.isInteger(value); });
    renderAnswerState();
    showFeedback(false, "尚有空格 " + (firstMissing + 1) + " 未完成。請先選答案卡，再按這個空格；也可以直接拖曳。");
    const target = els.slots.querySelector("[data-slot-index=\"" + firstMissing + "\"]");
    if (target) target.focus({ preventScroll: true });
    return;
  }

  const correctness = slotAnswers.map(function (value, index) { return value === q.answer[index]; });
  const correct = correctness.every(Boolean);
  playAnswerSound(correct);
  if (correct) {
    answeredCorrectly = true;
    slotInvalid = [false, false];
    els.code.textContent = getSolvedCode(q);
    els.codeSpoken.textContent = "完整答案。" + q.explanation;
    renderExecutionResult(q);
    showFeedback(true, q.success + " " + q.explanation + " 下方已顯示完整程式與執行結果。");
    els.check.hidden = true;
    els.next.hidden = false;
    renderAnswerState();
    updateProgress();
    return;
  }

  slotInvalid = correctness.map(function (value) { return !value; });
  renderAnswerState();
  const status = correctness.map(function (value, index) {
    return "空格 " + (index + 1) + (value ? " 正確" : " 再想想");
  }).join("；");
  showFeedback(false, status + "。" + q.wrong);
  const firstIncorrect = correctness.findIndex(function (value) { return !value; });
  const target = els.slots.querySelector("[data-slot-index=\"" + firstIncorrect + "\"]");
  if (target) target.focus({ preventScroll: true });
});

els.next.addEventListener("click", function () {
  if (!answeredCorrectly) return;
  currentIndex += 1;
  if (currentIndex >= questions.length) {
    stopSpeech();
    els.progressLabel.textContent = "已完成 " + questions.length + " 題";
    els.progressBar.setAttribute("aria-valuenow", String(questions.length));
    els.progressBar.setAttribute("aria-valuetext", "已完成 " + questions.length + " 題，共 " + questions.length + " 題");
    els.progressFill.style.width = "100%";
    els.progressPercent.textContent = "100%";
    renderUnits();
    els.app.hidden = true;
    els.completion.hidden = false;
    els.skip.href = "#completion-title";
    els.skip.textContent = "跳到學習成果";
    els.completion.focus();
    announce("恭喜完成二十題 Python 基礎練習。");
    return;
  }
  renderQuestion({ focus: true });
});

const panel = document.querySelector("#accessibility-panel");
const panelToggle = document.querySelector("#accessibility-toggle");
panelToggle.addEventListener("click", function () {
  const open = panel.hidden;
  panel.hidden = !open;
  panelToggle.setAttribute("aria-expanded", String(open));
  if (open) document.querySelector("#text-size-toggle").focus();
});

function bindToggle(id, className, labelOn, labelOff, target) {
  const element = target || document.body;
  const button = document.querySelector(id);
  button.addEventListener("click", function () {
    const active = element.classList.toggle(className);
    button.setAttribute("aria-pressed", String(active));
    announce(active ? labelOn : labelOff);
  });
}

bindToggle("#text-size-toggle", "large-text", "已放大文字", "已恢復標準文字大小", document.documentElement);
bindToggle("#contrast-toggle", "high-contrast", "已開啟高對比", "已關閉高對比");
bindToggle("#motion-toggle", "reduce-motion", "已減少動態效果", "已恢復動態效果");

document.querySelector("#restart-course").addEventListener("click", function () {
  currentIndex = 0;
  els.completion.hidden = true;
  els.app.hidden = false;
  els.skip.href = "#lesson-title";
  els.skip.textContent = "跳到目前題目";
  renderQuestion({ focus: true });
});

setupAnswerInteractions();
setupSpeech();
setupAnswerSound();
renderQuestion();

function currentLessonSnapshot() {
  if (currentIndex >= questions.length) {
    return { completed: true, completedCount: questions.length, totalCount: questions.length };
  }
  const q = questions[currentIndex];
  const result = getExecutionResult();
  return {
    completed: false,
    questionNumber: currentIndex + 1,
    totalCount: questions.length,
    completedCount: answeredCorrectly ? currentIndex + 1 : currentIndex,
    unit: units[q.unit].title,
    title: q.title,
    prompt: q.prompt,
    conceptPoints: conceptGuides[currentIndex].slice(),
    code: getQuestionCode(q),
    slotLabels: q.blankLabels.slice(),
    slots: slotAnswers.map(function (optionIndex, index) {
      return {
        slotNumber: index + 1,
        optionNumber: Number.isInteger(optionIndex) ? optionIndex + 1 : null,
        text: Number.isInteger(optionIndex) ? q.options[optionIndex] : null,
      };
    }),
    options: q.options.map(function (option, index) {
      return { optionNumber: index + 1, text: option };
    }),
    answerAccepted: answeredCorrectly,
    solvedCode: answeredCorrectly ? getSolvedCode(q) : null,
    executionOutput: answeredCorrectly ? getExecutionOutputText(result) : null,
    finalState: answeredCorrectly && result.finalState ? result.finalState : null,
  };
}

function registerCourseTools() {
  const context = document.modelContext;
  if (!context || !context.registerTool) return;
  const lifecycle = new AbortController();
  const report = function (error) { console.warn("Course tool registration failed", error); };

  const tools = [
    {
      name: "read_python_lesson",
      title: "讀取目前的 Python 題目",
      description: "Read the current two-slot Python beginner exercise, answer cards, slot state, and course progress without changing the learner's work.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      execute: function () { return currentLessonSnapshot(); },
    },
    {
      name: "submit_python_lesson_answer",
      title: "提交目前題目的兩個答案",
      description: "Place two visible answer cards into slot 1 and slot 2 by their one-based option numbers, then check them using the course feedback flow.",
      inputSchema: {
        type: "object",
        properties: {
          optionNumbers: {
            type: "array",
            items: { type: "integer", minimum: 1, maximum: 5 },
            minItems: 2,
            maxItems: 2,
          },
        },
        required: ["optionNumbers"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: function (input) {
        if (currentIndex >= questions.length) throw new Error("課程已完成。");
        const q = questions[currentIndex];
        const values = input && input.optionNumbers;
        if (!Array.isArray(values) || values.length !== 2 || values.some(function (value) {
          return !Number.isInteger(value) || value < 1 || value > q.options.length;
        })) {
          throw new Error("optionNumbers 必須包含兩個有效的答案卡序號。");
        }
        if (values[0] === values[1]) throw new Error("兩個空格必須使用兩張不同的答案卡。");
        if (answeredCorrectly) throw new Error("目前題目已完成，請前往下一題。");

        placeCardInSlot(values[0] - 1, 0, { announceChange: false });
        placeCardInSlot(values[1] - 1, 1, { announceChange: false });
        document.querySelector("#answer-form").requestSubmit();
        return {
          accepted: answeredCorrectly,
          feedback: els.feedbackCopy.textContent,
          progress: currentLessonSnapshot(),
        };
      },
    },
    {
      name: "advance_python_lesson",
      title: "前往下一題",
      description: "Advance to the next Python exercise after both blanks in the current question are correct.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: function () {
        if (!answeredCorrectly) throw new Error("目前題目尚未答對，不能前往下一題。");
        els.next.click();
        return currentLessonSnapshot();
      },
    },
  ];

  tools.forEach(function (tool) {
    try {
      void Promise.resolve(context.registerTool(tool, { signal: lifecycle.signal })).catch(report);
    } catch (error) {
      report(error);
    }
  });
}

registerCourseTools();
