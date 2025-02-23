import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_PutPermissionCommand, se_PutPermissionCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class PutPermissionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSEvents", "PutPermission", {})
    .n("EventBridgeClient", "PutPermissionCommand")
    .f(void 0, void 0)
    .ser(se_PutPermissionCommand)
    .de(de_PutPermissionCommand)
    .build() {
}
