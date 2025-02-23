import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteUserPoolClientRequestFilterSensitiveLog } from "../models/models_0";
import { de_DeleteUserPoolClientCommand, se_DeleteUserPoolClientCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class DeleteUserPoolClientCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "DeleteUserPoolClient", {})
    .n("CognitoIdentityProviderClient", "DeleteUserPoolClientCommand")
    .f(DeleteUserPoolClientRequestFilterSensitiveLog, void 0)
    .ser(se_DeleteUserPoolClientCommand)
    .de(de_DeleteUserPoolClientCommand)
    .build() {
}
