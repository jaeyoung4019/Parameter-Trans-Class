
export class SchVariable {
    constructor(schVariable , pageVariable) {
        this.schVariable = schVariable
        this.pageVariable = pageVariable
    }

    setStartDateTimeAndEndDateTime () {
        // const startDateTime = `${this.schVariable.start_date} ${this.schVariable.start_time}`
        const startDateTime = `${this.schVariable.start_date} ${this.schVariable.start_time}`
        const endDateTime =  `${this.schVariable.end_date} ${this.schVariable.end_time}`

        const result = {
            ...this.schVariable,
            sch_start_dt: startDateTime,
            sch_end_dt: endDateTime,
            page: this.pageVariable.page,
            page_size: this.pageVariable.page_size
        }

        delete result.end_date
        delete result.end_time
        delete result.start_date
        delete result.start_time

        return result;
    }

}


export class Page {
    constructor(total , page_size) {
        this.total = total
        this.page_size = page_size
    }

    setPageTotal () {
        return Math.ceil(this.total / this.page_size);
    }

    selectPageValid  (selectPage) {
        if (selectPage > this.setPageTotal())
            selectPage = this.setPageTotal().toString();

        if (selectPage <= 0)
            selectPage = "1";
        return selectPage;
    }
}

