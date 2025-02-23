import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_TagPolicyCommand, se_TagPolicyCommand } from "../protocols/Aws_query";
export { $Command };
export class TagPolicyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "TagPolicy", {})
    .n("IAMClient", "TagPolicyCommand")
    .f(void 0, void 0)
    .ser(se_TagPolicyCommand)
    .de(de_TagPolicyCommand)
    .build() {
}
