
let data = {
    "success": true,
    "message": "Success",
    "data": {
        "token": "ec30645a-9625-4fcc-be9b-c8a296f9c540",
        "questions": [
            {
                "id": 3,
                "question": "Au théâtre, vous vous voyez plutôt sur scène que dans les coulisses",
                "question_en": "In the theater, you see yourself more on stage than behind the scenes.",
                "question_es": "En el teatro, te ves más en el escenario que detrás de escena"
            },
            {
                "id": 20,
                "question": "Les gens peuvent rarement vous contrarier.",
                "question_en": "People can rarely upset you.",
                "question_es": "La gente rara vez puede molestarte."
            },
            {
                "id": 31,
                "question": "Au théâtre, vous vous voyez plutôt sur scène que dans les coulisses",
                "question_en": "In the theater, you see yourself more on stage than behind the scenes.",
                "question_es": "En el teatro, te ves más en el escenario que detrás de escena"
            },
        ]
    }
}

let questions = data.data.questions;
let lngth = questions.length;
for(let i = 0; i < lngth; i++){
    let question = questions[i];
    let question_en = question.question_en;
    let question_es = question.question_es;
    let question_id = question.id;
    let question_text = question.question;
    let class_name = "w-5/6 mx-auto py-7 px-5 mt-5 border-sky-500 border-2 shadow-xl rounded-lg"
    if (i!=0) {
        class_name = "w-5/6 mx-auto py-7 px-5 mt-5 opacity-60"
    }
    let question_html = `
    <div id="question-id-${question_id}" class="${class_name} myEvent">
        <h4 class="text-sm pb-5">${question_en}</h4>
        <div class="">
            <div class=" bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-11/12  xl:w-[500px] mx-auto h-10 flex">
                <div id="${question_id}-answer-id-1" class="cursor-pointer h-full border-r-[1px] border-gray-700 hover:bg-blue-700 w-1/5 rounded-tl-full rounded-bl-full myAnswer"></div>
                <div id="${question_id}-answer-id-2" class="cursor-pointer h-full border-r-[1px] border-gray-700 hover:bg-blue-700 w-1/5 myAnswer"></div>
                <div id="${question_id}-answer-id-3" class="cursor-pointer h-full border-r-[1px] border-gray-700 hover:bg-blue-700 w-1/5 myAnswer"></div>
                <div id="${question_id}-answer-id-4" class="cursor-pointer h-full border-r-[1px] border-gray-700 hover:bg-blue-700 w-1/5 myAnswer"></div>
                <div id="${question_id}-answer-id-5" class="cursor-pointer h-full hover:bg-blue-700 w-1/5 rounded-tr-full rounded-br-full myAnswer">
                </div>
            </div>
            <div class="flex justify-between text-sm pt-2">
                <h3>Disagree</h3>
                <h3>Agree</h3>
            </div>

        </div>
    </div>
    `;
    document.getElementById('question-container').innerHTML += question_html;
}

if(lngth){
    const submit = `
    <div class="w-5/6 mx-auto py-7 px-5 mt-5">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Submit
        </button>
    </div>`
    document.getElementById('question-container').innerHTML += submit;
}

let answerClicked = false

document.querySelectorAll('.myEvent').forEach(item => {
    item.addEventListener('click', event => {
        if (answerClicked) {
            answerClicked = false
            return
        }
        const id = item.id
        
        document.querySelectorAll('.myEvent').forEach(item => {
            item.className = "w-5/6 mx-auto py-7 px-5 mt-5 opacity-60 myEvent"
        });
        
        document.getElementById(id).className = "w-5/6 mx-auto py-7 px-5 mt-5 border-sky-500 border-2 shadow-xl rounded-lg myEvent"
    
    })
})


document.querySelectorAll('.myAnswer').forEach(item => {
    item.addEventListener('click', event => {
        answerClicked = true
        const questionId = "question-id-" + item.id.split('-')[0]
        const question = document.getElementById(questionId)
        // check if questionId has class = "border-sky-500"
        if (document.getElementById(questionId).className.includes('border-sky-500')) {
            // remove all siblings className = "bg-blue-700"
            item.parentElement.parentElement.querySelectorAll('.myAnswer').forEach(item => {
            item.classList.remove('bg-blue-800')
            });
            // add the background color of the clicked element = "bg-blue-700" 
            item.classList.add('bg-blue-800')

            question.className = "w-5/6 mx-auto py-7 px-5 mt-5 opacity-60 myEvent"
            // make question next sibling className = "w-5/6 mx-auto py-7 px-5 mt-5 border-sky-500 border-2 shadow-xl rounded-lg" if has className = "myEvent"
            if (question.nextElementSibling.classList.contains('myEvent')){
                question.nextElementSibling.className = "w-5/6 mx-auto py-7 px-5 mt-5 border-sky-500 border-2 shadow-xl rounded-lg myEvent"
            }
            
        }
    })
})

    