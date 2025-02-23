import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListWebAuthnCredentialsRequestFilterSensitiveLog, } from "../models/models_1";
import { de_ListWebAuthnCredentialsCommand, se_ListWebAuthnCredentialsCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ListWebAuthnCredentialsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "ListWebAuthnCredentials", {})
    .n("CognitoIdentityProviderClient", "ListWebAuthnCredentialsCommand")
    .f(ListWebAuthnCredentialsRequestFilterSensitiveLog, void 0)
    .ser(se_ListWebAuthnCredentialsCommand)
    .de(de_ListWebAuthnCredentialsCommand)
    .build() {
}
