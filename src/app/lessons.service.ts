import { Lesson } from "./lesson";

export class LessonsService {

    getLessons(): Lesson[]{
        // web service ga ulanib darslar ro'yxatini olib keladigan logika bo'lishi kerak bu joyda
        let lessons = <Lesson[]>JSON.parse(`
        [
            {"id":1,"title":"Angular asoslari","price":"43","duration":"53","intakeDeadline":"2021-11-27T10:45:45Z"},
            {"id":2,"title":"Web Api","price":"234","duration":"34","intakeDeadline":"2022-01-19T05:03:13Z"},
            {"id":3,"title":"Entity Framework","price":"234","duration":"54","intakeDeadline":"2021-09-18T17:07:30Z"},
            {"id":4,"title":"MS SQL Server","price":"232","duration":"23","intakeDeadline":"2021-07-23T21:08:06Z"}
        ]
        `);

        return lessons;

    }
}