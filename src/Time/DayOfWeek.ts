import { LiteralAs, RequiredFrom, TermWrapper } from "@rdfjs/wrapper"
import { RDFS } from "../Vocabulary.js"

export class DayOfWeek extends TermWrapper {
    get label(): string {
        return RequiredFrom.subjectPredicate(this, RDFS.label, LiteralAs.string)
    }
}
