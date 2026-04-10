import { LiteralAs, RequiredFrom, TermAs, TermWrapper } from "@rdfjs/wrapper"
import { TIME } from "../Vocabulary.js"
import { DayOfWeek } from "./DayOfWeek.js"

export class GeneralDateTimeDescription extends TermWrapper {
    get dayOfWeek(): DayOfWeek {
        return RequiredFrom.subjectPredicate(this, TIME.dayOfWeek, TermAs.instance(DayOfWeek))
    }

    get hour(): number {
        return RequiredFrom.subjectPredicate(this, TIME.hour, LiteralAs.number)
    }

    get minute(): number {
        return RequiredFrom.subjectPredicate(this, TIME.minute, LiteralAs.number)
    }

    get second(): number {
        return RequiredFrom.subjectPredicate(this, TIME.second, LiteralAs.number)
    }
}
