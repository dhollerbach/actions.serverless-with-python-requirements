import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_GetContextKeysForPrincipalPolicyCommand, se_GetContextKeysForPrincipalPolicyCommand, } from "../protocols/Aws_query";
export { $Command };
export class GetContextKeysForPrincipalPolicyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "GetContextKeysForPrincipalPolicy", {})
    .n("IAMClient", "GetContextKeysForPrincipalPolicyCommand")
    .f(void 0, void 0)
    .ser(se_GetContextKeysForPrincipalPolicyCommand)
    .de(de_GetContextKeysForPrincipalPolicyCommand)
    .build() {
}
