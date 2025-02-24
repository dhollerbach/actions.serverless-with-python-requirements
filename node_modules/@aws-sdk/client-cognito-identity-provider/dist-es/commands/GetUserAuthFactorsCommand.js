import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetUserAuthFactorsRequestFilterSensitiveLog, GetUserAuthFactorsResponseFilterSensitiveLog, } from "../models/models_0";
import { de_GetUserAuthFactorsCommand, se_GetUserAuthFactorsCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class GetUserAuthFactorsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "GetUserAuthFactors", {})
    .n("CognitoIdentityProviderClient", "GetUserAuthFactorsCommand")
    .f(GetUserAuthFactorsRequestFilterSensitiveLog, GetUserAuthFactorsResponseFilterSensitiveLog)
    .ser(se_GetUserAuthFactorsCommand)
    .de(de_GetUserAuthFactorsCommand)
    .build() {
}
