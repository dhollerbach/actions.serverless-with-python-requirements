import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutTargetsRequestFilterSensitiveLog } from "../models/models_0";
import { de_PutTargetsCommand, se_PutTargetsCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class PutTargetsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSEvents", "PutTargets", {})
    .n("EventBridgeClient", "PutTargetsCommand")
    .f(PutTargetsRequestFilterSensitiveLog, void 0)
    .ser(se_PutTargetsCommand)
    .de(de_PutTargetsCommand)
    .build() {
}
