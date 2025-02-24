import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_UpdateUserPoolDomainCommand, se_UpdateUserPoolDomainCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class UpdateUserPoolDomainCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "UpdateUserPoolDomain", {})
    .n("CognitoIdentityProviderClient", "UpdateUserPoolDomainCommand")
    .f(void 0, void 0)
    .ser(se_UpdateUserPoolDomainCommand)
    .de(de_UpdateUserPoolDomainCommand)
    .build() {
}
