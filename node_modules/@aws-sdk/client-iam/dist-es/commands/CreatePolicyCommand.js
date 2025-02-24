import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_CreatePolicyCommand, se_CreatePolicyCommand } from "../protocols/Aws_query";
export { $Command };
export class CreatePolicyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "CreatePolicy", {})
    .n("IAMClient", "CreatePolicyCommand")
    .f(void 0, void 0)
    .ser(se_CreatePolicyCommand)
    .de(de_CreatePolicyCommand)
    .build() {
}
