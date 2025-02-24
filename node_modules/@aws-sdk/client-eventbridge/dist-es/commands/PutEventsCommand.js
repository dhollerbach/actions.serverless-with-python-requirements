import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_PutEventsCommand, se_PutEventsCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class PutEventsCommand extends $Command
    .classBuilder()
    .ep({
    ...commonParams,
    EndpointId: { type: "contextParams", name: "EndpointId" },
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSEvents", "PutEvents", {})
    .n("EventBridgeClient", "PutEventsCommand")
    .f(void 0, void 0)
    .ser(se_PutEventsCommand)
    .de(de_PutEventsCommand)
    .build() {
}
