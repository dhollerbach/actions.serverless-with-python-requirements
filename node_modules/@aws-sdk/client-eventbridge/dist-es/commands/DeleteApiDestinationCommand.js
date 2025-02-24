import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_DeleteApiDestinationCommand, se_DeleteApiDestinationCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class DeleteApiDestinationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSEvents", "DeleteApiDestination", {})
    .n("EventBridgeClient", "DeleteApiDestinationCommand")
    .f(void 0, void 0)
    .ser(se_DeleteApiDestinationCommand)
    .de(de_DeleteApiDestinationCommand)
    .build() {
}
