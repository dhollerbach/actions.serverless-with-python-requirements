import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_GetCSVHeaderCommand, se_GetCSVHeaderCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class GetCSVHeaderCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "GetCSVHeader", {})
    .n("CognitoIdentityProviderClient", "GetCSVHeaderCommand")
    .f(void 0, void 0)
    .ser(se_GetCSVHeaderCommand)
    .de(de_GetCSVHeaderCommand)
    .build() {
}
