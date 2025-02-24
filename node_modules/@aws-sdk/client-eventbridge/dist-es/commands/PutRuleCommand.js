import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_PutRuleCommand, se_PutRuleCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class PutRuleCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSEvents", "PutRule", {})
    .n("EventBridgeClient", "PutRuleCommand")
    .f(void 0, void 0)
    .ser(se_PutRuleCommand)
    .de(de_PutRuleCommand)
    .build() {
}
