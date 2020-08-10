const subjects =[

    "Artes",
    "Biologia",
    "Ciencias",
    "Educação Fisica",
    "Fisica",
    "Geografia",
    "Historia",
    "Matematica",
    "Português",
    "Quimica"
    
    ]
    const weekdays =[

    
        "Domingo",
        "Segunda-feira",
        "Terça-Feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sabado",
    ]

function convertTimeToMinutes(time){
    const [hour,minutes]=time.split(":")
    return Number((hour*60)+minutes)
    


}

function getSubject(subjectNumber){
    const arrayPosition =+subjectNumber-1
    return subjects[arrayPosition]
}

module.exports={
    subjects,
    weekdays,
    getSubject,
    convertTimeToMinutes
}