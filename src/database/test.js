const db = require("./db")
const createProffy=require("./createProffy")
db.then(async (db)=>{


    proffyValue={
        name:"Diego Fernades", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"8996633253",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em    laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }
    classesValue={
        subject:1, 
        cost:"20" 

    }
    classScheduleValues=[{
        weekday:1, 
        time_from:720, 
        time_to:1220
    },
    {
        weekday:0,
        time_from:520,
        time_to:1220
    }]

    //await createProffy(db,{proffyValue,classesValue,classScheduleValues})

    const selectedProffys=await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectedClassesAndProffys=await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    const selectedClassesSchedules=await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"

    `)
    console.log(selectedClassesSchedules);
})