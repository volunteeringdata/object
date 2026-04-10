import { LiteralAs, LiteralFrom, RequiredAs, RequiredFrom, SetFrom, TermWrapper } from "@rdfjs/wrapper"
import { SKOS } from "./Vocabulary.js"

export class Concept extends TermWrapper {
    get prefLabel(): string {
        return RequiredFrom.subjectPredicate(this, SKOS.prefLabel, LiteralAs.string)
    }

    set prefLabel(value: string) {
        RequiredAs.object(this, SKOS.prefLabel, value, LiteralFrom.string)
    }

    get definition(): string {
        return RequiredFrom.subjectPredicate(this, SKOS.definition, LiteralAs.string)
    }

    set definition(value: string) {
        RequiredAs.object(this, SKOS.definition, value, LiteralFrom.string)
    }

    get altLabel(): Set<string> {
        return SetFrom.subjectPredicate(this, SKOS.altLabel, LiteralAs.string, LiteralFrom.string)
    }
}
