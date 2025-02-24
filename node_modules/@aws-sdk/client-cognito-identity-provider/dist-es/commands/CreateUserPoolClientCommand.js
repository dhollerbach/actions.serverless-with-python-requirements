import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateUserPoolClientResponseFilterSensitiveLog, } from "../models/models_0";
import { de_CreateUserPoolClientCommand, se_CreateUserPoolClientCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class CreateUserPoolClientCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "CreateUserPoolClient", {})
    .n("CognitoIdentityProviderClient", "CreateUserPoolClientCommand")
    .f(void 0, CreateUserPoolClientResponseFilterSensitiveLog)
    .ser(se_CreateUserPoolClientCommand)
    .de(de_CreateUserPoolClientCommand)
    .build() {
}
