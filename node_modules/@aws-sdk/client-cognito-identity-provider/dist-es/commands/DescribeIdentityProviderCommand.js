import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_DescribeIdentityProviderCommand, se_DescribeIdentityProviderCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class DescribeIdentityProviderCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "DescribeIdentityProvider", {})
    .n("CognitoIdentityProviderClient", "DescribeIdentityProviderCommand")
    .f(void 0, void 0)
    .ser(se_DescribeIdentityProviderCommand)
    .de(de_DescribeIdentityProviderCommand)
    .build() {
}
