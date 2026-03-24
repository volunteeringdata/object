import { describe, it } from "node:test"
import { SomeDataset } from "@volunteeringdata/object"
import { DataFactory } from "n3"
import { datasetFromRdf } from "./util/datasetFromRdf.js"
import assert from "node:assert"

await describe("Test", async () => {
    await it("get", async () => {
        const rdf = `
PREFIX : <https://example.com/> 

<s>
    a :C ;
    :p "o" ;
.
`;
        const dataset = datasetFromRdf(rdf);
        const someDataset = new SomeDataset(dataset, DataFactory);

        for (const term of someDataset.terms) {
            assert.strictEqual(term.p, "o")
        }
    })
})
