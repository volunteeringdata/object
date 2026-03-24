import { LiteralAs, TermAs, TermFrom, TermWrapper } from "@rdfjs/wrapper"
import { Instant } from "./Time/Instant.js"
import { RDFS, TIME, VOLUNTEERING } from "./Vocabulary.js"
import { Session } from "./Session.js"

export class Time extends TermWrapper {
    get label(): string {
        return this.singular(RDFS.label, LiteralAs.string)
    }

    get hasBeginning(): Instant {
        return this.singular(TIME.hasBeginning, TermAs.instance(Instant))
    }

    get hasEnd(): Instant {
        return this.singular(TIME.hasEnd, TermAs.instance(Instant))
    }

    get session(): Set<Session> {
        return this.objects(VOLUNTEERING.timeSession, TermAs.instance(Session), TermFrom.instance)
    }
}
