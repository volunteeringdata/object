import { LiteralAs, TermWrapper } from "@rdfjs/wrapper"
import { RDFS } from "../Vocabulary.js"

export class DayOfWeek extends TermWrapper {
    get label(): string {
        return this.singular(RDFS.label, LiteralAs.string)
    }
}
