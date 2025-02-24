import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_DeletePolicyCommand, se_DeletePolicyCommand } from "../protocols/Aws_query";
export { $Command };
export class DeletePolicyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "DeletePolicy", {})
    .n("IAMClient", "DeletePolicyCommand")
    .f(void 0, void 0)
    .ser(se_DeletePolicyCommand)
    .de(de_DeletePolicyCommand)
    .build() {
}
