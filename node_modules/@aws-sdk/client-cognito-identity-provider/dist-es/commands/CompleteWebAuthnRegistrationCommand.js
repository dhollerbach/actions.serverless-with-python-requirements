import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CompleteWebAuthnRegistrationRequestFilterSensitiveLog, } from "../models/models_0";
import { de_CompleteWebAuthnRegistrationCommand, se_CompleteWebAuthnRegistrationCommand, } from "../protocols/Aws_json1_1";
export { $Command };
export class CompleteWebAuthnRegistrationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "CompleteWebAuthnRegistration", {})
    .n("CognitoIdentityProviderClient", "CompleteWebAuthnRegistrationCommand")
    .f(CompleteWebAuthnRegistrationRequestFilterSensitiveLog, void 0)
    .ser(se_CompleteWebAuthnRegistrationCommand)
    .de(de_CompleteWebAuthnRegistrationCommand)
    .build() {
}
