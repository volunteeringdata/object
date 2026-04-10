import { RequiredFrom, TermAs, TermWrapper } from "@rdfjs/wrapper"
import { TIME } from "../Vocabulary.js"
import { GeneralDateTimeDescription } from "./GeneralDateTimeDescription.js"

export class Instant extends TermWrapper {
    get inDateTime(): GeneralDateTimeDescription {
        return RequiredFrom.subjectPredicate(this, TIME.inDateTime, TermAs.instance(GeneralDateTimeDescription))
    }
}
