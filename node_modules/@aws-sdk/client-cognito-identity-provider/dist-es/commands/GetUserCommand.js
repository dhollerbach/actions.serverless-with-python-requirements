import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetUserRequestFilterSensitiveLog, GetUserResponseFilterSensitiveLog, } from "../models/models_0";
import { de_GetUserCommand, se_GetUserCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class GetUserCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "GetUser", {})
    .n("CognitoIdentityProviderClient", "GetUserCommand")
    .f(GetUserRequestFilterSensitiveLog, GetUserResponseFilterSensitiveLog)
    .ser(se_GetUserCommand)
    .de(de_GetUserCommand)
    .build() {
}
