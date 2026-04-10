import { LiteralAs, RequiredFrom, SetFrom, TermAs, TermFrom, TermWrapper } from "@rdfjs/wrapper"
import { Instant } from "./Time/Instant.js"
import { RDFS, TIME, VOLUNTEERING } from "./Vocabulary.js"
import { Session } from "./Session.js"

export class Time extends TermWrapper {
    get label(): string {
        return RequiredFrom.subjectPredicate(this, RDFS.label, LiteralAs.string)
    }

    get hasBeginning(): Instant {
        return RequiredFrom.subjectPredicate(this, TIME.hasBeginning, TermAs.instance(Instant))
    }

    get hasEnd(): Instant {
        return RequiredFrom.subjectPredicate(this, TIME.hasEnd, TermAs.instance(Instant))
    }

    get session(): Set<Session> {
        return SetFrom.subjectPredicate(this, VOLUNTEERING.timeSession, TermAs.instance(Session), TermFrom.instance)
    }
}
