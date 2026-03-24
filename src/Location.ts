import { TermWrapper, LiteralAs, LiteralFrom } from "@rdfjs/wrapper"
import { VOLUNTEERING } from "./Vocabulary.js"

export class Location extends TermWrapper {
    get name(): string {
        return this.singular(VOLUNTEERING.locationName, LiteralAs.string)
    }

    set name(value: string) {
        this.overwrite(VOLUNTEERING.locationName, value, LiteralFrom.string)
    }

    get address(): string {
        return this.singular(VOLUNTEERING.locationAddress, LiteralAs.string)
    }

    set address(value: string) {
        this.overwrite(VOLUNTEERING.locationAddress, value, LiteralFrom.string)
    }

    get latitude(): number {
        return this.singular(VOLUNTEERING.locationLatitude, LiteralAs.number)
    }

    set latitude(value: number) {
        this.overwrite(VOLUNTEERING.locationLatitude, value, LiteralFrom.double)
    }

    get longitude(): number {
        return this.singular(VOLUNTEERING.locationLongitude, LiteralAs.number)
    }

    set longitude(value: number) {
        this.overwrite(VOLUNTEERING.locationLongitude, value, LiteralFrom.double)
    }
}
