import { LiteralAs, TermWrapper } from "@rdfjs/wrapper"
import { Vocabulary } from "./Vocabulary.js"

export class SomeTerm extends TermWrapper {
    get p(): string {
        return this.singular(Vocabulary.p, LiteralAs.string)
    }
}
