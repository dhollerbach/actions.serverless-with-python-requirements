import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateManagedLoginBrandingRequestFilterSensitiveLog, } from "../models/models_0";
import { de_CreateManagedLoginBrandingCommand, se_CreateManagedLoginBrandingCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class CreateManagedLoginBrandingCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "CreateManagedLoginBranding", {})
    .n("CognitoIdentityProviderClient", "CreateManagedLoginBrandingCommand")
    .f(CreateManagedLoginBrandingRequestFilterSensitiveLog, void 0)
    .ser(se_CreateManagedLoginBrandingCommand)
    .de(de_CreateManagedLoginBrandingCommand)
    .build() {
}
