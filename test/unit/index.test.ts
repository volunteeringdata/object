import { describe, it } from "node:test"
import { x } from "@volunteeringdata/object"
import { DataFactory, Literal } from "n3"
import { datasetFromRdf } from "./util/datasetFromRdf.js"
import assert from "node:assert"

await describe("Test", async () => {
     await it("get", async () => {
            assert.strictEqual(x, 1)
        })
})
