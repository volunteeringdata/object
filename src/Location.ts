import { LiteralAs, LiteralFrom, RequiredAs, RequiredFrom, TermWrapper } from "@rdfjs/wrapper"
import { VOLUNTEERING } from "./Vocabulary.js"

export class Location extends TermWrapper {
    get name(): string {
        return RequiredFrom.subjectPredicate(this, VOLUNTEERING.locationName, LiteralAs.string)
    }

    set name(value: string) {
        RequiredAs.object(this, VOLUNTEERING.locationName, value, LiteralFrom.string)
    }

    get address(): string {
        return RequiredFrom.subjectPredicate(this, VOLUNTEERING.locationAddress, LiteralAs.string)
    }

    set address(value: string) {
        RequiredAs.object(this, VOLUNTEERING.locationAddress, value, LiteralFrom.string)
    }

    get latitude(): number {
        return RequiredFrom.subjectPredicate(this, VOLUNTEERING.locationLatitude, LiteralAs.number)
    }

    set latitude(value: number) {
        RequiredAs.object(this, VOLUNTEERING.locationLatitude, value, LiteralFrom.double)
    }

    get longitude(): number {
        return RequiredFrom.subjectPredicate(this, VOLUNTEERING.locationLongitude, LiteralAs.number)
    }

    set longitude(value: number) {
        RequiredAs.object(this, VOLUNTEERING.locationLongitude, value, LiteralFrom.double)
    }
}
