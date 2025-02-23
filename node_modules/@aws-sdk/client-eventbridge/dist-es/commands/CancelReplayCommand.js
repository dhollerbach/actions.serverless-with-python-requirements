import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_CancelReplayCommand, se_CancelReplayCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class CancelReplayCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSEvents", "CancelReplay", {})
    .n("EventBridgeClient", "CancelReplayCommand")
    .f(void 0, void 0)
    .ser(se_CancelReplayCommand)
    .de(de_CancelReplayCommand)
    .build() {
}
