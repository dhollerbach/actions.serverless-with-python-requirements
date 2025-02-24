import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConnectionRequestFilterSensitiveLog, } from "../models/models_0";
import { de_CreateConnectionCommand, se_CreateConnectionCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class CreateConnectionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSEvents", "CreateConnection", {})
    .n("EventBridgeClient", "CreateConnectionCommand")
    .f(CreateConnectionRequestFilterSensitiveLog, void 0)
    .ser(se_CreateConnectionCommand)
    .de(de_CreateConnectionCommand)
    .build() {
}
