import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_DetachUserPolicyCommand, se_DetachUserPolicyCommand } from "../protocols/Aws_query";
export { $Command };
export class DetachUserPolicyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "DetachUserPolicy", {})
    .n("IAMClient", "DetachUserPolicyCommand")
    .f(void 0, void 0)
    .ser(se_DetachUserPolicyCommand)
    .de(de_DetachUserPolicyCommand)
    .build() {
}
