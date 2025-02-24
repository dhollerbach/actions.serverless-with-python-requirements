import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConnectionResponseFilterSensitiveLog, } from "../models/models_0";
import { de_DescribeConnectionCommand, se_DescribeConnectionCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class DescribeConnectionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSEvents", "DescribeConnection", {})
    .n("EventBridgeClient", "DescribeConnectionCommand")
    .f(void 0, DescribeConnectionResponseFilterSensitiveLog)
    .ser(se_DescribeConnectionCommand)
    .de(de_DescribeConnectionCommand)
    .build() {
}
