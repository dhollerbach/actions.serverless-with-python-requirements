import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_SimulatePrincipalPolicyCommand, se_SimulatePrincipalPolicyCommand } from "../protocols/Aws_query";
export { $Command };
export class SimulatePrincipalPolicyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "SimulatePrincipalPolicy", {})
    .n("IAMClient", "SimulatePrincipalPolicyCommand")
    .f(void 0, void 0)
    .ser(se_SimulatePrincipalPolicyCommand)
    .de(de_SimulatePrincipalPolicyCommand)
    .build() {
}
