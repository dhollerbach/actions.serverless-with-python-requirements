import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteUserAttributesRequestFilterSensitiveLog, } from "../models/models_0";
import { de_DeleteUserAttributesCommand, se_DeleteUserAttributesCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class DeleteUserAttributesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "DeleteUserAttributes", {})
    .n("CognitoIdentityProviderClient", "DeleteUserAttributesCommand")
    .f(DeleteUserAttributesRequestFilterSensitiveLog, void 0)
    .ser(se_DeleteUserAttributesCommand)
    .de(de_DeleteUserAttributesCommand)
    .build() {
}
