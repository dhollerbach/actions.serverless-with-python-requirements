import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTargetsByRuleResponseFilterSensitiveLog, } from "../models/models_0";
import { de_ListTargetsByRuleCommand, se_ListTargetsByRuleCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ListTargetsByRuleCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSEvents", "ListTargetsByRule", {})
    .n("EventBridgeClient", "ListTargetsByRuleCommand")
    .f(void 0, ListTargetsByRuleResponseFilterSensitiveLog)
    .ser(se_ListTargetsByRuleCommand)
    .de(de_ListTargetsByRuleCommand)
    .build() {
}
