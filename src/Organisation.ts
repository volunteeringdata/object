import {
    LiteralAs,
    LiteralFrom,
    RequiredAs,
    RequiredFrom,
    SetFrom,
    TermAs,
    TermFrom,
    TermWrapper
} from "@rdfjs/wrapper"
import { VOLUNTEERING } from "./Vocabulary.js"
import { Activity } from "./Activity.js"
import { Concept } from "./Concept.js"

export class Organisation extends TermWrapper {
    get name(): string {
        return RequiredFrom.subjectPredicate(this, VOLUNTEERING.organisationName, LiteralAs.string)
    }

    set name(value: string) {
        RequiredAs.object(this, VOLUNTEERING.organisationName, value, LiteralFrom.string)
    }

    get description(): string {
        return RequiredFrom.subjectPredicate(this, VOLUNTEERING.organisationDescription, LiteralAs.string)
    }

    set description(value: string) {
        RequiredAs.object(this, VOLUNTEERING.organisationDescription, value, LiteralFrom.string)
    }

    get website(): URL {
        return RequiredFrom.subjectPredicate(this, VOLUNTEERING.organisationWebsite, LiteralAs.url)
    }

    set website(value: URL) {
        RequiredAs.object(this, VOLUNTEERING.organisationWebsite, value, LiteralFrom.anyUriUrl)
    }

    get charityNumber(): string {
        return RequiredFrom.subjectPredicate(this, VOLUNTEERING.organisationCharityNumber, LiteralAs.string)
    }

    set charityNumber(value: string) {
        RequiredAs.object(this, VOLUNTEERING.organisationCharityNumber, value, LiteralFrom.string)
    }

    get image(): URL {
        return RequiredFrom.subjectPredicate(this, VOLUNTEERING.organisationImage, LiteralAs.url)
    }

    set image(value: URL) {
        RequiredAs.object(this, VOLUNTEERING.organisationImage, value, LiteralFrom.anyUriUrl)
    }

    get activity(): Set<Activity> {
        return SetFrom.subjectPredicate(this, VOLUNTEERING.organisationActivity, TermAs.instance(Activity), TermFrom.instance)
    }

    get cause(): Set<Concept> {
        return SetFrom.subjectPredicate(this, VOLUNTEERING.organisationCause, TermAs.instance(Concept), TermFrom.instance)
    }
}
