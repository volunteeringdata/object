import { LiteralAs, TermAs, TermWrapper } from "@rdfjs/wrapper"
import { TIME } from "../Vocabulary.js"
import { DayOfWeek } from "./DayOfWeek.js"

export class GeneralDateTimeDescription extends TermWrapper {
    get dayOfWeek(): DayOfWeek {
        return this.singular(TIME.dayOfWeek, TermAs.instance(DayOfWeek))
    }

    get hour(): number {
        return this.singular(TIME.hour, LiteralAs.number)
    }

    get minute(): number {
        return this.singular(TIME.minute, LiteralAs.number)
    }

    get second(): number {
        return this.singular(TIME.second, LiteralAs.number)
    }
}
