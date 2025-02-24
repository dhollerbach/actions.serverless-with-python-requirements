import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDeviceRequestFilterSensitiveLog, GetDeviceResponseFilterSensitiveLog, } from "../models/models_0";
import { de_GetDeviceCommand, se_GetDeviceCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class GetDeviceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "GetDevice", {})
    .n("CognitoIdentityProviderClient", "GetDeviceCommand")
    .f(GetDeviceRequestFilterSensitiveLog, GetDeviceResponseFilterSensitiveLog)
    .ser(se_GetDeviceCommand)
    .de(de_GetDeviceCommand)
    .build() {
}
