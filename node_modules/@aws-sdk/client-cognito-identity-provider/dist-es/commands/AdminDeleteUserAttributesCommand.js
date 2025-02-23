import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminDeleteUserAttributesRequestFilterSensitiveLog, } from "../models/models_0";
import { de_AdminDeleteUserAttributesCommand, se_AdminDeleteUserAttributesCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminDeleteUserAttributesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminDeleteUserAttributes", {})
    .n("CognitoIdentityProviderClient", "AdminDeleteUserAttributesCommand")
    .f(AdminDeleteUserAttributesRequestFilterSensitiveLog, void 0)
    .ser(se_AdminDeleteUserAttributesCommand)
    .de(de_AdminDeleteUserAttributesCommand)
    .build() {
}
