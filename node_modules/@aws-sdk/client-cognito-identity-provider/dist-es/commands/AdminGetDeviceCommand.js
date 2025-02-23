import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminGetDeviceRequestFilterSensitiveLog, AdminGetDeviceResponseFilterSensitiveLog, } from "../models/models_0";
import { de_AdminGetDeviceCommand, se_AdminGetDeviceCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminGetDeviceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminGetDevice", {})
    .n("CognitoIdentityProviderClient", "AdminGetDeviceCommand")
    .f(AdminGetDeviceRequestFilterSensitiveLog, AdminGetDeviceResponseFilterSensitiveLog)
    .ser(se_AdminGetDeviceCommand)
    .de(de_AdminGetDeviceCommand)
    .build() {
}
