import { DatasetWrapper } from "@rdfjs/wrapper"
import { SomeTerm } from "./SomeTerm.js"
import { Vocabulary } from "./Vocabulary.js"

export class SomeDataset extends DatasetWrapper {
    get terms(): Iterable<SomeTerm> {
        return this.instancesOf(Vocabulary.C, SomeTerm)
    }
}
