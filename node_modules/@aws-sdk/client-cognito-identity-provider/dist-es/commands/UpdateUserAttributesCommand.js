import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateUserAttributesRequestFilterSensitiveLog, } from "../models/models_1";
import { de_UpdateUserAttributesCommand, se_UpdateUserAttributesCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class UpdateUserAttributesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "UpdateUserAttributes", {})
    .n("CognitoIdentityProviderClient", "UpdateUserAttributesCommand")
    .f(UpdateUserAttributesRequestFilterSensitiveLog, void 0)
    .ser(se_UpdateUserAttributesCommand)
    .de(de_UpdateUserAttributesCommand)
    .build() {
}
