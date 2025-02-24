import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateUserPoolClientRequestFilterSensitiveLog, UpdateUserPoolClientResponseFilterSensitiveLog, } from "../models/models_1";
import { de_UpdateUserPoolClientCommand, se_UpdateUserPoolClientCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class UpdateUserPoolClientCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "UpdateUserPoolClient", {})
    .n("CognitoIdentityProviderClient", "UpdateUserPoolClientCommand")
    .f(UpdateUserPoolClientRequestFilterSensitiveLog, UpdateUserPoolClientResponseFilterSensitiveLog)
    .ser(se_UpdateUserPoolClientCommand)
    .de(de_UpdateUserPoolClientCommand)
    .build() {
}
