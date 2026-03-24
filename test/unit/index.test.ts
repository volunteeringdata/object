import { describe, it } from "node:test"
import { VolunteeringDataset } from "@volunteeringdata/object"
import { DataFactory } from "n3"
import { datasetFromRdf } from "./util/datasetFromRdf.js"
import assert from "node:assert"

await describe("Test", async () => {
    await it("get", async () => {
        const rdf = `
PREFIX : <https://ns.volunteeringdata.io/> 

<s>
    a :Organisation ;
    :organisationName "o" ;
.
`;
        const dataset = datasetFromRdf(rdf);
        const volunteeringDataset = new VolunteeringDataset(dataset, DataFactory);

        for (const organisation of volunteeringDataset.organisations) {
            assert.strictEqual(organisation.name, "o")
        }
    })
})
