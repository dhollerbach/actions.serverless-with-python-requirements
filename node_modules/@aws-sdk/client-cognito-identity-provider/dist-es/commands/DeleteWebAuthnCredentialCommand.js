import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteWebAuthnCredentialRequestFilterSensitiveLog, } from "../models/models_0";
import { de_DeleteWebAuthnCredentialCommand, se_DeleteWebAuthnCredentialCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class DeleteWebAuthnCredentialCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "DeleteWebAuthnCredential", {})
    .n("CognitoIdentityProviderClient", "DeleteWebAuthnCredentialCommand")
    .f(DeleteWebAuthnCredentialRequestFilterSensitiveLog, void 0)
    .ser(se_DeleteWebAuthnCredentialCommand)
    .de(de_DeleteWebAuthnCredentialCommand)
    .build() {
}
