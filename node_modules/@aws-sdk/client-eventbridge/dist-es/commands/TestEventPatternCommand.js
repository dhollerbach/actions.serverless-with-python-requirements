import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_TestEventPatternCommand, se_TestEventPatternCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class TestEventPatternCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSEvents", "TestEventPattern", {})
    .n("EventBridgeClient", "TestEventPatternCommand")
    .f(void 0, void 0)
    .ser(se_TestEventPatternCommand)
    .de(de_TestEventPatternCommand)
    .build() {
}
