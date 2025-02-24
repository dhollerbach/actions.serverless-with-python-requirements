import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_RemoveTargetsCommand, se_RemoveTargetsCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class RemoveTargetsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSEvents", "RemoveTargets", {})
    .n("EventBridgeClient", "RemoveTargetsCommand")
    .f(void 0, void 0)
    .ser(se_RemoveTargetsCommand)
    .de(de_RemoveTargetsCommand)
    .build() {
}
