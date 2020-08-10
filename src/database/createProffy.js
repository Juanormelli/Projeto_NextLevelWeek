module.exports= async function(db,{proffyValue, classesValue, classScheduleValues}){
    const insetedProffy=await db.run(`
        INSERT INTO proffys(
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES(
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"

        );
    `)

    const proffy_id=insetedProffy.lastID 

    const insertedClass=await db.run(`
            INSERT INTO classes(
                subject,
                cost,
                proffy_id
            )VALUES(
                "${classesValue.subject}",
                "${classesValue.cost}",
                "${proffy_id}"
            );
    `)

    const class_id=insertedClass.lastID

    const insertdAllClassSchedulesValues = classScheduleValues.map((classScheduleValue)=> {
        return db.run(`
        INSERT INTO class_schedule(
            class_id,
            weekday,
            time_from,
            time_to
        )VALUES(
            "${class_id}",
            "${classScheduleValue.weekday}",
            "${classScheduleValue.time_from}",
            "${classScheduleValue.time_to}"
        );
        `)
    })
    await Promise.all(insertdAllClassSchedulesValues)
}