import { TermWrapper, LiteralAs, LiteralFrom } from "@rdfjs/wrapper"
import { SKOS } from "./Vocabulary.js"

export class Concept extends TermWrapper {
    get prefLabel(): string {
        return this.singular(SKOS.prefLabel, LiteralAs.string)
    }

    set prefLabel(value: string) {
        this.overwrite(SKOS.prefLabel, value, LiteralFrom.string)
    }

    get definition(): string {
        return this.singular(SKOS.definition, LiteralAs.string)
    }

    set definition(value: string) {
        this.overwrite(SKOS.definition, value, LiteralFrom.string)
    }

    get altLabel(): Set<string> {
        return this.objects(SKOS.altLabel, LiteralAs.string, LiteralFrom.string)
    }
}
