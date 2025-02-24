import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartWebAuthnRegistrationRequestFilterSensitiveLog, } from "../models/models_1";
import { de_StartWebAuthnRegistrationCommand, se_StartWebAuthnRegistrationCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class StartWebAuthnRegistrationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "StartWebAuthnRegistration", {})
    .n("CognitoIdentityProviderClient", "StartWebAuthnRegistrationCommand")
    .f(StartWebAuthnRegistrationRequestFilterSensitiveLog, void 0)
    .ser(se_StartWebAuthnRegistrationCommand)
    .de(de_StartWebAuthnRegistrationCommand)
    .build() {
}
