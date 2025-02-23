import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_EnableRuleCommand, se_EnableRuleCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class EnableRuleCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSEvents", "EnableRule", {})
    .n("EventBridgeClient", "EnableRuleCommand")
    .f(void 0, void 0)
    .ser(se_EnableRuleCommand)
    .de(de_EnableRuleCommand)
    .build() {
}
